---
id: BR-ORD-004
type: business-rule
title: "Bank transfer is the preferred option for higher-value coins"
status: active
applies-to:
  - BC-ORDERS
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 7.10 and Schedule 4 (4.1(g))"
  confidence: high
  recovered-from: documentation
---

## Rule

Bank transfer is presented as the preferred payment option for higher-value coins. A coin
counts as higher-value when its price is at or above a threshold supplied by the Client.

## Rationale

Card processors may apply limits per transaction; the Agreement makes bank transfer the preferred route for higher-value coins.

## Examples

With the threshold at EUR 3,000 (the Provider's suggestion; not yet confirmed, question Q-C3),
a buyer of a EUR 5,950 coin sees bank transfer presented first as the preferred way to pay.

## Exceptions

The Agreement says preferred, not mandatory: it does not remove card payment at or above the
threshold. "At or above" is the reading used here; the Agreement speaks only of "higher-value
coins". How the rule applies to an order holding several coins has not been discussed
(question Q-C3).

