---
id: BR-ORD-007
type: business-rule
title: "The Client confirms receipt of a bank transfer"
status: draft
applies-to:
  - BC-ORDERS
uses-terms:
  - TERM-COMPLETED-PURCHASE
provenance:
  source: "Provider's proposal of 6 Oct 2026, not confirmed by the Client"
  confidence: low
  recovered-from: documentation
---

## Rule

A bank-transfer order shows the buyer the Client's bank details and a payment reference. When
the money has arrived, an administrator confirms receipt in the administration panel; the
purchase is then completed.

## Rationale

The Platform cannot see the Client's bank account, so a person has to record that the payment arrived.

## Examples

The transfer arrives on Wednesday; the Client opens the order and confirms payment; the coin is marked as sold and the buyer is informed.

## Exceptions

None proposed.

