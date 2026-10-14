---
id: T-000
title: "Short imperative title"
phase: 1
status: todo
spec: ready
mode: delegate
review: standard
covers: []
cites: []
behaviours: []
depends-on: []
blocked-by: []
---

# T-000 — Short imperative title

## Goal

Two or three sentences: what a user can do afterwards, and why it matters now.

## Product rules

<!-- product-rules:start -->
<!-- product-rules:end -->

## Read first

- The files and documents to read before writing anything.
- `pnpm exec prodshape context <IDs>` for the cited rules in full.

## Scope

- What is built, as a short list. Name behaviour, not classes.

## Out of scope

What a reader might expect here but belongs to another task. Name the task.

## Acceptance criteria

1. One numbered line per behaviour in `behaviours`, saying at which test layer it is named.
2. Other observable checks. Each must be something a test or a command can show.

## Engineering notes

Decisions already made, traps, and anything that is not a product rule but must be chosen
(say which default to use and that it must be reported in the summary).

## Done when

- `scripts/verify.sh full` exits 0 and its last line reads `VERIFY PASSED`.
- Every behaviour is named by a test.
- The work is committed on the task branch with a summary; this file's `status` is `done`.
