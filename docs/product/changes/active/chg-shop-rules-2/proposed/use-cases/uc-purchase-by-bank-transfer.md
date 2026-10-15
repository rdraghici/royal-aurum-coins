---
id: UC-PURCHASE-BY-BANK-TRANSFER
type: use-case
title: "Buy a coin by bank transfer"
status: active
primary-actor: ACT-CUSTOMER
supporting-actors:
  - ACT-ADMINISTRATOR
bounded-context: BC-ORDERS
governed-by:
  - BR-ORD-001
  - BR-ORD-002
  - BR-ORD-003
  - BR-ORD-004
  - BR-ORD-005
  - BR-ORD-006
  - BR-ORD-007
  - BR-ORD-008
  - BR-ORD-010
  - BR-PRC-002
uses-terms:
  - TERM-RESERVATION
  - TERM-ORDER
  - TERM-COMPLETED-PURCHASE
  - TERM-VAT-TREATMENT
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(b)) and Clause 7.10; Client's decisions by WhatsApp, 15 Oct 2026 (questions Q-C1 to Q-C6, Q-C8)"
  confidence: medium
  recovered-from: documentation
---

## Goal

Buy one of Royal Aurum's own coins and pay for it by bank transfer.

## Trigger

The buyer chooses bank transfer at checkout.

## Preconditions

The coin is published and available. No account is needed: a visitor can buy as a guest.

## Main Flow

1. The buyer adds the coin to the cart and proceeds to checkout, signed in or as a guest; the coin is held for the buyer for 15 minutes.
2. The buyer gives their email address and a shipping address in a served country; the total is the coin's final price and nothing else.
3. The buyer chooses to pay by bank transfer, shown as the recommended option for higher-value purchases, and places the order; the order records the coin's VAT treatment.
4. The Platform reserves the coin for the buyer for the period configured by the Client (default 5 days).
5. The Platform shows the buyer how to make the transfer; the buyer and the Client receive their order emails, the buyer's showing the VAT treatment.
6. A buyer without an account is offered to create one with the details already given.
7. The buyer transfers the money to the Client's bank account.
8. An administrator records that the payment has arrived; the coin is marked as sold and the buyer is informed.

## Alternative Flows

The buyer chooses card instead (UC-PURCHASE-BY-CARD).

## Failure Conditions

A shipping address outside Ireland and the EU member states is refused and no order can be placed with it.
No payment arrives within the reservation period: the reservation is released automatically and the coin is available again (UC-RELEASE-UNPAID-RESERVATION).

## Postconditions

An order exists; the coin is reserved until paid and sold once the payment has been received.
