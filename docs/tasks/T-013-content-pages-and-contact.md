---
id: T-013
title: "Content pages, SELL area and contact form"
phase: 1
status: todo
spec: outline
mode: delegate
review: standard
covers: ["B.1(e)", "B.1(f)"]
cites: [FR-PAGES-001, CON-LOCALE-001, CON-DATA-001]
behaviours: []
depends-on: [T-002]
blocked-by: []
---

# T-013 — Content pages, SELL area and contact form

## Goal

The site has its About, Contact, FAQ, Shipping, Returns, Terms, Privacy and Cookies pages, the SELL area, and a working contact form.

## Product rules

<!-- product-rules:start -->
- **FR-PAGES-001** Public pages and navigation <!-- pdac:cite id="FR-PAGES-001" digest="sha256:464f069ecfdbe606c743de5b09edb1ad9605fb165c11e0694296797942b081cf" -->
- **CON-LOCALE-001** English only, prices in euro only <!-- pdac:cite id="CON-LOCALE-001" digest="sha256:c0b15034ff16df0316b5de997093ff6010a9f2cc004515b18a8d758effa648db" -->
- **CON-DATA-001** Personal data: privacy by design, synthetic data in development, EEA <!-- pdac:cite id="CON-DATA-001" digest="sha256:d5c317d6e94545b15f43ad73fc9b5877e790a87e10861b8e863986a488734a4c" -->
<!-- product-rules:end -->

## Scope

- The eight content pages, with placeholder text clearly marked until the Client's texts arrive.
- The SELL area with the We Buy entry and the entry point to the Marketplace (a holding page until Phase 2).
- Contact form: server-validated, delivered to the Client by email.
- Site navigation and footer as in the Approved Design Direction.

## Open decisions

- Q-C9, Q-C10, Q-C7, Q-A7: the texts themselves are Client Materials and do not block building the pages.
- Q-C15: which social links the footer carries.
- How the Client edits these texts later (in the administration panel, or by the Provider) was never discussed; the Agreement says only 'populated with texts supplied by the Client'.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
