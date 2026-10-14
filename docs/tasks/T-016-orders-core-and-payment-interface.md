---
id: T-016
title: "Orders core: order lifecycle, reservation, payment interface"
phase: 1
status: todo
spec: outline
mode: delegate
review: strict
covers: ["B.2(a)", "B.2(b)"]
cites: [CON-PAY-001, BR-CAT-001, BR-ORD-002, BR-ORD-009, UC-RELEASE-UNPAID-RESERVATION, CON-SEC-001]
behaviours: [SB-COIN-SOLD-ON-COMPLETED-PURCHASE, SB-UNPAID-RESERVATION-RELEASED]
depends-on: [T-004, T-006]
blocked-by: [Q-R2, Q-R17]
---

# T-016 — Orders core: order lifecycle, reservation, payment interface

## Goal

The foundation of selling: an order with a lifecycle, a coin that can be reserved, released and sold exactly once, and the single interface through which payments will go.

## Product rules

<!-- product-rules:start -->
- **CON-PAY-001** All payment operations go through one internal interface <!-- pdac:cite id="CON-PAY-001" digest="sha256:7440d14b54c1c6d3792897c4fd4ff8f769e7f1cd8b022a41485ec2da25ef4472" -->
- **BR-CAT-001** Each coin is a unique item with a stock of one <!-- pdac:cite id="BR-CAT-001" digest="sha256:7c04595c7868c98b0e44489b4519c027d3408abca67f34cf5816eef16f77a79d" -->
- **BR-ORD-002** A bank-transfer order reserves the coin, and an unpaid reservation is released <!-- pdac:cite id="BR-ORD-002" digest="sha256:ef3cf02cb709dfa3c3e3cf8bc3db61fa3db328a851baa933391b1d3a589cc4a8" -->
- **BR-ORD-009** Order statuses for Royal Aurum's own coins _(draft)_ <!-- pdac:cite id="BR-ORD-009" digest="sha256:ede0805736c391d10197558b111d8dae1b0e4d2f539a0f01e9d06da903829621" -->
- **UC-RELEASE-UNPAID-RESERVATION** Release an unpaid reservation <!-- pdac:cite id="UC-RELEASE-UNPAID-RESERVATION" digest="sha256:46ea115837d8336d25951d981ab1fe02aada8b678359850c476645a32c94568e" -->
- **CON-SEC-001** Secure development baseline <!-- pdac:cite id="CON-SEC-001" digest="sha256:4be327dea0ee6034dedf8fb59f785a98d823bbdceceae740eac87bd22b38b377" -->
- **SB-COIN-SOLD-ON-COMPLETED-PURCHASE** A coin is sold the moment its purchase completes <!-- pdac:cite id="SB-COIN-SOLD-ON-COMPLETED-PURCHASE" digest="sha256:3c4a4a67aa94497d669676089180fbd353595bfa26e9977dc622863f4d9b0b6a" -->
- **SB-UNPAID-RESERVATION-RELEASED** An unpaid reservation is released automatically <!-- pdac:cite id="SB-UNPAID-RESERVATION-RELEASED" digest="sha256:621da7414b8a4b4c465a08672877cf2c455147025625a8915c39b8e065446f56" -->
<!-- product-rules:end -->

## Scope

- The order and its status transitions; the coin's availability (available, reserved, sold).
- Reservation with a period read from the Client's settings; automatic release when it ends unpaid.
- The payment interface in the product's terms (take, hold, release net of commission, refund), with no provider behind it yet.
- Concurrency: two buyers can never both obtain the same coin; proven by a test that tries.

## Open decisions

- Q-R2: the order statuses and the emails (BR-ORD-009 is a draft proposal).
- Q-R17: when a bank-transfer purchase counts as completed (TERM-COMPLETED-PURCHASE is a draft).
- The payment interface must also fit the manual-payout fallback of Clause 7.9.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
