---
id: T-011
title: "Wishlist"
phase: 1
status: todo
spec: outline
mode: delegate
review: standard
covers: ["B.3"]
cites: [UC-MANAGE-WISHLIST, FR-ACC-001]
behaviours: [SB-WISHLIST-KEEPS-COIN]
depends-on: [T-004, T-006]
blocked-by: []
---

# T-011 — Wishlist

## Goal

A signed-in customer keeps a personal list of coins they are interested in.

## Product rules

<!-- product-rules:start -->
- **UC-MANAGE-WISHLIST** Keep a Wishlist <!-- pdac:cite id="UC-MANAGE-WISHLIST" digest="sha256:e4fbd99052e6d6a2ee81cd28367fdae2cb23a508a10c3677be5a57e3c4cc08a0" -->
- **FR-ACC-001** Customer accounts <!-- pdac:cite id="FR-ACC-001" digest="sha256:0d64dd617e606951e9b3a63940fd48d37541e7677270674f3629d0d72cb7107f" -->
- **SB-WISHLIST-KEEPS-COIN** A coin added to the Wishlist is still there later <!-- pdac:cite id="SB-WISHLIST-KEEPS-COIN" digest="sha256:8fee2656c0b609b3c163158cd086bd0cebd5f298b52aa349f261f4a9123f8312" -->
<!-- product-rules:end -->

## Scope

- Add and remove from coin cards and coin pages; a Wishlist page in the account.
- A coin on the list that has since been sold is shown as sold.
- The Wishlist reserves nothing.

## Open decisions

- The proposal of 6 Oct 2026 mentioned a Wishlist that also works without an account and merges on sign-in. That is not in the Agreement; build the signed-in Wishlist only unless a Change Request says otherwise.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
