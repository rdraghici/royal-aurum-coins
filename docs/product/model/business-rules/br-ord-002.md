---
id: BR-ORD-002
type: business-rule
title: "A bank-transfer order reserves the coin, and an unpaid reservation is released"
status: active
applies-to:
  - BC-ORDERS
  - BC-CATALOGUE
uses-terms:
  - TERM-RESERVATION
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(b)); Client's decision by WhatsApp, 15 Oct 2026 (question Q-C4)"
  confidence: high
  recovered-from: documentation
---

## Rule

When a buyer chooses bank transfer, the coin is reserved automatically for that buyer for a
period the Client can change in the administration panel; the default is 5 days. If payment is
not received within that period, the reservation is released automatically and the coin is
available again.

## Rationale

A transfer takes days; the coin must not be sold to someone else meanwhile, nor stay blocked for ever.

## Examples

With the period at its default of 5 days, a buyer orders by bank transfer on Monday: the coin
is reserved. No payment has arrived by Saturday: the coin is on sale again.

## Exceptions

None stated. What status the order then has and which email is sent are not yet decided
(question Q-R2).
