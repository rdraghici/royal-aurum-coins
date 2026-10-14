---
id: T-024
title: "Staging and production environments"
phase: 1
status: todo
spec: outline
mode: supervised
review: strict
covers: ["B.8"]
cites: [CON-ENV-001, CON-ACCT-001, CON-SEC-001, CON-DATA-001]
behaviours: []
depends-on: [T-003]
blocked-by: [Q-R5]
---

# T-024 — Staging and production environments

## Goal

The Client reviews work on a staging site, and production is ready for go-live, both on infrastructure the Client owns.

## Product rules

<!-- product-rules:start -->
- **CON-ENV-001** Staging before production; backups and HTTPS <!-- pdac:cite id="CON-ENV-001" digest="sha256:694d178d1a3e39835300834ba08a0eb4eaa118294500832a9c97746e027d9908" -->
- **CON-ACCT-001** Third-party accounts belong to the Client <!-- pdac:cite id="CON-ACCT-001" digest="sha256:4f9e664407656d4d94a205c34cb7499bb0424cf634f2783d0eb42f83d59813da" -->
- **CON-SEC-001** Secure development baseline <!-- pdac:cite id="CON-SEC-001" digest="sha256:4be327dea0ee6034dedf8fb59f785a98d823bbdceceae740eac87bd22b38b377" -->
- **CON-DATA-001** Personal data: privacy by design, synthetic data in development, EEA <!-- pdac:cite id="CON-DATA-001" digest="sha256:d5c317d6e94545b15f43ad73fc9b5877e790a87e10861b8e863986a488734a4c" -->
<!-- product-rules:end -->

## Scope

- Staging and production in accounts held by the Client; HTTPS; deployment from `main`.
- Automated, tested database backups with a written restore procedure.
- Staging uses synthetic data and test-mode payment credentials only.
- The deployment and backup procedures the Agreement requires at handover.

## Open decisions

- Q-R5: the hosting, database, storage and email providers, and creation of the accounts in the Client's name.
- Agents do not hold production credentials: deployments run from CI, and operations on servers are done by Răzvan.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
