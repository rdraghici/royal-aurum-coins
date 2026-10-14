---
id: SB-CUSTOMER-SEES-ONLY-OWN-ORDERS
type: structured-behaviour
title: "The account area shows the customer's own orders only"
status: active
illustrates:
  - UC-MANAGE-ACCOUNT
  - BR-ACC-001
given:
  - "A signed-in customer has placed orders"
  - "Another customer has placed orders too"
when: "The customer opens the order history in their account area"
then:
  - "The customer's own orders are listed"
  - "No order of another customer is shown"
uses-terms:
  - TERM-ORDER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.3)"
  confidence: high
  recovered-from: documentation
---

## Intent

Order history is personal.

## Boundaries

None.

