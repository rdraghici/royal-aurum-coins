---
id: CHG-INITIAL
type: product-change
title: 'Initial product definition from Agreement RAC-2026-01 and Change Request CR-01'
status: proposed
base-revision: '0000000'
operations:
  add:
    - BC-CATALOGUE
    - BC-ORDERS
    - BC-PAYMENTS
    - BC-ACCOUNTS
    - BC-INTAKE
    - BC-MARKETPLACE
    - ACT-VISITOR
    - ACT-CUSTOMER
    - ACT-ADMINISTRATOR
    - ACT-SELLER
    - ACT-PAYMENT-PROVIDER
    - ACT-SCHEDULER
    - TERM-COIN
    - TERM-CATEGORY
    - TERM-CERTIFICATION
    - TERM-GRADE
    - TERM-FEATURED-SELECTION
    - TERM-SOLD-ARCHIVE
    - TERM-ORDER
    - TERM-RESERVATION
    - TERM-COMPLETED-PURCHASE
    - TERM-CUSTOMER
    - TERM-ADMINISTRATOR
    - TERM-WISHLIST
    - TERM-WE-BUY-SUBMISSION
    - TERM-SUBSCRIBER
    - TERM-PAYMENT-PROVIDER
    - TERM-PAYMENT-ABSTRACTION-LAYER
    - TERM-SELLER
    - TERM-LISTING
    - TERM-APPROVAL-QUEUE
    - TERM-HELD-FUNDS
    - TERM-PAYOUT
    - TERM-COMMISSION
    - TERM-CONFIRMATION-PERIOD
    - TERM-OFFER
    - TERM-MINIMUM-ACCEPTABLE-OFFER
    - CON-PAY-001
    - CON-PAY-002
    - CON-SEC-001
    - CON-ENV-001
    - CON-TECH-001
    - CON-DATA-001
    - CON-OPS-001
    - CON-LOCALE-001
    - CON-SCOPE-001
    - CON-ACCT-001
    - CON-DESIGN-001
    - BR-CAT-001
    - BR-CAT-002
    - BR-CAT-003
    - BR-CAT-004
    - BR-CAT-005
    - BR-CAT-006
    - BR-CAT-007
    - BR-CAT-008
    - BR-PRC-001
    - BR-ORD-001
    - BR-ORD-002
    - BR-ORD-003
    - BR-ORD-004
    - BR-ORD-005
    - BR-ORD-006
    - BR-ORD-007
    - BR-ORD-008
    - BR-ORD-009
    - BR-ACC-001
    - BR-WB-001
    - BR-WB-002
    - BR-NL-001
    - BR-MP-001
    - BR-MP-002
    - BR-MP-003
    - BR-MP-004
    - BR-MP-005
    - BR-MP-006
    - BR-MP-007
    - BR-MP-008
    - BR-MP-009
    - BR-MP-010
    - BR-MP-011
    - BR-MP-012
    - BR-MP-013
    - BR-MP-014
    - BR-MP-015
    - BR-OFR-001
    - BR-OFR-002
    - BR-OFR-003
    - BR-OFR-004
    - BR-OFR-005
    - BR-OFR-006
    - UC-BROWSE-CATALOGUE
    - UC-VIEW-COIN
    - UC-VIEW-SOLD-ARCHIVE
    - UC-REGISTER-AND-SIGN-IN
    - UC-MANAGE-ACCOUNT
    - UC-MANAGE-WISHLIST
    - UC-PURCHASE-BY-CARD
    - UC-PURCHASE-BY-BANK-TRANSFER
    - UC-RELEASE-UNPAID-RESERVATION
    - UC-SUBMIT-WE-BUY-OFFER
    - UC-SUBSCRIBE-TO-NEW-ACQUISITIONS
    - UC-MANAGE-CATALOGUE
    - UC-MANAGE-ORDERS
    - FR-PAGES-001
    - FR-ACC-001
    - FR-NL-001
    - FR-ADM-001
    - FR-SEO-001
    - SB-COIN-SOLD-ON-COMPLETED-PURCHASE
    - SB-SOLD-COIN-SHOWN-AS-SOLD
    - SB-UNPUBLISHED-COIN-HIDDEN
    - SB-FEATURED-COINS-ON-HOMEPAGE
    - SB-CLIENT-ADDS-CATEGORY
    - SB-BROWSE-BY-CATEGORY
    - SB-COIN-PAGE-SHOWS-RECORD
    - SB-COIN-PAGE-HAS-PRODUCT-STRUCTURED-DATA
    - SB-BANK-TRANSFER-RESERVES-COIN
    - SB-UNPAID-RESERVATION-RELEASED
    - SB-BANK-TRANSFER-PREFERRED-FOR-HIGH-VALUE
    - SB-ORDER-EMAILS-SENT
    - SB-CUSTOMER-CANNOT-USE-ADMIN
    - SB-CUSTOMER-RESETS-PASSWORD
    - SB-CUSTOMER-SEES-ONLY-OWN-ORDERS
    - SB-WISHLIST-KEEPS-COIN
    - SB-WE-BUY-SUBMISSION-RECORDED
    - SB-NEWSLETTER-CONFIRMED-BY-DOUBLE-OPT-IN
    - SB-NEWSLETTER-SIGNUP-NEEDS-CONSENT
  modify: []
  remove: []
