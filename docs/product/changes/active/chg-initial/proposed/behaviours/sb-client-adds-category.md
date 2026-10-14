---
id: SB-CLIENT-ADDS-CATEGORY
type: structured-behaviour
title: "The Client adds a category by itself"
status: active
illustrates:
  - BR-CAT-003
  - UC-MANAGE-CATALOGUE
when: "An administrator adds a new category in the administration panel"
then:
  - "Coins can be assigned to the new category"
  - "Visitors can browse the BUY section by the new category"
uses-terms:
  - TERM-CATEGORY
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(b), B.6)"
  confidence: high
  recovered-from: documentation
---

## Intent

The category list is the Client's to extend, without the Provider.

## Boundaries

Does not assert whether a category without published coins is shown to visitors.

