---
id: UC-SUBSCRIBE-TO-NEW-ACQUISITIONS
type: use-case
title: "Sign up for new-acquisitions emails"
status: active
primary-actor: ACT-VISITOR
bounded-context: BC-INTAKE
governed-by:
  - BR-NL-001
uses-terms:
  - TERM-SUBSCRIBER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.5)"
  confidence: medium
  recovered-from: documentation
---

## Goal

Be told when Royal Aurum acquires new coins.

## Trigger

The visitor fills in the signup form.

## Preconditions

None.

## Main Flow

1. The visitor enters an email address and gives consent.
2. The Platform sends a confirmation email to that address.
3. The visitor follows the link in the email.
4. The address becomes a confirmed subscriber.

## Alternative Flows

An address that is already a confirmed subscriber is not subscribed twice.

## Failure Conditions

Without consent the signup is not accepted. An address whose link is never followed does not become a subscriber.

## Postconditions

The person is a confirmed subscriber and their consent is on record.

