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
- **BR-CAT-002** What a coin record contains <!-- pdac:cite id="BR-CAT-002" digest="sha256:514740dd3368e4840b2e3edabfee217436fe9dca9fc5973c1d9350e689d09ae4" -->
- **UC-VIEW-COIN** View a coin <!-- pdac:cite id="UC-VIEW-COIN" digest="sha256:583f36e3263c6b3ce1b888dc2a7ffa3c758164614e8e5516ece2fbd604052ced" -->
- **FR-SEO-001** SEO and technical foundations <!-- pdac:cite id="FR-SEO-001" digest="sha256:069f81a1fcbe67780687c7f56d2106c91f25e3efdeb2f469da3b992c878f18a6" -->
- **CON-TECH-001** Maintainable technology and compatible open-source licences <!-- pdac:cite id="CON-TECH-001" digest="sha256:553d57d98b3e9e0cd297ae9895f6666cff41e9fc623ed511d499221aeba97606" -->
- **SB-COIN-PAGE-SHOWS-RECORD** A coin page shows the full coin record <!-- pdac:cite id="SB-COIN-PAGE-SHOWS-RECORD" digest="sha256:cb09e9d9abfce1218af3da43d2b8156ba18b6c1afe4ca15deffc4c4f118d1813" -->
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
