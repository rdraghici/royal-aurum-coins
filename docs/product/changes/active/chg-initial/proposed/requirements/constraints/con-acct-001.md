---
id: CON-ACCT-001
type: constraint
title: "Third-party accounts belong to the Client"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clauses 8.1(d) and 16.2"
  confidence: high
  recovered-from: documentation
---

## Constraint

All accounts required for the operation of the Platform (including hosting, domain, Payment
Provider, transactional email and analytics accounts) are opened and held in the Client's
name, with the Client as the contractual party and owner; the Provider is granted delegated
access as needed.

## Rationale

The Client owns and pays for its infrastructure and can continue without the Provider.

## Consequences

- The Platform is never deployed to, or dependent on, an account owned by the Provider.
- All credentials and access rights the Provider holds for the Client's accounts are
  transferred to the Client upon full payment (Clause 14.6).

