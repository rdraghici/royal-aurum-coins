# Royal Aurum Coins

The platform behind Royal Aurum Coins: a curated online shop for certified historical gold
coins (Phase 1) and a curated marketplace on which approved private sellers list certified
gold coins (Phase 2).

## How this repository works

| Where | What |
| --- | --- |
| `docs/product/model/` | The product definition: every agreed rule as a small file with a stable ID and the clause it comes from |
| `docs/product/changes/` | Product Changes, the only way the definition changes |
| `docs/product/open-questions.md` | Everything not decided yet, and what it blocks |
| `docs/tasks/` | One file per pull request, citing the rules it implements |
| `docs/engineering/` | What is enforced (`quality-gates.md`) and how we build (`conventions.md`) |
| `scripts/verify.sh` | The definition of done |
| `apps/api`, `apps/web` | The applications (created by tasks T-001 and T-002) |
| `CLAUDE.md`, `.claude/` | Working agreements, permissions, hooks and skills for Claude Code |

A rule is agreed with the client, recorded in the product definition, cited by a task, built,
and proven by a test that names it. `scripts/verify.sh` checks each link of that chain.

## Bringing the repository up

Requirements: Node 22 or later, pnpm 10, git. For the applications later: Java 21 and Docker.

```sh
pnpm install
pnpm exec prodshape doctor          # the product-definition tooling is intact
```

1. **Accept the product definition.** Read `docs/product/changes/active/chg-initial/change.md`,
   then the artifacts under its `proposed/` folder (the drafts and the business rules first).
   Correct what is wrong. When it says what was agreed, set `status: approved` in `change.md` and run:

   ```sh
   scripts/product-accept.sh CHG-INITIAL
   git add -A && git commit -m "Accept the initial product definition"
   ```

   If you edited an artifact that tasks cite, the script lists those tasks as stale. Re-read
   each against the rule and re-stamp it with `pnpm tasks:cite T-0xx`.

2. **Check.** `scripts/verify.sh fast product policy` passes.

3. **Start the work** with `docs/tasks/README.md`: T-001, T-002 and T-003 first.

## Changing what the product does

```sh
pnpm exec prodshape change create CHG-<NAME>     # scaffold
# write the complete proposed artifacts under docs/product/changes/active/chg-<name>/proposed/
pnpm exec prodshape change validate CHG-<NAME>
# review, set `status: approved`, then:
scripts/product-accept.sh CHG-<NAME>
```

A change the client asked for is confirmed in writing first (Clause 11 of the Agreement).
Tasks that cite a changed rule are reported by `scripts/verify.sh` until someone has re-read
them.
