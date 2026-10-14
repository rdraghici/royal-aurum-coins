---
id: UC-MANAGE-ACCOUNT
type: use-case
title: "Use the account area"
status: active
primary-actor: ACT-CUSTOMER
bounded-context: BC-ACCOUNTS
governed-by:
  - BR-ACC-001
uses-terms:
  - TERM-CUSTOMER
  - TERM-ORDER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.3)"
  confidence: medium
  recovered-from: documentation
---

## Goal

Follow one's orders and keep one's details current.

## Trigger

The signed-in customer opens their account area.

## Preconditions

The customer is signed in.

## Main Flow

1. The Platform shows the customer's order history.
2. The customer opens an order and sees its details and status.
3. The customer views and updates their account details.

## Alternative Flows

None.

## Failure Conditions

A person who is not signed in is asked to sign in first.

## Postconditions

The customer has seen their own orders and their details are up to date.

