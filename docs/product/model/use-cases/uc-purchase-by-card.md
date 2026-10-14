---
id: UC-PURCHASE-BY-CARD
type: use-case
title: "Buy a coin by card"
status: draft
primary-actor: ACT-CUSTOMER
supporting-actors:
  - ACT-PAYMENT-PROVIDER
bounded-context: BC-ORDERS
governed-by:
  - BR-CAT-001
  - BR-ORD-001
  - BR-ORD-004
  - BR-ORD-005
  - BR-ORD-006
  - BR-ORD-008
  - BR-PRC-001
uses-terms:
  - TERM-ORDER
  - TERM-COMPLETED-PURCHASE
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2) and Clauses 4.5, 7.4"
  confidence: medium
  recovered-from: documentation
---

## Goal

Buy one of Royal Aurum's own coins and pay for it by card.

## Trigger

The buyer proceeds to checkout with a coin in the cart.

## Preconditions

The coin is published and available. Whether the buyer must have an account is not yet decided (question Q-C6).

## Main Flow

1. The buyer adds the coin to the cart and proceeds to checkout.
2. The buyer gives the shipping address; the Platform shows the shipping cost.
3. The buyer chooses to pay by card.
4. The buyer pays in the Payment Provider's hosted or tokenised card component.
5. The payment succeeds; the coin is marked as sold.
6. The buyer receives an order confirmation; the Client receives a new-order notification.

## Alternative Flows

For a higher-value coin, bank transfer is presented as the preferred option; the buyer may switch to it.

## Failure Conditions

The card payment fails or is abandoned: no order is completed and the coin remains available.
Another buyer is already buying the coin: this buyer cannot check out with it.

## Postconditions

An order exists, it is paid, and the coin is sold.

