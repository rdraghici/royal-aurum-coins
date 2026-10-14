---
id: BC-MARKETPLACE
type: bounded-context
title: "Curated marketplace"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1, Part C and Schedule 5"
  confidence: medium
  recovered-from: documentation
---

## Responsibility

Phase 2: approved private sellers list certified gold coins, Royal Aurum approves each
listing, the buyer pays through the site, the Payment Provider holds the funds and the
seller is paid automatically net of the Client's commission. Includes Make an Offer.

## Language

Seller, listing, approval queue, held funds, release, payout, commission, confirmation
period, offer, minimum acceptable offer.

## Boundaries

Not an auction and not a negotiation tool: no bidding, no counter-offers, no messaging
between buyers and sellers, no seller profiles or ratings. Separate from We Buy.

## External Relationships

BC-PAYMENTS executes holding, release and refund. BC-CATALOGUE displays approved listings.
The Payment Provider performs seller identity verification and payout onboarding.

