---
id: BR-ORD-006
type: business-rule
title: "Shipping and tax follow the Client's instructions"
status: active
applies-to:
  - BC-ORDERS
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(d)) and Schedule 4 (4.1(g))"
  confidence: high
  recovered-from: documentation
---

## Rule

Shipping zones and rates, and tax settings, are configured according to the Client's
instructions.

## Rationale

Shipping, insurance and the tax treatment of gold are the Client's commercial and legal decisions.

## Examples

The Client instructs which countries are served and what shipping costs for each; checkout applies exactly that.

## Exceptions

The instructions have not been received yet (questions Q-C1, Q-C2 and Q-C8).

