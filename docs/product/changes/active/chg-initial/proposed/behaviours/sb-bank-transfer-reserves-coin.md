---
id: SB-BANK-TRANSFER-RESERVES-COIN
type: structured-behaviour
title: "Ordering by bank transfer reserves the coin"
status: active
illustrates:
  - BR-ORD-002
given:
  - "A published coin is available for purchase"
when: "A buyer places an order for the coin choosing bank transfer"
then:
  - "The coin is reserved for that buyer"
  - "No other buyer can purchase the coin while the reservation lasts"
uses-terms:
  - TERM-RESERVATION
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(b))"
  confidence: high
  recovered-from: documentation
---

## Intent

The buyer's coin is safe while the transfer is on its way.

## Boundaries

Does not assert the length of the reservation, which the Client configures.

