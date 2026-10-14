---
id: BR-OFR-006
type: business-rule
title: "Emails about offers"
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

Emails are sent when an offer is received, when it is accepted, when it is declined and when
it expires.

## Rationale

Offers are answered over hours or days; neither side should have to watch the site.

## Examples

An offer that meets the minimum is emailed to the seller. The seller accepts: the buyer is
emailed, with the way to pay. The buyer does not pay within 48 hours: the offer expires and
an email says so.

## Exceptions

CR-01 names the four emails but not every recipient: who is told of an expiry (the buyer, the
seller or both) is not specified. An offer rejected automatically is answered on screen.

