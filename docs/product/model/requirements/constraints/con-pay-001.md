---
id: CON-PAY-001
type: constraint
title: "All payment operations go through one internal interface"
status: active
applies-to:
  - BC-PAYMENTS
  - BC-ORDERS
  - BC-MARKETPLACE
uses-terms:
  - TERM-PAYMENT-ABSTRACTION-LAYER
  - TERM-PAYMENT-PROVIDER
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 4.3 (see also 7.4, 7.5, 7.9 and 11.5)"
  confidence: high
  recovered-from: documentation
---

## Constraint

All functionality of the Platform requiring payment operations (taking a payment, holding it,
releasing it to the seller net of the commission, and refunding it) is implemented behind a
single internal interface. The seller accounts, listing rules, approval queue, dashboards and
order flow do not depend on the identity of the Payment Provider, such that replacing one
Payment Provider with another requires re-implementation of that single layer only.

## Rationale

Approval of the Client by a payment provider is not guaranteed (precious metals are a
restricted category). Two separate decisions can each force a replacement within the Fixed
Price: if the standard merchant account for the Client's own sales is not approved, one
Alternative Card Processor is integrated for Phase 1 (Clause 7.4); if Stripe declines the
Client for the Marketplace, one Alternative Payment Provider is integrated (Clause 7.5).

## Consequences

- No code outside the payment integration may reference a specific provider's SDK, objects or
  identifiers.
- The interface exists from Phase 1: the Phase 1 card payment already goes through it, because
  the card processor itself may have to be replaced (Clause 7.4).
- The payment and payout code for the Marketplace is written only in Phase 2, from week six
  onward, when the Payment Provider's decision is known (Clause 7.4). In Phase 1 the interface
  carries card payments for Royal Aurum's own coins and nothing else.
- The interface must also allow the fallback in which seller payouts are executed manually by
  the Client (Clause 7.9), so that work delivered stays reusable if automatic payouts are
  enabled later.

