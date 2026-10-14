---
name: ra-task
description: Carry out one task from docs/tasks/ end to end (read the task and its product rules, implement, test, verify, review, commit, summarise). Use whenever asked to do, start, continue or finish a task such as T-005, or to implement a file under docs/tasks/.
argument-hint: "T-0xx"
---

# Carrying out a task

The argument is a task ID (for example `T-005`). The task file is `docs/tasks/<ID>-*.md`.

## 1. Before writing anything

1. Read the task file completely, and `CLAUDE.md` if it is not already in context.
2. Check the front matter. **Stop and report** instead of starting when:
   - `spec` is `outline` (it must first be expanded into a full specification with Răzvan);
   - `blocked-by` is not empty (an open question has to be closed first);
   - a task in `depends-on` is not `done`.
3. Run `scripts/verify.sh fast product`. If it reports a stale or unresolved citation for this
   task, stop and report: a rule changed after the task was written, and a person must re-read
   the task against it. Do not re-stamp it.
4. Load the rules: `pnpm exec prodshape context <every ID in cites and behaviours>`. Read the
   output. These texts, not the task's summary of them, are what you build.
5. Read everything under "Read first", including `docs/engineering/reference-slice.md` once
   it exists.
6. Work on a branch of your own. In a worktree or a cloud session you already are; otherwise
   `git switch -c task/<ID>-<slug>`. Set the task's `status` to `in-progress`.

## 2. While building

- Implement the Scope, nothing from "Out of scope", nothing that is merely nearby.
- For each behaviour in `behaviours`, write a test whose name contains its ID
  (`@DisplayName("SB-…: …")`, `test("SB-…: …")`), at the layer the acceptance criteria name.
  Write it so that it fails if the rule is removed from the code.
- Use the product's words for names (`docs/product/model/domain/terms/`).
- Run `scripts/verify.sh fast` often. Fix causes, not symptoms.
- When something is not decided by a cited rule:
  - if the task's Engineering notes tell you to choose a default, choose it, name it as a
    constant, and list it in the summary;
  - otherwise **stop and report the question**. A wrong guess in a fixed-scope project costs
    more than a pause.
- If the task seems to need something on the excluded list (CON-SCOPE-001), a change to a
  gate, or an edit to the product definition: stop and report.

## 3. Finishing

1. `scripts/format.sh`, then `scripts/verify.sh full`. The last line must read
   `VERIFY PASSED`. If it does not, fix and repeat; never report success without it.
2. Go through the Acceptance criteria one by one and name the test or command that shows each.
3. Ask the **reviewer** subagent to review the diff against the task. Fix what it finds that
   is real; say in the summary what you disagreed with and why.
4. Set the task's `status` to `done`, run `scripts/verify.sh full` once more (the behaviour
   check now applies to this task), and commit on your branch. Do not push to or merge into
   `main`.
5. Write the summary as your final message:
   - what was built, in a few lines;
   - each acceptance criterion with its evidence;
   - defaults you chose that are not product rules;
   - new dependencies, with licences;
   - questions for Răzvan or the Client;
   - files Răzvan should read first, and anything left undone.

## If you are stuck

Three failed attempts at the same failure means the approach is wrong, not the attempt. Stop,
write down what you tried and what you observed, and report.
