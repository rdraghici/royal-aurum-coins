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
  source: "Provider's proposal of 6 Oct 2026, not confirmed by the Client"
  confidence: low
  recovered-from: documentation
---

## Rule

The confirmation period is 7 days.

## Rationale

Suggested by the Provider on the assumption of tracked delivery.

## Examples

Seven days after the period starts without the buyer confirming and without the Client cancelling, the seller is paid.

## Exceptions

The suggestion counted from delivery, but the Platform has no carrier integration and so
cannot know the delivery date. If the period counts from the seller marking shipment, 7 days
may end before an international shipment arrives (questions Q-C22 and Q-R4).

