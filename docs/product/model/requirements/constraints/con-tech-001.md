---
id: CON-TECH-001
type: constraint
title: "Maintainable technology and compatible open-source licences"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clauses 4.1, 4.2 and 15.1"
  confidence: high
  recovered-from: documentation
---

## Constraint

The Platform is a custom web application, not a hosted website builder or e-commerce SaaS
platform. It uses current, widely supported and well-documented technologies and no
proprietary technology that would prevent another competent developer from maintaining or
extending it. Open-source components are used only under licences that permit commercial use
and do not require disclosure of the Client's proprietary source code; in particular no
component under a licence with network-copyleft effects, such as AGPL, is used without the
Client's prior written consent. The principal components and their licences are listed in the
technical documentation.

## Rationale

The Client receives the source code on full payment and must be able to hand it to any developer.

## Consequences

- Every new dependency is checked for its licence before it is added.
- The list of principal components and licences is kept current as dependencies change.

