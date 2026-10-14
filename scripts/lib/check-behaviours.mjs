#!/usr/bin/env node
// Links the product definition to the tests:
//   - a task marked done must have at least one test naming each behaviour it claims;
//   - a test may only name a behaviour that exists and is active.
// A test names a behaviour by containing its ID, e.g. in a @DisplayName or a test title:
//   @DisplayName("SB-UNPAID-RESERVATION-RELEASED: reservation ends without payment")
//   test("SB-BROWSE-BY-CATEGORY shows only British Gold", ...)
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, asList, readModel, readTasks, rel, walk, Report } from "./common.mjs";

const TEST_ROOTS = ["apps/api/src/test", "apps/web", "packages"];
const isTestFile = (file) =>
  /apps\/api\/src\/test\/.+\.(java|kt)$/.test(file) || /\.(test|spec)\.(ts|tsx|js|mjs)$/.test(file) || /apps\/web\/e2e\/.+\.(ts|tsx)$/.test(file);

const report = new Report("behaviour coverage");
const model = readModel();

const named = new Map(); // behaviour id → files naming it
for (const root of TEST_ROOTS) {
  for (const file of walk(join(ROOT, root))) {
    const path = rel(file);
    if (!isTestFile(path)) continue;
    for (const match of readFileSync(file, "utf8").matchAll(/\bSB-[A-Z0-9]+(?:-[A-Z0-9]+)*\b/g)) {
      if (!named.has(match[0])) named.set(match[0], new Set());
      named.get(match[0]).add(path);
    }
  }
}

for (const [id, files] of named) {
  const artifact = model.get(id);
  const where = [...files].join(", ");
  if (!artifact) report.error(`${where}: names ${id}, which is not in the product definition`);
  else if (artifact.status !== "active") report.error(`${where}: names ${id}, which is ${artifact.status}, not active`);
}

let required = 0;
for (const task of readTasks()) {
  if (task.data.status !== "done") continue;
  for (const id of asList(task.data.behaviours)) {
    required += 1;
    if (!named.has(id)) report.error(`${task.data.id} is done but no test names ${id}`);
  }
}

const active = [...model.values()].filter((a) => a.type === "structured-behaviour" && a.status === "active").length;
const covered = [...named.keys()].filter((id) => model.get(id)?.status === "active").length;
report.finish(`${covered} of ${active} active behaviour(s) have a test; ${required} required by finished tasks`);
