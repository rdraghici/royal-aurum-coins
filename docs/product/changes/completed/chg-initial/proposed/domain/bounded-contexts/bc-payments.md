---
id: BC-PAYMENTS
type: bounded-context
title: "Payments"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clauses 4.3, 7.1, 7.10 and the definition of 'Payment Abstraction Layer'"
  confidence: medium
  recovered-from: documentation
---

## Responsibility

The single internal place through which the Platform talks to a Payment Provider: taking a
payment, holding it, releasing it to a seller net of the commission, and refunding it.

## Language

Payment Provider, payment, hold, release, refund, commission deducted at release. Nothing
in this language names a specific provider.

## Boundaries

Decides nothing about orders, listings or approvals; it only executes payment operations
requested by the other contexts. Bank transfers for Royal Aurum's own coins are paid to
the Client's own bank account and never pass through this context.

## External Relationships

The Payment Provider (Stripe, or an Alternative Payment Provider or Alternative Card
Processor under Clause 7 of the Agreement). BC-ORDERS and BC-MARKETPLACE are its only
callers.

