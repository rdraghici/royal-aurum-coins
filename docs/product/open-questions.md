# Open questions

Every point that is not decided yet, with what it affects. A task whose `blocked-by` names a
question here is not started until the question is closed.

**Closing a question:** record the answer and its source (email or message, with date) in the
"Answer" column, then update the artifacts it affects through a Product Change
(`pnpm exec prodshape change create CHG-…`). An answer from the Client that changes scope follows
Clause 11 of the Agreement and is confirmed by email.

Status as of 15 Oct 2026: Q-C8, Q-C12, Q-C22, Q-C32, Q-R4, Q-R14, Q-R19 and Q-R21 are closed; the rest are open.
The answers of 15 Oct 2026 are carried into the definition by CHG-SHOP-RULES-2.

## 1. Questions for the Client — Phase 1

| ID | Decision needed | Suggested | Affects | Question to send | Answer |
| --- | --- | --- | --- | --- | --- |
| Q-C1 | Shipping countries, methods and rates | none | BR-ORD-006, BR-ORD-010 · T-017, T-019 | "Which countries do you ship to, and what do you charge for shipping to each?" | Countries only: Ireland and the 27 EU member states; no UK, Switzerland or Norway (WhatsApp, 15 Oct 2026; BR-ORD-010 in CHG-SHOP-RULES-2). Methods and rates still open. |
| Q-C2 | Insurance of own shipments | none | BR-ORD-006 · T-019 | "Are your own shipments insured, and is the cost included in the shipping price or charged separately?" | |
| Q-C3 | Bank-transfer threshold (and how it applies to an order with several coins) | EUR 3,000 per coin | BR-ORD-004 · T-017 | "From which coin price should bank transfer be shown as the preferred way to pay? We suggest EUR 3,000." | |
| Q-C4 | Bank-transfer reservation period | 5 days | BR-ORD-002 · T-017 | "How many days should a coin stay reserved while we wait for a bank transfer? We suggest 5." | |
| Q-C5 | Checkout hold | 15 minutes | BR-ORD-008 · T-017 | "While a buyer is in checkout, how long should the coin be held for them before it is released? We suggest 15 minutes." | |
| Q-C6 | Guest checkout | none | UC-PURCHASE-BY-CARD, UC-PURCHASE-BY-BANK-TRANSFER · T-017 | "Can a buyer purchase without creating an account, or must everyone register first?" | |
| Q-C7 | Returns of own coins | none | Returns page · T-013 | "How many days do customers have to return a coin bought from you, and under what conditions?" | |
| Q-C8 | How VAT is reflected in prices | none | BR-PRC-001, BR-PRC-002, BR-ORD-006 · T-019 | "Should prices be shown as including VAT, under the margin scheme, or VAT-exempt as investment gold? Please check with your accountant." | Closed. Prices shown are final; each coin carries a VAT treatment (investment-gold exemption, margin scheme or standard VAT) set by the Client per coin, recorded on the order and shown on the coin page and the order confirmation; no VAT added at checkout; the list of treatments is extendable by the Client (WhatsApp, 15 Oct 2026; CHG-SHOP-RULES-2). |
| Q-C9 | Texts for About, Contact, FAQ | none | FR-PAGES-001 · T-013 (not blocking; placeholders until received) | "Please send the About text, the contact details to show on the site, and 5 to 10 FAQ questions with answers." | |
| Q-C10 | Legal texts for Phase 1 | none | FR-PAGES-001 · T-027 | "Do you have a solicitor for the Terms of sale, Privacy and Cookie policy, or should we suggest a practical route?" | |
| Q-C11 | Launch catalogue | none | BR-CAT-002 · T-025 | "Roughly how many coins will be live at launch, and when can you send the photos and the filled spreadsheet?" | |
| Q-C12 | Sold price in the Sold Archive | none | BR-CAT-004 · T-010 | "In the Sold Archive, should the price the coin sold for be shown, or only that it is sold?" | Closed. "Sold" only; the selling price is never shown (WhatsApp, 15 Oct 2026; CHG-SHOP-RULES-2). |
| Q-C13 | Email service for the new-acquisitions emails | Brevo, free tier, account in the Client's name | FR-NL-001 · T-022 | "For the new-acquisitions emails we suggest Brevo, with an account in your name. Is that fine, or do you prefer another service?" | |
| Q-C35 | Sender address of the new-acquisitions emails | none | FR-NL-001 · T-022 | "Which email address should the new-acquisitions emails be sent from?" | |
| Q-C14 | Number of administrator logins | 2 | BR-ACC-001 · T-007 (not blocking) | "How many people need an admin login? We suggest you plus one." | |
| Q-C15 | Social accounts in the footer | none | T-013 (not blocking) | "Do you have YouTube, Instagram or X accounts to link in the footer? If not, we remove the icons." | |
| Q-C29 | Approval of the final design (milestone M1) | none | CON-DESIGN-001 · T-023 | "Please reply 'confirmed' to the design email once you are happy with the final pages." | |
| Q-C31 | How a sold coin reaches the Sold Archive | as agreed: the Client moves it | BR-CAT-004 · T-010 | "As agreed, you move a sold coin to the Sold Archive yourself. Would you prefer that it appears there automatically when it is sold?" | |
| Q-C32 | Units for gold content and weight | none | BR-CAT-002 · T-004, T-025 | "How do you want gold content and weight shown: in troy ounces, in grams, or both?" | Closed. Total weight and fine gold content shown separately, each in grams and troy ounces; stored as decided in Q-R14, the other unit derived (WhatsApp, 15 Oct 2026; CHG-SHOP-RULES-2). |
| Q-C34 | Account for We Buy | none | UC-SUBMIT-WE-BUY-OFFER · T-012 | "Can someone send you a We Buy offer without creating an account?" | |

