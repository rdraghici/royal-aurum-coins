---
id: SB-CUSTOMER-RESETS-PASSWORD
type: structured-behaviour
title: "A customer who forgot their password can set a new one"
status: active
illustrates:
  - UC-REGISTER-AND-SIGN-IN
given:
  - "A registered customer has forgotten their password"
when: "The customer completes the password reset from the email they requested"
then:
  - "The customer can sign in with the new password"
  - "The previous password no longer works"
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.3)"
  confidence: high
  recovered-from: documentation
---

## Intent

Losing a password never needs the Client's or the Provider's help.

## Boundaries

None.

