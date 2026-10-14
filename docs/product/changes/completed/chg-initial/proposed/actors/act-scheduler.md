---
id: ACT-SCHEDULER
type: actor
title: "Platform clock"
status: active
actor-kind: scheduled-process
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(b), C.5(c)); Change Request CR-01 'Make an Offer', agreed by email on 11 Oct 2026"
  confidence: medium
  recovered-from: documentation
---

## Purpose

The Platform acting by itself when a configured period of time has elapsed.

## Goals

- Release a coin whose bank-transfer reservation has run out without payment.
- In Phase 2: expire unanswered offers, end unpaid offer reservations and release held
  payments when the confirmation period ends.

## Responsibilities

Acts only on periods configured by the Client or fixed by an agreed rule.

## Boundaries

Never decides anything a rule does not state; it only applies elapsed time.

