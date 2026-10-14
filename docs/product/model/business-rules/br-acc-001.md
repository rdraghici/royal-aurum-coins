---
id: BR-ACC-001
type: business-rule
title: "Administrators, sellers and buyers are separated by role"
status: active
applies-to:
  - BC-ACCOUNTS
uses-terms:
  - TERM-ADMINISTRATOR
  - TERM-CUSTOMER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 4.5 and Schedule 1 (B.6)"
  confidence: high
  recovered-from: documentation
---

## Rule

Access is role-based and separates administrators, sellers and buyers. The administration
panel is available to administrators only.

## Rationale

Each kind of user must reach only what concerns them; this is also a contractual security requirement.

## Examples

A signed-in customer who enters the address of the administration panel is refused.

## Exceptions

How many administrator logins the Client needs is not yet decided (question Q-C14).

