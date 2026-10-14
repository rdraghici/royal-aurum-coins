---
id: SB-WISHLIST-KEEPS-COIN
type: structured-behaviour
title: "A coin added to the Wishlist is still there later"
status: active
illustrates:
  - UC-MANAGE-WISHLIST
given:
  - "A signed-in customer"
when: "The customer adds a coin to their Wishlist"
then:
  - "The coin appears in the customer's Wishlist"
  - "The coin is still in the Wishlist when the customer signs in again"
uses-terms:
  - TERM-WISHLIST
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.3)"
  confidence: high
  recovered-from: documentation
---

## Intent

The Wishlist is a lasting personal list.

## Boundaries

Does not reserve the coin: it stays available to everyone.

