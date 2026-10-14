---
id: UC-MANAGE-ORDERS
type: use-case
title: "Handle orders"
status: draft
primary-actor: ACT-ADMINISTRATOR
bounded-context: BC-ORDERS
governed-by:
  - BR-ORD-005
  - BR-ORD-007
  - BR-ORD-009
  - BR-ACC-001
uses-terms:
  - TERM-ORDER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(c), B.6)"
  confidence: medium
  recovered-from: documentation
---

## Goal

See every order and move it forward.

## Trigger

An administrator opens the orders area, usually after a new-order notification.

## Preconditions

The person is signed in as an administrator.

## Main Flow

1. The administrator sees the list of orders with their statuses.
2. The administrator opens an order and sees the buyer, the coin, the payment method and the shipping address.
3. For a bank-transfer order, the administrator records that the payment has arrived.
4. The administrator records the shipment with its tracking information; the customer is informed.

## Alternative Flows

The administrator cancels an order; a paid order is refunded.

## Failure Conditions

None identified.

## Postconditions

The order's status reflects what has happened to it, and the customer has been informed.

