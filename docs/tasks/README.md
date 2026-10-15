# Tasks

One file per piece of work that ends in one pull request. A task says what to build by citing
the product definition; it never restates a rule.

## Phase 1

| Task | Title | Spec | Mode | Review | Depends on | Blocked by |
| --- | --- | --- | --- | --- | --- | --- |
| [T-001](T-001-api-skeleton-with-gates.md) | API skeleton with quality gates | ready | supervised | strict | — | — |
| [T-002](T-002-web-skeleton-with-gates.md) | Web skeleton with quality gates | ready | supervised | standard | T-001 | — |
| [T-003](T-003-local-stack-and-ci.md) | Local stack and continuous integration | ready | supervised | standard | T-001, T-002 | — |
| [T-004](T-004-public-catalogue-golden-slice.md) | Public catalogue: the reference slice | ready | supervised | strict | T-001, T-002, T-003 | — |
| [T-005](T-005-newsletter-signup-double-opt-in.md) | Newsletter signup with double opt-in | ready | delegate | standard | T-004 | — |
| [T-006](T-006-accounts-and-roles.md) | Accounts: registration, sign in, password reset, roles | ready | delegate | strict | T-004 | — |
| [T-007](T-007-admin-coins-categories-featured.md) | Administration: coins, categories and the featured selection | ready | delegate | standard | T-004, T-006 | — |
| [T-008](T-008-coin-photographs.md) | Coin photographs: upload, storage, gallery with zoom | outline | delegate | standard | T-007 | — |
| [T-009](T-009-homepage-featured-selection.md) | Homepage with the featured selection | outline | delegate | standard | T-007 | — |
| [T-010](T-010-sold-archive.md) | Sold coins and the Sold Archive | outline | delegate | standard | T-007 | Q-C31, Q-C12 |
| [T-011](T-011-wishlist.md) | Wishlist | outline | delegate | standard | T-004, T-006 | — |
| [T-012](T-012-we-buy-submissions.md) | We Buy: submission form and administration inbox | outline | delegate | standard | T-007, T-008 | Q-C34, Q-R18 |
| [T-013](T-013-content-pages-and-contact.md) | Content pages, SELL area and contact form | outline | delegate | standard | T-002 | — |
| [T-014](T-014-seo-foundations.md) | SEO foundations | outline | delegate | standard | T-004, T-007 | — |
| [T-015](T-015-cookie-consent-and-analytics.md) | Cookie consent and analytics | outline | delegate | standard | T-002 | — |
| [T-016](T-016-orders-core-and-payment-interface.md) | Orders core: order lifecycle, reservation, payment interface | outline | delegate | strict | T-004, T-006 | Q-R2, Q-R17 |
| [T-017](T-017-cart-and-bank-transfer-checkout.md) | Cart and bank-transfer checkout | outline | delegate | strict | T-016 | Q-C6, Q-C5, Q-C1 |
| [T-018](T-018-card-checkout.md) | Card checkout through the standard merchant account | outline | delegate | strict | T-016, T-017 | Q-C16, Q-C6 |
| [T-019](T-019-shipping-and-tax-settings.md) | Shipping and tax settings | outline | delegate | standard | T-017 | Q-C1, Q-C2, Q-C8 |
| [T-020](T-020-order-management-and-order-history.md) | Order management and the customer's order history | outline | delegate | strict | T-016, T-017 | Q-R2 |
| [T-021](T-021-catalogue-filters-and-sorting.md) | Catalogue filters and sorting | outline | delegate | standard | T-004 | Q-R6 |
| [T-022](T-022-subscribers-and-email-service.md) | Subscribers: management, export and the Client's email service | outline | delegate | standard | T-005, T-007 | Q-C13 |
| [T-023](T-023-apply-final-design.md) | Apply the final design | outline | supervised | standard | T-009, T-013 | Q-C29, Q-A6 |
| [T-024](T-024-staging-and-production.md) | Staging and production environments | outline | supervised | strict | T-003 | Q-R5 |
| [T-025](T-025-launch-catalogue-import.md) | Launch catalogue import | outline | delegate | standard | T-007, T-008 | Q-R7, Q-C11 |
| [T-026](T-026-phase-1-documentation.md) | Phase 1 documentation and administration guide | outline | delegate | standard | T-024 | — |
| [T-027](T-027-phase-1-go-live.md) | Phase 1 go-live | outline | supervised | strict | T-024, T-018, T-020, T-023 | Q-C18, Q-C20, Q-C10, Q-R10 |

