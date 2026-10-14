---
id: CON-SCOPE-001
type: constraint
title: "Functionality that must not be built"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 5; amended for item (1) by Change Request CR-01 'Make an Offer', agreed by email on 11 Oct 2026"
  confidence: high
  recovered-from: documentation
---

## Constraint

The following are excluded and are not to be built unless a Change Request is agreed in
writing: auction, bidding, counter-offer or other price-negotiation functionality beyond Make
an Offer as agreed in CR-01; native mobile applications; integration with accounting software,
ERP systems, shipping carrier APIs or label printing; anti-money laundering screening,
sanctions screening or KYC beyond that performed natively by the Payment Provider;
buyer-seller dispute resolution tooling, messaging between buyers and sellers, seller profiles
or seller ratings, beyond cancellation and refund by the Client from the administration panel;
self-service tooling for data subjects; more than one Alternative Payment Provider integration
or more than one Alternative Card Processor integration.

## Rationale

In the Client's words, Royal Aurum should remain "relatively simple, clean and easy to manage".
Anything on this list requires a Change Request under Clause 11; it is never a clarification.

## Consequences

- Delivery of a shipment cannot be confirmed by a carrier; it relies on what the seller and
  the buyer record.
- A request that touches this list is stopped and raised as a Change Request, not built.

