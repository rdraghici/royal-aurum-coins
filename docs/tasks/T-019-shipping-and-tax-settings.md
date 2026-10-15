---
id: T-019
title: "Shipping and tax settings"
phase: 1
status: todo
spec: outline
mode: delegate
review: standard
covers: ["B.2(d)"]
cites: [BR-ORD-006, BR-PRC-001, CON-OPS-001, CON-LOCALE-001]
behaviours: []
depends-on: [T-017]
blocked-by: []
---

# T-019 — Shipping and tax settings

## Goal

Checkout applies the shipping zones, rates and tax treatment the Client has instructed.

## Product rules

<!-- product-rules:start -->
- **BR-ORD-006** Shipping and tax follow the Client's instructions <!-- pdac:cite id="BR-ORD-006" digest="sha256:5a2fdaaedc4e8dff760083c47bef05f76a46089fbca3659517db11a86f2a7ba0" -->
- **BR-PRC-001** One price per coin, in euro <!-- pdac:cite id="BR-PRC-001" digest="sha256:650e2f252d067d8705359562f77329b2064d88bd7e1b06bfe990f6c17db5512f" -->
- **CON-OPS-001** The Client runs the Platform without technical assistance <!-- pdac:cite id="CON-OPS-001" digest="sha256:d0f77eaede141c0c8ca1ebb4e7f32e738ff89cd6cf5fefe0999c2995f4f76612" -->
- **CON-LOCALE-001** English only, prices in euro only <!-- pdac:cite id="CON-LOCALE-001" digest="sha256:c0b15034ff16df0316b5de997093ff6010a9f2cc004515b18a8d758effa648db" -->
<!-- product-rules:end -->

## Scope

- Nothing to configure for shipping rates or tax: Royal Aurum ships free and insured, and no tax is added at checkout (BR-ORD-006, BR-PRC-002 in CHG-SHOP-RULES-2).
- The served countries (BR-ORD-010); checkout refuses a destination outside them (the behaviour is claimed by T-017).
- The Shipping page states free insured shipping to Ireland and the EU (text with T-013).

## Open decisions

- Q-C1, Q-C2 and Q-C8 were closed on 15 Oct 2026 (CHG-SHOP-RULES-2). Răzvan to decide whether what remains is folded into T-017 and T-013 or stays a task of its own.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
