---
id: T-002
title: "Web skeleton with quality gates"
phase: 1
status: todo
spec: ready
mode: supervised
review: standard
covers: []
cites: [CON-TECH-001, CON-DESIGN-001, CON-LOCALE-001]
behaviours: []
depends-on: [T-001]
blocked-by: []
---

# T-002 — Web skeleton with quality gates

## Goal

A Next.js application in `apps/web` with a placeholder homepage and every web gate of
`docs/engineering/quality-gates.md` wired in and proven to fail when it should. After this
task `scripts/verify.sh full web` passes.

## Product rules

<!-- product-rules:start -->
- **CON-TECH-001** Maintainable technology and compatible open-source licences <!-- pdac:cite id="CON-TECH-001" digest="sha256:553d57d98b3e9e0cd297ae9895f6666cff41e9fc623ed511d499221aeba97606" -->
- **CON-DESIGN-001** Approved Design Direction <!-- pdac:cite id="CON-DESIGN-001" digest="sha256:7420ddf9013a2710102a8d515a0f8eb5853bdcbcab4156ea9a8493c6359e6d6d" -->
- **CON-LOCALE-001** English only, prices in euro only <!-- pdac:cite id="CON-LOCALE-001" digest="sha256:c0b15034ff16df0316b5de997093ff6010a9f2cc004515b18a8d758effa648db" -->
<!-- product-rules:end -->

## Read first

- `docs/engineering/quality-gates.md`, sections 4, 5 and 6
- `docs/engineering/conventions.md` (Web, Tests)
- `apps/api/openapi.json` (from T-001)

## Scope

- The current stable Next.js with the App Router, TypeScript, Tailwind CSS and the shadcn/ui
  baseline, as the workspace package `web`. Pin versions; add them to
  `docs/engineering/stack.md` with licences.
- Folder layout `app/`, `features/`, `components/`, `lib/` with the import rules of section 5
  enforced by dependency-cruiser.
- `packages/api-types`: TypeScript types generated from `apps/api/openapi.json`
  (`pnpm api:types`), consumed by `lib/api`. Verification fails if the generated types are not
  up to date with the committed OpenAPI document.
- Package scripts `verify:fast` (format check, type check, lint, import boundaries, unit tests),
  `verify:full` (the same plus production build, end-to-end tests, licence check) and `format`.
- A placeholder homepage showing the headline "Invest in Gold. Own History." in English, with
  one component test and one Playwright test that also runs axe.
- One money formatter in `lib/` that renders euro amounts; unit-tested.
- Playwright starts the built app by itself and runs on a desktop and a phone viewport.

## Out of scope

Real pages, design import (T-023), calls to the API beyond the status endpoint, CI (T-003).

## Acceptance criteria

1. On a clean checkout, `scripts/verify.sh full web` passes.
2. `scripts/verify.sh fast web` is timed and the time is reported.
3. **Each gate is shown to bite**: a formatting error, a type error, an `any`, an accessibility
   lint error, an import that breaks the layering, a circular import, a failing unit test, a
   failing end-to-end test, an axe violation, out-of-date API types and a disallowed licence
   each fail verification. The task summary lists each proof.
4. `scripts/verify.sh full` (all four steps) passes.

## Engineering notes

- Keep ESLint type-aware rules fast enough for the fast tier; if they are not, say so with
  numbers instead of dropping them.
- The supported browsers are not decided (question Q-R15); test Chromium and WebKit, desktop
  and phone widths, until they are.
- Fonts, colours and the logo are not final (question Q-A3). Put the few tokens needed for the
  placeholder in one place so the design import replaces them in one edit.

## Done when

- `scripts/verify.sh full` exits 0 and its last line reads `VERIFY PASSED`.
- The summary contains the timing and the list of gate-failure proofs.
- This file's `status` is `done`.
