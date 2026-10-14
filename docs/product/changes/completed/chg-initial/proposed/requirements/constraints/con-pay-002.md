---
id: CON-PAY-002
type: constraint
title: "Marketplace funds are held by the Payment Provider, never by the Client"
status: active
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-HELD-FUNDS
  - TERM-PAYOUT
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 4.4 and Schedule 1 (C.5(a), C.5(b))"
  confidence: high
  recovered-from: documentation
---

## Constraint

Buyers pay through the Royal Aurum website, the purchase funds are held by the Payment
Provider, and the seller is paid automatically, net of the Client's commission, once the buyer
confirms delivery or the configured conditions are met. The Client at no time holds
Marketplace customer funds in its own bank account by virtue of the Platform's design.

## Rationale

Holding third-party funds would expose the Client to payment-services regulation. Keeping the
funds with a regulated Payment Provider avoids that.

## Consequences

- A Marketplace purchase can never be paid by bank transfer to the Client's own account; bank
  transfer is offered on Marketplace coins only through the Payment Provider's own methods.
- Refunds before release are executed through the Payment Provider.

