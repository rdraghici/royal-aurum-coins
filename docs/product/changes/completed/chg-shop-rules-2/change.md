---
id: CHG-SHOP-RULES-2
type: product-change
title: 'Shop rules from the Client''s decisions of 15 Oct 2026'
status: applied
base-revision: '81c7004aac6a6ad6a2662ef12236faf15b1655a8'
operations:
  add:
    - TERM-VAT-TREATMENT
    - BR-PRC-002
    - BR-ORD-010
    - SB-SHIPPING-ADDRESS-OUTSIDE-SERVED-COUNTRIES-REFUSED
    - SB-NO-VAT-ADDED-AT-CHECKOUT
    - SB-GUEST-CHECKOUT-WITH-OPTIONAL-ACCOUNT
    - TERM-PROBLEM-REPORT
    - BR-MP-016
    - BR-MP-017
    - BR-MP-018
    - SB-PAYOUT-AFTER-CONFIRMATION-PERIOD
    - SB-PROBLEM-REPORT-HOLDS-PAYOUT
  modify:
    - BR-CAT-002
    - BR-CAT-004
    - BR-PRC-001
    - BR-ORD-002
    - BR-ORD-004
    - BR-ORD-006
    - BR-ORD-008
    - UC-VIEW-COIN
    - UC-VIEW-SOLD-ARCHIVE
    - UC-MANAGE-CATALOGUE
    - UC-PURCHASE-BY-CARD
    - UC-PURCHASE-BY-BANK-TRANSFER
    - SB-COIN-PAGE-SHOWS-RECORD
    - SB-SOLD-COIN-SHOWN-AS-SOLD
    - SB-BANK-TRANSFER-PREFERRED-FOR-HIGH-VALUE
    - TERM-CUSTOMER
    - ACT-CUSTOMER
    - ACT-VISITOR
    - BR-MP-006
    - BR-MP-007
    - BR-MP-014
    - TERM-CONFIRMATION-PERIOD
    - TERM-PAYOUT
  remove: []
---

## Problem

The Client answered the Phase 1 shop questions in two batches by WhatsApp on 15 Oct 2026, and
the Provider decided Q-R14 on 14 Oct 2026. None of it is in the product definition, which
still defers to instructions "not yet received" or carries the Provider's unconfirmed
proposals:

- Shipping (Q-C1, Q-C2): which countries are served, and what shipping and insurance cost.
- Payment methods (Q-C3): whether a price threshold steers buyers to bank transfer.
- The bank-transfer reservation period (Q-C4) and the checkout hold (Q-C5): proposals only.
- Guest checkout (Q-C6): the purchase use cases, TERM-CUSTOMER and the actors call it
  undecided.
- VAT in prices (Q-C8), the units of weight and gold content (Q-C32, with Q-R14), and the
  selling price in the Sold Archive (Q-C12).
- Phase 2: what starts the Marketplace confirmation period, how long it is, how delivery is
  confirmed, what a buyer can do during it, and who sets shipping and insurance on a listing
  (Q-C22, Q-R4, Q-C24).

## Intended Product Outcome

- Royal Aurum ships its own coins free of charge and fully insured to the 27 EU member states,
  Ireland among them, and nowhere else; an address elsewhere cannot place an order
  (BR-ORD-006, BR-ORD-010).
- Every price a customer sees is the final price. The order total is the coin price and
  nothing else: no VAT, shipping, insurance or other charge is added. Each coin carries a VAT
  treatment chosen by the Client from a list the Client maintains (initially the
  investment-gold exemption, the margin scheme and standard VAT); it is shown on the coin
  page, recorded on the order and shown on the order confirmation (TERM-VAT-TREATMENT,
  BR-PRC-002).
- Card and bank transfer are both offered for every coin; there is no price threshold; bank
  transfer is recommended for higher-value purchases and never required (BR-ORD-004).
- The bank-transfer reservation period is a Client setting with a default of 5 days
  (BR-ORD-002); the checkout hold is 15 minutes (BR-ORD-008, now active).
