---
id: BR-CAT-002
type: business-rule
title: "What a coin record contains"
status: active
applies-to:
  - BC-CATALOGUE
uses-terms:
  - TERM-COIN
  - TERM-CERTIFICATION
  - TERM-GRADE
  - TERM-CATEGORY
  - TERM-VAT-TREATMENT
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.1(c)) and Schedule 4 (4.1(b)); Client's decisions by WhatsApp, 15 Oct 2026 (questions Q-C8 and Q-C32); Provider's decision Q-R14 of 14 Oct 2026"
  confidence: high
  recovered-from: documentation
---

## Rule

Every coin carries: title, category, price, VAT treatment, certification service,
certification number, grade, total weight, fine gold content, year, mint, a detailed
description and photographs. Total weight (the gross weight of the coin) and fine gold content
are two separate values. Fine gold content is recorded in troy ounces and total weight in
grams, both as exact decimals; each is shown in grams and in troy ounces, the second unit
derived from the recorded one. The coin page presents a high-resolution image gallery with
zoom together with these details, generated from the structured record so that all coin pages
are consistent.

## Rationale

Buyers of certified coins compare exactly these facts; structured data keeps every page
uniform. Numismatic references quote fine gold content in troy ounces and weight in grams,
while buyers read either unit, so both are shown.

## Examples

Title "1908 $20 Saint-Gaudens", category US Pre-1933 Gold, VAT treatment "Investment-gold
exemption", certification service PCGS, grade MS65, a certification number, total weight
33.436 g (1.0750 oz t), fine gold content 0.9675 oz t (30.093 g), year 1908, a mint, a
description and photographs. (Illustrative values from the mock-up, not real inventory.)

## Exceptions

Whether denomination is a separate field is not yet decided (the remaining part of question
Q-R14). How many decimals each unit is shown with has not been discussed.
