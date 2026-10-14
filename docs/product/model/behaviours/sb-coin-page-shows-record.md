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
  - "The price is shown in euro"
  - "The certification service, certification number and grade are shown"
  - "The gold content, weight, year and mint are shown"
  - "The detailed description is shown"
  - "The photographs can be enlarged with zoom"
uses-terms:
  - TERM-CERTIFICATION
  - TERM-GRADE
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(c))"
  confidence: high
  recovered-from: documentation
---

## Intent

Every coin page presents the same structured facts.

## Boundaries

Does not assert the units of gold content and weight, which are not yet decided.

