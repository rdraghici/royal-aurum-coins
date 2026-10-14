---
id: BR-ORD-003
type: business-rule
title: "Bank transfers for own coins may be paid to the Client's own bank account"
status: active
applies-to:
  - BC-ORDERS
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 7.10"
  confidence: high
  recovered-from: documentation
---

## Rule

For Royal Aurum's own sales, bank-transfer payments may be made to the Client's own bank
account, with automatic reservation of the coin.

## Rationale

These are the Client's own sales; no third party's money is involved.

## Examples

The buyer transfers the amount to Royal Aurum's bank account using the details shown at checkout.

## Exceptions

Marketplace purchases are different: see BR-MP-011.