## 2. Questions for the Client — accounts and access

| ID | Needed | Affects | Question to send | Answer |
| --- | --- | --- | --- | --- |
| Q-C16 | Developer access to the Stripe account | T-018 | "Please invite the developer as Developer in Stripe (Settings → Team) so the site can be connected." | |
| Q-C17 | Outcome of Stripe's review | T-018; Phase 2 | "Has Stripe emailed you asking for any documents or questions since activation?" | |
| Q-C18 | .ie nameservers changed at the registrar | T-027 | "Have you changed the .ie nameservers at Maxer to the two Cloudflare ones?" | |
| Q-C19 | Company card in Cloudflare Billing | renewal | "When you have a minute, add the company card in Cloudflare → Billing so next year's domain renewal is charged to you." | |
| Q-C20 | Domain contact verification | T-027 | "Cloudflare sent an email asking you to confirm the domain contact. Please click the link." | |

## 3. Questions for the Client — Phase 2

| ID | Decision needed | Suggested | Affects | Question to send | Answer |
| --- | --- | --- | --- | --- | --- |
| Q-C21 | Default commission | none | BR-MP-008 | "What default commission percentage do you take on Marketplace sales?" | |
| Q-C22 | Length of the confirmation period | see note | BR-MP-014, BR-MP-006 | "A seller is paid when the buyer confirms delivery. If the buyer says nothing, the seller is paid automatically after a number of days, unless you cancel the order first. How many days should the site wait? We propose to count them from the day the seller marks the coin as shipped." | Closed. 7 calendar days counted from confirmed delivery; during them the buyer can report a problem (not authentic, damaged, not as described) or request a return, which holds the payout and notifies the Client, who resolves with a refund or a release; no buyer-seller messaging; with no open problem the payout is automatic after the 7 days, net of commission (WhatsApp, 15 Oct 2026; drafts in CHG-SHOP-RULES-2 pending Răzvan's confirmation). |
| Q-C23 | What buyers see about a seller | "Offered by a Royal Aurum seller" | BR-MP-009 | "Should buyers see any seller information, or only a note that the coin is offered by a Royal Aurum seller?" | |
| Q-C24 | Insurance of Marketplace shipments | none | BR-MP-012 | "On a Marketplace sale, who insures the shipment: the seller or Royal Aurum?" | |
| Q-C25 | Returns of Marketplace coins | none | BR-MP-007 | "Can a buyer return a Marketplace coin? If yes, under the same rules as for your own coins?" | |
| Q-C26 | Marketplace legal texts | none | Phase 2 go-live | "Please send the seller terms and the buyer terms for the Marketplace, reviewed by your solicitor." | |
| Q-C27 | Who bears the Payment Provider's fees | none | BR-MP-008 | "On a Marketplace sale, who should bear the payment provider's fees: you (out of your commission), the seller (deducted from the payout), or the buyer (added to the price)?" | |
| Q-C28 | Problems after the seller has been paid | none | BR-MP-007 | "If a buyer has a problem after the seller has already been paid, how do you want to handle it? (The site only refunds before payout.)" | |
| Q-C30 | Message for an offer below the minimum | "This offer could not be accepted" | BR-OFR-001 | "When an offer is below the minimum, is the message 'This offer could not be accepted' fine?" | |
| Q-C33 | Marketplace coins in the Sold Archive | none | BR-CAT-004 | "Should sold Marketplace coins also appear in the Sold Archive?" | |
| Q-C36 | A new offer after an automatic rejection | none | BR-OFR-003 | "When an offer is rejected automatically because it is too low, can the same buyer make another offer straight away?" | |
| Q-C37 | Returns for any reason, or only for the three problem reasons | none | BR-MP-017 · Phase 2 | "During the 7 days after delivery, can a buyer return a Marketplace coin for any reason, or only when it is not authentic, damaged or not as described?" | |
| Q-C38 | Automatic delivery confirmation after N days of shipment | none | BR-MP-016, BR-MP-014 · Phase 2 | "If neither the buyer nor you confirm delivery, should the site treat the coin as delivered a number of days after the seller marked it shipped? If so, after how many days?" | |

Note on Q-C22: the Client's answer of 15 Oct 2026 counts the period from confirmed delivery,
not from shipment, which removes the earlier concern that 7 days from shipment could end before
an international parcel arrives. The Platform still has no carrier integration (CON-SCOPE-001):
delivery is confirmed by the buyer or by the Client after checking the tracking (Q-R4); whether
it can also be confirmed automatically some days after shipment is Q-C38.

## 4. Decisions for the Provider

| ID | Decision needed | Starting point | Affects | Decision |
| --- | --- | --- | --- | --- |
| Q-R2 | Order statuses and the email sent at each | BR-ORD-009 (draft) | BR-ORD-005, BR-ORD-007, UC-MANAGE-ORDERS · T-016, T-017, T-020 | |
| Q-R3 | Listing statuses | BR-MP-015 (draft) | Phase 2 | |
| Q-R4 | How a buyer confirms delivery, and what starts the confirmation period | from the seller marking shipment | BR-MP-006, BR-MP-014, BR-MP-016 · Phase 2 | Delivery is confirmed by the buyer from their order, or by the Client from the administration panel after checking the tracking; the confirmation period starts at confirmed delivery (Client's answer by WhatsApp, 15 Oct 2026; drafts in CHG-SHOP-RULES-2). Decided 15 Oct 2026. |
| Q-R5 | Hosting, database, image storage and email providers; accounts created in the Client's name | as proposed to the Client on 6 Oct 2026 | CON-ACCT-001, CON-ENV-001 · T-024 | |
| Q-R6 | Filters and sort orders of the BUY section | BR-CAT-007 (draft) | T-021 | |
| Q-R7 | Coin spreadsheet template for the Client | columns of BR-CAT-002 | T-025 | |
| Q-R8 | Photo specification to give the Client (size, format, number per coin) | front and back of each slab on a plain background | BR-CAT-002 · T-008, T-025 | |
| Q-R9 | Stripe account state once access is granted (charges enabled, Connect profile, beneficial owners) | none | T-018; Phase 2 | |
| Q-R10 | .ie redirect rule and TLS mode after the nameserver change | 301 to .com | T-027 | |
| Q-R13 | Seller account separate from customer account; onboarding complete before listing | proposed: one login, onboarding first | BR-MP-013 · Phase 2 | |
| Q-R14 | How gold content and weight are stored; whether denomination is its own field | fine gold content in troy ounces and gross weight in grams, as exact decimals (how numismatic references usually quote them); display follows Q-C32 | BR-CAT-002 · T-004, T-025 | Fine gold content stored in troy ounces, gross weight in grams, both as exact decimals; display format follows Q-C32. Decided 14 Oct 2026. |
| Q-R15 | Supported browsers and devices | current evergreen browsers, phone and tablet | FR-SEO-001 · T-002, T-023 | |
| Q-R16 | How the 48-hour reservation after an accepted offer combines with the bank-transfer reservation period | none | BR-OFR-002 · Phase 2 | |
| Q-R17 | When a bank-transfer purchase counts as completed | when the Client confirms receipt | TERM-COMPLETED-PURCHASE, BR-CAT-001, BR-ORD-007 · T-016 | |
| Q-R18 | We Buy form fields and limits on photo uploads | none | BR-WB-001 · T-012 | |
| Q-R19 | Whether a coin can belong to more than one category | exactly one | BR-CAT-003 · T-004 | A coin belongs to exactly one category. Decided 14 Oct 2026. |
| Q-R20 | Whether a new account must verify its email address before use | none | UC-REGISTER-AND-SIGN-IN · T-006 (not blocking) | |
| Q-R21 | Session mechanism shared by the API and server-rendered pages | an HTTP-only, Secure, SameSite cookie issued by the API on the site's own domain | CON-SEC-001 · T-006 | An HTTP-only, Secure, SameSite cookie session issued by the API. Decided 14 Oct 2026. |
| Q-R22 | Whether the Client edits content pages in the administration panel or sends texts to be put in | none (the Agreement says "populated with texts supplied by the Client") | FR-PAGES-001, CON-OPS-001 · T-013 | |

## 5. Design decisions and deliverables

| ID | Needed | Affects | Outcome |
| --- | --- | --- | --- |
| Q-A2 | Final design for all pages and states, desktop, tablet and mobile | CON-DESIGN-001 · T-023 | |
| Q-A3 | Vector logo, colour palette and fonts | T-002, T-023 | |
| Q-A4 | Whether the tagline sits in the logo, in the hero, or in both | T-009, T-023 | |
| Q-A5 | How Marketplace coins are distinguished from Royal Aurum's own | BR-MP-009 · Phase 2 | |
| Q-A6 | Inventory of the design export: what can be imported as it is | T-023 | |
| Q-A7 | Shipping and Returns page text drafted from the Client's rules | T-013 | |
