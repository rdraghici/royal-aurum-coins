package com.royalaurumcoins.api.architecture;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noFields;
import static com.tngtech.archunit.library.Architectures.layeredArchitecture;
import static com.tngtech.archunit.library.GeneralCodingRules.NO_CLASSES_SHOULD_ACCESS_STANDARD_STREAMS;
import static com.tngtech.archunit.library.GeneralCodingRules.NO_CLASSES_SHOULD_THROW_GENERIC_EXCEPTIONS;
import static com.tngtech.archunit.library.GeneralCodingRules.NO_CLASSES_SHOULD_USE_FIELD_INJECTION;
import static com.tngtech.archunit.library.dependencies.SlicesRuleDefinition.slices;

import com.tngtech.archunit.base.DescribedPredicate;
import com.tngtech.archunit.core.domain.Dependency;
import com.tngtech.archunit.core.domain.JavaClass;
import com.tngtech.archunit.core.importer.ImportOption;
import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchCondition;
import com.tngtech.archunit.lang.ArchRule;
import com.tngtech.archunit.lang.ConditionEvents;
import com.tngtech.archunit.lang.SimpleConditionEvent;
import jakarta.persistence.Entity;
import java.time.Clock;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.OffsetDateTime;
import java.time.Year;
import java.time.YearMonth;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.jspecify.annotations.Nullable;
import org.springframework.data.repository.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

/**
 * The architecture rules of docs/engineering/quality-gates.md, section 5. Rules about packages that
 * are still empty allow an empty match until code exists there.
 */
@AnalyzeClasses(
    packages = ArchitectureTest.BASE,
    importOptions = ImportOption.DoNotIncludeTests.class)
class ArchitectureTest {

  static final String BASE = "com.royalaurumcoins.api";

  /** The layers organised by domain (docs/engineering/conventions.md, API layout). */
  static final List<String> DOMAIN_LAYERS =
      List.of("controller", "dto", "service", "model", "entity", "repository");

  /**
   * The domains of the product definition's bounded contexts. A layer's sub-package is one of
   * these.
   */
  static final Set<String> DOMAINS =
      Set.of("catalogue", "order", "payment", "account", "intake", "marketplace", "offer");

  /**
   * The allowed directions between domains, declared in this one place: a domain may use the
   * domains listed here and no other (for example "order" -> {"catalogue"}). A direction is added
   * by the task that needs it.
   */
  static final Map<String, Set<String>> ALLOWED_DOMAIN_DEPENDENCIES = Map.of();

  /**
   * External providers (CON-PAY-001 and the same rule for email, image storage and the newsletter):
   * each provider's SDK packages may be used only by its own adapter in integrations.[name].
   */
  static final Map<String, List<String>> PROVIDER_SDK_PACKAGES =
      Map.of("stripe", List.of("com.stripe.."));

  // 1. Layers: controller -> service -> repository. Adapters may implement service interfaces.

  @ArchTest
  static final ArchRule layers =
      layeredArchitecture()
          .consideringOnlyDependenciesInLayers()
          .layer("Controller")
          .definedBy(BASE + ".controller..")
          .layer("Service")
          .definedBy(BASE + ".service..")
          .layer("Repository")
          .definedBy(BASE + ".repository..")
          .layer("Integrations")
          .definedBy(BASE + ".integrations..")
          .whereLayer("Controller")
          .mayNotBeAccessedByAnyLayer()
          .whereLayer("Service")
          .mayOnlyBeAccessedByLayers("Controller", "Integrations")
          .whereLayer("Repository")
          .mayOnlyBeAccessedByLayers("Service")
          .allowEmptyShould(true);

  @ArchTest
  static final ArchRule controllersExchangeDtosOnly =
      noClasses()
          .that()
          .resideInAPackage(BASE + ".controller..")
          .should()
          .dependOnClassesThat()
          .resideInAnyPackage(BASE + ".entity..", BASE + ".repository..")
          .as("controllers exchange DTOs with services and never touch entities or repositories")
          .allowEmptyShould(true);

  // 2. Payment and provider isolation.

  @ArchTest
  static final ArchRule onlyAnAdapterKnowsItsProviderSdk =
      classes()
          .should(useNoProviderSdkOutsideItsAdapter())
          .as("only integrations.<provider> may use that provider's SDK (CON-PAY-001)")
          .allowEmptyShould(true);

  @ArchTest
  static final ArchRule nothingDependsOnAnAdapter =
      noClasses()
          .that()
          .resideOutsideOfPackages(BASE + ".integrations..", BASE + ".config..")
          .should()
          .dependOnClassesThat()
          .resideInAPackage(BASE + ".integrations..")
          .as("everything else talks to the interfaces in service, never to an adapter")
          .allowEmptyShould(true);

