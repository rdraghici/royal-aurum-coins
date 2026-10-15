---
id: UC-VIEW-SOLD-ARCHIVE
type: use-case
title: "Look through the Sold Archive"
status: active
primary-actor: ACT-VISITOR
bounded-context: BC-CATALOGUE
governed-by:
  - BR-CAT-004
uses-terms:
  - TERM-SOLD-ARCHIVE
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(d)); Client's decision by WhatsApp, 15 Oct 2026 (question Q-C12)"
  confidence: medium
  recovered-from: documentation
---

## Goal

See which coins Royal Aurum has sold in the past.

## Trigger

The visitor opens the Sold Archive from the main navigation.

## Preconditions

None.

## Main Flow

1. The Platform lists previously sold coins, each marked "Sold" and without a price.
2. The visitor opens a sold coin and sees its details, without the price it sold for.

## Alternative Flows

None.

## Failure Conditions

With no coins in the archive, the page says so.

## Postconditions

The visitor has seen past sales; no purchase was possible and no selling price was revealed.
