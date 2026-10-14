#!/usr/bin/env node
// Every citation in docs/tasks must point at an existing artifact whose content has not
// changed since the task was stamped. A stale citation means the rule moved after the task was
// written: a human re-reads the task against the rule, then re-stamps it (pnpm tasks:cite T-…).
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { ROOT, Report } from "./common.mjs";

const report = new Report("citations");
let output;
try {
  output = execFileSync(join(ROOT, "node_modules/.bin/prodshape"), ["citations", "verify", "--format", "json"], {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 64 * 1024 * 1024,
  });
} catch (error) {
  output = error.stdout ?? "";
  if (!output) {
    report.error(`prodshape citations verify failed: ${error.stderr || error.message}`);
    report.finish("");
  }
}

const result = JSON.parse(output);
const counts = {};
for (const c of result.citations ?? []) {
  counts[c.status] = (counts[c.status] ?? 0) + 1;
  if (c.status === "current") continue;
  const hint =
    c.status === "stale"
      ? "the rule changed after this task was written; a human reviews the task, then re-stamps it"
      : c.status === "unresolved"
        ? "no such artifact in the accepted product definition"
        : "the digest does not match any recorded content";
  report.error(`${c.source}:${c.line} ${c.id} is ${c.status} (${hint})`);
}
report.finish(`${counts.current ?? 0} citation(s), all current`);
