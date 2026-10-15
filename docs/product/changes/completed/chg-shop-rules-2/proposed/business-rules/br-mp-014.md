---
id: BR-MP-014
type: business-rule
title: "Length of the confirmation period"
status: draft
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-CONFIRMATION-PERIOD
provenance:
  source: "Client's decision by WhatsApp, 15 Oct 2026 (question Q-C22); Phase 2 wording pending Răzvan's confirmation"
  confidence: high
  recovered-from: documentation
---

## Rule

The confirmation period is 7 calendar days, counted from the day delivery is confirmed
(BR-MP-016). This is the value the Client has chosen; the period remains configurable by the
Client in the administration panel (BR-MP-006).

## Rationale

Seven days from confirmed delivery give the buyer time to examine the coin and report a
problem, while the seller knows when payment will come. Counting from confirmed delivery,
rather than from shipment, removes the risk that the period ends before an international
parcel arrives.

## Examples

Delivery is confirmed on Monday 2 November. With nothing reported, the seller is paid after
Monday 9 November.

## Exceptions

Whether delivery can be confirmed automatically some days after shipment, which would start
the period without anyone acting, is not decided (question Q-C38).
