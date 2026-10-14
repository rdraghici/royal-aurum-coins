---
id: T-004
title: "Public catalogue: the reference slice"
phase: 1
status: todo
spec: ready
mode: supervised
review: strict
covers: ["B.1(b)", "B.1(c)"]
cites: [UC-BROWSE-CATALOGUE, UC-VIEW-COIN, BR-CAT-001, BR-CAT-002, BR-CAT-003, BR-CAT-005, BR-PRC-001, CON-LOCALE-001]
behaviours: [SB-BROWSE-BY-CATEGORY, SB-UNPUBLISHED-COIN-HIDDEN]
depends-on: [T-001, T-002, T-003]
blocked-by: []
---

# T-004 — Public catalogue: the reference slice

## Goal

Visitors can browse the BUY section by category and open a coin. This is the first real
feature and the **reference slice**: one thin path through every layer, reviewed line by line,
that every later task copies. Getting its shape right matters more than its size.

## Product rules

<!-- product-rules:start -->
- **UC-BROWSE-CATALOGUE** Browse the BUY section <!-- pdac:cite id="UC-BROWSE-CATALOGUE" digest="sha256:0602793053c339add30558079c11056deee901f03d089d25e04c4d5c0c337c72" -->
- **UC-VIEW-COIN** View a coin <!-- pdac:cite id="UC-VIEW-COIN" digest="sha256:583f36e3263c6b3ce1b888dc2a7ffa3c758164614e8e5516ece2fbd604052ced" -->
- **BR-CAT-001** Each coin is a unique item with a stock of one <!-- pdac:cite id="BR-CAT-001" digest="sha256:7c04595c7868c98b0e44489b4519c027d3408abca67f34cf5816eef16f77a79d" -->
- **BR-CAT-002** What a coin record contains <!-- pdac:cite id="BR-CAT-002" digest="sha256:514740dd3368e4840b2e3edabfee217436fe9dca9fc5973c1d9350e689d09ae4" -->
- **BR-CAT-003** Categories of the BUY section <!-- pdac:cite id="BR-CAT-003" digest="sha256:d72b41c5d521dd77720f56a196134a55d49b67b0c0245e3b96e11a5894ff6552" -->
- **BR-CAT-005** Only published coins are public <!-- pdac:cite id="BR-CAT-005" digest="sha256:81ea45fd38bb1226027cc0bc917113c788cb0ec983740c358ca388feb2147e38" -->
- **BR-PRC-001** One price per coin, in euro <!-- pdac:cite id="BR-PRC-001" digest="sha256:650e2f252d067d8705359562f77329b2064d88bd7e1b06bfe990f6c17db5512f" -->
- **CON-LOCALE-001** English only, prices in euro only <!-- pdac:cite id="CON-LOCALE-001" digest="sha256:c0b15034ff16df0316b5de997093ff6010a9f2cc004515b18a8d758effa648db" -->
- **SB-BROWSE-BY-CATEGORY** Browsing a category shows only its published coins <!-- pdac:cite id="SB-BROWSE-BY-CATEGORY" digest="sha256:0128733902c618d2b3470011da704abed2b68f0b85c0579ffcdaf43a3be01993" -->
- **SB-UNPUBLISHED-COIN-HIDDEN** An unpublished coin is not shown to visitors <!-- pdac:cite id="SB-UNPUBLISHED-COIN-HIDDEN" digest="sha256:e6866869900da41699694096f8742906e52628c441e0d73d3122687809176434" -->
<!-- product-rules:end -->

## Read first

- `docs/engineering/conventions.md` (all of it)
- `docs/product/model/domain/terms/` (the names to use)
- `pnpm exec prodshape context UC-BROWSE-CATALOGUE UC-VIEW-COIN`

## Scope

- Migrations for categories and coins. A coin has the fields of BR-CAT-002 except
  photographs, a publication state, and no quantity. The three initial categories are
  inserted by migration; coins are not (seed data is development-only).
- API: list categories; list published coins of a category (paged); get one published coin
  by its URL slug.
- Web: the BUY section with its categories, a category page listing coins, and a coin page
  showing the coin record. Structure and semantics only; visual design comes with T-023.
- Tests at every layer: unit (any rule or formatting), web-layer (status codes, validation),
  integration against PostgreSQL (queries, the published filter), architecture (unchanged and
  passing), component, and one end-to-end journey from the BUY section to a coin page.
- `docs/engineering/reference-slice.md`: the list of files that make up this slice, layer by
  layer, with one sentence each on what later tasks should copy. Link it from `CLAUDE.md`.

## Out of scope

Filters and sorting (T-021). Photographs and zoom (T-008). Administration (T-007). Sold coins
and the Sold Archive (T-010). Cart and checkout. Visual design.

## Acceptance criteria

1. SB-BROWSE-BY-CATEGORY: with published coins in two categories, a category lists only its
   own published coins. Named in an integration test and in the end-to-end test.
2. SB-UNPUBLISHED-COIN-HIDDEN: an unpublished coin is absent from lists, and its slug answers
   "not found" through the API and on the web. Named in an integration test.
3. A coin page shows price in euro, certification service, certification number, grade, gold
   content, weight, year, mint and description. (The behaviour SB-COIN-PAGE-SHOWS-RECORD is
   completed and claimed by T-008, which adds the photographs.)
4. There is no quantity anywhere: not in the schema, the API or the pages (BR-CAT-001).
5. Prices are formatted in one place, in euro (CON-LOCALE-001).
6. Coin and category URLs are clean and stable (they will be indexed; see FR-SEO-001).
7. The database enforces what it can: required fields, unique slug, unique certification
   number per certification service if Răzvan confirms that rule.

## Engineering notes

- Two decisions come first and are Răzvan's (see `docs/product/open-questions.md`):
  Q-R14, how gold content and weight are stored, and Q-R19, one category per coin or several.
  When they are made, remove them from `blocked-by`.
- Model publication (shown or not) separately from availability (available, reserved, sold).
  Later tasks add reservation and sale; do not fold them into one status now.
- The certification service is a closed list for Marketplace listings (BR-MP-002). For Royal
  Aurum's own coins the same list is only assumed (BR-CAT-008 is a draft). Do not hard-code a
  database constraint that would need a migration if a fourth service appears.
- Review this slice as if it were the whole project: naming, where validation lives, how a
  "not found" is produced, how tests are laid out. Then freeze it as the reference.

## Done when

- `scripts/verify.sh full` exits 0 and its last line reads `VERIFY PASSED`.
- `docs/engineering/reference-slice.md` exists and is linked from `CLAUDE.md`.
- Răzvan has read every file of the slice.
- This file's `status` is `done`.
