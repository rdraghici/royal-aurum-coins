---
id: SB-NEWSLETTER-CONFIRMED-BY-DOUBLE-OPT-IN
type: structured-behaviour
title: "A signup becomes a subscriber only after confirmation"
status: active
illustrates:
  - BR-NL-001
  - UC-SUBSCRIBE-TO-NEW-ACQUISITIONS
given:
  - "A visitor has submitted the signup form with an email address and consent"
when: "The visitor follows the confirmation link sent to that address"
then:
  - "The address becomes a confirmed subscriber"
uses-terms:
  - TERM-SUBSCRIBER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.5)"
  confidence: high
  recovered-from: documentation
---

## Intent

Only people who control the address and confirmed their wish are subscribed.

## Boundaries

Does not assert how long the confirmation link remains valid.

