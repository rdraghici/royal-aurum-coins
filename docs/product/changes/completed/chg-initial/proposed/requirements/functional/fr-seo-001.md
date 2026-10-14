---
id: FR-SEO-001
type: functional-requirement
title: "SEO and technical foundations"
status: active
derived-from:
  - UC-VIEW-COIN
  - UC-BROWSE-CATALOGUE
  - CON-DATA-001
verification:
  - scenario-ref: SB-COIN-PAGE-HAS-PRODUCT-STRUCTURED-DATA
  - scenario: "An administrator changes the page title and meta description of a coin and the public page carries them"
  - scenario: "The XML sitemap lists every published coin and no unpublished coin"
  - scenario: "A first-time visitor is asked for cookie consent, and analytics does not start before consent is given"
  - scenario: "The homepage, a category and a coin page are usable at phone, tablet and desktop widths"
provenance:
  source: "Agreement RAC-2026-01 v3 (signed 8 Oct 2026), Schedule 1 (B.7)"
  confidence: high
  recovered-from: documentation
---

## Requirement

The Platform MUST provide: page titles and meta descriptions editable per page and per coin;
clean URLs; image alt texts; structured data (schema.org Product) for coin pages; an XML
sitemap and robots.txt; connection to Google Search Console and Google Analytics; a
GDPR-compliant cookie consent banner; image and performance optimisation for high-resolution
photography; and fully responsive desktop, tablet and mobile layouts.

## Rationale

Collectors find specific coins through search engines; the photography must load well on every device.

