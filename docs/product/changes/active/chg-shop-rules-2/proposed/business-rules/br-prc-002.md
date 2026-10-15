---
id: BR-PRC-002
type: business-rule
title: "Prices are final, and each coin carries a VAT treatment"
status: active
applies-to:
  - BC-CATALOGUE
  - BC-ORDERS
uses-terms:
  - TERM-COIN
  - TERM-ORDER
  - TERM-VAT-TREATMENT
provenance:
  source: "Client's decision by WhatsApp, 15 Oct 2026 (question Q-C8); Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.2(d)) and Clause 3.3"
  confidence: high
  recovered-from: documentation
---

## Rule

Every price shown to a customer is the final price. No VAT or other tax is added at checkout:
the order total is the price of the coins plus shipping. Each coin carries a VAT treatment,
set by the Client per coin from a list the Client maintains in the administration panel; the
initial list is the investment-gold exemption, the margin scheme and standard VAT. The
treatment is shown on the coin page, recorded on the order as it stood when the order was
placed, and shown on the order confirmation.

## Rationale

The Client's decision of 15 Oct 2026. Customers compare final prices. The VAT position of a
gold coin depends on the coin (investment gold is exempt; other coins are sold under the margin
scheme or with VAT), so it is a property of the coin, visible for the buyer's and the
accountant's benefit. The list must be extendable by the Client without the Provider
(CON-OPS-001).

## Examples

A sovereign priced at EUR 850 carries the treatment "Investment-gold exemption". Its page shows
EUR 850 and the treatment. Checkout charges EUR 850 plus shipping. The order and the order
confirmation record "Investment-gold exemption". Later the Client adds a fourth treatment in
the administration panel and assigns it to another coin.

## Exceptions

The wording shown for each treatment is the Client's. Whether a treatment can be renamed or
removed once an order records it has not been discussed. Which treatment applies to a
Marketplace listing (Phase 2) has not been discussed.
