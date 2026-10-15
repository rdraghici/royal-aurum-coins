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
behaviours: [SB-BANK-TRANSFER-RESERVES-COIN, SB-BANK-TRANSFER-PREFERRED-FOR-HIGH-VALUE, SB-ORDER-EMAILS-SENT, SB-SHIPPING-ADDRESS-OUTSIDE-SERVED-COUNTRIES-REFUSED, SB-NO-VAT-ADDED-AT-CHECKOUT, SB-GUEST-CHECKOUT-WITH-OPTIONAL-ACCOUNT]
depends-on: [T-016]
blocked-by: []
---

# T-017 — Cart and bank-transfer checkout

## Goal

A buyer puts a coin in the cart, checks out choosing bank transfer, and the coin is reserved until the Client confirms the payment or the period runs out.

## Product rules

<!-- product-rules:start -->
- **UC-PURCHASE-BY-BANK-TRANSFER** Buy a coin by bank transfer <!-- pdac:cite id="UC-PURCHASE-BY-BANK-TRANSFER" digest="sha256:5118cdfc63be1bda289bdaa051e37e84662b9dc90a4c02aaf3f0acfc1b718707" -->
- **BR-ORD-001** Payment methods for Royal Aurum's own coins <!-- pdac:cite id="BR-ORD-001" digest="sha256:e3f1571dc9ac1bb5976bc228e832d4cb88ba00ea406d36e53df5d443d6b6985c" -->
- **BR-ORD-002** A bank-transfer order reserves the coin, and an unpaid reservation is released <!-- pdac:cite id="BR-ORD-002" digest="sha256:20c26d21e646b2573fdb99e1c35cea8904433e2cbb1209bbd43707b5c76d9af6" -->
- **BR-ORD-003** Bank transfers for own coins may be paid to the Client's own bank account <!-- pdac:cite id="BR-ORD-003" digest="sha256:891c9a10a475e6444e1356ac85151b7ae5372ed494cd071fc8d99030c34b0ab5" -->
- **BR-ORD-004** Bank transfer is recommended for higher-value purchases, never required <!-- pdac:cite id="BR-ORD-004" digest="sha256:ce7f7ab6675e6585d332c2bde4061937596fc5d64f27e50b3c951fab1c8be791" -->
- **BR-ORD-005** Order emails go to the customer and to the Client <!-- pdac:cite id="BR-ORD-005" digest="sha256:dd3833c97da51d6c235f5f392d617791ec41e5d45bdeeda4b4ea6626ee862044" -->
- **BR-ORD-007** The Client confirms receipt of a bank transfer _(draft)_ <!-- pdac:cite id="BR-ORD-007" digest="sha256:13834aba35242370155b0e749ce333882ffa6cb143254239091bfa54ffca982f" -->
- **BR-ORD-008** A coin in checkout is held briefly <!-- pdac:cite id="BR-ORD-008" digest="sha256:b749286eb5f275d309e1215e29a92bb5c04704630bd1ce729ec390a927a8a412" -->
- **BR-PRC-001** One price per coin, in euro <!-- pdac:cite id="BR-PRC-001" digest="sha256:b626906df4b4a15f057bb6e47c345a4586f659e58d23fbfc93cd4564677a85a0" -->
- **SB-BANK-TRANSFER-RESERVES-COIN** Ordering by bank transfer reserves the coin <!-- pdac:cite id="SB-BANK-TRANSFER-RESERVES-COIN" digest="sha256:14b6a44a3dfbd0d2f22e9c8342c3335d82ddbdd0e8ebdb9631d4d2ce27decd87" -->
- **SB-BANK-TRANSFER-PREFERRED-FOR-HIGH-VALUE** Bank transfer is recommended for higher-value purchases, and both methods are always offered <!-- pdac:cite id="SB-BANK-TRANSFER-PREFERRED-FOR-HIGH-VALUE" digest="sha256:7705896d0359eb8ef85cbdf30e7d6027bf3cc8f8c28f4808476b2daa2f049d8d" -->
- **SB-ORDER-EMAILS-SENT** Placing an order emails the customer and the Client <!-- pdac:cite id="SB-ORDER-EMAILS-SENT" digest="sha256:8d275dff4448390888a2a5d5b7e7cf7ea812a4ae95a158dfa10a8e07068f324d" -->
- **SB-SHIPPING-ADDRESS-OUTSIDE-SERVED-COUNTRIES-REFUSED** A shipping address outside Ireland and the EU cannot place an order <!-- pdac:cite id="SB-SHIPPING-ADDRESS-OUTSIDE-SERVED-COUNTRIES-REFUSED" digest="sha256:6f68b6699e53c7ef7bc3ccd56f0f4423df0d0d4f9ee6c7ee30258fe6a3777111" -->
- **SB-NO-VAT-ADDED-AT-CHECKOUT** The order total is the coin price and nothing else, and the VAT treatment travels with the order <!-- pdac:cite id="SB-NO-VAT-ADDED-AT-CHECKOUT" digest="sha256:fa3ea4a7d4eaeb92f97f7f8dd00866dd06576e463041a783b236a3afc4af41da" -->
- **SB-GUEST-CHECKOUT-WITH-OPTIONAL-ACCOUNT** A buyer can check out without an account and may create one afterwards <!-- pdac:cite id="SB-GUEST-CHECKOUT-WITH-OPTIONAL-ACCOUNT" digest="sha256:17116144a1969a1f329393656b30044cc71c1e49c0738710318bc5df531f55f6" -->
<!-- product-rules:end -->

## Scope

- Cart for unique coins; guest checkout with email address, a shipping address in a served country and the choice of payment method; the offer of an account afterwards.
- The order total is the coin price and nothing else; the coin's VAT treatment is recorded on the order and shown on the confirmation.
- Bank-transfer order: reservation (default 5 days), transfer instructions, order emails to the customer and the Client.
- Administration setting for the reservation period; the Client's confirmation of receipt.
- Both payment methods offered for every coin, bank transfer shown as recommended for higher-value purchases.

## Open decisions

- Q-C1 to Q-C6 were closed on 15 Oct 2026 and are carried by CHG-SHOP-RULES-2; cite the applied rules when expanding this task.
- BR-ORD-007 (the Client confirms receipt) is a draft.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
