---
id: BR-MP-003
type: business-rule
title: "A listing cannot be submitted with required information missing"
status: active
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-LISTING
  - TERM-GRADE
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (C.2(c), C.2(d))"
  confidence: high
  recovered-from: documentation
---

## Rule

Certification number, grade, coin details, price and photographs are mandatory on a listing.
A listing with missing required information cannot be submitted for review. The validation is
enforced both in the browser and on the server.

## Rationale

In the Client's words: "If the required information is missing, the listing cannot even be submitted for review."

## Examples

A seller who has not entered the certification number cannot send the listing for review, whatever tool they use to try.

## Exceptions

Which coin details are required, the minimum number of photographs, and whether the
certification number is checked for format or duplicates are not yet decided (the Provider's
proposal of 6 Oct 2026 suggested year, mint, denomination, fine gold content, weight and at
least two photographs).

