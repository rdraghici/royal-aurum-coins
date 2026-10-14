// Shared helpers for the repository checks. No build step: plain Node (>= 22).
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
export const MODEL_DIR = join(ROOT, "docs/product/model");
export const CHANGES_ACTIVE_DIR = join(ROOT, "docs/product/changes/active");
export const TASKS_DIR = join(ROOT, "docs/tasks");

const SKIP_DIRS = new Set(["node_modules", ".git", ".next", "target", "dist", "build", "coverage", ".verify", "playwright-report", "test-results"]);

/** Every file under `dir` (recursively), as absolute paths. Missing dir → []. */
export function walk(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) out.push(...walk(join(dir, entry.name)));
    } else if (entry.isFile()) {
      out.push(join(dir, entry.name));
    }
  }
  return out;
}

export const rel = (file) => relative(ROOT, file).split(sep).join("/");

/** Split a Markdown file into YAML front matter (parsed) and body. */
export function readFrontMatter(file) {
  const text = readFileSync(file, "utf8");
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(text);
  if (!match) return { data: null, body: text, text };
  return { data: parseYaml(match[1]) ?? {}, body: match[2], text };
}

/** Artifacts found under a directory, keyed by id. */
export function readArtifacts(dir) {
  const artifacts = new Map();
  for (const file of walk(dir)) {
    if (!file.endsWith(".md")) continue;
    const { data } = readFrontMatter(file);
    if (data?.id && data?.type) artifacts.set(data.id, { ...data, file });
  }
  return artifacts;
}

/** The accepted product definition. Empty until the first Product Change is applied. */
export const readModel = () => readArtifacts(MODEL_DIR);

/** Artifacts proposed by Product Changes that are still open (not yet accepted). */
export function readProposed() {
  const artifacts = new Map();
  if (!existsSync(CHANGES_ACTIVE_DIR)) return artifacts;
  for (const entry of readdirSync(CHANGES_ACTIVE_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    for (const [id, a] of readArtifacts(join(CHANGES_ACTIVE_DIR, entry.name, "proposed"))) artifacts.set(id, a);
  }
  return artifacts;
}

export function readTasks() {
  const tasks = [];
  if (!existsSync(TASKS_DIR)) return tasks;
  for (const name of readdirSync(TASKS_DIR).sort()) {
    if (!/^T-\d{3}-.+\.md$/.test(name)) continue;
    const file = join(TASKS_DIR, name);
    const { data, body, text } = readFrontMatter(file);
    tasks.push({ file, name, data: data ?? {}, body, text });
  }
  return tasks;
}

export const asList = (value) => (Array.isArray(value) ? value : value == null ? [] : [value]);

export function git(args, options = {}) {
  return execFileSync("git", args, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], ...options }).trim();
}

export function gitOk(args) {
  try {
    git(args);
    return true;
  } catch {
    return false;
  }
}

/** The ref a branch is compared against: origin/main, else main, else null (no history yet). */
export function baseRef() {
  for (const ref of ["origin/main", "main"]) if (gitOk(["rev-parse", "--verify", "--quiet", ref])) return ref;
  return null;
}

/**
 * Files changed on this branch relative to the base branch, plus uncommitted and untracked
 * files. On the base branch itself this is just the uncommitted work.
 */
export function changedFiles() {
  const files = new Set();
  const add = (output) => output.split("\n").filter(Boolean).forEach((f) => files.add(f));
  const base = baseRef();
  if (base && gitOk(["rev-parse", "--verify", "--quiet", "HEAD"])) {
    try {
      add(git(["diff", "--name-only", "--diff-filter=ACMR", `${base}...HEAD`]));
    } catch {
      /* unrelated histories: fall through to working-tree changes */
    }
  }
  if (gitOk(["rev-parse", "--verify", "--quiet", "HEAD"])) add(git(["diff", "--name-only", "--diff-filter=ACMR", "HEAD"]));
  add(git(["ls-files", "--others", "--exclude-standard"]));
  return [...files];
}

export const isFile = (file) => existsSync(file) && statSync(file).isFile();

export class Report {
  constructor(name) {
    this.name = name;
    this.errors = [];
    this.notes = [];
  }
  error(message) {
    this.errors.push(message);
  }
  note(message) {
    this.notes.push(message);
  }
  finish(okMessage) {
    for (const n of this.notes) console.log(`  note: ${n}`);
    if (this.errors.length) {
      for (const e of this.errors) console.error(`  ✗ ${e}`);
      console.error(`${this.name}: ${this.errors.length} problem(s)`);
      process.exit(1);
    }
    console.log(`${this.name}: ${okMessage}`);
  }
}
