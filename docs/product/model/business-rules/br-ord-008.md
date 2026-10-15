---
id: BR-ORD-008
type: business-rule
title: "A coin in checkout is held briefly"
status: active
applies-to:
  - BC-ORDERS
uses-terms:
  - TERM-RESERVATION
provenance:
  source: "Client's decision by WhatsApp, 15 Oct 2026 (question Q-C5), confirming the Provider's proposal of 6 Oct 2026"
  confidence: high
  recovered-from: documentation
---

## Rule

While a buyer is in checkout, the coin is held for that buyer for 15 minutes and is then
released if the order has not been placed.

## Rationale

With a stock of one, two buyers must not be able to pay for the same coin at the same time.

## Examples

Two visitors open the same coin. The first starts checkout; the second cannot check out with it
until the hold ends or the first leaves.

## Exceptions

None.
