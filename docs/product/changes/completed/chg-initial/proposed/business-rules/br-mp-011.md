---
id: BR-MP-011
type: business-rule
title: "Marketplace bank transfers go only through the Payment Provider"
status: active
applies-to:
  - BC-MARKETPLACE
  - BC-PAYMENTS
uses-terms:
  - TERM-PAYMENT-PROVIDER
  - TERM-HELD-FUNDS
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 7.10"
  confidence: high
  recovered-from: documentation
---

## Rule

For Marketplace transactions, bank transfer is offered only through the bank-transfer methods
supported by the Payment Provider, so that the Client never holds Marketplace customer
funds.

## Rationale

A transfer to the Client's own account would make the Client hold a third party's money.

## Examples

A buyer of a Marketplace coin who prefers bank transfer is given the Payment Provider's transfer instructions, not Royal Aurum's bank details.

## Exceptions

Not discussed: what is offered if the Payment Provider supports no bank-transfer method for the Client.

