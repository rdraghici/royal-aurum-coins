---
id: T-009
title: "Homepage with the featured selection"
phase: 1
status: todo
spec: outline
mode: delegate
review: standard
covers: ["B.1(a)"]
cites: [FR-PAGES-001, BR-CAT-006, CON-DESIGN-001]
behaviours: [SB-FEATURED-COINS-ON-HOMEPAGE]
depends-on: [T-007]
blocked-by: []
---

# T-009 — Homepage with the featured selection

## Goal

The homepage shows the hero with the agreed headline and the coins the Client selected.

## Product rules

<!-- product-rules:start -->
- **FR-PAGES-001** Public pages and navigation <!-- pdac:cite id="FR-PAGES-001" digest="sha256:464f069ecfdbe606c743de5b09edb1ad9605fb165c11e0694296797942b081cf" -->
- **BR-CAT-006** The Client chooses the homepage featured coins <!-- pdac:cite id="BR-CAT-006" digest="sha256:ae31d70de94a754247c2282975d55e82f6f8834e98e28649693370ba94f30b7b" -->
- **CON-DESIGN-001** Approved Design Direction <!-- pdac:cite id="CON-DESIGN-001" digest="sha256:7420ddf9013a2710102a8d515a0f8eb5853bdcbcab4156ea9a8493c6359e6d6d" -->
- **SB-FEATURED-COINS-ON-HOMEPAGE** The homepage shows the coins the Client selected <!-- pdac:cite id="SB-FEATURED-COINS-ON-HOMEPAGE" digest="sha256:e7de26a53856520119609e4818828a955a7ed6253cb34f7efdee66e6c91fb146" -->
<!-- product-rules:end -->

## Scope

- Homepage structure from the Approved Design Direction: hero, featured coins, link to the collection, seller call-to-action, newsletter signup.
- The featured section shows exactly the coins selected in the administration panel.
- Structure and content now; final visuals with T-023.

## Open decisions

- Q-A4: where the tagline sits (logo, hero or both).
- What the featured section shows when a featured coin has been sold or unpublished (never discussed).

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
