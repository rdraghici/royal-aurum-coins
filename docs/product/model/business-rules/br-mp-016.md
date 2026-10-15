---
id: BR-MP-016
type: business-rule
title: "Delivery of a Marketplace order is confirmed by the buyer or by the Client"
status: draft
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-ORDER
  - TERM-SELLER
  - TERM-CONFIRMATION-PERIOD
provenance:
  source: "Client's decision by WhatsApp, 15 Oct 2026 (questions Q-C22 and Q-R4); Phase 2 wording pending Răzvan's confirmation"
  confidence: high
  recovered-from: documentation
---

## Rule

Delivery of a Marketplace order is confirmed either by the buyer, from their order, or by the
Client, from the administration panel, after checking the tracking information the seller
recorded when marking shipment. The confirmation period starts on the day delivery is
confirmed.

## Rationale

The Platform has no carrier integration (CON-SCOPE-001), so a person records that the coin
arrived. The Client can do so when a buyer stays silent, so that a seller is not kept waiting
by an inattentive buyer.

## Examples

The seller marks the coin as shipped on 1 November with a tracking number. The buyer confirms
delivery on 5 November: the confirmation period runs from 5 November. Another buyer says
nothing; on 8 November the Client checks the tracking, sees the parcel was delivered, and
confirms delivery: the period runs from 8 November.

## Exceptions

Whether delivery is confirmed automatically a number of days after shipment when neither the
buyer nor the Client has confirmed it is not decided (question Q-C38). What happens when a
parcel never arrives has not been discussed beyond the Client's power to cancel and refund
(BR-MP-007).