  // 3. Domains: no cycles, and only the declared directions.

  @ArchTest
  static final ArchRule noCyclesBetweenDomains =
      slices().matching(BASE + ".*.(*)..").should().beFreeOfCycles().allowEmptyShould(true);

  @ArchTest
  static final ArchRule domainsUseOnlyDeclaredDirections =
      classes()
          .that(resideInADomain())
          .should(dependOnlyOnDeclaredDomains())
          .as("a domain depends only on the domains declared in ALLOWED_DOMAIN_DEPENDENCIES")
          .allowEmptyShould(true);

  @ArchTest
  static final ArchRule layerSubPackagesAreDomains =
      classes()
          .that(resideInASubPackageOfADomainLayer())
          .should(resideInAKnownDomain())
          .as("a sub-package of controller, dto, service, model, entity or repository is a domain")
          .allowEmptyShould(true);

  /**
   * Coverage and mutation thresholds apply per domain package; code at a layer's root would escape
   * them.
   */
  @ArchTest
  static final ArchRule domainLayersAreOrganisedByDomain =
      classes()
          .that()
          .resideInAnyPackage(
              BASE + ".service..", BASE + ".model..", BASE + ".entity..", BASE + ".repository..")
          .and()
          .doNotHaveSimpleName("package-info")
          .should(resideInAKnownDomain())
          .as("a class in service, model, entity or repository lives in a domain sub-package")
          .allowEmptyShould(true);

  // 4. Placement and naming.

  @ArchTest
  static final ArchRule restControllersLiveInController =
      classes()
          .that()
          .areAnnotatedWith(RestController.class)
          .should()
          .resideInAPackage(BASE + ".controller..")
          .andShould()
          .haveSimpleNameEndingWith("Controller");

  @ArchTest
  static final ArchRule entitiesLiveInEntity =
      classes()
          .that()
          .areAnnotatedWith(Entity.class)
          .should()
          .resideInAPackage(BASE + ".entity..")
          .allowEmptyShould(true);

  @ArchTest
  static final ArchRule servicesLiveInService =
      classes()
          .that()
          .areAnnotatedWith(Service.class)
          .should()
          .resideInAPackage(BASE + ".service..")
          .allowEmptyShould(true);

  @ArchTest
  static final ArchRule repositoriesLiveInRepository =
      classes()
          .that()
          .areAssignableTo(Repository.class)
          .should()
          .resideInAPackage(BASE + ".repository..")
          .allowEmptyShould(true);

  // 5. Constructor injection only.

  @ArchTest static final ArchRule noFieldInjection = NO_CLASSES_SHOULD_USE_FIELD_INJECTION;

  // 6. Time comes from a Clock.

  @ArchTest
  static final ArchRule timeComesFromAClock =
      noClasses()
          .should()
          .callMethod(Instant.class, "now")
          .orShould()
          .callMethod(LocalDate.class, "now")
          .orShould()
          .callMethod(LocalTime.class, "now")
          .orShould()
          .callMethod(LocalDateTime.class, "now")
          .orShould()
          .callMethod(ZonedDateTime.class, "now")
          .orShould()
          .callMethod(OffsetDateTime.class, "now")
          .orShould()
          .callMethod(Year.class, "now")
          .orShould()
          .callMethod(YearMonth.class, "now")
          .orShould()
          .callMethod(System.class, "currentTimeMillis")
          .orShould()
          .callConstructor(Date.class)
          .orShould()
          .callMethod(Calendar.class, "getInstance")
          .as("time comes from a Clock: no now() without one")
          .allowEmptyShould(true);

  @ArchTest
  static final ArchRule onlyConfigCreatesTheSystemClock =
      noClasses()
          .that()
          .resideOutsideOfPackage(BASE + ".config..")
          .should()
          .callMethod(Clock.class, "systemUTC")
          .orShould()
          .callMethod(Clock.class, "systemDefaultZone")
          .orShould()
          .callMethod(Clock.class, "system", ZoneId.class)
          .as("the system Clock is created once, in config, and injected everywhere else")
          .allowEmptyShould(true);

  // 7. Money is never floating point.

  @ArchTest
  static final ArchRule noFloatingPointMoney =
      noFields()
          .that()
          .areDeclaredInClassesThat()
          .resideInAnyPackage(BASE + ".entity..", BASE + ".dto..", BASE + ".model..")
          .should()
          .haveRawType(double.class)
          .orShould()
          .haveRawType(float.class)
          .orShould()
          .haveRawType(Double.class)
          .orShould()
          .haveRawType(Float.class)
          .as("money is integer minor units: no double or float field in entity, dto or model")
          .allowEmptyShould(true);

