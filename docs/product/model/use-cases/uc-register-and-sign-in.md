---
id: UC-REGISTER-AND-SIGN-IN
type: use-case
title: "Register, sign in and reset a password"
status: active
primary-actor: ACT-VISITOR
bounded-context: BC-ACCOUNTS
governed-by:
  - BR-ACC-001
uses-terms:
  - TERM-CUSTOMER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.3) and Clause 4.5"
  confidence: medium
  recovered-from: documentation
---

## Goal

Obtain and use a personal customer account.

## Trigger

The visitor chooses to register or to sign in.

## Preconditions

None.

## Main Flow

1. The visitor registers with their details and a password.
2. On a later visit the visitor signs in with their credentials and is recognised as a customer.
3. The customer signs out.

## Alternative Flows

A customer who has forgotten their password requests a reset, receives an email, sets a new
password and signs in with it.

## Failure Conditions

Wrong credentials are refused without revealing whether the email address is registered.
Registration with an address that already has an account does not create a second account.

## Postconditions

The person has an account and can sign in to it.

