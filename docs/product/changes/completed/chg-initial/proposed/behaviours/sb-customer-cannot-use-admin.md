---
id: SB-CUSTOMER-CANNOT-USE-ADMIN
type: structured-behaviour
title: "A customer is refused the administration panel"
status: active
illustrates:
  - BR-ACC-001
given:
  - "A signed-in customer who is not an administrator"
when: "The customer tries to open the administration panel"
then:
  - "Access is refused"
  - "No administration data is shown"
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 4.5 and Schedule 1 (B.6)"
  confidence: high
  recovered-from: documentation
---

## Intent

Roles are enforced, not merely hidden in the navigation.

## Boundaries

None.

