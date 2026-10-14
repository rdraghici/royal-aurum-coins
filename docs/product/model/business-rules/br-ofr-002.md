---
id: BR-OFR-002
type: business-rule
title: "Offer validity and reservation after acceptance"
status: active
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-OFFER
  - TERM-RESERVATION
provenance:
  source: "Change Request CR-01 'Make an Offer', agreed by email on 11 Oct 2026"
  confidence: high
  recovered-from: documentation
---

## Rule

An offer expires if the seller has not answered it within 72 hours. When an offer is accepted,
the coin is reserved for that buyer for 48 hours at the agreed price. If the buyer has not paid
within those 48 hours, the coin returns to sale and the offer expires.

## Rationale

Neither party should be left waiting indefinitely, and an accepted price must be honoured for a fair time.

## Examples

An offer accepted on Tuesday at 10:00 holds the coin for that buyer until Thursday at 10:00.

## Exceptions

How the 48 hours combine with the bank-transfer reservation period when the buyer chooses to
pay by bank transfer is not yet decided (question Q-R16).

