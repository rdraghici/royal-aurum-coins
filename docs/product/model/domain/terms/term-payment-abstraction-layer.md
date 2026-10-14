---
id: TERM-PAYMENT-ABSTRACTION-LAYER
type: domain-term
title: "Payment Abstraction Layer"
status: active
defined-in: BC-PAYMENTS
uses-terms:
  - TERM-PAYMENT-PROVIDER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 1.1 (definition) and Clause 4.3"
  confidence: high
  recovered-from: documentation
---

## Definition

The single internal software interface through which all Platform functions interact with the Payment Provider: taking a payment, holding it, releasing it to the seller net of commission, and refunding it.

## Distinguish From

Not a second payment system: it adds no payment capability of its own.

## Usage

Every payment operation goes through it, so that replacing the Payment Provider means re-implementing this layer only.

