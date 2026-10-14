---
id: BC-INTAKE
type: bounded-context
title: "Intake"
status: active
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.4, B.5, C.7)"
  confidence: medium
  recovered-from: documentation
---

## Responsibility

Inbound interest that is not a sale on the site: We Buy submissions, in which a person
offers a coin directly to Royal Aurum, and the new-acquisitions email signup.

## Language

We Buy submission, submitter, subscriber, consent, double opt-in, confirmation.

## Boundaries

A We Buy submission is never a Marketplace listing and never creates an order. Whether
Royal Aurum buys the offered coin is decided and settled outside the Platform.

## External Relationships

The email service selected by the Client receives confirmed subscribers. Administrators
from BC-ACCOUNTS review submissions and manage subscribers.

