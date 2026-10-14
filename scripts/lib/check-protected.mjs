#!/usr/bin/env node
// Backs up the edit hook: fails when this branch changes a protected file by any route
// (including shell commands, which the hook cannot see).
import { changedFiles, gitOk, baseRef, Report } from "./common.mjs";
import { protectionFor, gateEditsAllowed } from "./protected-paths.mjs";

const report = new Report("protected files");
const base = baseRef();
const files = changedFiles();
const existsOnBase = (file) => base !== null && gitOk(["cat-file", "-e", `${base}:${file}`]);

// A Product Change that has been applied moves under changes/completed/ in the same diff.
const changeApplied = files.some((f) => f.startsWith("docs/product/changes/completed/"));

const flagged = [];
for (const file of files) {
  const protection = protectionFor(file);
  if (!protection) continue;
  if (protection.kind === "never") {
    report.error(`${file}: ${protection.why}. It must not be committed.`);
  } else if (protection.kind === "model") {
    if (!changeApplied) report.error(`${file}: the product definition changed without an applied Product Change in the same branch.`);
  } else if (existsOnBase(file)) {
    flagged.push(`${file} (${protection.why})`);
  }
}

if (flagged.length) {
  const list = flagged.map((f) => `\n      ${f}`).join("");
  if (process.env.CI) {
    // In CI the human reviewing the pull request is the approval; make sure they see it.
    console.log(`::warning title=Gate files changed::This branch changes protected gate files:${flagged.join("; ")}`);
    report.note(`gate files changed, flagged for the reviewer:${list}`);
  } else if (gateEditsAllowed()) {
    report.note(`gate files changed with RA_ALLOW_GATE_EDITS=1:${list}`);
  } else {
    report.error(`protected gate files changed:${list}\n    Revert them, or have Răzvan re-run with RA_ALLOW_GATE_EDITS=1 if the change is intended.`);
  }
}

report.finish("no unapproved changes");
