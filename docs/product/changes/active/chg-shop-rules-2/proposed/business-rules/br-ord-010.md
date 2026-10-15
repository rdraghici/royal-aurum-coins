---
id: BR-ORD-010
type: business-rule
title: "Royal Aurum ships to Ireland and the EU member states only"
status: active
applies-to:
  - BC-ORDERS
uses-terms:
  - TERM-ORDER
provenance:
  source: "Client's decision by WhatsApp, 15 Oct 2026 (the countries part of question Q-C1)"
  confidence: high
  recovered-from: documentation
---

## Rule

Royal Aurum ships its own coins to addresses in the 27 member states of the European Union,
Ireland among them, and nowhere else. A shipping address outside these countries cannot be
used to place an order. The United Kingdom, Switzerland and Norway are not served.

## Rationale

The Client's decision of 15 Oct 2026. Shipping gold outside the EU customs area brings
customs and VAT formalities the Client does not want to take on.

## Examples

A buyer with an address in Lisbon can place an order. A buyer with an address in London is told
at checkout that Royal Aurum ships to Ireland and the EU member states only, and cannot place
the order with that address.

## Exceptions

Shipping methods, rates and insurance per country are still to be instructed by the Client
(questions Q-C1 and Q-C2). Marketplace coins (Phase 2) are shipped by their sellers; which
countries they may ship to has not been discussed.
