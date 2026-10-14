---
id: BC-CATALOGUE
type: bounded-context
title: "Catalogue"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1, Part B (B.1, B.2(a), B.6)"
  confidence: medium
  recovered-from: documentation
---

## Responsibility

Presenting Royal Aurum's coins to the public: the BUY section and its categories, the
individual coin pages, the homepage featured selection and the Sold Archive, together with
the Client's control over which coins are published.

## Language

Coins, categories, certification, grade, published, sold, archived, featured. A coin here
is always one physical, certified coin, never a product with a quantity.

## Boundaries

Taking an order or a payment is outside this context (see BC-ORDERS and BC-PAYMENTS).
Coins offered by private sellers are owned by BC-MARKETPLACE; this context only displays
them once approved.

## External Relationships

BC-ORDERS tells this context when a purchase completes, which marks the coin as sold.
BC-MARKETPLACE supplies approved listings to be shown alongside Royal Aurum's own coins.

