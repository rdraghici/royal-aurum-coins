---
id: BR-MP-006
type: business-rule
title: "Marketplace payments are held and released automatically net of commission"
status: draft
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-HELD-FUNDS
  - TERM-PAYOUT
  - TERM-CONFIRMATION-PERIOD
  - TERM-COMMISSION
  - TERM-PROBLEM-REPORT
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (C.5(a), C.5(b), C.5(c)) and Clause 4.4; Client's decision by WhatsApp, 15 Oct 2026 (questions Q-C22 and Q-R4); Phase 2 wording pending Răzvan's confirmation"
  confidence: high
  recovered-from: documentation
---

## Rule

The buyer pays through the Royal Aurum website. The payment is held by the Payment Provider
and not by the Client. The confirmation period, whose length the Client configures, starts
when delivery is confirmed (BR-MP-016). When the period ends with no open problem report and
without the Client having cancelled the order, the payment is released automatically to the
seller net of the Client's commission.

## Rationale

The buyer is protected until the coin has arrived and been examined; the seller is paid
without anyone having to act.

## Examples

A buyer pays EUR 3,000 for a Marketplace coin. The seller ships it; delivery is confirmed on
5 November. Nothing is reported; when the period ends, the seller is paid EUR 3,000 less the
commission.

## Exceptions

If neither Stripe nor at least two Alternative Payment Providers approve the Client for held
payments, then unless otherwise agreed payouts are executed manually by the Client after
delivery (Clause 7.9). The Agreement (C.5(c)) also names the buyer's confirmation of delivery
itself as a release trigger; under the decision of 15 Oct 2026 confirmation starts the period
instead, and release follows the period. A problem report holds the release (BR-MP-017).
