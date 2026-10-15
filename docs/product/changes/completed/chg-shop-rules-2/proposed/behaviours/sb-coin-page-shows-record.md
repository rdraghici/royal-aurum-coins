---
id: SB-COIN-PAGE-SHOWS-RECORD
type: structured-behaviour
title: "A coin page shows the full coin record"
status: active
illustrates:
  - UC-VIEW-COIN
  - BR-CAT-002
when: "A visitor opens the page of a published coin"
then:
  - "The final price is shown in euro, with the coin's VAT treatment"
  - "The certification service, certification number and grade are shown"
  - "The total weight and the fine gold content are shown as separate values, each in grams and in troy ounces"
  - "The year and mint are shown"
  - "The detailed description is shown"
  - "The photographs can be enlarged with zoom"
uses-terms:
  - TERM-CERTIFICATION
  - TERM-GRADE
  - TERM-VAT-TREATMENT
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(c)); Client's decisions by WhatsApp, 15 Oct 2026 (questions Q-C8 and Q-C32)"
  confidence: high
  recovered-from: documentation
---

## Intent

Every coin page presents the same structured facts.

## Boundaries

Does not assert how many decimals each unit is shown with, nor the order of the facts on the
page.
