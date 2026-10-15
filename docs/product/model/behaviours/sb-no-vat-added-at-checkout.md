---
id: SB-NO-VAT-ADDED-AT-CHECKOUT
type: structured-behaviour
title: "The order total is the coin price and nothing else, and the VAT treatment travels with the order"
status: active
illustrates:
  - BR-PRC-002
  - BR-ORD-006
given:
  - "A coin is priced at EUR 850 and carries the VAT treatment investment-gold exemption"
when: "A buyer places an order for the coin"
then:
  - "The order total is EUR 850 and nothing else: no VAT, shipping, insurance or other charge is added"
  - "The order records the VAT treatment investment-gold exemption"
  - "The order confirmation shows the VAT treatment"
uses-terms:
  - TERM-ORDER
  - TERM-VAT-TREATMENT
provenance:
  source: "Client's decisions by WhatsApp, 15 Oct 2026 (questions Q-C1, Q-C2, Q-C8)"
  confidence: high
  recovered-from: documentation
---

## Intent

What the customer saw on the coin page is exactly what the customer pays, and the VAT position
is written down with the sale.

## Boundaries

Does not assert the wording of the treatment on the confirmation, nor what happens to an order
if the coin's treatment is changed afterwards.
