---
id: FR-ACC-001
type: functional-requirement
title: "Customer accounts"
status: active
derived-from:
  - UC-REGISTER-AND-SIGN-IN
  - UC-MANAGE-ACCOUNT
  - UC-MANAGE-WISHLIST
verification:
  - scenario-ref: SB-CUSTOMER-RESETS-PASSWORD
  - scenario-ref: SB-CUSTOMER-SEES-ONLY-OWN-ORDERS
  - scenario-ref: SB-WISHLIST-KEEPS-COIN
uses-terms:
  - TERM-CUSTOMER
  - TERM-WISHLIST
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.3)"
  confidence: high
  recovered-from: documentation
---

## Requirement

The Platform MUST provide customer registration, sign in and password reset, an account area
showing the customer's order history and account details, and a Wishlist.

## Rationale

Returning buyers of high-value items expect to see their orders and to keep track of coins they are considering.

