---
id: T-020
title: "Order management and the customer's order history"
phase: 1
status: todo
spec: outline
mode: delegate
review: strict
covers: ["B.2(c)", "B.3", "B.6"]
cites: [UC-MANAGE-ORDERS, UC-MANAGE-ACCOUNT, FR-ACC-001, FR-ADM-001, BR-ORD-005, BR-ORD-009, BR-ACC-001]
behaviours: [SB-CUSTOMER-SEES-ONLY-OWN-ORDERS]
depends-on: [T-016, T-017]
blocked-by: [Q-R2]
---

# T-020 — Order management and the customer's order history

## Goal

The Client handles orders in the administration panel; a customer follows their own orders and manages their account details.

## Product rules

<!-- product-rules:start -->
- **UC-MANAGE-ORDERS** Handle orders _(draft)_ <!-- pdac:cite id="UC-MANAGE-ORDERS" digest="sha256:5463f33e87e67ac59765adbc33d970df61c7593c135c2ca05be0ed70ffc2a1f8" -->
- **UC-MANAGE-ACCOUNT** Use the account area <!-- pdac:cite id="UC-MANAGE-ACCOUNT" digest="sha256:922ab9456b300fd04dd443f93d81c57ed97dd8a710912b99ace2e640afb4803f" -->
- **FR-ACC-001** Customer accounts <!-- pdac:cite id="FR-ACC-001" digest="sha256:0d64dd617e606951e9b3a63940fd48d37541e7677270674f3629d0d72cb7107f" -->
- **FR-ADM-001** Administration panel <!-- pdac:cite id="FR-ADM-001" digest="sha256:0964f28bfb82bbed8fa734d25f662729524a50b9c8affa6d6a8f36ef3f3bac8f" -->
- **BR-ORD-005** Order emails go to the customer and to the Client <!-- pdac:cite id="BR-ORD-005" digest="sha256:dd3833c97da51d6c235f5f392d617791ec41e5d45bdeeda4b4ea6626ee862044" -->
- **BR-ORD-009** Order statuses for Royal Aurum's own coins _(draft)_ <!-- pdac:cite id="BR-ORD-009" digest="sha256:ede0805736c391d10197558b111d8dae1b0e4d2f539a0f01e9d06da903829621" -->
- **BR-ACC-001** Administrators, sellers and buyers are separated by role <!-- pdac:cite id="BR-ACC-001" digest="sha256:f394311b69575c909f8f35c17ee49c4bfe8127b8e73efa8ca57fa64e317b5e3c" -->
- **SB-CUSTOMER-SEES-ONLY-OWN-ORDERS** The account area shows the customer's own orders only <!-- pdac:cite id="SB-CUSTOMER-SEES-ONLY-OWN-ORDERS" digest="sha256:ce3dcb828d655ad2b8a5d66b106858ec44a390cf0b8c80cf4364d091991658dc" -->
<!-- product-rules:end -->

## Scope

- Administration: order list and detail, record shipment with tracking, cancel.
- Customer account area: order history, order detail, account details.
- Customers list in the administration panel.
- Emails for the status changes agreed under Q-R2.

## Open decisions

- Q-R2: the statuses and emails (BR-ORD-009 is a draft).
- Refunding a paid card order from the administration panel depends on T-018.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
