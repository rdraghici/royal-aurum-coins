---
id: T-008
title: "Coin photographs: upload, storage, gallery with zoom"
phase: 1
status: todo
spec: outline
mode: delegate
review: standard
covers: ["B.1(c)", "B.7"]
cites: [BR-CAT-002, UC-VIEW-COIN, FR-SEO-001, CON-TECH-001]
behaviours: [SB-COIN-PAGE-SHOWS-RECORD]
depends-on: [T-007]
blocked-by: []
---

# T-008 — Coin photographs: upload, storage, gallery with zoom

## Goal

An administrator uploads a coin's photographs; visitors see a fast, high-resolution gallery with zoom on the coin page.

## Product rules

<!-- product-rules:start -->
- **BR-CAT-002** What a coin record contains <!-- pdac:cite id="BR-CAT-002" digest="sha256:afe171bec2c0847a8f6fb4ee441dbc0db53bc59d788e1d6be9a4d6a1f53434ef" -->
- **UC-VIEW-COIN** View a coin <!-- pdac:cite id="UC-VIEW-COIN" digest="sha256:976348dbe7ade942d08a21b0ae9a0604b6cd676cb9ff4f03ba3151f988a9b2b3" -->
- **FR-SEO-001** SEO and technical foundations <!-- pdac:cite id="FR-SEO-001" digest="sha256:069f81a1fcbe67780687c7f56d2106c91f25e3efdeb2f469da3b992c878f18a6" -->
- **CON-TECH-001** Maintainable technology and compatible open-source licences <!-- pdac:cite id="CON-TECH-001" digest="sha256:553d57d98b3e9e0cd297ae9895f6666cff41e9fc623ed511d499221aeba97606" -->
- **SB-COIN-PAGE-SHOWS-RECORD** A coin page shows the full coin record <!-- pdac:cite id="SB-COIN-PAGE-SHOWS-RECORD" digest="sha256:f1b1671a41d62055503b814fce6fad496762c8a90a0d151beeaa2260146b7476" -->
<!-- product-rules:end -->

## Scope

- Image storage behind an interface owned by us; a filesystem implementation for development.
- Upload, order and remove photographs in the administration panel; alt text per photograph.
- Responsive, optimised renditions; zoom on the coin page.
- Completes the coin page so that SB-COIN-PAGE-SHOWS-RECORD holds in full.

## Open decisions

- Q-R8: the photo specification given to the Client (size, format, number per coin).
- Q-R5: the production storage provider and its account in the Client's name. The production implementation waits for it; the interface and the development implementation do not.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
