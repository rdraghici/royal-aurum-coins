---
id: BR-MP-006
type: business-rule
title: "Marketplace payments are held and released automatically net of commission"
status: active
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-HELD-FUNDS
  - TERM-PAYOUT
  - TERM-CONFIRMATION-PERIOD
  - TERM-COMMISSION
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (C.5(a), C.5(b), C.5(c)) and Clause 4.4"
  confidence: high
  recovered-from: documentation
---

## Rule

The buyer pays through the Royal Aurum website. The payment is held by the Payment Provider
and not by the Client. Upon the buyer's confirmation of delivery, or upon expiry of a
confirmation period configurable by the Client without the Client having cancelled the order,
the payment is released automatically to the seller net of the Client's commission.

## Rationale

The buyer is protected until the coin arrives; the seller is paid without anyone having to act.

## Examples

A buyer pays EUR 3,000 for a Marketplace coin. The seller ships it. The buyer confirms
delivery, and the seller is paid EUR 3,000 less the commission.

## Exceptions

If neither Stripe nor at least two Alternative Payment Providers approve the Client for held
payments, then unless otherwise agreed payouts are executed manually by the Client after
delivery (Clause 7.9). How the buyer confirms delivery, and what starts the
confirmation period, are not yet decided (questions Q-C22 and Q-R4).

