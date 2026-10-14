---
id: SB-ORDER-EMAILS-SENT
type: structured-behaviour
title: "Placing an order emails the customer and the Client"
status: active
illustrates:
  - BR-ORD-005
when: "A buyer places an order"
then:
  - "The customer receives an order confirmation email"
  - "The Client receives an email notifying it of the order"
uses-terms:
  - TERM-ORDER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(c))"
  confidence: high
  recovered-from: documentation
---

## Intent

Neither side has to look at the site to know an order exists.

## Boundaries

Does not assert the emails sent at later stages of the order.

