---
id: ACT-PAYMENT-PROVIDER
type: actor
title: "Payment Provider"
status: active
actor-kind: external-system
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clauses 4.5, 7.1 to 7.7 and Schedule 1 (C.1, C.5)"
  confidence: medium
  recovered-from: documentation
---

## Purpose

The regulated external service that takes card payments and, in Phase 2, holds Marketplace
funds and pays sellers: Stripe (Stripe Connect), or an alternative provider under Clause 7
of the Agreement.

## Goals

Processes payments, holds funds, releases payouts and executes refunds as instructed.

## Responsibilities

Handles all card data in its own hosted or tokenised components. Verifies seller identity
(KYC) and onboards payout accounts. Decides at its sole discretion whether to approve the
Client.

## Boundaries

Its fees, approval decisions, outages and API changes are outside the Platform's control.

