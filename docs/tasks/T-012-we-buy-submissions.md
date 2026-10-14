---
id: T-012
title: "We Buy: submission form and administration inbox"
phase: 1
status: todo
spec: outline
mode: delegate
review: standard
covers: ["B.4", "B.6"]
cites: [UC-SUBMIT-WE-BUY-OFFER, BR-WB-001, BR-WB-002, BR-MP-010, CON-DATA-001]
behaviours: [SB-WE-BUY-SUBMISSION-RECORDED]
depends-on: [T-007, T-008]
blocked-by: [Q-C34, Q-R18]
---

# T-012 — We Buy: submission form and administration inbox

## Goal

A person offers a coin to Royal Aurum through a form; the Client is notified and works through submissions in the administration panel.

## Product rules

<!-- product-rules:start -->
- **UC-SUBMIT-WE-BUY-OFFER** Offer a coin to Royal Aurum _(draft)_ <!-- pdac:cite id="UC-SUBMIT-WE-BUY-OFFER" digest="sha256:571692cd40375835ee07c5ebae3d03d66da44487b1dc87f39aa2b761b9357b1c" -->
- **BR-WB-001** We Buy submissions <!-- pdac:cite id="BR-WB-001" digest="sha256:adced9155dbbf5dcd565bc992f1b1f80d5595ff73f96f4a63ef8fbb62427bde6" -->
- **BR-WB-002** Statuses of a We Buy submission _(draft)_ <!-- pdac:cite id="BR-WB-002" digest="sha256:862d294944809902e57e93ab253c77a2c82d916d670c62b31aa8bbc983701443" -->
- **BR-MP-010** The Marketplace is separate from We Buy <!-- pdac:cite id="BR-MP-010" digest="sha256:ae766122ac879cc6199703b524fd25de746805d4589b2762f61c22085a7a0508" -->
- **CON-DATA-001** Personal data: privacy by design, synthetic data in development, EEA <!-- pdac:cite id="CON-DATA-001" digest="sha256:d5c317d6e94545b15f43ad73fc9b5877e790a87e10861b8e863986a488734a4c" -->
- **SB-WE-BUY-SUBMISSION-RECORDED** A We Buy submission is stored and both sides are emailed <!-- pdac:cite id="SB-WE-BUY-SUBMISSION-RECORDED" digest="sha256:8265980fd0f39bd9e6e7a72bcd34ac9e76656ba4bbb41c385cdbc790fb97ec1c" -->
<!-- product-rules:end -->

## Scope

- The We Buy form with coin details, certification details and photo uploads.
- Submissions stored with a status; notification email to the Client and confirmation email to the submitter.
- An inbox in the administration panel to read submissions and change their status.

## Open decisions

- Q-C34: whether an account is required to submit.
- Q-R18: the exact fields and the limits on uploads.
- BR-WB-002 (the four statuses) is a draft: the Agreement gives them as examples.

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
