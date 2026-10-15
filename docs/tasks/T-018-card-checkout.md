---
id: T-018
title: "Card checkout through the standard merchant account"
phase: 1
status: todo
spec: outline
mode: delegate
review: strict
covers: ["B.2(b)"]
cites: [UC-PURCHASE-BY-CARD, BR-ORD-001, CON-PAY-001, CON-SEC-001, BR-CAT-001, BR-ORD-005]
behaviours: []
depends-on: [T-016, T-017]
blocked-by: [Q-C16]
---

# T-018 — Card checkout through the standard merchant account

## Goal

A buyer pays for one of Royal Aurum's own coins by card, through the payment interface, without card data touching the Platform.

## Product rules

<!-- product-rules:start -->
- **UC-PURCHASE-BY-CARD** Buy a coin by card <!-- pdac:cite id="UC-PURCHASE-BY-CARD" digest="sha256:aadfa3555373af9a6f22e4f19a170301b5542d54f0871f2b95c7bc4177af788a" -->
- **BR-ORD-001** Payment methods for Royal Aurum's own coins <!-- pdac:cite id="BR-ORD-001" digest="sha256:e3f1571dc9ac1bb5976bc228e832d4cb88ba00ea406d36e53df5d443d6b6985c" -->
- **CON-PAY-001** All payment operations go through one internal interface <!-- pdac:cite id="CON-PAY-001" digest="sha256:7440d14b54c1c6d3792897c4fd4ff8f769e7f1cd8b022a41485ec2da25ef4472" -->
- **CON-SEC-001** Secure development baseline <!-- pdac:cite id="CON-SEC-001" digest="sha256:4be327dea0ee6034dedf8fb59f785a98d823bbdceceae740eac87bd22b38b377" -->
- **BR-CAT-001** Each coin is a unique item with a stock of one <!-- pdac:cite id="BR-CAT-001" digest="sha256:7c04595c7868c98b0e44489b4519c027d3408abca67f34cf5816eef16f77a79d" -->
- **BR-ORD-005** Order emails go to the customer and to the Client <!-- pdac:cite id="BR-ORD-005" digest="sha256:dd3833c97da51d6c235f5f392d617791ec41e5d45bdeeda4b4ea6626ee862044" -->
<!-- product-rules:end -->

## Scope

- The first implementation of the payment interface: the card processor's hosted or tokenised payment.
- Webhook handling: signature verified on the raw body, events processed once, the order completed only on confirmed payment.
- Failure and abandonment leave the coin available.
- Test mode only: no live keys anywhere in development, CI or staging.

## Open decisions

- Q-C16: developer access to the Client's Stripe account (test keys).
- Q-C17: Stripe's review. If the standard merchant account is refused, Clause 7.4 applies and this task targets an Alternative Card Processor instead.
- Card payment is never limited by price: there is no threshold, and bank transfer is only recommended (Q-C3, closed 15 Oct 2026; BR-ORD-004 in CHG-SHOP-RULES-2).

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
