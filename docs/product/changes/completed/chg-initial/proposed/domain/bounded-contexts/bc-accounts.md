---
id: BC-ACCOUNTS
type: bounded-context
title: "Accounts and access"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 4.5 and Schedule 1 (B.3, B.6)"
  confidence: medium
  recovered-from: documentation
---

## Responsibility

Who a person is on the Platform and what they are allowed to do: customer registration,
sign in and password reset, the customer's account area and Wishlist, and the separation
of administrators, sellers and buyers.

## Language

Customer, buyer, administrator, seller, account, role, Wishlist.

## Boundaries

The Payment Provider's identity verification of sellers is not performed here; only its
outcome is known to the Platform.

## External Relationships

Every other context asks this one who is acting and in which role.

