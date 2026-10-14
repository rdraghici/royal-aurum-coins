---
id: BR-OFR-003
type: business-rule
title: "Who can offer, and how often"
status: active
applies-to:
  - BC-MARKETPLACE
  - BC-ACCOUNTS
uses-terms:
  - TERM-OFFER
provenance:
  source: "Change Request CR-01 'Make an Offer', agreed by email on 11 Oct 2026"
  confidence: high
  recovered-from: documentation
---

## Rule

Only signed-in buyers can make an offer. A buyer can have one open offer per coin; a new offer
on the same coin is possible only after the previous one has been declined or has expired.

## Rationale

Keeps every offer attributable to a known buyer and limits each buyer to one pending offer per coin.

## Examples

A buyer whose offer on a coin is still waiting for the seller's answer cannot submit another on that coin.

## Exceptions

CR-01 does not say whether a buyer whose offer was rejected automatically for being below the
minimum may try again at once (question Q-C36).

