---
id: UC-PURCHASE-BY-CARD
type: use-case
title: "Buy a coin by card"
status: active
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
  - BR-ORD-010
  - BR-PRC-001
  - BR-PRC-002
uses-terms:
  - TERM-ORDER
  - TERM-COMPLETED-PURCHASE
  - TERM-VAT-TREATMENT
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2) and Clauses 4.5, 7.4; Client's decisions by WhatsApp, 15 Oct 2026 (questions Q-C1 to Q-C6, Q-C8)"
  confidence: medium
  recovered-from: documentation
---

## Goal

Buy one of Royal Aurum's own coins and pay for it by card.

## Trigger

The buyer proceeds to checkout with a coin in the cart.

## Preconditions

The coin is published and available. No account is needed: a visitor can buy as a guest.

## Main Flow

1. The buyer adds the coin to the cart and proceeds to checkout, signed in or as a guest; the coin is held for the buyer for 15 minutes.
2. The buyer gives their email address and a shipping address in a served country; the Platform shows the total, which is the coin's final price and nothing else.
3. The buyer chooses to pay by card; bank transfer is shown as the recommended option for higher-value purchases.
4. The buyer pays in the Payment Provider's hosted or tokenised card component.
5. The payment succeeds; the coin is marked as sold; the order records the coin's VAT treatment.
6. The buyer receives an order confirmation showing the VAT treatment; the Client receives a new-order notification.
7. A buyer without an account is offered to create one with the details already given.

## Alternative Flows

The buyer chooses bank transfer instead (UC-PURCHASE-BY-BANK-TRANSFER).

## Failure Conditions

A shipping address outside Ireland and the EU member states is refused and no order can be placed with it.
The card payment fails or is abandoned: no order is completed and the coin remains available.
Another buyer is already buying the coin: this buyer cannot check out with it.

## Postconditions

An order exists, it is paid, and the coin is sold.
