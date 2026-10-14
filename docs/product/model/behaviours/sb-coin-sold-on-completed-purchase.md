---
id: SB-COIN-SOLD-ON-COMPLETED-PURCHASE
type: structured-behaviour
title: "A coin is sold the moment its purchase completes"
status: active
illustrates:
  - BR-CAT-001
given:
  - "A published coin is available for purchase"
when: "A buyer completes the purchase of the coin"
then:
  - "The coin is marked as sold"
  - "The coin can no longer be purchased by anyone"
uses-terms:
  - TERM-COMPLETED-PURCHASE
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(a))"
  confidence: high
  recovered-from: documentation
---

## Intent

Establishes the stock of one: a completed purchase takes the coin off sale immediately and automatically.

## Boundaries

Does not say when a bank-transfer purchase counts as completed, nor when the coin appears in the Sold Archive.

