---
id: BR-MP-013
type: business-rule
title: "Sellers are onboarded through the Payment Provider"
status: active
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-SELLER
  - TERM-PAYMENT-PROVIDER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (C.1)"
  confidence: high
  recovered-from: documentation
---

## Rule

Seller registration and onboarding include the Payment Provider's hosted identity
verification (KYC) and payout account onboarding. A seller has a dashboard showing their
listings, the listings' statuses, their sales and their payouts.

## Rationale

Identity verification and the payout account are the Payment Provider's task, not the Platform's; the dashboard is where a seller follows their own listings and money.

## Examples

A new seller registers, is taken to the Payment Provider's verification pages, completes them and returns to the dashboard.

## Exceptions

Proposed but not confirmed: that a seller cannot submit listings before onboarding is
complete, and that a seller uses the same login to buy (question Q-R13).

