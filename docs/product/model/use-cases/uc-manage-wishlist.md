---
id: UC-MANAGE-WISHLIST
type: use-case
title: "Keep a Wishlist"
status: active
primary-actor: ACT-CUSTOMER
bounded-context: BC-ACCOUNTS
uses-terms:
  - TERM-WISHLIST
  - TERM-COIN
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.3)"
  confidence: medium
  recovered-from: documentation
---

## Goal

Remember coins of interest for later.

## Trigger

The customer marks a coin for their Wishlist.

## Preconditions

The customer is signed in.

## Main Flow

1. The customer adds a coin to their Wishlist from a coin card or coin page.
2. The customer opens their Wishlist and sees the coins they added.
3. The customer removes a coin from the Wishlist.

## Alternative Flows

None.

## Failure Conditions

A coin on a Wishlist that has since been sold is shown as sold.

## Postconditions

The Wishlist contains exactly the coins the customer has kept on it.

