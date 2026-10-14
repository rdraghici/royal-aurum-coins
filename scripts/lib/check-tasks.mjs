#!/usr/bin/env node
// Checks docs/tasks against the accepted product definition and the contracted scope:
//   - every task file has valid front matter and refers only to things that exist;
//   - a task that is ready to start cites no draft artifact (drafts mean an open decision);
//   - every cited artifact is stamped in the task's "Product rules" block;
//   - every contracted scope clause (docs/tasks/scope.json) is covered by a task;
//   - every active structured behaviour is planned in a task.
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { TASKS_DIR, asList, readModel, readTasks, rel, Report } from "./common.mjs";

const STATUS = ["todo", "in-progress", "done"];
const SPEC = ["ready", "outline"];
const MODE = ["supervised", "delegate"];
const REVIEW = ["standard", "strict"];
const REQUIRED_SECTIONS = {
  ready: ["Goal", "Product rules", "Read first", "Scope", "Out of scope", "Acceptance criteria", "Done when"],
  outline: ["Goal", "Product rules", "Scope", "Open decisions"],
};

const report = new Report("tasks");
const model = readModel();
if (model.size === 0) {
  report.error(
    "the product definition has not been accepted yet (docs/product/model is empty). " +
      "Review docs/product/changes/active/, set the change to `status: approved`, then run scripts/product-accept.sh <CHG-ID>.",
  );
  report.finish("");
}

const tasks = readTasks();
const byId = new Map();
for (const task of tasks) {
  const where = rel(task.file);
  const d = task.data;
  const fail = (message) => report.error(`${where}: ${message}`);

  if (!/^T-\d{3}$/.test(d.id ?? "")) fail("`id` must look like T-001");
  else if (!task.name.startsWith(`${d.id}-`)) fail(`file name must start with ${d.id}-`);
  if (byId.has(d.id)) fail(`duplicate id ${d.id}`);
  byId.set(d.id, task);

  if (!d.title) fail("`title` is required");
  if (![1, 2].includes(d.phase)) fail("`phase` must be 1 or 2");
  if (!STATUS.includes(d.status)) fail(`\`status\` must be one of ${STATUS.join(", ")}`);
  if (!SPEC.includes(d.spec)) fail(`\`spec\` must be one of ${SPEC.join(", ")}`);
  if (!MODE.includes(d.mode)) fail(`\`mode\` must be one of ${MODE.join(", ")}`);
  if (!REVIEW.includes(d.review)) fail(`\`review\` must be one of ${REVIEW.join(", ")}`);
  for (const key of ["covers", "cites", "behaviours", "depends-on", "blocked-by"]) {
    if (!Array.isArray(d[key])) fail(`\`${key}\` must be a list (use [] when empty)`);
  }

  for (const heading of REQUIRED_SECTIONS[d.spec] ?? []) {
    if (!new RegExp(`^## ${heading}\\s*$`, "m").test(task.body)) fail(`missing section "## ${heading}"`);
  }

  const blocked = asList(d["blocked-by"]).length > 0;
  if (d.status !== "todo" && d.spec !== "ready") fail("only a task with `spec: ready` can be in progress or done");
  if (d.status !== "todo" && blocked) fail("a task that is in progress or done cannot have `blocked-by` entries");

  const stamped = new Set([...task.text.matchAll(/pdac:cite id="([A-Z0-9-]+)"/g)].map((m) => m[1]));
  for (const id of asList(d.behaviours)) if (!id.startsWith("SB-")) fail(`behaviours entry ${id} is not a structured behaviour`);
  for (const id of new Set([...asList(d.cites), ...asList(d.behaviours)])) {
    const artifact = model.get(id);
    if (!artifact) {
      fail(`cites ${id}, which is not in the accepted product definition`);
      continue;
    }
    if (!stamped.has(id)) fail(`${id} is not stamped in the Product rules block (run: pnpm tasks:cite ${d.id})`);
    if (artifact.status === "retired") fail(`cites retired artifact ${id}`);
    if (artifact.status === "draft" && d.spec === "ready" && !blocked) {
      fail(`cites draft ${id} but is ready and unblocked: add the open question to \`blocked-by\`, or wait until ${id} is accepted`);
    }
  }
  for (const id of stamped) {
    if (!asList(d.cites).includes(id) && !asList(d.behaviours).includes(id)) fail(`${id} is stamped but not listed in \`cites\` or \`behaviours\``);
  }
}

for (const task of tasks) {
  for (const dep of asList(task.data["depends-on"])) {
    if (!byId.has(dep)) report.error(`${rel(task.file)}: depends on unknown task ${dep}`);
    else if (task.data.status === "done" && byId.get(dep).data.status !== "done") {
      report.error(`${rel(task.file)}: is done but depends on ${dep}, which is not`);
    }
  }
}

// Contracted scope → tasks.
const scopeFile = join(TASKS_DIR, "scope.json");
if (existsSync(scopeFile)) {
  const scope = JSON.parse(readFileSync(scopeFile, "utf8"));
  for (const [phase, clauses] of Object.entries(scope.phases ?? {})) {
    for (const clause of Object.keys(clauses)) {
      const covering = tasks.filter((t) => String(t.data.phase) === phase && asList(t.data.covers).includes(clause));
      if (covering.length === 0) report.error(`scope clause ${clause} (phase ${phase}: ${clauses[clause]}) is not covered by any task`);
    }
    for (const task of tasks.filter((t) => String(t.data.phase) === phase)) {
      for (const clause of asList(task.data.covers)) {
        if (!(clause in clauses)) report.error(`${rel(task.file)}: covers unknown scope clause ${clause}`);
      }
    }
  }
} else {
  report.error("docs/tasks/scope.json is missing");
}

// Active behaviours → tasks.
const planned = new Set(tasks.flatMap((t) => asList(t.data.behaviours)));
for (const [id, artifact] of model) {
  if (artifact.type === "structured-behaviour" && artifact.status === "active" && !planned.has(id)) {
    report.error(`active behaviour ${id} is not planned in any task`);
  }
}

const count = (status) => tasks.filter((t) => t.data.status === status).length;
const blockedCount = tasks.filter((t) => asList(t.data["blocked-by"]).length > 0).length;
report.finish(`${tasks.length} task(s): ${count("done")} done, ${count("in-progress")} in progress, ${count("todo")} to do (${blockedCount} blocked by an open question)`);
