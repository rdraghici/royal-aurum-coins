---
id: BR-MP-004
type: business-rule
title: "Every listing is approved by the Client before it is visible"
status: active
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-APPROVAL-QUEUE
  - TERM-LISTING
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (C.3) and Clause 19.3"
  confidence: high
  recovered-from: documentation
---

## Rule

Every submitted listing enters an approval queue in the administration panel. The Client
approves or rejects each listing, with an optional reason communicated to the seller. A
listing becomes visible on the Platform only after approval.

## Rationale

Curation is the Marketplace's value; the Client remains solely responsible for approving each listing.

## Examples

A seller submits a listing. It is not visible to buyers. The Client approves it and it appears in the BUY section.

## Exceptions

None.

