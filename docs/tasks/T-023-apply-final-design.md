---
id: T-023
title: "Apply the final design"
phase: 1
status: todo
spec: outline
mode: supervised
review: standard
covers: ["B.7"]
cites: [CON-DESIGN-001, FR-SEO-001, FR-PAGES-001]
behaviours: []
depends-on: [T-009, T-013]
blocked-by: [Q-C29, Q-A6]
---

# T-023 — Apply the final design

## Goal

Every page carries the approved final design at desktop, tablet and phone widths.

## Product rules

<!-- product-rules:start -->
- **CON-DESIGN-001** Approved Design Direction <!-- pdac:cite id="CON-DESIGN-001" digest="sha256:7420ddf9013a2710102a8d515a0f8eb5853bdcbcab4156ea9a8493c6359e6d6d" -->
- **FR-SEO-001** SEO and technical foundations <!-- pdac:cite id="FR-SEO-001" digest="sha256:069f81a1fcbe67780687c7f56d2106c91f25e3efdeb2f469da3b992c878f18a6" -->
- **FR-PAGES-001** Public pages and navigation <!-- pdac:cite id="FR-PAGES-001" digest="sha256:464f069ecfdbe606c743de5b09edb1ad9605fb165c11e0694296797942b081cf" -->
<!-- product-rules:end -->

## Scope

- Design tokens, typography and components from the approved final design.
- Each page and state restyled without changing behaviour: all existing tests keep passing.
- Likely several pull requests, one per group of pages; split this task when it is specified.

## Open decisions

- Q-C29: the Client's approval of the final design (milestone M1).
- Q-A6: what the design export contains and what can be imported as it is.
- Q-A3: logo, palette and fonts.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