---

## Problem

The product is defined today by a signed agreement, a change request agreed by email, a proposal
and a chat thread. Anyone building from those, human or agent, has to re-read and re-interpret
them each time, and nothing shows which statements the Client has agreed and which are only
suggestions waiting for an answer.

## Intended Product Outcome

One definition under `docs/product/model`, in which:

- every rule taken from the Agreement (Schedule 1, Clauses 3 to 7, Schedules 4 to 6) or from
  Change Request CR-01 is an **active** artifact that names its clause in `provenance.source`;
- every value that was only proposed, or that the Provider assumed, is a **draft** artifact, so
  that it cannot be mistaken for an agreed rule;
- every point nobody has decided is a numbered question in `docs/product/open-questions.md`,
  referenced from the artifact it affects.

Phase 1 (the curated shop) is defined down to use cases and structured behaviours. Phase 2 (the
Marketplace and Make an Offer) is defined as business rules, terms and constraints only, because
they shape the Phase 1 data model; its use cases and behaviours are added by a later Product
Change before Phase 2 starts.

## Rationale

The Agreement fixes the scope and the price. Acceptance under Clause 12 tests each Phase "against
the Specification", so the Specification has to be available in a form that tasks and tests can
cite line by line. Scope changes follow Clause 11; from now on each agreed Change Request becomes
a Product Change against this definition.

## Affected Product Areas

The whole product: catalogue, orders and checkout, payments, accounts, intake (We Buy and the
newsletter signup) and the curated marketplace.

## Open Questions

The full register, with the wording to send and what each question blocks, is
`docs/product/open-questions.md`. These questions hold an artifact in draft:

- **Q-C4** bank-transfer reservation period (the rule BR-ORD-002 is active; only the default value is open).
- **Q-C3** bank-transfer threshold (BR-ORD-004 is active; the value, and how it applies to an order with several coins, are open).
- **Q-C5** length of the checkout hold: BR-ORD-008.
- **Q-C6** guest checkout: UC-PURCHASE-BY-CARD, UC-PURCHASE-BY-BANK-TRANSFER (TERM-CUSTOMER and ACT-CUSTOMER are worded so as not to presume the answer).
- **Q-C22, Q-R4** confirmation period and what starts it: BR-MP-014.
- **Q-C34, Q-R18** We Buy account requirement and fields: UC-SUBMIT-WE-BUY-OFFER, BR-WB-002.
- **Q-R2** order statuses and emails: BR-ORD-009, UC-MANAGE-ORDERS, BR-ORD-007.
- **Q-R3** listing statuses: BR-MP-015.
- **Q-R6** filters and sorting: BR-CAT-007.
- **Q-R17** when a bank-transfer purchase counts as completed: TERM-COMPLETED-PURCHASE.
- Certification services for Royal Aurum's own coins (assumed, never discussed): BR-CAT-008.

## Product Acceptance

Approving this change means the approver has checked that:

1. each active artifact says what its cited clause says, no more;
2. the use cases, which turn the Agreement's feature lines into steps, contain no step the
   approver disagrees with (steps the Agreement does not spell out, such as how a failed sign-in
   behaves, were filled in with ordinary behaviour and are marked `confidence: medium`);
3. nothing that is still a suggestion is marked active.

The seven artifacts reported as `PRODUCT111` by `prodshape change validate CHG-INITIAL` are the
low-confidence drafts; they stay drafts until the Client or the Provider decides.

## Out of Scope

Technical design, the choice of technologies, the task breakdown and delivery status. Use cases
and structured behaviours for Phase 2. The commercial terms of the Agreement (price, instalments,
warranty, liability), which are not product definition.