  // 8. General hygiene.

  @ArchTest static final ArchRule noGenericExceptions = NO_CLASSES_SHOULD_THROW_GENERIC_EXCEPTIONS;
  @ArchTest static final ArchRule noStandardStreams = NO_CLASSES_SHOULD_ACCESS_STANDARD_STREAMS;

  // ArchUnit's own rule only sees a field of a java.util.logging type; any use counts here.
  @ArchTest
  static final ArchRule noJavaUtilLogging =
      noClasses()
          .should()
          .dependOnClassesThat()
          .resideInAPackage("java.util.logging..")
          .as("no java.util.logging: log through SLF4J")
          .allowEmptyShould(true);

  // Helpers: a class's layer and domain, read from its package:
  // com.royalaurumcoins.api.<layer>.<domain>...

  private static String[] segmentsBelowBase(JavaClass clazz) {
    String pkg = clazz.getPackageName();
    if (!pkg.startsWith(BASE + ".")) {
      return new String[0];
    }
    return pkg.substring(BASE.length() + 1).split("\\.");
  }

  private static boolean inADomainLayer(String[] segments) {
    return segments.length >= 2 && DOMAIN_LAYERS.contains(segments[0]);
  }

  private static @Nullable String domainOf(JavaClass clazz) {
    String[] segments = segmentsBelowBase(clazz);
    return inADomainLayer(segments) ? segments[1] : null;
  }

  private static DescribedPredicate<JavaClass> resideInADomain() {
    return DescribedPredicate.describe("reside in a domain", clazz -> domainOf(clazz) != null);
  }

  private static DescribedPredicate<JavaClass> resideInASubPackageOfADomainLayer() {
    return DescribedPredicate.describe(
        "reside in a sub-package of a domain layer",
        clazz -> inADomainLayer(segmentsBelowBase(clazz)));
  }

  private static ArchCondition<JavaClass> resideInAKnownDomain() {
    return new ArchCondition<>("reside in one of the domains " + DOMAINS) {
      @Override
      public void check(JavaClass clazz, ConditionEvents events) {
        String domain = domainOf(clazz);
        if (domain == null) {
          events.add(
              SimpleConditionEvent.violated(
                  clazz, clazz.getName() + " is not in a domain package"));
        } else if (!DOMAINS.contains(domain)) {
          events.add(
              SimpleConditionEvent.violated(
                  clazz, clazz.getName() + " is in the undeclared domain '" + domain + "'"));
        }
      }
    };
  }

  private static ArchCondition<JavaClass> dependOnlyOnDeclaredDomains() {
    return new ArchCondition<>("depend only on its own domain and the declared directions") {
      @Override
      public void check(JavaClass clazz, ConditionEvents events) {
        String from = domainOf(clazz);
        if (from == null) {
          return;
        }
        Set<String> allowed = ALLOWED_DOMAIN_DEPENDENCIES.getOrDefault(from, Set.of());
        for (Dependency dependency : clazz.getDirectDependenciesFromSelf()) {
          String to = domainOf(dependency.getTargetClass());
          if (to != null && !to.equals(from) && !allowed.contains(to)) {
            events.add(
                SimpleConditionEvent.violated(
                    dependency,
                    "domain '"
                        + from
                        + "' may not use domain '"
                        + to
                        + "': "
                        + dependency.getDescription()));
          }
        }
      }
    };
  }

  private static ArchCondition<JavaClass> useNoProviderSdkOutsideItsAdapter() {
    return new ArchCondition<>("use no provider SDK outside integrations.<provider>") {
      @Override
      public void check(JavaClass clazz, ConditionEvents events) {
        for (Map.Entry<String, List<String>> provider : PROVIDER_SDK_PACKAGES.entrySet()) {
          String adapter = BASE + ".integrations." + provider.getKey();
          boolean insideAdapter = clazz.getPackageName().startsWith(adapter);
          for (Dependency dependency : clazz.getDirectDependenciesFromSelf()) {
            JavaClass target = dependency.getTargetClass();
            boolean sdk =
                JavaClass.Predicates.resideInAnyPackage(provider.getValue().toArray(String[]::new))
                    .test(target);
            if (sdk && !insideAdapter) {
              events.add(
                  SimpleConditionEvent.violated(
                      dependency,
                      "only "
                          + adapter
                          + " may use "
                          + provider.getKey()
                          + ": "
                          + dependency.getDescription()));
            }
          }
        }
      }
    };
  }
}
