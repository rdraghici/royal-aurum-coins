---
id: UC-MANAGE-CATALOGUE
type: use-case
title: "Manage coins, categories and the featured selection"
status: active
primary-actor: ACT-ADMINISTRATOR
bounded-context: BC-CATALOGUE
governed-by:
  - BR-CAT-001
  - BR-CAT-002
  - BR-CAT-003
  - BR-CAT-004
  - BR-CAT-005
  - BR-CAT-006
  - BR-PRC-002
  - BR-ACC-001
uses-terms:
  - TERM-COIN
  - TERM-CATEGORY
  - TERM-FEATURED-SELECTION
  - TERM-VAT-TREATMENT
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.6) and Clause 3.3; Client's decision by WhatsApp, 15 Oct 2026 (question Q-C8)"
  confidence: medium
  recovered-from: documentation
---

## Goal

Keep the public catalogue exactly as the Client wants it, without technical help.

## Trigger

An administrator opens the coins area of the administration panel.

## Preconditions

The person is signed in as an administrator.

## Main Flow

1. The administrator adds a coin with its details, its VAT treatment and its photographs, or edits an existing one.
2. The administrator publishes the coin; it appears on the public site.
3. The administrator adds or edits categories and assigns coins to them.
4. The administrator maintains the list of VAT treatments a coin can carry.
5. The administrator chooses which coins the homepage features.
6. The administrator unpublishes a coin, marks a coin as sold, or archives it.

## Alternative Flows

None.

## Failure Conditions

None identified. Which details must be filled in before a coin can be published has not been discussed.

## Postconditions

The public site reflects the administrator's changes.
