---
id: CHG-SHOP-RULES-2
type: product-change
title: 'Shop rules from the Client''s decisions of 15 Oct 2026'
status: draft
base-revision: '81c7004aac6a6ad6a2662ef12236faf15b1655a8'
operations:
  add:
    - TERM-VAT-TREATMENT
    - BR-PRC-002
    - BR-ORD-010
    - SB-SHIPPING-ADDRESS-OUTSIDE-SERVED-COUNTRIES-REFUSED
    - SB-NO-VAT-ADDED-AT-CHECKOUT
    - TERM-PROBLEM-REPORT
    - BR-MP-016
    - BR-MP-017
    - SB-PAYOUT-AFTER-CONFIRMATION-PERIOD
    - SB-PROBLEM-REPORT-HOLDS-PAYOUT
  modify:
    - BR-CAT-002
    - BR-CAT-004
    - BR-PRC-001
    - BR-ORD-006
    - UC-VIEW-COIN
    - UC-VIEW-SOLD-ARCHIVE
    - UC-MANAGE-CATALOGUE
    - UC-PURCHASE-BY-CARD
    - UC-PURCHASE-BY-BANK-TRANSFER
    - SB-COIN-PAGE-SHOWS-RECORD
    - SB-SOLD-COIN-SHOWN-AS-SOLD
    - BR-MP-006
    - BR-MP-007
    - BR-MP-014
    - TERM-CONFIRMATION-PERIOD
    - TERM-PAYOUT
  remove: []
---

## Problem

Five points the product definition left open were decided by the Client by WhatsApp on
15 Oct 2026, and one Provider decision of 14 Oct 2026 (Q-R14) is not yet reflected:

- Which countries Royal Aurum ships to (part of Q-C1): the definition says only that shipping
  follows the Client's instructions.
- How VAT is reflected in prices (Q-C8): BR-PRC-001 and BR-ORD-006 defer to instructions
  that had not arrived.
- The units of gold content and weight (Q-C32, with Q-R14 on storage): BR-CAT-002 and the
  coin page say the units are undecided.
- Whether the Sold Archive shows the selling price (Q-C12): BR-CAT-004 says undecided.
- Phase 2: what starts the Marketplace confirmation period, how long it is, how delivery is
  confirmed and what a buyer can do during it (Q-C22, Q-R4): BR-MP-006, BR-MP-014 and
  TERM-CONFIRMATION-PERIOD carry the Provider's unconfirmed proposal.

## Intended Product Outcome

- Royal Aurum ships its own coins to Ireland and the other EU member states only; an address
  elsewhere cannot place an order (BR-ORD-010).
- Every price a customer sees is the final price. Each coin carries a VAT treatment chosen by
  the Client from a list the Client maintains (initially the investment-gold exemption, the
  margin scheme and standard VAT); it is shown on the coin page, recorded on the order and
  shown on the order confirmation; nothing is added at checkout (TERM-VAT-TREATMENT,
  BR-PRC-002).
- A coin record holds total weight and fine gold content as separate values, recorded as
  decided in Q-R14 and each shown in grams and troy ounces (BR-CAT-002).
- The Sold Archive shows "Sold" and never the selling price (BR-CAT-004).
- Phase 2, as drafts: the confirmation period is 7 calendar days counted from confirmed
  delivery; delivery is confirmed by the buyer or by the Client after checking the tracking;
  during the period the buyer can report a problem (not authentic, damaged, not as
  described) or request a return, which holds the payout and notifies the Client; the Client
  resolves it with a refund or a release from the administration panel; there is no
  buyer-seller messaging; with no open problem the payout is automatic after the period, net
  of commission (BR-MP-006, BR-MP-007, BR-MP-014, BR-MP-016, BR-MP-017,
  TERM-CONFIRMATION-PERIOD, TERM-PAYOUT, TERM-PROBLEM-REPORT).

## Rationale

These are the Client's own commercial and legal decisions, which the definition always said it
would follow. Recording them now unblocks the catalogue (T-004), the Sold Archive (T-010) and
the shipping and tax settings (T-019), and lets the Phase 2 rules be reviewed as a coherent
draft rather than as scattered proposals. The Phase 2 artifacts are authored as drafts because
Răzvan has asked to confirm their wording before they become active.

## Affected Product Areas

Catalogue (coin record, coin page, Sold Archive, coin administration), orders and checkout
(shipping address, order total, order confirmation), and the Marketplace (delivery
confirmation, confirmation period, problem reports, payout and refund).

## Open Questions

- BR-MP-006 as written in the Agreement (Schedule 1, C.5(c)) releases the payment "upon the
  buyer's confirmation of delivery, or upon expiry of a confirmation period". Under the
  15 Oct 2026 decision, confirmation of delivery starts the period and the release follows
  only after it. Does Răzvan confirm this reading, and does it need the Client's written
  confirmation under Clause 11 before the Phase 2 drafts become active?

Two further Phase 2 points are recorded as questions for the Client in
`docs/product/open-questions.md` (Q-C37 and Q-C38) and do not block this change.

## Product Acceptance

- A reader of BR-ORD-010 can say which countries are served and that the UK, Switzerland and
  Norway are not.
- A reader of BR-PRC-002 and TERM-VAT-TREATMENT can say that prices are final, where the VAT
  treatment appears, and that the Client extends the list alone.
- BR-CAT-002 and SB-COIN-PAGE-SHOWS-RECORD name both values and both units and no longer call
  the units undecided.
- BR-CAT-004 and SB-SOLD-COIN-SHOWN-AS-SOLD say the selling price is never shown.
- The Phase 2 drafts describe one consistent sequence: shipment, confirmed delivery, 7 days,
  problem report or return request, resolution by the Client, automatic payout.

## Out of Scope

Shipping methods, rates and insurance (Q-C1, Q-C2); the bank-transfer threshold and
reservation period; whether a sold coin reaches the Sold Archive automatically (Q-C31) and
whether Marketplace coins appear in it (Q-C33); the handling of problems after a payout
(Q-C28); return shipping logistics; the order statuses and emails of Q-R2; task files,
implementation, tests and deployment.
