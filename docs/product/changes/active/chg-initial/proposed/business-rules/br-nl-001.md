---
id: BR-NL-001
type: business-rule
title: "Newsletter signup needs consent and double opt-in"
status: active
applies-to:
  - BC-INTAKE
uses-terms:
  - TERM-SUBSCRIBER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.5)"
  confidence: high
  recovered-from: documentation
---

## Rule

The new-acquisitions email signup captures the person's consent and uses double opt-in: an
address becomes a subscriber only after the person has confirmed it through the confirmation
email.

## Rationale

Marketing email requires demonstrable consent; double opt-in also keeps mistyped and abusive addresses out.

## Examples

A visitor enters an address and ticks the consent box. A confirmation email is sent. The address becomes a subscriber when the link in it is followed.

## Exceptions

None.

