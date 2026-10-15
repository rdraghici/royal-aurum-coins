---
id: BR-MP-007
type: business-rule
title: "The Client can cancel and refund a Marketplace order before release"
status: draft
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-HELD-FUNDS
  - TERM-PROBLEM-REPORT
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (C.5(d)) and Schedule 5 (12); Client's decision by WhatsApp, 15 Oct 2026 (questions Q-C22 and Q-R4); Phase 2 wording pending Răzvan's confirmation"
  confidence: high
  recovered-from: documentation
---

## Rule

Refunds and cancellations of a Marketplace order can be executed by the Client from the
administration panel at any time before the payment is released to the seller. Resolving a
problem report is done the same way: the Client either refunds the buyer or releases the
payment to the seller.

## Rationale

While the money is still held, a problem can be undone completely. There is no other dispute
tooling, and no messaging between buyer and seller.

## Examples

A buyer reports that the wrong coin arrived. The payment has not been released. The Client
cancels the order from the administration panel and the buyer is refunded in full. On another
order the Client finds the report unfounded and releases the payment to the seller.

## Exceptions

After release the Platform offers no refund function; the Client handles such cases outside
the Platform (question Q-C28). Cancellation initiated by the buyer or by the seller has not
been discussed.
