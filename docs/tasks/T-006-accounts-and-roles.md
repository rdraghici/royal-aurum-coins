---
id: T-006
title: "Accounts: registration, sign in, password reset, roles"
phase: 1
status: todo
spec: ready
mode: delegate
review: strict
covers: ["B.3"]
cites: [UC-REGISTER-AND-SIGN-IN, FR-ACC-001, BR-ACC-001, CON-SEC-001, CON-DATA-001]
behaviours: [SB-CUSTOMER-RESETS-PASSWORD, SB-CUSTOMER-CANNOT-USE-ADMIN]
depends-on: [T-004]
blocked-by: []
---

# T-006 — Accounts: registration, sign in, password reset, roles

## Goal

People can register, sign in, sign out and reset a forgotten password, and the Platform knows
whether the person acting is a customer or an administrator. Everything later that needs
"who is this?" builds on it.

## Product rules

<!-- product-rules:start -->
- **UC-REGISTER-AND-SIGN-IN** Register, sign in and reset a password <!-- pdac:cite id="UC-REGISTER-AND-SIGN-IN" digest="sha256:82f1c5f6cc68094472b45fcc422b1c2df06f0735a80b15939551ad39086e8e67" -->
- **FR-ACC-001** Customer accounts <!-- pdac:cite id="FR-ACC-001" digest="sha256:0d64dd617e606951e9b3a63940fd48d37541e7677270674f3629d0d72cb7107f" -->
- **BR-ACC-001** Administrators, sellers and buyers are separated by role <!-- pdac:cite id="BR-ACC-001" digest="sha256:f394311b69575c909f8f35c17ee49c4bfe8127b8e73efa8ca57fa64e317b5e3c" -->
- **CON-SEC-001** Secure development baseline <!-- pdac:cite id="CON-SEC-001" digest="sha256:4be327dea0ee6034dedf8fb59f785a98d823bbdceceae740eac87bd22b38b377" -->
- **CON-DATA-001** Personal data: privacy by design, synthetic data in development, EEA <!-- pdac:cite id="CON-DATA-001" digest="sha256:d5c317d6e94545b15f43ad73fc9b5877e790a87e10861b8e863986a488734a4c" -->
- **SB-CUSTOMER-RESETS-PASSWORD** A customer who forgot their password can set a new one <!-- pdac:cite id="SB-CUSTOMER-RESETS-PASSWORD" digest="sha256:4aba9e9f483dc663c040ff1caea69abeb192ccc46d9538e5cbc34c94e46027fd" -->
- **SB-CUSTOMER-CANNOT-USE-ADMIN** A customer is refused the administration panel <!-- pdac:cite id="SB-CUSTOMER-CANNOT-USE-ADMIN" digest="sha256:ff023b297a95dda06241aac6dd1f7dfe90ea1374222bf62778286618a0407743" -->
<!-- product-rules:end -->

## Read first

- `docs/engineering/reference-slice.md`
- `docs/engineering/conventions.md`
- `pnpm exec prodshape context UC-REGISTER-AND-SIGN-IN BR-ACC-001 CON-SEC-001`

## Scope

- Accounts with one or more roles. Roles now: customer, administrator. Leave room for seller
  (Phase 2) without deciding how seller accounts relate to customer accounts (Q-R13).
- Registration (name, email, password), sign in, sign out, password reset by emailed
  single-use expiring link.
- The session mechanism decided under Q-R21, usable both by the API and by server-rendered
  pages.
- The first administrator is created by an operator command, never through public
  registration.
- An administrators-only area: one protected API endpoint and one protected `/admin` page,
  enough to prove the role check.
- Web: register, sign in, forgot password, reset password, and a signed-in indicator.

## Out of scope

Account area and order history (T-020). Wishlist (T-011). The administration panel itself
(T-007). Seller accounts. Social sign-in. Email verification at registration (Q-R20; raise it
in the summary, do not build it).

## Acceptance criteria

1. SB-CUSTOMER-RESETS-PASSWORD: after a reset the new password works and the old one does not.
   Named in an integration test and an end-to-end test reading the email from the mail catcher.
2. SB-CUSTOMER-CANNOT-USE-ADMIN: a signed-in customer is refused by the administrators-only
   endpoint and page, and receives no administration data. Named in a web-layer test and an
   end-to-end test.
3. Sign-in, registration and password reset do not reveal whether an email address has an
   account.
4. Passwords are stored only as a salted adaptive hash. No password, token or session
   identifier appears in logs.
5. Reset links are single-use, expire, and are invalidated by a successful sign-in with a new
   password.
6. Repeated failed sign-ins are slowed down or locked out.
7. Every input is validated on the server (CON-SEC-001); a test bypasses the browser to show it.
8. A person who is not signed in is refused by every protected endpoint (deny by default).

## Engineering notes

- Password rules, lockout thresholds and link lifetimes are not product rules. Choose
  conservative defaults, name them as constants, and **list them in the summary**.
- This task gets a strict review: keep the diff readable, and say in the summary which files
  carry the security-relevant logic.

## Done when

- `scripts/verify.sh full` exits 0 and its last line reads `VERIFY PASSED`.
- Both behaviours are named by tests.
- The work is committed on the task branch with a summary; this file's `status` is `done`.
