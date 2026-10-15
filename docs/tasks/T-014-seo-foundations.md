---
id: T-014
title: "SEO foundations"
phase: 1
status: todo
spec: outline
mode: delegate
review: standard
covers: ["B.7"]
cites: [FR-SEO-001, UC-VIEW-COIN, UC-BROWSE-CATALOGUE]
behaviours: [SB-COIN-PAGE-HAS-PRODUCT-STRUCTURED-DATA]
depends-on: [T-004, T-007]
blocked-by: []
---

# T-014 — SEO foundations

## Goal

Search engines can find and present every published coin, and the Client can edit titles and descriptions.

## Product rules

<!-- product-rules:start -->
- **FR-SEO-001** SEO and technical foundations <!-- pdac:cite id="FR-SEO-001" digest="sha256:069f81a1fcbe67780687c7f56d2106c91f25e3efdeb2f469da3b992c878f18a6" -->
- **UC-VIEW-COIN** View a coin <!-- pdac:cite id="UC-VIEW-COIN" digest="sha256:976348dbe7ade942d08a21b0ae9a0604b6cd676cb9ff4f03ba3151f988a9b2b3" -->
- **UC-BROWSE-CATALOGUE** Browse the BUY section <!-- pdac:cite id="UC-BROWSE-CATALOGUE" digest="sha256:0602793053c339add30558079c11056deee901f03d089d25e04c4d5c0c337c72" -->
- **SB-COIN-PAGE-HAS-PRODUCT-STRUCTURED-DATA** A coin page carries Product structured data <!-- pdac:cite id="SB-COIN-PAGE-HAS-PRODUCT-STRUCTURED-DATA" digest="sha256:5527a4a8b71c025682c33f39675664d77f36f45cda579949440877e702a1e526" -->
<!-- product-rules:end -->

## Scope

- Page title and meta description editable per page and per coin in the administration panel.
- schema.org Product structured data on coin pages; XML sitemap of published coins; robots.txt; image alt texts.
- End-to-end assertions for each item of FR-SEO-001 that a test can observe.

## Open decisions

- Connecting Google Search Console and Google Analytics needs accounts in the Client's name (go-live, T-027).

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
