---
id: BR-ORD-001
type: business-rule
title: "Payment methods for Royal Aurum's own coins"
status: active
applies-to:
  - BC-ORDERS
uses-terms:
  - TERM-PAYMENT-PROVIDER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(b)) and Clauses 7.4, 7.10"
  confidence: high
  recovered-from: documentation
---

## Rule

Royal Aurum's own coins can be paid for by card, through a standard merchant account, and by
bank transfer. Bank transfer remains available in all cases.

## Rationale

Card is convenient; bank transfer suits high amounts and does not depend on a card processor's approval.

## Examples

At checkout a buyer chooses between paying by card and paying by bank transfer.

## Exceptions

If the standard merchant account is not approved for the Client, one Alternative Card
Processor is used instead (Clause 7.4); until one is available, bank transfer is the only
method.

