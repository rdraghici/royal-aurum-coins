---
id: BR-MP-007
type: business-rule
title: "The Client can cancel and refund a Marketplace order before release"
status: active
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-HELD-FUNDS
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (C.5(d)) and Schedule 5 (12)"
  confidence: high
  recovered-from: documentation
---

## Rule

Refunds and cancellations of a Marketplace order can be executed by the Client from the
administration panel at any time before the payment is released to the seller.

## Rationale

While the money is still held, a problem can be undone completely. There is no other dispute tooling.

## Examples

A buyer reports that the wrong coin arrived. The payment has not been released. The Client cancels the order and the buyer is refunded in full.

## Exceptions

After release the Platform offers no refund function; the Client handles such cases outside
the Platform (question Q-C28). Cancellation initiated by the buyer or by the seller has not
been discussed.

