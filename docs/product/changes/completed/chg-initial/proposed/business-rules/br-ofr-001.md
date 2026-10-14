---
id: BR-OFR-001
type: business-rule
title: "Make an Offer with a private minimum"
status: active
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-OFFER
  - TERM-MINIMUM-ACCEPTABLE-OFFER
provenance:
  source: "Change Request CR-01 'Make an Offer', agreed by email on 11 Oct 2026"
  confidence: high
  recovered-from: documentation
---

## Rule

Make an Offer is available on Royal Aurum's own coins and on Marketplace listings. The seller
(for Royal Aurum's own coins, the Client) chooses per coin whether to enable it and sets a
private minimum acceptable offer. A buyer can submit an offer. An offer below the minimum is
rejected automatically without revealing the minimum. An offer that meets the minimum is
notified to the seller, who accepts or declines it. If it is accepted, the buyer completes the
purchase at the agreed price through the normal checkout.

## Rationale

Requested by the Client as a simple alternative to negotiation: "I don't want to introduce an auction system, bidding competition or anything unnecessarily complicated."

## Examples

A coin is listed at EUR 3,000 with a private minimum of EUR 2,600. An offer of EUR 2,500 is
rejected at once with a neutral message. An offer of EUR 2,800 is sent to the seller, who
accepts; the buyer then pays EUR 2,800 at checkout.

## Exceptions

The wording of the neutral rejection message is not yet agreed (question Q-C30). Whether a
minimum is compulsory when the option is enabled has not been discussed.

