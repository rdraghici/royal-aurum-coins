#!/usr/bin/env node
// Fails when this branch ADDS a line that switches a check off: a skipped test, a suppressed
// warning, a disabled lint rule. Getting to green by silencing the gate is not done.
// Deliberate exceptions go in quality/suppressions-allowlist.txt (one `path:fragment` per line),
// which only a human edits.
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, baseRef, git, gitOk, isFile, Report } from "./common.mjs";

const SCOPE = /^(apps|packages)\//;

// Each group applies to the file types it names.
const GROUPS = [
  {
    files: /\.(java|kt)$/,
    patterns: [
      [/@Disabled\b/, "@Disabled test"],
      [/@Ignore\b/, "@Ignore test"],
      [/@Suppress(Warnings|FBWarnings)\b/, "suppressed warning"],
      [/\bNOSONAR\b|\bNOPMD\b|CHECKSTYLE:OFF|spotless:off/, "analyser switched off"],
      [/\bassumeTrue\(\s*false\s*\)/, "test skipped with assumeTrue(false)"],
    ],
  },
  {
    files: /(^|\/)pom\.xml$|\.(properties|ya?ml)$/,
    patterns: [
      [/<skipTests>\s*true|<skipITs>\s*true|maven\.test\.skip|-DskipTests\b/, "tests switched off in the build"],
      [/<failOnViolation>\s*false|<haltOnFailure>\s*false|<failOnWarning>\s*false|<failsOnError>\s*false/, "build check made non-failing"],
    ],
  },
  {
    files: /\.(ts|tsx|js|jsx|mjs|cjs)$/,
    patterns: [
      [/eslint-disable/, "eslint rule disabled"],
      [/@ts-(ignore|expect-error|nocheck)/, "TypeScript check suppressed"],
      [/\b(it|test|describe)\.(skip|only|fixme|todo)\b|\b(xit|xdescribe|fit|fdescribe)\(/, "test skipped or focused"],
      [/\bas any\b|:\s*any\b|<any>/, "explicit any"],
    ],
  },
];
const patternsFor = (file) => GROUPS.filter((g) => g.files.test(file)).flatMap((g) => g.patterns);
const SOURCE = { test: (file) => patternsFor(file).length > 0 };

const allowlistFile = join(ROOT, "quality/suppressions-allowlist.txt");
const allowlist = existsSync(allowlistFile)
  ? readFileSync(allowlistFile, "utf8").split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#"))
  : [];
const allowed = (file, line) =>
  allowlist.some((entry) => {
    const i = entry.indexOf(":");
    return i > 0 && entry.slice(0, i) === file && line.includes(entry.slice(i + 1));
  });

/** Added lines per file, from a unified diff with no context. */
function addedLines(diff) {
  const out = new Map();
  let file = null;
  for (const line of diff.split("\n")) {
    if (line.startsWith("+++ ")) {
      file = line.startsWith("+++ b/") ? line.slice(6) : null;
    } else if (file && line.startsWith("+") && !line.startsWith("+++")) {
      if (!out.has(file)) out.set(file, []);
      out.get(file).push(line.slice(1));
    }
  }
  return out;
}

const added = new Map();
const merge = (map) => {
  for (const [file, lines] of map) added.set(file, [...(added.get(file) ?? []), ...lines]);
};

const hasHead = gitOk(["rev-parse", "--verify", "--quiet", "HEAD"]);
const base = baseRef();
if (hasHead && base) {
  try {
    merge(addedLines(git(["diff", "--unified=0", "--no-color", `${base}...HEAD`], { maxBuffer: 256 * 1024 * 1024 })));
  } catch {
    /* unrelated histories */
  }
}
if (hasHead) merge(addedLines(git(["diff", "--unified=0", "--no-color", "HEAD"], { maxBuffer: 256 * 1024 * 1024 })));
for (const file of git(["ls-files", "--others", "--exclude-standard"]).split("\n").filter(Boolean)) {
  const path = join(ROOT, file);
  if (isFile(path) && SCOPE.test(file) && SOURCE.test(file)) merge(new Map([[file, readFileSync(path, "utf8").split("\n")]]));
}

const report = new Report("suppressions");
for (const [file, lines] of added) {
  if (!SCOPE.test(file) || !SOURCE.test(file)) continue;
  for (const line of lines) {
    for (const [pattern, label] of patternsFor(file)) {
      if (pattern.test(line) && !allowed(file, line)) {
        report.error(`${file}: ${label} → ${line.trim().slice(0, 140)}`);
        break;
      }
    }
  }
}
report.finish("no new suppressed checks");
