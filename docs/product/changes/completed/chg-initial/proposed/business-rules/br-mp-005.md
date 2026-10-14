---
id: BR-MP-005
type: business-rule
title: "What a seller can change on an approved listing"
status: active
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-LISTING
  - TERM-APPROVAL-QUEUE
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (C.3, C.4)"
  confidence: high
  recovered-from: documentation
---

## Rule

Once a listing is approved, the seller manages it and the sale through the seller dashboard,
including price updates, withdrawal of the listing and marking shipment with tracking
information. Material changes by the seller to the certification data of an approved listing
return it to the approval queue.

## Rationale

Sellers must be able to react to the market without the Client's help, but must not swap the coin that was approved.

## Examples

A seller lowers the price of an approved listing: it stays visible. The seller changes the
certification number: the listing goes back to the approval queue.

## Exceptions

Which changes count as material beyond the certification number and grade has not been defined.

