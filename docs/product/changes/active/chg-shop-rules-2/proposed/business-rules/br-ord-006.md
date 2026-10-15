---
id: BR-ORD-006
type: business-rule
title: "Shipping and tax follow the Client's instructions"
status: active
applies-to:
  - BC-ORDERS
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(d)) and Schedule 4 (4.1(g)); Client's decisions by WhatsApp, 15 Oct 2026 (questions Q-C1, Q-C2, Q-C8)"
  confidence: high
  recovered-from: documentation
---

## Rule

Royal Aurum's own coins ship free of charge and fully insured to the countries served
(BR-ORD-010). Shipping and insurance are included in the coin price: nothing is added for
them at checkout. Tax follows the VAT treatment the Client has set on each coin (BR-PRC-002),
and no tax is added either. The order total is the coin price and nothing else.

## Rationale

The Client's decisions of 15 Oct 2026: a buyer of a high-value coin sees one figure and pays
exactly that; insurance is never an option to decline. The tax treatment of gold is the
Client's legal decision and lives on the coin.

## Examples

A coin priced at EUR 4,850 is ordered to an address in Lisbon. The total is EUR 4,850. The
coin is sent insured, at Royal Aurum's cost.

## Exceptions

How a shipment is sent (carrier, service, tracking) is the Client's operational matter and is
not configured in the Platform. Marketplace coins (Phase 2) are shipped, charged for and
insured by their sellers (BR-MP-018).
