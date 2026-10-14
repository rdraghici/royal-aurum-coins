---
id: CON-SEC-001
type: constraint
title: "Secure development baseline"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 4.5"
  confidence: high
  recovered-from: documentation
---

## Constraint

The Platform is developed in line with recognised secure development practices, including:
encrypted transport (HTTPS/TLS) for all traffic; secure password hashing; role-based access
control separating administrators, sellers and buyers; server-side validation of all inputs;
protection against common web vulnerabilities (including those listed in the OWASP Top 10);
and no storage of full payment card data on the Platform, card data being handled exclusively
by the Payment Provider's hosted or tokenised components.

## Rationale

A contractual obligation, and the minimum a shop selling high-value items must meet.

## Consequences

- Every input is validated on the server even where the browser also validates it.
- Every protected function is checked against the caller's role on the server.
- Card numbers never reach the Platform's servers, logs or database.

