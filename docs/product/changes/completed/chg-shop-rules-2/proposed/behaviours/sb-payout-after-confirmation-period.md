---
id: SB-PAYOUT-AFTER-CONFIRMATION-PERIOD
type: structured-behaviour
title: "A seller is paid when the confirmation period ends without a problem"
status: draft
illustrates:
  - BR-MP-006
  - BR-MP-017
given:
  - "Delivery of a Marketplace order has been confirmed"
  - "No problem report is open on the order and the Client has not cancelled it"
when: "The confirmation period ends"
then:
  - "The held payment is released to the seller net of the commission without anyone acting"
  - "The seller and the Client are emailed about the payout"
uses-terms:
  - TERM-PAYOUT
  - TERM-CONFIRMATION-PERIOD
provenance:
  source: "Client's decision by WhatsApp, 15 Oct 2026 (questions Q-C22 and Q-R4); Phase 2 wording pending Răzvan's confirmation"
  confidence: high
  recovered-from: documentation
---

## Intent

Silence from the buyer after delivery means the seller is paid on time.

## Boundaries

Does not assert the length of the period or how delivery was confirmed.
