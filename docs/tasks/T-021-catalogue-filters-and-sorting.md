---
id: T-021
title: "Catalogue filters and sorting"
phase: 1
status: todo
spec: outline
mode: delegate
review: standard
covers: ["B.1(b)"]
cites: [UC-BROWSE-CATALOGUE, BR-CAT-007]
behaviours: []
depends-on: [T-004]
blocked-by: [Q-R6]
---

# T-021 — Catalogue filters and sorting

## Goal

A visitor narrows and orders the BUY section.

## Product rules

<!-- product-rules:start -->
- **UC-BROWSE-CATALOGUE** Browse the BUY section <!-- pdac:cite id="UC-BROWSE-CATALOGUE" digest="sha256:0602793053c339add30558079c11056deee901f03d089d25e04c4d5c0c337c72" -->
- **BR-CAT-007** Catalogue filters and sorting _(draft)_ <!-- pdac:cite id="BR-CAT-007" digest="sha256:428239469053f3a759264fcaa4f4fc85437c563108fa5f67bcf982140727c9bb" -->
<!-- product-rules:end -->

## Scope

- Filters and sort orders as decided; reflected in the URL so that a filtered view can be shared.
- Sensible behaviour when nothing matches.

## Open decisions

- Q-R6: the set of filters and sort orders (BR-CAT-007 is a draft proposal: category, grade, certification service, price; sort by price and date added).

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
