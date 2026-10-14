---
id: UC-RELEASE-UNPAID-RESERVATION
type: use-case
title: "Release an unpaid reservation"
status: active
primary-actor: ACT-SCHEDULER
bounded-context: BC-ORDERS
governed-by:
  - BR-ORD-002
uses-terms:
  - TERM-RESERVATION
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(b))"
  confidence: medium
  recovered-from: documentation
---

## Goal

Make a coin available again when a bank transfer for it has not arrived in time.

## Trigger

The reservation period of a bank-transfer order ends.

## Preconditions

The coin is reserved for a bank-transfer order and no payment has been recorded.

## Main Flow

1. The Platform detects that the reservation period configured by the Client has elapsed.
2. The Platform releases the reservation.
3. The coin is available for purchase again.

## Alternative Flows

None.

## Failure Conditions

If payment was recorded before the period ended, nothing is released.

## Postconditions

The coin is no longer reserved and can be bought by anyone.

