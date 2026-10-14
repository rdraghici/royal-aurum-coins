---
id: T-003
title: "Local stack and continuous integration"
phase: 1
status: todo
spec: ready
mode: supervised
review: standard
covers: []
cites: [CON-ENV-001, CON-DATA-001, CON-TECH-001]
behaviours: []
depends-on: [T-001, T-002]
blocked-by: []
---

# T-003 — Local stack and continuous integration

## Goal

One command starts everything locally, and every pull request is verified by CI with the same
script a developer runs. After this task an agent can work in its own worktree or in a cloud
session and prove its work there.

## Product rules

<!-- product-rules:start -->
- **CON-ENV-001** Staging before production; backups and HTTPS <!-- pdac:cite id="CON-ENV-001" digest="sha256:694d178d1a3e39835300834ba08a0eb4eaa118294500832a9c97746e027d9908" -->
- **CON-DATA-001** Personal data: privacy by design, synthetic data in development, EEA <!-- pdac:cite id="CON-DATA-001" digest="sha256:d5c317d6e94545b15f43ad73fc9b5877e790a87e10861b8e863986a488734a4c" -->
- **CON-TECH-001** Maintainable technology and compatible open-source licences <!-- pdac:cite id="CON-TECH-001" digest="sha256:553d57d98b3e9e0cd297ae9895f6666cff41e9fc623ed511d499221aeba97606" -->
<!-- product-rules:end -->

## Read first

- `scripts/verify.sh`, `.worktreeinclude`, `.github/workflows/ci.yml`
- `docs/engineering/quality-gates.md` (Tiers, section 6)

## Scope

- `infra/docker-compose.dev.yml`: PostgreSQL and a local mail catcher. No other services.
  Check the licence of every image used against CON-TECH-001.
- Root scripts: `pnpm dev` starts the API and the web app against the compose stack.
- `.env.example` files completed; real `.env.local` files stay untracked and are listed in
  `.worktreeinclude`.
- CI: extend `.github/workflows/ci.yml` so that pull requests and `main` run
  `scripts/verify.sh full` (Java 21, pnpm, Playwright browsers, Docker for Testcontainers),
  with dependency caches.
- A nightly workflow on `main`: mutation tests, vulnerable-dependency scan. It reports; it
  does not block merges.
- Synthetic seed data only: a development-profile seeder with invented coins.
- `docs/engineering/running-locally.md`: start, stop, reset the database, read caught emails.

## Out of scope

Staging and production (T-024). Deployment. Secrets management beyond `.env.example`.

## Acceptance criteria

1. On a fresh clone: `pnpm install`, start the compose stack, `pnpm dev`, and the placeholder
   homepage and `GET /api/v1/status` respond.
2. `scripts/verify.sh full` passes locally and in CI on a pull request.
3. CI fails when a test is broken (shown with a throwaway pull request, then closed).
4. In a new worktree (`claude --worktree check`), the environment files are present and
   `scripts/verify.sh full` passes without manual setup.
5. `scripts/verify.sh full` is run once in a cloud session. Whether Testcontainers works there
   is recorded in `docs/engineering/running-locally.md`, with the workaround if it does not.
6. Răzvan has protected `main` on GitHub: pull request required, the CI check required, no
   direct pushes. (A manual step; record that it is done.)

## Engineering notes

- CI changes are gate changes: start this session with `RA_ALLOW_GATE_EDITS=1`.
- Use the mail catcher's HTTP API from end-to-end tests to read emails.
- For local image storage use the filesystem behind the storage interface (T-008); do not add
  an object-storage emulator.

## Done when

- `scripts/verify.sh full` exits 0 locally and the CI run on the pull request is green.
- Criteria 3 to 6 are evidenced in the summary.
- This file's `status` is `done`.
