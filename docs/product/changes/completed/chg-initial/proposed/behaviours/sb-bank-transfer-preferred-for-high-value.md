---
id: SB-BANK-TRANSFER-PREFERRED-FOR-HIGH-VALUE
type: structured-behaviour
title: "Bank transfer is preferred above the Client's threshold"
status: active
illustrates:
  - BR-ORD-004
given:
  - "A coin's price is at or above the bank-transfer threshold supplied by the Client"
when: "A buyer reaches the choice of payment method for that coin"
then:
  - "Bank transfer is presented as the preferred option"
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 7.10 and Schedule 4 (4.1(g))"
  confidence: high
  recovered-from: documentation
---

## Intent

Higher-value purchases are steered towards bank transfer.

## Boundaries

Does not assert that card payment is unavailable at or above the threshold, nor the threshold's value, nor how an order holding several coins is treated.

