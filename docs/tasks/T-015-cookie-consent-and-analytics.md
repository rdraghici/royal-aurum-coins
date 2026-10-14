---
id: T-015
title: "Cookie consent and analytics"
phase: 1
status: todo
spec: outline
mode: delegate
review: standard
covers: ["B.7"]
cites: [FR-SEO-001, CON-DATA-001]
behaviours: []
depends-on: [T-002]
blocked-by: []
---

# T-015 — Cookie consent and analytics

## Goal

A first-time visitor is asked for cookie consent, and nothing non-essential runs before it is given.

## Product rules

<!-- product-rules:start -->
- **FR-SEO-001** SEO and technical foundations <!-- pdac:cite id="FR-SEO-001" digest="sha256:069f81a1fcbe67780687c7f56d2106c91f25e3efdeb2f469da3b992c878f18a6" -->
- **CON-DATA-001** Personal data: privacy by design, synthetic data in development, EEA <!-- pdac:cite id="CON-DATA-001" digest="sha256:d5c317d6e94545b15f43ad73fc9b5877e790a87e10861b8e863986a488734a4c" -->
<!-- product-rules:end -->

## Scope

- A consent banner with accept, reject and a way to change the choice later.
- Analytics loads only after consent; a test proves it does not load before.
- The Cookies page lists what is used.

## Open decisions

- The Google Analytics property does not exist yet; build against a configurable measurement ID.
- The wording of the banner and of the Cookies page is the Client's legal text (Q-C10).

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
