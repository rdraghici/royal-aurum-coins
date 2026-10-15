---
id: SB-SOLD-COIN-SHOWN-AS-SOLD
type: structured-behaviour
title: "A coin in the Sold Archive is labelled Sold, without its price, and cannot be bought"
status: active
illustrates:
  - BR-CAT-004
  - UC-VIEW-SOLD-ARCHIVE
given:
  - "A sold coin is in the Sold Archive"
when: "A visitor opens the Sold Archive"
then:
  - "The coin is displayed with a Sold label"
  - "The price the coin sold for is not shown, in the list or on the coin's page"
  - "No purchase action is offered for the coin"
uses-terms:
  - TERM-SOLD-ARCHIVE
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(d)); Client's decision by WhatsApp, 15 Oct 2026 (question Q-C12)"
  confidence: high
  recovered-from: documentation
---

## Intent

A sold coin stays visible as a reference without ever looking available and without revealing
what it fetched.

## Boundaries

Does not assert how the coin came to be in the archive.
