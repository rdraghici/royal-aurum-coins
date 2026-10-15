---
id: SB-PROBLEM-REPORT-HOLDS-PAYOUT
type: structured-behaviour
title: "A problem report holds the payout until the Client resolves it"
status: draft
illustrates:
  - BR-MP-017
given:
  - "Delivery of a Marketplace order has been confirmed and the confirmation period is running"
when: "The buyer reports that the coin is damaged"
then:
  - "The payout is held"
  - "The Client is notified"
  - "The seller is not paid when the confirmation period ends while the report is open"
uses-terms:
  - TERM-PROBLEM-REPORT
  - TERM-PAYOUT
provenance:
  source: "Client's decision by WhatsApp, 15 Oct 2026 (questions Q-C22 and Q-R4); Phase 2 wording pending Răzvan's confirmation"
  confidence: high
  recovered-from: documentation
---

## Intent

Once a buyer has spoken up, only the Client's decision moves the money.

## Boundaries

Does not assert how the Client resolves the report, nor whether a return for another reason is
possible.
