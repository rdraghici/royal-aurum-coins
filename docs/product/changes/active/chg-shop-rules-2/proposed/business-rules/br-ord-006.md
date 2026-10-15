---
id: BR-ORD-006
type: business-rule
title: "Shipping and tax follow the Client's instructions"
status: active
applies-to:
  - BC-ORDERS
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(d)) and Schedule 4 (4.1(g)); Client's decisions by WhatsApp, 15 Oct 2026 (questions Q-C1 in part, Q-C8)"
  confidence: high
  recovered-from: documentation
---

## Rule

Shipping zones and rates are configured according to the Client's instructions, within the
countries served (BR-ORD-010). Tax follows the VAT treatment the Client has set on each coin
(BR-PRC-002); no tax is calculated or added at checkout.

## Rationale

Shipping, insurance and the tax treatment of gold are the Client's commercial and legal decisions.

## Examples

The Client instructs what shipping costs to each served country; checkout applies exactly
that, on top of the final price of the coins.

## Exceptions

The shipping methods, rates and insurance have not been instructed yet (questions Q-C1 and
Q-C2).
