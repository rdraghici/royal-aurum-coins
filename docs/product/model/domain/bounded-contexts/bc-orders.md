---
id: BC-ORDERS
type: bounded-context
title: "Orders and checkout"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1, Part B (B.2)"
  confidence: medium
  recovered-from: documentation
---

## Responsibility

Selling Royal Aurum's own coins: cart, checkout, orders and their statuses, the
reservation of a coin while a bank transfer is awaited, and the emails that accompany an
order.

## Language

Order, cart, checkout, reservation, release, completed purchase, order confirmation.

## Boundaries

How a payment is technically taken, held or refunded belongs to BC-PAYMENTS. Marketplace
orders, held funds and payouts belong to BC-MARKETPLACE.

## External Relationships

Uses BC-PAYMENTS to take card payments. Informs BC-CATALOGUE when a coin is reserved,
released or sold. Relies on BC-ACCOUNTS to know who the buyer is.

