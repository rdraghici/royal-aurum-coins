#!/usr/bin/env node
// Rewrites the "Product rules" block of task files from their `cites` and `behaviours`
// front matter, stamping each line with the artifact's current content digest.
//
//   node scripts/lib/cite-tasks.mjs --all
//   node scripts/lib/cite-tasks.mjs T-005 T-017
//
// Stamping a task says: "this task has been read against the rule as it stands now".
// It is a human act after a product change. Agents do not run this to clear a stale citation.
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, asList, readModel, readProposed, readTasks, rel } from "./common.mjs";

export const START = "<!-- product-rules:start -->";
export const END = "<!-- product-rules:end -->";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("usage: cite-tasks.mjs --all | T-001 [T-002 ...]");
  process.exit(2);
}

const model = readModel();
const proposed = readProposed();
const lookup = (id) => model.get(id) ?? proposed.get(id) ?? null;

const digests = new Map();
function digestOf(artifact) {
  if (!digests.has(artifact.id)) {
    const out = execFileSync(join(ROOT, "node_modules/.bin/prodshape"), ["cite", "--id", artifact.id, "--file", artifact.file], {
      cwd: ROOT,
      encoding: "utf8",
    });
    const match = /digest="(sha256:[0-9a-f]+)"/.exec(out);
    if (!match) throw new Error(`no digest for ${artifact.id}: ${out}`);
    digests.set(artifact.id, match[1]);
  }
  return digests.get(artifact.id);
}

const tasks = readTasks().filter((t) => args.includes("--all") || args.includes(t.data.id));
if (tasks.length === 0) {
  console.error("no matching task files");
  process.exit(1);
}

let failed = false;
for (const task of tasks) {
  const ids = [...new Set([...asList(task.data.cites), ...asList(task.data.behaviours)])];
  const lines = [];
  for (const id of ids) {
    const artifact = lookup(id);
    if (!artifact) {
      console.error(`${task.data.id}: ${id} is not in the product definition`);
      failed = true;
      continue;
    }
    const flag = artifact.status === "active" ? "" : ` _(${artifact.status})_`;
    lines.push(`- **${id}** ${artifact.title}${flag} <!-- pdac:cite id="${id}" digest="${digestOf(artifact)}" -->`);
  }
  const block = `${START}\n${lines.join("\n")}\n${END}`;
  const start = task.text.indexOf(START);
  const end = task.text.indexOf(END);
  if (start === -1 || end === -1 || end < start) {
    console.error(`${rel(task.file)}: missing "${START}" … "${END}" markers`);
    failed = true;
    continue;
  }
  const next = task.text.slice(0, start) + block + task.text.slice(end + END.length);
  if (next !== task.text) {
    writeFileSync(task.file, next);
    console.log(`stamped ${rel(task.file)} (${lines.length} citation(s))`);
  }
}
process.exit(failed ? 1 : 0);
