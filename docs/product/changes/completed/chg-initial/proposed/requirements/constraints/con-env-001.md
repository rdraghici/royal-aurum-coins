---
id: CON-ENV-001
type: constraint
title: "Staging before production; backups and HTTPS"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 4.6 and Schedule 1 (B.8)"
  confidence: high
  recovered-from: documentation
---

## Constraint

A staging (test) environment is maintained on which each Deliverable is made available to the
Client for review and Acceptance before Go-Live on the production environment. The
infrastructure comprises staging and production environments, automated backups, HTTPS and
deployment to the Client's domain.

## Rationale

Acceptance testing under Clause 12 takes place on staging; the Client reviews work in progress there.

## Consequences

- Nothing reaches production without having been available on staging first.
- Provider's engineering choice, not stated in the Agreement: staging works with test-mode
  payment credentials only.

