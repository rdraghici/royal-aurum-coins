---
id: T-007
title: "Administration: coins, categories and the featured selection"
phase: 1
status: todo
spec: ready
mode: delegate
review: standard
covers: ["B.6"]
cites: [UC-MANAGE-CATALOGUE, FR-ADM-001, BR-CAT-002, BR-CAT-003, BR-CAT-005, BR-CAT-006, BR-ACC-001, CON-OPS-001]
behaviours: [SB-CLIENT-ADDS-CATEGORY]
depends-on: [T-004, T-006]
blocked-by: []
---

# T-007 — Administration: coins, categories and the featured selection

## Goal

An administrator manages the catalogue alone: adds and edits coins, publishes and unpublishes
them, manages categories and chooses the homepage's featured coins.

## Product rules

<!-- product-rules:start -->
- **UC-MANAGE-CATALOGUE** Manage coins, categories and the featured selection <!-- pdac:cite id="UC-MANAGE-CATALOGUE" digest="sha256:dbeec357c3bba66b94fdc5c2c5afb6540e53b2158d50780ba7a339e938087cd7" -->
- **FR-ADM-001** Administration panel <!-- pdac:cite id="FR-ADM-001" digest="sha256:0964f28bfb82bbed8fa734d25f662729524a50b9c8affa6d6a8f36ef3f3bac8f" -->
- **BR-CAT-002** What a coin record contains <!-- pdac:cite id="BR-CAT-002" digest="sha256:514740dd3368e4840b2e3edabfee217436fe9dca9fc5973c1d9350e689d09ae4" -->
- **BR-CAT-003** Categories of the BUY section <!-- pdac:cite id="BR-CAT-003" digest="sha256:d72b41c5d521dd77720f56a196134a55d49b67b0c0245e3b96e11a5894ff6552" -->
- **BR-CAT-005** Only published coins are public <!-- pdac:cite id="BR-CAT-005" digest="sha256:81ea45fd38bb1226027cc0bc917113c788cb0ec983740c358ca388feb2147e38" -->
- **BR-CAT-006** The Client chooses the homepage featured coins <!-- pdac:cite id="BR-CAT-006" digest="sha256:ae31d70de94a754247c2282975d55e82f6f8834e98e28649693370ba94f30b7b" -->
- **BR-ACC-001** Administrators, sellers and buyers are separated by role <!-- pdac:cite id="BR-ACC-001" digest="sha256:f394311b69575c909f8f35c17ee49c4bfe8127b8e73efa8ca57fa64e317b5e3c" -->
- **CON-OPS-001** The Client runs the Platform without technical assistance <!-- pdac:cite id="CON-OPS-001" digest="sha256:d0f77eaede141c0c8ca1ebb4e7f32e738ff89cd6cf5fefe0999c2995f4f76612" -->
- **SB-CLIENT-ADDS-CATEGORY** The Client adds a category by itself <!-- pdac:cite id="SB-CLIENT-ADDS-CATEGORY" digest="sha256:fa579b51730b3b6ca1c88614601694210716b688e690da029694d6946123455a" -->
<!-- product-rules:end -->

## Read first

- `docs/engineering/reference-slice.md`
- `pnpm exec prodshape context UC-MANAGE-CATALOGUE FR-ADM-001`

## Scope

- The administration panel's frame: layout, navigation, administrators-only access.
- Coins: list, create, edit every field of BR-CAT-002 except photographs, publish, unpublish.
  The actions "mark as sold" and "archive" exist and change the coin's state; what the public
  sees of sold and archived coins is T-010.
- Categories: list, add, rename.
- Featured selection: choose which coins the homepage features. (Showing them is T-009.)
- The administration API for all of the above, administrators only.

## Out of scope

Photographs (T-008). Orders, customers, We Buy, subscribers (T-020, T-012, T-022). The public
homepage (T-009). Visual design beyond a clean, usable panel.

## Acceptance criteria

1. SB-CLIENT-ADDS-CATEGORY: a category added in the panel can be assigned to coins and
   browsed by visitors. Named in an integration test and an end-to-end test.
2. Publishing makes a coin appear through the public API; unpublishing removes it
   (SB-UNPUBLISHED-COIN-HIDDEN keeps passing).
3. Every administration endpoint refuses a customer and an anonymous caller; a test walks all
   of them.
4. Every value an administrator can change is changed in the panel, with no deployment
   (CON-OPS-001).
5. The panel is usable at phone width.

## Engineering notes

- How many administrator logins the Client needs is open (Q-C14) and does not block this
  task: any number of administrators works.
- Three things were never discussed. Use the default given and **report each in the summary**:
  which fields must be filled in before a coin can be published (default: every field of
  BR-CAT-002, with the panel naming what is missing); deleting a category that still has coins
  (default: refuse); what the featured section does when a featured coin is sold (default:
  keep the selection unchanged).

## Done when

- `scripts/verify.sh full` exits 0 and its last line reads `VERIFY PASSED`.
- The behaviour is named by tests.
- The work is committed on the task branch with a summary; this file's `status` is `done`.
