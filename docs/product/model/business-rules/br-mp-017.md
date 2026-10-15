---
id: BR-MP-017
type: business-rule
title: "Problems and returns during the confirmation period"
status: draft
applies-to:
  - BC-MARKETPLACE
uses-terms:
  - TERM-PROBLEM-REPORT
  - TERM-CONFIRMATION-PERIOD
  - TERM-PAYOUT
  - TERM-COMMISSION
provenance:
  source: "Client's decision by WhatsApp, 15 Oct 2026 (questions Q-C22 and Q-R4); Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 5 (12); Phase 2 wording pending Răzvan's confirmation"
  confidence: high
  recovered-from: documentation
---

## Rule

During the confirmation period the buyer can report a problem with the coin (not authentic,
damaged, or not as described) or request a return. A problem report holds the payout and
notifies the Client. The Client resolves it from the administration panel, either by refunding
the buyer or by releasing the payment to the seller. There is no messaging between buyer and
seller through the Platform. When the confirmation period ends with no open problem report,
the payout is made automatically, net of the commission.

## Rationale

The buyer has a fixed window to examine the coin; the Client, who curates the Marketplace,
decides on problems without the Platform becoming a dispute tool (CON-SCOPE-001); a seller is
paid without anyone acting when nothing is wrong.

## Examples

Delivery is confirmed on 5 November. On 7 November the buyer reports the coin as damaged: the
payout is held and the Client is emailed. The Client refunds the buyer; the seller is not paid.
On another order the buyer says nothing; when the period ends the seller is paid the price less
the commission.

## Exceptions

Whether a return can be requested for any reason or only for the three problem reasons is not
decided (question Q-C37). How a returned coin travels back to the seller and who pays for that
shipment have not been discussed. After a release the Platform offers no refund (question
Q-C28).
