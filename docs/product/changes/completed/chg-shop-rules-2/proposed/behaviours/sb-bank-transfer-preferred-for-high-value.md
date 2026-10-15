---
id: SB-BANK-TRANSFER-PREFERRED-FOR-HIGH-VALUE
type: structured-behaviour
title: "Bank transfer is recommended for higher-value purchases, and both methods are always offered"
status: active
illustrates:
  - BR-ORD-004
given:
  - "A buyer has a coin of any price in checkout"
when: "The buyer reaches the choice of payment method"
then:
  - "Card and bank transfer are both offered"
  - "Bank transfer is marked as the recommended option for higher-value purchases"
  - "The buyer can choose either method"
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Clause 7.10 and Schedule 4 (4.1(g)); Client's decision by WhatsApp, 15 Oct 2026 (question Q-C3)"
  confidence: high
  recovered-from: documentation
---

## Intent

Higher-value purchases are steered towards bank transfer without ever refusing a card.

## Boundaries

Does not assert a price threshold: there is none. Does not assert the wording of the
recommendation.
