# Quality gates

A rule exists in this project only if breaking it makes `scripts/verify.sh` fail. Anything that
is merely written down, here or in `CLAUDE.md`, is advice. When a convention matters, turn it
into one of the checks below.

## Tiers

| Tier | Command | When | Budget |
| --- | --- | --- | --- |
| fast | `scripts/verify.sh fast` | after every meaningful edit | keep under two minutes |
| full | `scripts/verify.sh full` | before every commit; CI on every pull request | minutes |
| nightly | CI schedule (task T-003) | once a day on `main` | no limit |

`verify.sh` runs four steps: `product`, `policy`, `api`, `web`. One or more can be named to run
alone, for example `scripts/verify.sh fast product`.

## 1. Product definition — step `product` (in place)

| Check | Script | Fails when |
| --- | --- | --- |
| Structure | `prodshape validate` | an artifact is malformed or refers to something that does not exist |
| Tasks | `scripts/lib/check-tasks.mjs` | a task has bad front matter, cites something unknown, is ready while citing a draft, a contracted scope clause has no task, or an active behaviour is in no task |
| Citations | `scripts/lib/check-citations.mjs` | a task cites a rule whose text changed after the task was stamped, or a rule that no longer exists |
| Behaviour coverage | `scripts/lib/check-behaviours.mjs` | a finished task claims a behaviour that no test names, or a test names a behaviour that is not active |

A test names a behaviour by containing its ID:

```java
@Test
@DisplayName("SB-UNPAID-RESERVATION-RELEASED: the coin is back on sale when the period ends unpaid")
void releasesUnpaidReservation() { ... }
```

```ts
test("SB-BROWSE-BY-CATEGORY: British Gold lists only British Gold coins", async ({ page }) => { ... });
```

Name the behaviour at the lowest layer that can observe it. Most behaviours belong in an
integration test of the API; only journeys that cross the browser belong in an end-to-end test.

## 2. Policy — step `policy` (in place)

| Check | Script | Fails when |
| --- | --- | --- |
| Protected files | `scripts/lib/check-protected.mjs` | the branch changes a gate file, a migration already on `main`, or the product definition without an applied Product Change |
| Suppressions | `scripts/lib/check-suppressions.mjs` | the branch adds `@Disabled`, `@SuppressWarnings`, `eslint-disable`, `@ts-ignore`, `.skip`, `.only`, `any`, or switches a build check off |

The list of protected paths is `scripts/lib/protected-paths.mjs`. Deliberate suppressions are
recorded by a human in `quality/suppressions-allowlist.txt`.

## 3. API — step `api` (wired by task T-001)

Entry points, which `verify.sh` calls and T-001 must honour:

- fast: `./mvnw -B -q -DskipITs verify` in `apps/api`
- full: `./mvnw -B -q verify` in `apps/api`

| Gate | Tool | What it enforces | Tier |
| --- | --- | --- | --- |
| Formatting | Spotless with google-java-format (`spotless:check`) | one style; style is never a review topic | fast |
| Compiler | `javac -Xlint:all -Werror -parameters` | no warnings | fast |
| Bug patterns | Error Prone | common Java mistakes, at compile time | fast |
| Null safety | NullAway with JSpecify, packages `@NullMarked` | no unchecked null in `com.royalaurumcoins` | fast |
| Architecture | ArchUnit tests under `…/architecture/` | the rules in section 5 | fast |
| Unit tests | JUnit 5, AssertJ (`*Test`, Surefire) | rules, calculations, state machines | fast |
| Web-layer tests | `@WebMvcTest` | validation, status codes, access per role | fast |
| Integration tests | Testcontainers with PostgreSQL (`*IT`, Failsafe) | real database, Flyway migrations, transactions, scheduled work | full |
| Provider adapters | WireMock | each adapter against the provider's documented responses, including failures | full |
| Coverage | JaCoCo `check`: line ≥ 80 %, branch ≥ 70 % on `service` and `model` packages | logic without tests | full |
| API contract | OpenAPI document generated at build; build fails if it differs from the committed one | unreviewed API changes; front end and back end drifting apart | full |
| Licences | licence plugin; fails on AGPL, SSPL and GPL without the classpath exception | CON-TECH-001 (Agreement 15.1) | full |
| Mutation testing | PIT on `service` and `model` packages, threshold 70 % | tests that run code without asserting anything | nightly |
| Vulnerable dependencies | OSV-Scanner or OWASP Dependency-Check | CON-SEC-001 | nightly |

Thresholds start where shown and only move up. Lowering one is a gate change.

## 4. Web — step `web` (wired by task T-002)

Entry points: `pnpm --filter web run verify:fast` and `pnpm --filter web run verify:full`.

| Gate | Tool | What it enforces | Tier |
| --- | --- | --- | --- |
| Formatting | Prettier (`--check`) | one style | fast |
| Types | `tsc --noEmit`, `strict`, `noUncheckedIndexedAccess` | no implicit or unchecked types | fast |
| Lint | ESLint: Next.js core-web-vitals, typescript-eslint strict type-checked, jsx-a11y | common React and accessibility mistakes; no `any` | fast |
| Import boundaries | dependency-cruiser | the layering in section 5; no cycles | fast |
| Unit and component tests | Vitest with Testing Library | formatting, validation, component states | fast |
| API types | types generated from the committed OpenAPI document | calling the API with the wrong shape fails the type check | fast |
| Build | `next build` | the production build works | full |
| End-to-end | Playwright against the local stack | the journeys of the product definition, named by behaviour ID | full |
| Accessibility | axe in Playwright on home, category, coin, checkout | no serious or critical violation | full |
| SEO | Playwright assertions for FR-SEO-001 | structured data, sitemap, robots.txt, titles and descriptions | full |
| Licences | licence checker with an allowlist | CON-TECH-001 | full |
| Performance budget | Lighthouse CI on home, category, coin | high-resolution photography stays fast | nightly |

## 5. Architecture rules

These are executable. On the API they are ArchUnit tests; on the web, dependency-cruiser rules.

API:

1. **Layers.** `controller` → `service` → `repository`. A controller never touches a repository
   or an entity; it exchanges DTOs with services.
2. **Payment isolation (CON-PAY-001).** Only `integrations.<provider>` may use that provider's
   SDK or name its types. Everything else talks to the payment interface in `service.payment`.
   The same holds for the email, image-storage and newsletter providers.
3. **No cycles** between domains, and the allowed directions between domains are declared in
   one place (for example: `order` may use `catalogue`; `catalogue` may not use `order`).
4. **Placement.** `@RestController` classes live in `controller` and end in `Controller`;
   `@Entity` in `entity`; `@Service` in `service`; Spring Data repositories in `repository`.
5. **Constructor injection only.** No injected fields.
6. **Time comes from a `Clock`.** No `Instant.now()`, `LocalDateTime.now()` or similar without a
   clock, so that every time-based rule (reservations, offers, payouts) is testable.
7. **Money is never floating point.** No `double` or `float` field in `entity`, `dto` or `model`.
8. **General hygiene.** No generic exceptions thrown, no `System.out`, no `java.util.logging`.

Web:

1. `app` (routes) → `features` → `components` → `lib`. Never the other way.
2. A feature does not import another feature's internals.
3. Only `lib/api` talks to the API, through the generated types.
4. No cycles.

## 6. Changing a gate

Gates change like product rules do: deliberately, by a person. Start the session with
`RA_ALLOW_GATE_EDITS=1`, change the gate, and say why in the commit message. In CI, a pull
request that touches a gate file carries a warning so the change is seen at review.
