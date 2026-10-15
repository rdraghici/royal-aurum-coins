---
id: T-010
title: "Sold coins and the Sold Archive"
phase: 1
status: todo
spec: outline
mode: delegate
review: standard
covers: ["B.1(d)", "B.2(a)"]
cites: [UC-VIEW-SOLD-ARCHIVE, BR-CAT-004, BR-CAT-001]
behaviours: [SB-SOLD-COIN-SHOWN-AS-SOLD]
depends-on: [T-007]
blocked-by: [Q-C31, Q-C12]
---

# T-010 — Sold coins and the Sold Archive

## Goal

Sold coins remain visible in the Sold Archive, marked Sold, and can never be bought.

## Product rules

<!-- product-rules:start -->
- **UC-VIEW-SOLD-ARCHIVE** Look through the Sold Archive <!-- pdac:cite id="UC-VIEW-SOLD-ARCHIVE" digest="sha256:656ee527edf582fed05dab6b553d5dc2dc49c2e620e510bdec272edcb5596b3b" -->
- **BR-CAT-004** Sold coins are shown in the Sold Archive and cannot be bought <!-- pdac:cite id="BR-CAT-004" digest="sha256:f4181658a4eb475d495a56a894e398d9ed3c80bd3fdcdfe208d03537216c9f69" -->
- **BR-CAT-001** Each coin is a unique item with a stock of one <!-- pdac:cite id="BR-CAT-001" digest="sha256:7c04595c7868c98b0e44489b4519c027d3408abca67f34cf5816eef16f77a79d" -->
- **SB-SOLD-COIN-SHOWN-AS-SOLD** A coin in the Sold Archive is labelled Sold, without its price, and cannot be bought <!-- pdac:cite id="SB-SOLD-COIN-SHOWN-AS-SOLD" digest="sha256:11c79cff9e8e894d364f2ead2d136c251da07e8e2eeb6e8436e01acb3cc1180d" -->
<!-- product-rules:end -->

## Scope

- The Sold Archive page and the sold state of a coin page.
- The administrator's 'mark as sold' and 'archive' actions take public effect.
- No purchase action anywhere for a sold coin.

## Open decisions

- Q-C31: whether a sold coin enters the Sold Archive automatically or when the Client moves it.
- Q-C12: whether the sale price is shown.
- Q-C33 (Phase 2): whether Marketplace coins appear in it.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
