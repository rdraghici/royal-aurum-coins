---
id: BR-PRC-001
type: business-rule
title: "One price per coin, in euro"
status: active
applies-to:
  - BC-CATALOGUE
  - BC-ORDERS
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(c), B.2(d)) and Schedule 5 (3)"
  confidence: high
  recovered-from: documentation
---

## Rule

Each coin has one price. For Royal Aurum's own coins the Client sets it. Prices are displayed
in euro and in no other currency.

## Rationale

One visible price per coin fits the curated shop; multi-currency pricing is excluded from the scope.

## Examples

The Client sets a coin at EUR 4,850. Every visitor sees EUR 4,850.

## Exceptions

In Phase 2, Make an Offer lets one buyer purchase at an agreed lower price (BR-OFR-001), and
the price of a Marketplace listing is set by its seller. The price is final and carries a VAT
treatment that never alters it (BR-PRC-002).
