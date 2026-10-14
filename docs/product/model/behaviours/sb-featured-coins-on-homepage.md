---
id: SB-FEATURED-COINS-ON-HOMEPAGE
type: structured-behaviour
title: "The homepage shows the coins the Client selected"
status: active
illustrates:
  - BR-CAT-006
given:
  - "An administrator has selected coins for the homepage featured section"
when: "A visitor opens the homepage"
then:
  - "The featured section shows exactly the selected coins"
uses-terms:
  - TERM-FEATURED-SELECTION
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(a), B.6)"
  confidence: high
  recovered-from: documentation
---

## Intent

The homepage selection is curated by the Client, not computed.

## Boundaries

Does not assert the order of the coins or what happens when a selected coin is sold.

