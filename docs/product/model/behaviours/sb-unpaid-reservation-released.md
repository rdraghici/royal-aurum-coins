---
id: SB-UNPAID-RESERVATION-RELEASED
type: structured-behaviour
title: "An unpaid reservation is released automatically"
status: active
illustrates:
  - BR-ORD-002
  - UC-RELEASE-UNPAID-RESERVATION
given:
  - "A coin is reserved for a bank-transfer order"
  - "No payment has been received for the order"
when: "The reservation period configured by the Client ends"
then:
  - "The reservation is released without anyone acting"
  - "The coin is available for purchase again"
uses-terms:
  - TERM-RESERVATION
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(b))"
  confidence: high
  recovered-from: documentation
---

## Intent

A coin is never blocked indefinitely by an order that is not paid.

## Boundaries

Does not assert the status the order then has or which email is sent.

