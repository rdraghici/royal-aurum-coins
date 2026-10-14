---
id: CON-OPS-001
type: constraint
title: "The Client runs the Platform without technical assistance"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clauses 3.3 and 3.4"
  confidence: high
  recovered-from: documentation
---

## Constraint

The Client can add, edit, sell and archive coins, and manage orders, seller listings and
submissions independently through an administration panel, without technical assistance from
the Provider. The Platform is structured so that additional functionality may be added in the
future without rebuilding it.

## Rationale

After the warranty period the Provider has no obligation to maintain or operate the Platform.

## Consequences

- Every value described as configurable by the Client is changed in the administration panel,
  not in code or configuration files.
- Routine operation never requires database access or a deployment.

