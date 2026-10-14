---
id: T-022
title: "Subscribers: management, export and the Client's email service"
phase: 1
status: todo
spec: outline
mode: delegate
review: standard
covers: ["B.5", "B.6"]
cites: [FR-NL-001, BR-NL-001, FR-ADM-001, CON-DATA-001]
behaviours: []
depends-on: [T-005, T-007]
blocked-by: [Q-C13]
---

# T-022 — Subscribers: management, export and the Client's email service

## Goal

The Client sees and exports its subscribers, and confirmed subscribers reach the email service it sends newsletters from.

## Product rules

<!-- product-rules:start -->
- **FR-NL-001** Subscriber management and email service <!-- pdac:cite id="FR-NL-001" digest="sha256:a0f51c6b1b654cdddcfaf3cbe406f61322dc5717bc0a849ed9dc42c1e9542513" -->
- **BR-NL-001** Newsletter signup needs consent and double opt-in <!-- pdac:cite id="BR-NL-001" digest="sha256:248f7954ed5baf109694e5bf6a3736e47574b7cf1bcc604ff62f983d337bd337" -->
- **FR-ADM-001** Administration panel <!-- pdac:cite id="FR-ADM-001" digest="sha256:0964f28bfb82bbed8fa734d25f662729524a50b9c8affa6d6a8f36ef3f3bac8f" -->
- **CON-DATA-001** Personal data: privacy by design, synthetic data in development, EEA <!-- pdac:cite id="CON-DATA-001" digest="sha256:d5c317d6e94545b15f43ad73fc9b5877e790a87e10861b8e863986a488734a4c" -->
<!-- product-rules:end -->

## Scope

- Subscribers list and export in the administration panel.
- An implementation of the newsletter interface for the service the Client selects; confirmed subscribers are sent to it, unsubscribes come back.
- Unsubscribe honoured everywhere.

## Open decisions

- Q-C13: the email service (Brevo was proposed) and the sender address.
- Whether the export contains confirmed subscribers only (assumed yes).

_Outline only. Before starting, expand this into a full specification (see `TEMPLATE.md`) in a
planning session, citing the rules above._
