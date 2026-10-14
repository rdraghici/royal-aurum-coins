---
id: SB-SOLD-COIN-SHOWN-AS-SOLD
type: structured-behaviour
title: "A coin in the Sold Archive is labelled Sold and cannot be bought"
status: active
illustrates:
  - BR-CAT-004
  - UC-VIEW-SOLD-ARCHIVE
given:
  - "A sold coin is in the Sold Archive"
when: "A visitor opens the Sold Archive"
then:
  - "The coin is displayed with a Sold label"
  - "No purchase action is offered for the coin"
uses-terms:
  - TERM-SOLD-ARCHIVE
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(d))"
  confidence: high
  recovered-from: documentation
---

## Intent

A sold coin stays visible as a reference without ever looking available.

## Boundaries

Does not assert whether the sale price is shown, nor how the coin came to be in the archive.

