---
id: T-001
title: "API skeleton with quality gates"
phase: 1
status: todo
spec: ready
mode: supervised
review: strict
covers: []
cites: [CON-TECH-001, CON-PAY-001, CON-SEC-001]
behaviours: []
depends-on: []
blocked-by: []
---

# T-001 — API skeleton with quality gates

## Goal

A Spring Boot application in `apps/api` that does nothing yet except start, with every API gate
of `docs/engineering/quality-gates.md` wired in and proven to fail when it should. After this
task `scripts/verify.sh full api` passes, and every later task inherits the gates.

## Product rules

<!-- product-rules:start -->
- **CON-TECH-001** Maintainable technology and compatible open-source licences <!-- pdac:cite id="CON-TECH-001" digest="sha256:553d57d98b3e9e0cd297ae9895f6666cff41e9fc623ed511d499221aeba97606" -->
- **CON-PAY-001** All payment operations go through one internal interface <!-- pdac:cite id="CON-PAY-001" digest="sha256:7440d14b54c1c6d3792897c4fd4ff8f769e7f1cd8b022a41485ec2da25ef4472" -->
- **CON-SEC-001** Secure development baseline <!-- pdac:cite id="CON-SEC-001" digest="sha256:4be327dea0ee6034dedf8fb59f785a98d823bbdceceae740eac87bd22b38b377" -->
<!-- product-rules:end -->

## Read first

- `docs/engineering/quality-gates.md`, sections 3, 5 and 6
- `docs/engineering/conventions.md`
- `scripts/verify.sh` (the two Maven entry points it calls)

## Scope

- Maven project with the Maven wrapper, Java 21 and the current stable Spring Boot release.
  Pin every version exactly. Record the choices in `docs/engineering/stack.md` with each
  component's licence; this file becomes the component list the Agreement requires at handover.
- Starters: web, validation, security (everything denied by default except the status
  endpoint and health), data-jpa, actuator, Flyway, PostgreSQL driver, springdoc.
  Test: Spring Boot test, Testcontainers (PostgreSQL), ArchUnit, WireMock.
- Package skeleton from the conventions under `com.royalaurumcoins.api`, each package
  `@NullMarked`.
- One public endpoint, `GET /api/v1/status`, returning the application name and version; with
  a web-layer test and an integration test (`*IT`) that starts the application against
  Testcontainers PostgreSQL and runs Flyway. One baseline migration.
- The gates, each bound so that the two entry points behave as documented:
  Spotless check, compiler flags, Error Prone, NullAway, the ArchUnit rules, Surefire for
  `*Test` and Failsafe for `*IT`, JaCoCo check, OpenAPI generation with a committed
  `apps/api/openapi.json` and a drift check, the licence check, and a `mutation` profile for
  PIT that is not part of `verify`.
- `apps/api/README.md` (run, test, add a migration) and `apps/api/.env.example`.

## Out of scope

Any domain code. Authentication beyond "deny by default". Docker image, CI and the local
compose stack (T-003).

## Acceptance criteria

1. On a clean checkout with Docker running, `scripts/verify.sh full api` passes.
2. `scripts/verify.sh fast api` is timed on Răzvan's machine and the time is reported.
3. **Each gate is shown to bite.** For formatting, a compiler warning, Error Prone, NullAway,
   every ArchUnit rule, the coverage threshold, OpenAPI drift and the licence check: a
   deliberately wrong example was added, the build failed for that reason, and the example was
   removed. The task summary lists each proof (what was tried, the failure message).
4. In particular: a throwaway class outside `integrations.stripe` that imports a `com.stripe`
   type fails the build (CON-PAY-001), and a `double price` field in an entity fails the build.
5. `docs/engineering/stack.md` lists every direct dependency with version and licence, and the
   licence check rejects an AGPL dependency (try one, then remove it).

## Engineering notes

A starting point for the architecture tests. It has not been compiled; adjust it to the
versions chosen.

```java
@AnalyzeClasses(packages = "com.royalaurumcoins.api", importOptions = ImportOption.DoNotIncludeTests.class)
class ArchitectureTest {

  @ArchTest
  static final ArchRule layers = layeredArchitecture().consideringOnlyDependenciesInLayers()
      .layer("Controller").definedBy("..controller..")
      .layer("Service").definedBy("..service..")
      .layer("Repository").definedBy("..repository..")
      .layer("Integrations").definedBy("..integrations..")
      .whereLayer("Controller").mayNotBeAccessedByAnyLayer()
      .whereLayer("Service").mayOnlyBeAccessedByLayers("Controller", "Integrations")
      .whereLayer("Repository").mayOnlyBeAccessedByLayers("Service")
      .allowEmptyShould(true);

  @ArchTest
  static final ArchRule controllersDoNotSeeEntities = noClasses().that().resideInAPackage("..controller..")
      .should().dependOnClassesThat().resideInAnyPackage("..entity..", "..repository..")
      .allowEmptyShould(true);

  @ArchTest
  static final ArchRule onlyTheStripeAdapterKnowsStripe = noClasses().that()
      .resideOutsideOfPackage("..integrations.stripe..")
      .should().dependOnClassesThat().resideInAnyPackage("com.stripe..")
      .allowEmptyShould(true);

  @ArchTest
  static final ArchRule nothingDependsOnAnAdapter = noClasses().that()
      .resideOutsideOfPackages("..integrations..", "..config..")
      .should().dependOnClassesThat().resideInAPackage("..integrations..")
      .allowEmptyShould(true);

  @ArchTest
  static final ArchRule noCyclesBetweenDomains = slices()
      .matching("com.royalaurumcoins.api.service.(*)..").should().beFreeOfCycles()
      .allowEmptyShould(true);

  @ArchTest
  static final ArchRule noFloatingPointMoney = noFields().that()
      .areDeclaredInClassesThat().resideInAnyPackage("..entity..", "..dto..", "..model..")
      .should().haveRawType(double.class).orShould().haveRawType(float.class)
      .orShould().haveRawType(Double.class).orShould().haveRawType(Float.class)
      .allowEmptyShould(true);

  @ArchTest static final ArchRule noFieldInjection = NO_CLASSES_SHOULD_USE_FIELD_INJECTION;
  @ArchTest static final ArchRule noGenericExceptions = NO_CLASSES_SHOULD_THROW_GENERIC_EXCEPTIONS;
  @ArchTest static final ArchRule noStandardStreams = NO_CLASSES_SHOULD_ACCESS_STANDARD_STREAMS;
  @ArchTest static final ArchRule noJavaUtilLogging = NO_CLASSES_SHOULD_USE_JAVA_UTIL_LOGGING;
  // Also needed: time only through Clock (no now() without a clock); placement and naming of
  // @RestController, @Entity, @Service and repositories; allowed directions between domains.
}
```

Known friction to expect:

- Lombok with Error Prone and NullAway: set `lombok.addLombokGeneratedAnnotation = true` in
  `lombok.config` so the analysers skip generated code, and order the annotation processors.
- `-Werror` with annotation processors usually needs `-Xlint:-processing`.
- Rules about packages that are still empty need `allowEmptyShould(true)` until code exists.
- Keep the fast tier fast: no Spring context in unit tests; Testcontainers only in `*IT`.
- A coverage threshold on empty packages must pass, not fail, until there is code.

## Done when

- `scripts/verify.sh full api` exits 0 and its last line reads `VERIFY PASSED`.
- The summary contains the timing and the list of gate-failure proofs.
- This file's `status` is `done`.
