---
id: SB-GUEST-CHECKOUT-WITH-OPTIONAL-ACCOUNT
type: structured-behaviour
title: "A buyer can check out without an account and may create one afterwards"
status: active
illustrates:
  - UC-PURCHASE-BY-CARD
  - UC-PURCHASE-BY-BANK-TRANSFER
given:
  - "A visitor who is not signed in has an available coin in the cart"
when: "The visitor completes checkout with their email address and shipping address without signing in"
then:
  - "The order is placed and the order emails are sent"
  - "The visitor is offered to create an account with the details already given"
  - "Declining the offer leaves the order unchanged"
uses-terms:
  - TERM-ORDER
  - TERM-CUSTOMER
provenance:
  source: "Client's decision by WhatsApp, 15 Oct 2026 (question Q-C6)"
  confidence: high
  recovered-from: documentation
---

## Intent

Nobody has to register to buy; registering is an offer made after the sale.

## Boundaries

Does not assert whether a guest buyer can later see the order in an account created
afterwards, nor what the offer says.
