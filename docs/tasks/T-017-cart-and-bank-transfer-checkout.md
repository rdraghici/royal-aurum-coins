---
id: T-017
title: "Cart and bank-transfer checkout"
phase: 1
status: todo
spec: outline
mode: delegate
review: strict
covers: ["B.2(b)", "B.2(c)"]
cites: [UC-PURCHASE-BY-BANK-TRANSFER, BR-ORD-001, BR-ORD-002, BR-ORD-003, BR-ORD-004, BR-ORD-005, BR-ORD-007, BR-ORD-008, BR-PRC-001]
behaviours: [SB-BANK-TRANSFER-RESERVES-COIN, SB-BANK-TRANSFER-PREFERRED-FOR-HIGH-VALUE, SB-ORDER-EMAILS-SENT]
depends-on: [T-016]
blocked-by: [Q-C6, Q-C5, Q-C1]
---

# T-017 — Cart and bank-transfer checkout

## Goal

A buyer puts a coin in the cart, checks out choosing bank transfer, and the coin is reserved until the Client confirms the payment or the period runs out.

## Product rules

<!-- product-rules:start -->
- **UC-PURCHASE-BY-BANK-TRANSFER** Buy a coin by bank transfer _(draft)_ <!-- pdac:cite id="UC-PURCHASE-BY-BANK-TRANSFER" digest="sha256:3383fdd0caad723361c7075d3db6ac7b8dbeabde29398891737683a092a99bd0" -->
- **BR-ORD-001** Payment methods for Royal Aurum's own coins <!-- pdac:cite id="BR-ORD-001" digest="sha256:e3f1571dc9ac1bb5976bc228e832d4cb88ba00ea406d36e53df5d443d6b6985c" -->
- **BR-ORD-002** A bank-transfer order reserves the coin, and an unpaid reservation is released <!-- pdac:cite id="BR-ORD-002" digest="sha256:ef3cf02cb709dfa3c3e3cf8bc3db61fa3db328a851baa933391b1d3a589cc4a8" -->
- **BR-ORD-003** Bank transfers for own coins may be paid to the Client's own bank account <!-- pdac:cite id="BR-ORD-003" digest="sha256:891c9a10a475e6444e1356ac85151b7ae5372ed494cd071fc8d99030c34b0ab5" -->
- **BR-ORD-004** Bank transfer is the preferred option for higher-value coins <!-- pdac:cite id="BR-ORD-004" digest="sha256:0493266072eb42b3f968d1c5150be692ef05a9db3f3b0a3936b6c471d9af9424" -->
- **BR-ORD-005** Order emails go to the customer and to the Client <!-- pdac:cite id="BR-ORD-005" digest="sha256:dd3833c97da51d6c235f5f392d617791ec41e5d45bdeeda4b4ea6626ee862044" -->
- **BR-ORD-007** The Client confirms receipt of a bank transfer _(draft)_ <!-- pdac:cite id="BR-ORD-007" digest="sha256:13834aba35242370155b0e749ce333882ffa6cb143254239091bfa54ffca982f" -->
- **BR-ORD-008** A coin in checkout is held briefly _(draft)_ <!-- pdac:cite id="BR-ORD-008" digest="sha256:6e108f220eeed9f78a2ba3d582dcd1af0983945808eda32b027c7ae5865b5f81" -->
- **BR-PRC-001** One price per coin, in euro <!-- pdac:cite id="BR-PRC-001" digest="sha256:650e2f252d067d8705359562f77329b2064d88bd7e1b06bfe990f6c17db5512f" -->
- **SB-BANK-TRANSFER-RESERVES-COIN** Ordering by bank transfer reserves the coin <!-- pdac:cite id="SB-BANK-TRANSFER-RESERVES-COIN" digest="sha256:14b6a44a3dfbd0d2f22e9c8342c3335d82ddbdd0e8ebdb9631d4d2ce27decd87" -->
- **SB-BANK-TRANSFER-PREFERRED-FOR-HIGH-VALUE** Bank transfer is preferred above the Client's threshold <!-- pdac:cite id="SB-BANK-TRANSFER-PREFERRED-FOR-HIGH-VALUE" digest="sha256:44c7e7a16d3433eb4351804280bbb587638ff7d7b49f161567cdc84d4f226dfe" -->
- **SB-ORDER-EMAILS-SENT** Placing an order emails the customer and the Client <!-- pdac:cite id="SB-ORDER-EMAILS-SENT" digest="sha256:8d275dff4448390888a2a5d5b7e7cf7ea812a4ae95a158dfa10a8e07068f324d" -->
<!-- product-rules:end -->

## Scope

- Cart for unique coins; checkout with shipping address and payment-method choice.
- Bank-transfer order: reservation, transfer instructions, order emails to the customer and the Client.
- Administration settings for the reservation period and the bank-transfer threshold; the Client's confirmation of receipt.
- Bank transfer presented as preferred above the threshold.

## Open decisions

- Q-C6: guest checkout or account required.
- Q-C5: the checkout hold (BR-ORD-008 is a draft).
- Q-C1: shipping countries and rates, needed to show a shipping cost.
- Q-C3, Q-C4: the default values of the threshold and the reservation period (both are settings, so they do not block).
- BR-ORD-007 (the Client confirms receipt) is a draft.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
