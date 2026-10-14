---
id: BR-ORD-005
type: business-rule
title: "Order emails go to the customer and to the Client"
status: active
applies-to:
  - BC-ORDERS
uses-terms:
  - TERM-ORDER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(c))"
  confidence: high
  recovered-from: documentation
---

## Rule

The Platform sends automatic order confirmation and notification emails to the customer and
to the Client.

## Rationale

The buyer needs proof of the order; the Client must learn of each sale without watching the administration panel.

## Examples

A buyer places an order. The buyer receives an order confirmation; the Client receives a new-order notification.

## Exceptions

Which further emails are sent at which order status is not yet decided (question Q-R2).