- **Spec** `ready`: fully specified, can be started. `outline`: goal and rules only; expand it
  in a planning session before starting (copy `TEMPLATE.md`).
- **Mode** `supervised`: done with Răzvan in the session. `delegate`: can run unattended on
  its own branch.
- **Review** `strict`: Răzvan reads every line (sign-in, money, anything irreversible).
- **Blocked by**: questions in `docs/product/open-questions.md`. A blocked task is not started.

## Order of work

1. **Foundation, supervised:** T-001, T-002, T-003. Nothing else can be verified before these.
2. **Reference slice, supervised:** T-004. Every later task copies its shape.
3. **First unattended tasks:** T-005, then T-006 and T-007. T-013 and T-015 are independent of
   them and can run in parallel once specified.
4. **Catalogue completion:** T-008, T-009, T-011, T-014, then T-010 and T-021 when their
   questions close.
5. **Selling, strict review:** T-016, T-017, T-018, T-019, T-020, in that order.
6. **Finishing:** T-012, T-022, T-023, T-024, T-025, T-026, T-027.

Start the tasks that wait for the Client last, and send the questions that block them first.

## Contracted scope covered by tasks

| Clause | Scope | Tasks |
| --- | --- | --- |
| B.1(a) | Homepage with hero and featured coins | T-009 |
| B.1(b) | BUY section with categories, filtering and sorting | T-004, T-021 |
| B.1(c) | Coin pages with gallery, zoom and the structured record | T-004, T-008 |
| B.1(d) | Sold Archive | T-010 |
| B.1(e) | SELL area with We Buy and the Marketplace entry point | T-013 |
| B.1(f) | Content pages and contact form | T-013 |
| B.2(a) | Unique items, sold on completed purchase | T-010, T-016 |
| B.2(b) | Cart and checkout: card, and bank transfer with reservation | T-016, T-017, T-018 |
| B.2(c) | Order management, statuses and emails | T-017, T-020 |
| B.2(d) | Shipping and tax settings; euro prices | T-019 |
| B.3 | Customer accounts and Wishlist | T-006, T-011, T-020 |
| B.4 | We Buy submissions | T-012 |
| B.5 | New-acquisitions email signup | T-005, T-022 |
| B.6 | Administration panel | T-007, T-012, T-020, T-022 |
| B.7 | SEO and technical foundations | T-008, T-014, T-015, T-023, T-027 |
| B.8 | Infrastructure: staging, production, backups, HTTPS | T-024, T-027 |
| D.1 | Technical documentation (Phase 1 part) | T-026 |
| D.2 | Administration panel user guide (Phase 1 part) | T-026 |
| S4.2 | Initial launch catalogue loaded if supplied in the agreed format | T-025 |

Schedule 1 D.3 (training session) and D.4 (handover of the repository and credentials) are
not software tasks and are not listed. Final design (Schedule 1 A.3) is tracked under
questions Q-A2 and Q-C29.

## Front matter

| Field | Meaning |
| --- | --- |
| `status` | `todo`, `in-progress`, `done` |
| `covers` | clauses of `scope.json` this task delivers, wholly or partly |
| `cites` | artifacts of the product definition the task implements or must respect |
| `behaviours` | structured behaviours the task makes true; each needs a test that names it |
| `depends-on` | tasks that must be done first |
| `blocked-by` | open questions that must be closed first |

The block between the `product-rules` markers is generated from `cites` and `behaviours` by
`pnpm tasks:cite T-0xx`. It records the digest of each rule as it stood when the task was
written; `scripts/verify.sh` reports the task when a rule has changed since.

## Running a task

Supervised: start `claude` in the repository and type `/ra-task T-004`.

Unattended, in its own worktree:

```sh
claude --bg --name T-005 "Carry out docs/tasks/T-005-newsletter-signup-double-opt-in.md following the ra-task skill."
claude agents          # watch, read the summary, open the diff
```

## Writing a task

Small enough to review in a quarter of an hour. One pull request. Cites rules instead of
copying them. If writing it needs a rule that does not exist, the rule comes first, through a
Product Change.
