---
id: UC-BROWSE-CATALOGUE
type: use-case
title: "Browse the BUY section"
status: active
primary-actor: ACT-VISITOR
bounded-context: BC-CATALOGUE
governed-by:
  - BR-CAT-003
  - BR-CAT-005
  - BR-CAT-006
  - BR-PRC-001
uses-terms:
  - TERM-CATEGORY
  - TERM-COIN
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(a), B.1(b))"
  confidence: medium
  recovered-from: documentation
---

## Goal

Find coins of interest among those Royal Aurum currently offers.

## Trigger

The visitor opens the homepage or the BUY section.

## Preconditions

At least one coin is published.

## Main Flow

1. The visitor opens the BUY section or one of its categories.
2. The Platform lists the published coins, each with its image, title, certification summary and price.
3. The visitor narrows the list by filtering and changes its order by sorting.
4. The visitor opens a coin.

## Alternative Flows

From the homepage, the visitor opens a coin directly from the featured selection.

## Failure Conditions

A category with no published coins shows that nothing is currently available in it.

## Postconditions

The visitor has seen the available coins that match what they were looking for.

