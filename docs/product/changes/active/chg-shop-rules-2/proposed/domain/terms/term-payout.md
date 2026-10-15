---
id: TERM-PAYOUT
type: domain-term
title: "Payout"
status: draft
defined-in: BC-MARKETPLACE
synonyms:
  - release
uses-terms:
  - TERM-HELD-FUNDS
  - TERM-COMMISSION
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (C.5(c)) and Clause 7.9; Client's decision by WhatsApp, 15 Oct 2026 (questions Q-C22 and Q-R4); Phase 2 wording pending Răzvan's confirmation"
  confidence: high
  recovered-from: documentation
---

## Definition

The automatic release of held funds to the seller, net of the Client's commission. In the
fallback of Clause 7.9 (no Payment Provider approves held payments) payouts are instead
executed manually by the Client after delivery.

## Distinguish From

Not a refund, which returns the payment to the buyer before release.

## Usage

Made automatically when the confirmation period ends with no open problem report, or by the
Client when resolving a problem report in the seller's favour.
