---
id: SB-BROWSE-BY-CATEGORY
type: structured-behaviour
title: "Browsing a category shows only its published coins"
status: active
illustrates:
  - UC-BROWSE-CATALOGUE
  - BR-CAT-003
given:
  - "Published coins exist in the categories US Pre-1933 Gold and British Gold"
when: "A visitor opens the category British Gold"
then:
  - "The published British Gold coins are listed"
  - "No coin of another category is listed"
uses-terms:
  - TERM-CATEGORY
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(b))"
  confidence: high
  recovered-from: documentation
---

## Intent

Categories are the primary way through the BUY section.

## Boundaries

Does not assert the default order of the list or which filters are offered.