- Anyone can buy as a guest and is offered an account afterwards; the two purchase use cases
  are active (UC-PURCHASE-BY-CARD, UC-PURCHASE-BY-BANK-TRANSFER, TERM-CUSTOMER, the actors).
- A coin record holds total weight and fine gold content as separate values, recorded as
  decided in Q-R14 and each shown in grams and troy ounces (BR-CAT-002).
- The Sold Archive shows "Sold" and never the selling price (BR-CAT-004).
- Phase 2, as drafts: the confirmation period is 7 calendar days counted from confirmed
  delivery; delivery is confirmed by the buyer or by the Client after checking the tracking;
  during the period the buyer can report a problem (not authentic, damaged, not as
  described) or request a return, which holds the payout and notifies the Client; the Client
  resolves it with a refund or a release from the administration panel; there is no
  buyer-seller messaging; with no open problem the payout is automatic after the period, net
  of commission; each seller sets the shipping charge and insurance of a listing, shown to
  the buyer before payment (BR-MP-006, BR-MP-007, BR-MP-014, BR-MP-016, BR-MP-017,
  BR-MP-018, TERM-CONFIRMATION-PERIOD, TERM-PAYOUT, TERM-PROBLEM-REPORT).

## Rationale

These are the Client's own commercial and legal decisions, which the definition always said it
would follow. Recording them unblocks the catalogue (T-004), the Sold Archive (T-010), the
cart and checkout (T-017, T-018) and the shipping and tax task (T-019), and lets the Phase 2
rules be reviewed as one coherent draft. The Phase 2 artifacts stay drafts until the Client
confirms the marketplace rules by email before Phase 2.

## Affected Product Areas

Catalogue (coin record, coin page, Sold Archive, coin administration), orders and checkout
(guest checkout, shipping address and countries, order total, payment methods, reservation
and hold, order confirmation), accounts (who a customer is), and the Marketplace (delivery
confirmation, confirmation period, problem reports, payout and refund, seller shipping).

## Open Questions

None. The earlier question on BR-MP-006, which the Agreement (Schedule 1, C.5(c)) words as a
release upon the buyer's confirmation of delivery while the 15 Oct 2026 decision makes that
confirmation start the period, is resolved: reading confirmed by Răzvan; the Phase 2 drafts
stay drafts until the Client confirms the marketplace rules by email before Phase 2. The Phase 2
points still open for the Client are recorded in `docs/product/open-questions.md` (Q-C37,
Q-C38 and Q-C39) and do not block this change.

## Product Acceptance

- A reader of BR-ORD-006 and BR-ORD-010 can say which countries are served, that shipping is
  free and insured, and that the order total is the coin price alone.
- A reader of BR-PRC-002 and TERM-VAT-TREATMENT can say that prices are final, where the VAT
  treatment appears, and that the Client extends the list alone.
- BR-ORD-004 and its behaviour say both methods are always offered and name no threshold;
  BR-ORD-002 names the 5-day default; BR-ORD-008 is active with 15 minutes.
- The purchase use cases are active, allow a guest, and end with the offer of an account;
  TERM-CUSTOMER and the actors no longer call this undecided.
- BR-CAT-002 and SB-COIN-PAGE-SHOWS-RECORD name both values and both units and no longer call
  the units undecided.
- BR-CAT-004 and SB-SOLD-COIN-SHOWN-AS-SOLD say the selling price is never shown.
- The Phase 2 drafts describe one consistent sequence: listing with the seller's shipping
  charge and insurance, payment, shipment, confirmed delivery, 7 days, problem report or
  return request, resolution by the Client, automatic payout.

## Out of Scope

How Royal Aurum sends its shipments (carrier, service, tracking), which is the Client's
operational matter; whether a sold coin reaches the Sold Archive automatically (Q-C31) and
whether Marketplace coins appear in it (Q-C33); the handling of problems after a payout
(Q-C28); return shipping logistics; the order statuses and emails of Q-R2; whether commission
applies to a seller's shipping charge (Q-C39); task files beyond the citation and blocking
updates made alongside this change; implementation, tests and deployment.
