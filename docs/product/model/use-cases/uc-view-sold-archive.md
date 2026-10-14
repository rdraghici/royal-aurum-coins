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
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(d))"
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

1. The Platform lists previously sold coins, each marked "Sold".
2. The visitor opens a sold coin and sees its details.

## Alternative Flows

None.

## Failure Conditions

With no coins in the archive, the page says so.

## Postconditions

The visitor has seen past sales; no purchase was possible.

