---
id: SB-SHIPPING-ADDRESS-OUTSIDE-SERVED-COUNTRIES-REFUSED
type: structured-behaviour
title: "A shipping address outside Ireland and the EU cannot place an order"
status: active
illustrates:
  - BR-ORD-010
  - UC-PURCHASE-BY-CARD
given:
  - "A buyer is in checkout with an available coin"
when: "The buyer gives a shipping address in the United Kingdom"
then:
  - "The address is refused and the buyer is told that Royal Aurum ships to Ireland and the EU member states only"
  - "No order is placed with that address"
uses-terms:
  - TERM-ORDER
provenance:
  source: "Client's decision by WhatsApp, 15 Oct 2026 (the countries part of question Q-C1)"
  confidence: high
  recovered-from: documentation
---

## Intent

The served countries are enforced at the point where the address is given, not discovered
after payment.

## Boundaries

Does not assert the shipping cost or methods for served countries, nor the exact wording of the
message.
