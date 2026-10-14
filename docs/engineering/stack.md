# Stack

The components of the Platform, with versions and licences (CON-TECH-001). This is the
component list the Agreement requires at handover; keep it current when a dependency changes.
Every version is pinned: directly in `apps/api/pom.xml`, or through the Spring Boot parent POM,
which pins the exact version of everything it manages. Task T-002 adds the web application.

## API runtime (`apps/api`)

| Component | Version | Licence | Role |
| --- | --- | --- | --- |
| Java | 21 (an OpenJDK build; see Notes) | GPL-2.0 with Classpath Exception | language and runtime |
| Spring Boot | 4.1.1 | Apache-2.0 | application framework; parent POM |
| Spring Framework | 7.0.9 | Apache-2.0 | core, web MVC, JDBC, transactions |
| Spring Security | 7.1.1 | Apache-2.0 | deny-by-default, later roles |
| Spring Data JPA | 4.1.1 | Apache-2.0 | repositories |
| Hibernate ORM | 7.4.5.Final | Apache-2.0 | JPA provider |
| Hibernate Validator | 9.1.3.Final | Apache-2.0 | Bean Validation (server-side input validation) |
| Apache Tomcat (embedded) | 11.0.24 | Apache-2.0 | HTTP server |
| Jackson | 3.1.5 | Apache-2.0 | JSON |
| HikariCP | 7.0.2 | Apache-2.0 | connection pool |
| Flyway | 12.4.0 | Apache-2.0 | database migrations |
| PostgreSQL JDBC driver | 42.7.13 | BSD-2-Clause | database driver |
| PostgreSQL | 17 | PostgreSQL License | database (tests use the `postgres:17.9-alpine` image) |
| springdoc-openapi (webmvc-api) | 3.1.1 | Apache-2.0 | generates the OpenAPI document |
| Micrometer | 1.17.1 | Apache-2.0 | metrics behind Actuator |
| Logback | 1.5.38 | EPL-2.0 / LGPL-2.1 (dual) | logging |
| SLF4J | 2.0.18 | MIT | logging API |
| JSpecify | 1.0.1 | Apache-2.0 | nullness annotations |
| Lombok | 1.18.46 | MIT | entity boilerplate (compile time only) |

## API tests

| Component | Version | Licence | Role |
| --- | --- | --- | --- |
| JUnit Jupiter | 6.0.3 | EPL-2.0 | test framework |
| AssertJ | 3.27.7 | Apache-2.0 | assertions |
| Mockito | 5.23.0 | MIT | mocks (via the Spring Boot test starter) |
| spring-boot-starter-webmvc-test | 4.1.1 | Apache-2.0 | `@SpringBootTest`, `@WebMvcTest`, `RestTestClient` (brings JUnit, AssertJ, Mockito) |
| spring-boot-starter-security-test | 4.1.1 | Apache-2.0 | Spring Security in `@WebMvcTest` |
| spring-boot-testcontainers | 4.1.1 | Apache-2.0 | `@ServiceConnection` |
| Testcontainers (PostgreSQL) | 2.0.5 | MIT | real database in `*IT` |
| ArchUnit | 1.5.1 | Apache-2.0 | architecture rules |
| WireMock (standalone) | 3.13.2 | Apache-2.0 | provider adapters against recorded responses |

## API build and gates

| Component | Version | Licence | Role |
| --- | --- | --- | --- |
| Apache Maven | 3.9.16 (wrapper 3.3.4) | Apache-2.0 | build |
| maven-compiler-plugin | 3.15.0 | Apache-2.0 | `-Xlint:all -Werror -parameters` |
| Error Prone | 2.50.0 | Apache-2.0 | bug patterns at compile time |
| NullAway | 0.14.2 | MIT | null safety, JSpecify mode |
| Spotless | 3.10.4 | Apache-2.0 | formatting check and apply |
| google-java-format | 1.36.1 | Apache-2.0 | the one Java style |
| Surefire / Failsafe | 3.5.6 | Apache-2.0 | `*Test` / `*IT` |
| JaCoCo | 0.8.15 | EPL-2.0 | coverage thresholds |
| license-maven-plugin (MojoHaus) | 2.7.1 | LGPL-3.0 | licence allowlist (build tool, not shipped) |
| PIT (pitest-maven, pitest-junit5-plugin) | 1.30.1, 1.2.3 | Apache-2.0 | mutation testing, `mutation` profile |

## Notes

- Spotless 3.10.4 cannot run google-java-format 1.37.0 (the formatter fails to load); 1.36.1 is
  the newest version that works. Move both together.
- NullAway's JSpecify mode on Java 21 needs javac's `-XDaddTypeAnnotationsToSymbol=true`, which
  OpenJDK 21.0.8 and later have and Oracle JDK 21 does not. The build is validated on OpenJDK
  25.0.1 compiling for Java 21; Eclipse Temurin 21 is the intended everyday JDK and still has to
  be run once.
- Licence policy in the allowlist: Apache-2.0, MIT, BSD, EPL, EDL and CC0 are accepted outright.
  "GNU General Public License 2.0 with Classpath Exception" and "GNU Lesser General Public
  License 2.1" are on the list only because the plugin cannot express "either licence" for
  dual-licensed artifacts (Logback: EPL or LGPL; the Jakarta APIs and JNA: EPL or Apache, or GPL
  with Classpath Exception). Both permit commercial use without disclosing the Platform's source
  (CON-TECH-001), but a dependency available *only* under LGPL should be raised with Răzvan
  before it is added. AGPL, SSPL and plain GPL are not on the list and fail the build.
- Error Prone needs the `--add-exports` flags in `apps/api/.mvn/jvm.config`; google-java-format
  uses the same ones.
- The licence plugin matches names exactly, so `pom.xml` merges variant spellings into one
  canonical name before checking the allowlist. A dependency without licence information fails
  the check too (`failOnMissing`).
