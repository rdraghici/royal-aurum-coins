---
id: CON-DATA-001
type: constraint
title: "Personal data: privacy by design, synthetic data in development, EEA"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 18.3 and Schedule 6 (6.4, 6.5(c), 6.5(i))"
  confidence: high
  recovered-from: documentation
---

## Constraint

The Platform is implemented with privacy by design and by default, including data minimisation
in forms and consent management for marketing emails and non-essential cookies. The Client can
respond to data subject requests (access, rectification, erasure and export of personal data)
by means of the administration panel or direct access to the database; dedicated self-service
tooling for data subjects is not included. Development uses anonymised or synthetic data where
reasonably possible. Personal data is not transferred outside the European Economic Area
unless covered by an adequacy decision or appropriate safeguards. No special categories of
personal data are intended to be processed.

## Rationale

The Client is the controller and the Provider its processor under Article 28 GDPR.

## Consequences

- Forms ask only for what the function needs.
- The Agreement asks for anonymised or synthetic data in development "where reasonably
  possible". The Provider's own engineering rule is stricter: development, automated tests
  and staging use synthetic data only, and production personal data is not copied into
  development environments or development tools.
- Seller identity documents are processed by the Payment Provider only; the Platform stores
  the verification status, not the documents.

