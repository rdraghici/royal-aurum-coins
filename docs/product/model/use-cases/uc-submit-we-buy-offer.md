---
id: UC-SUBMIT-WE-BUY-OFFER
type: use-case
title: "Offer a coin to Royal Aurum"
status: draft
primary-actor: ACT-VISITOR
supporting-actors:
  - ACT-ADMINISTRATOR
bounded-context: BC-INTAKE
governed-by:
  - BR-WB-001
  - BR-WB-002
  - BR-MP-010
uses-terms:
  - TERM-WE-BUY-SUBMISSION
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.4)"
  confidence: medium
  recovered-from: documentation
---

## Goal

Offer a coin directly to Royal Aurum for it to consider buying.

## Trigger

The person opens the We Buy section of the SELL area.

## Preconditions

Whether an account is required is not yet decided.

## Main Flow

1. The person enters the coin details and the certification details.
2. The person uploads photographs of the coin.
3. The person submits the form.
4. The Platform stores the submission with the status new, emails the Client a notification and emails the submitter a confirmation.
5. An administrator reviews the submission in the administration panel and updates its status.

## Alternative Flows

None.

## Failure Conditions

A submission missing required details or photographs is not accepted, and the person is told what is missing.

## Postconditions

The submission is recorded and the Client has been notified. Whether Royal Aurum buys the coin is decided outside the Platform.

