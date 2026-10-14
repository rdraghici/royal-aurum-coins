---
id: BR-MP-008
type: business-rule
title: "Commission: a default percentage with an optional override per listing"
status: active
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-COMMISSION
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (C.5(e)); Change Request CR-01 'Make an Offer', agreed by email on 11 Oct 2026"
  confidence: high
  recovered-from: documentation
---

## Rule

The Client configures commission in the administration panel as a default percentage with an
optional override per listing. The commission is applied to each sale. Where a sale follows
an accepted offer, the commission is calculated on the agreed price.

## Rationale

The Client earns from the Marketplace through commission and may agree special terms for particular coins.

## Examples

Default 8 per cent (an invented figure). One listing is overridden to 5 per cent. An offer of EUR 2,800 is accepted on it: the commission is EUR 140.

## Exceptions

The default rate is not yet decided (question Q-C21), nor who bears the Payment Provider's
fees (question Q-C27).

