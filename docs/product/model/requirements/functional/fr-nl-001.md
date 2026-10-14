---
id: FR-NL-001
type: functional-requirement
title: "Subscriber management and email service"
status: active
derived-from:
  - UC-SUBSCRIBE-TO-NEW-ACQUISITIONS
  - BR-NL-001
verification:
  - scenario: "An administrator exports the subscribers to a file"
  - scenario: "A confirmed subscriber is present in the email service selected by the Client"
  - scenario-ref: SB-NEWSLETTER-CONFIRMED-BY-DOUBLE-OPT-IN
uses-terms:
  - TERM-SUBSCRIBER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.5, B.6)"
  confidence: high
  recovered-from: documentation
---

## Requirement

The Platform MUST let an administrator manage and export subscribers, and MUST integrate the
signup with one transactional or marketing email service selected by the Client.

## Rationale

The Client sends its new-acquisitions emails from a service of its choice and must be able to take its list with it.

