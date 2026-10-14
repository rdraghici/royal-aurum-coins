---
id: T-025
title: "Launch catalogue import"
phase: 1
status: todo
spec: outline
mode: delegate
review: standard
covers: ["S4.2"]
cites: [BR-CAT-002, BR-CAT-003, CON-OPS-001]
behaviours: []
depends-on: [T-007, T-008]
blocked-by: [Q-R7, Q-C11]
---

# T-025 — Launch catalogue import

## Goal

The Client's launch coins are loaded from the agreed spreadsheet instead of being typed in one by one.

## Product rules

<!-- product-rules:start -->
- **BR-CAT-002** What a coin record contains <!-- pdac:cite id="BR-CAT-002" digest="sha256:514740dd3368e4840b2e3edabfee217436fe9dca9fc5973c1d9350e689d09ae4" -->
- **BR-CAT-003** Categories of the BUY section <!-- pdac:cite id="BR-CAT-003" digest="sha256:d72b41c5d521dd77720f56a196134a55d49b67b0c0245e3b96e11a5894ff6552" -->
- **CON-OPS-001** The Client runs the Platform without technical assistance <!-- pdac:cite id="CON-OPS-001" digest="sha256:d0f77eaede141c0c8ca1ebb4e7f32e738ff89cd6cf5fefe0999c2995f4f76612" -->
<!-- product-rules:end -->

## Scope

- The spreadsheet template with the columns of BR-CAT-002.
- An import that validates every row, reports problems per row, and can be re-run safely.
- Imported coins start unpublished so the Client reviews before showing them.

## Open decisions

- Q-R7: the template itself.
- Q-C11: how many coins, and when the Client sends data and photographs.
- Q-R14: units of gold content and weight.
- Under Schedule 4 (4.2) the Provider loads the launch catalogue only if it arrives in the agreed format before Phase 1 acceptance testing starts.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
