# Royal Aurum Coins API

Spring Boot 4 on Java 21, PostgreSQL, Flyway. The components and their licences are listed in
`docs/engineering/stack.md`; the gates this build enforces are in
`docs/engineering/quality-gates.md`, section 3.

## Requirements

- A JDK whose javac has `-XDaddTypeAnnotationsToSymbol`, which NullAway needs on Java 21:
  OpenJDK 21.0.8 or later (for example Eclipse Temurin 21, `brew install --cask temurin@21`) or
  any OpenJDK 22+. Oracle's JDK 21 lacks the flag and fails at compile. The build was validated
  on Homebrew OpenJDK 25.0.1, compiling for Java 21 (`--release 21`); Temurin 21 has not been
  run yet. `./mvnw` uses `JAVA_HOME` when it is set, otherwise the `java` on the `PATH`.
- Docker, for the integration tests (Testcontainers starts PostgreSQL).
- Nothing else: `./mvnw` downloads Maven 3.9.16 on first use.

## Run

```sh
cp .env.example .env.local          # database URL and credentials; nothing is defaulted in the code
set -a; source .env.local; set +a
./mvnw spring-boot:run
curl localhost:8080/api/v1/status   # {"name":"royal-aurum-coins-api","version":"0.1.0"}
curl localhost:8080/actuator/health
```

Every other path answers 403 until task T-006 adds authentication. Task T-003 adds the compose
stack so that a database is one command away.

## Test and verify

```sh
./mvnw -B -q -DskipITs verify   # fast tier: format check, compile with Error Prone and NullAway,
                                #            architecture rules, unit and web-layer tests
./mvnw -B -q verify             # full tier: the same, plus *IT against Testcontainers PostgreSQL,
                                #            coverage thresholds, OpenAPI drift, licence check
./mvnw -B -q spotless:apply     # format (scripts/format.sh does this)
./mvnw -B -Pmutation verify     # mutation testing with PIT; nightly, not part of verify
```

`scripts/verify.sh fast|full api` at the repository root calls the first two. `-DskipITs` is the
one switch between the tiers: every full-tier gate is bound to it.

Naming: `*Test` runs with Surefire in the fast tier and must not start a Spring context beyond a
`@WebMvcTest` slice; `*IT` runs with Failsafe in the full tier, annotated `@IntegrationTest` so
that all of them share one application context and one database container.

## Add a migration

Flyway, one file per change under `src/main/resources/db/migration/`, named
`V<n>__<what>.sql` with the next number. A migration that has reached `main` is never edited;
write the next one. Hibernate validates the schema against the entities on start
(`ddl-auto: validate`), so an entity without its migration fails the integration tests.

## Update the OpenAPI document

`openapi.json` is the committed API contract; `apps/web` generates its types from it. When an
endpoint changes, the full tier fails with "openapi.json is out of date" and writes the current
document to `target/openapi.json`:

```sh
./mvnw -B -q verify              # fails, writes target/openapi.json
cp target/openapi.json openapi.json
git diff openapi.json            # review the contract change, then commit it with the code
```

## When a gate bites

- **Formatting**: run `scripts/format.sh`.
- **Compiler warning or Error Prone**: fix the code; `-Werror` means warnings fail the build.
- **NullAway**: every package is `@NullMarked`; mark what can be null `@Nullable` and handle it.
  New packages get a `package-info.java` with `@NullMarked`.
- **Architecture**: the rule's message names the dependency. The rules and the allowed
  directions between domains are in `src/test/java/.../architecture/ArchitectureTest.java`;
  changing them is a gate change (`docs/engineering/quality-gates.md`, section 6).
- **Coverage**: `target/site/jacoco/index.html` shows what is untested in `service` and `model`.
- **Licence**: the dependency's licence is not on the allowlist in `pom.xml`. Check it against
  CON-TECH-001 before adding it; add the exact name, or a merge for a variant spelling.
