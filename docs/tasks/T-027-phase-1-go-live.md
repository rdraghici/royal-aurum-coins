---
id: T-027
title: "Phase 1 go-live"
phase: 1
status: todo
spec: outline
mode: supervised
review: strict
covers: ["B.7", "B.8"]
cites: [CON-ENV-001, CON-ACCT-001, FR-SEO-001, FR-PAGES-001]
behaviours: []
depends-on: [T-024, T-018, T-020, T-023]
blocked-by: [Q-C18, Q-C20, Q-C10, Q-R10]
---

# T-027 — Phase 1 go-live

## Goal

The shop is live on the Client's domain after acceptance testing on staging.

## Product rules

<!-- product-rules:start -->
- **CON-ENV-001** Staging before production; backups and HTTPS <!-- pdac:cite id="CON-ENV-001" digest="sha256:694d178d1a3e39835300834ba08a0eb4eaa118294500832a9c97746e027d9908" -->
- **CON-ACCT-001** Third-party accounts belong to the Client <!-- pdac:cite id="CON-ACCT-001" digest="sha256:4f9e664407656d4d94a205c34cb7499bb0424cf634f2783d0eb42f83d59813da" -->
- **FR-SEO-001** SEO and technical foundations <!-- pdac:cite id="FR-SEO-001" digest="sha256:069f81a1fcbe67780687c7f56d2106c91f25e3efdeb2f469da3b992c878f18a6" -->
- **FR-PAGES-001** Public pages and navigation <!-- pdac:cite id="FR-PAGES-001" digest="sha256:464f069ecfdbe606c743de5b09edb1ad9605fb165c11e0694296797942b081cf" -->
<!-- product-rules:end -->

## Scope

- Deployment to the Client's domain; the .ie domain redirecting to the .com.
- Google Search Console and Google Analytics connected, in the Client's accounts.
- Live payment credentials set by Răzvan, never by an agent.
- A go-live checklist and a smoke test of the live site.

## Open decisions

- Q-C18, Q-C20, Q-R10: domain and DNS follow-ups.
- Q-C10: the Client's legal texts must be on the site before it takes orders.
- Go-live follows the acceptance procedure of Clause 12.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
