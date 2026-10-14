---
id: BR-ORD-009
type: business-rule
title: "Order statuses for Royal Aurum's own coins"
status: draft
applies-to:
  - BC-ORDERS
uses-terms:
  - TERM-ORDER
provenance:
  source: "Engineering proposal of 13 Oct 2026, not yet reviewed"
  confidence: low
  recovered-from: documentation
---

## Rule

An order for one of Royal Aurum's own coins is in exactly one of these statuses: Awaiting
payment (bank transfer chosen, coin reserved); Paid (card payment succeeded or bank transfer
confirmed, coin sold); Shipped (the Client has recorded shipment with tracking); Expired (the
reservation ran out unpaid, coin released); Cancelled (cancelled by the Client, with a refund
if it had been paid). Emails: order confirmation to the customer and new-order notification
to the Client when the order is placed; payment received to the customer when a bank transfer
is confirmed; shipment notice to the customer; expiry notice to the customer; cancellation
notice to the customer.

## Rationale

The Agreement requires order statuses and emails but does not list them. This is a starting proposal to be edited.

## Examples

A bank-transfer order goes from Awaiting payment to Paid when the Client confirms the transfer, then to Shipped.

## Exceptions

None proposed. Marketplace orders will need additional statuses in Phase 2.

