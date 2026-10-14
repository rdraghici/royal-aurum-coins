---
id: BR-OFR-004
type: business-rule
title: "Pending offers end when the coin sells at full price"
status: active
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-OFFER
provenance:
  source: "Change Request CR-01 'Make an Offer', agreed by email on 11 Oct 2026"
  confidence: high
  recovered-from: documentation
---

## Rule

If a coin is sold at its full price while offers on it are pending, those offers are cancelled
automatically and the buyers who made them are informed by email.

## Rationale

A coin exists once; a full-price purchase always wins over an unanswered offer.

## Examples

Two offers are waiting on a coin. A third buyer purchases it at the listed price. Both offers are cancelled and both buyers are emailed.

## Exceptions

An offer that has already been accepted reserves the coin, so the coin cannot be bought at full price during that reservation.

