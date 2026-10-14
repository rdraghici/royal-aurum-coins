---
id: BR-CAT-001
type: business-rule
title: "Each coin is a unique item with a stock of one"
status: active
applies-to:
  - BC-CATALOGUE
  - BC-ORDERS
uses-terms:
  - TERM-COIN
  - TERM-COMPLETED-PURCHASE
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(a))"
  confidence: high
  recovered-from: documentation
---

## Rule

Each coin is managed as a unique item (stock of one). A coin is automatically marked as sold
upon completed purchase.

## Rationale

Royal Aurum sells individual certified coins; no two are interchangeable.

## Examples

A buyer completes the purchase of the 1908 $20 Saint-Gaudens graded PCGS MS65. The coin is
marked as sold at that moment and nobody else can buy it. There is no quantity selector
anywhere on the site.

## Exceptions

None. When a bank-transfer purchase counts as completed is defined by TERM-COMPLETED-PURCHASE,
which is still a draft (question Q-R17).

