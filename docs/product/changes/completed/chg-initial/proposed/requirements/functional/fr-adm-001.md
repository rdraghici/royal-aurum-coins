---
id: FR-ADM-001
type: functional-requirement
title: "Administration panel"
status: active
derived-from:
  - UC-MANAGE-CATALOGUE
  - CON-OPS-001
  - BR-ACC-001
verification:
  - scenario-ref: SB-UNPUBLISHED-COIN-HIDDEN
  - scenario-ref: SB-CLIENT-ADDS-CATEGORY
  - scenario-ref: SB-FEATURED-COINS-ON-HOMEPAGE
  - scenario-ref: SB-CUSTOMER-CANNOT-USE-ADMIN
  - scenario: "An administrator sees the list of customers and opens one"
  - scenario: "An administrator sees the We Buy submissions and changes the status of one"
uses-terms:
  - TERM-ADMINISTRATOR
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.6) and Clause 3.3"
  confidence: high
  recovered-from: documentation
---

## Requirement

The Platform MUST provide an administration panel in which administrators can: add, edit,
publish, unpublish, mark as sold and archive coins; manage categories and the homepage
featured selection; and manage orders, customers, We Buy submissions and subscribers. Access
MUST be role-based.

## Rationale

The Client operates the Platform alone, without technical assistance from the Provider.

