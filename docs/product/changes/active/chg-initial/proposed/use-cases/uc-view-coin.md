---
id: UC-VIEW-COIN
type: use-case
title: "View a coin"
status: active
primary-actor: ACT-VISITOR
bounded-context: BC-CATALOGUE
governed-by:
  - BR-CAT-001
  - BR-CAT-002
  - BR-CAT-004
  - BR-CAT-005
uses-terms:
  - TERM-COIN
  - TERM-CERTIFICATION
  - TERM-GRADE
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(c))"
  confidence: medium
  recovered-from: documentation
---

## Goal

Examine one coin closely enough to decide whether to buy it.

## Trigger

The visitor opens a coin from a list, from the homepage or from a link.

## Preconditions

The coin is published.

## Main Flow

1. The Platform shows the coin's image gallery, title and price.
2. The Platform shows the certification service, certification number and grade, and the gold content, weight, year and mint, followed by the detailed description.
3. The visitor enlarges a photograph with zoom.
4. The visitor adds the coin to the cart or, when signed in, to their Wishlist.

## Alternative Flows

If the coin has been sold, the page shows it as sold and offers no purchase action.

## Failure Conditions

The address of a coin that is not published does not show the coin.

## Postconditions

The visitor has seen every fact the coin record holds.

