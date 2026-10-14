---
id: T-005
title: "Newsletter signup with double opt-in"
phase: 1
status: todo
spec: ready
mode: delegate
review: standard
covers: ["B.5"]
cites: [UC-SUBSCRIBE-TO-NEW-ACQUISITIONS, BR-NL-001, CON-DATA-001, CON-SEC-001]
behaviours: [SB-NEWSLETTER-CONFIRMED-BY-DOUBLE-OPT-IN, SB-NEWSLETTER-SIGNUP-NEEDS-CONSENT]
depends-on: [T-004]
blocked-by: []
---

# T-005 — Newsletter signup with double opt-in

## Goal

A visitor can sign up for new-acquisitions emails; the address becomes a subscriber only after
consent and confirmation by email. This is the first task meant to run without supervision.

## Product rules

<!-- product-rules:start -->
- **UC-SUBSCRIBE-TO-NEW-ACQUISITIONS** Sign up for new-acquisitions emails <!-- pdac:cite id="UC-SUBSCRIBE-TO-NEW-ACQUISITIONS" digest="sha256:4f3d4bfe2a308fc2d47b54af85da0dc9cba489e957d169492794cb705b975e1a" -->
- **BR-NL-001** Newsletter signup needs consent and double opt-in <!-- pdac:cite id="BR-NL-001" digest="sha256:248f7954ed5baf109694e5bf6a3736e47574b7cf1bcc604ff62f983d337bd337" -->
- **CON-DATA-001** Personal data: privacy by design, synthetic data in development, EEA <!-- pdac:cite id="CON-DATA-001" digest="sha256:d5c317d6e94545b15f43ad73fc9b5877e790a87e10861b8e863986a488734a4c" -->
- **CON-SEC-001** Secure development baseline <!-- pdac:cite id="CON-SEC-001" digest="sha256:4be327dea0ee6034dedf8fb59f785a98d823bbdceceae740eac87bd22b38b377" -->
- **SB-NEWSLETTER-CONFIRMED-BY-DOUBLE-OPT-IN** A signup becomes a subscriber only after confirmation <!-- pdac:cite id="SB-NEWSLETTER-CONFIRMED-BY-DOUBLE-OPT-IN" digest="sha256:5aa56dfc3080e3f8071aeee7a428822d00b06afd520c301ffe9bb34cfb63ca67" -->
- **SB-NEWSLETTER-SIGNUP-NEEDS-CONSENT** A signup without consent is not accepted <!-- pdac:cite id="SB-NEWSLETTER-SIGNUP-NEEDS-CONSENT" digest="sha256:761fed0f20eedd5ea48d32ad2ce233fc00a1d31ec6fb9bea187d835f586b4697" -->
<!-- product-rules:end -->

## Read first

- `docs/engineering/reference-slice.md` (copy its shape)
- `docs/engineering/conventions.md` (external providers, lifecycle, outbox)
- `pnpm exec prodshape context UC-SUBSCRIBE-TO-NEW-ACQUISITIONS BR-NL-001`

## Scope

- A subscription with a lifecycle: pending, then confirmed. Stored: email address, the time
  consent was given, the time of confirmation. Nothing else (CON-DATA-001).
- API: submit a signup (email and explicit consent); confirm by token.
- The confirmation email is sent through an email interface owned by us, with an SMTP
  implementation that works against the local mail catcher. The send is an outbox entry
  written in the same transaction as the subscription.
- Confirmation tokens are single-use, stored hashed, and expire.
- Web: a signup form (email, consent checkbox, submit) usable in the homepage and the footer,
  and a confirmation page with its states: confirmed, link invalid or expired, already
  confirmed.

## Out of scope

Listing and exporting subscribers, and the Client's email service (both T-022). Unsubscribing
(arrives with the email service). Visual design.

## Acceptance criteria

1. SB-NEWSLETTER-CONFIRMED-BY-DOUBLE-OPT-IN: after the form is submitted with consent and the
   link in the email is followed, the address is a confirmed subscriber. Named in an
   integration test and in an end-to-end test that reads the email from the mail catcher.
2. SB-NEWSLETTER-SIGNUP-NEEDS-CONSENT: a signup without consent is rejected by the server and
   no email is sent, even if the browser check is bypassed. Named in a web-layer test.
3. An address that never follows the link never becomes a subscriber.
4. Submitting an address that is already confirmed creates no second subscription, and the
   response does not reveal whether the address was already known.
5. A used or expired link does not confirm anything and shows the matching state.
6. The email interface has no provider name in it, and the architecture tests pass.

## Engineering notes

- The validity of the confirmation link is not a product rule. Use 7 days as a named constant
  and **report it in the summary** so it can be confirmed.
- The form can be abused to send email to strangers. Propose a throttle in the summary; do
  not invent a product rule for it here.
- Which production email provider will be used is open (Q-R5). Do not add one.

## Done when

- `scripts/verify.sh full` exits 0 and its last line reads `VERIFY PASSED`.
- Both behaviours are named by tests.
- The work is committed on the task branch with a summary; this file's `status` is `done`.
