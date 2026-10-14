#!/usr/bin/env node
// PreToolUse hook for file-editing tools. Exit 2 blocks the edit and shows the message to Claude.
// It reads the hook input (JSON) on stdin and decides from the target path alone.
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, isAbsolute, relative, resolve, sep } from "node:path";
import { protectionFor, gateEditsAllowed } from "../../scripts/lib/protected-paths.mjs";

function readStdin() {
  return new Promise((done) => {
    let data = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (chunk) => (data += chunk));
    process.stdin.on("end", () => done(data));
  });
}

function git(cwd, args) {
  return execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
}

/** The closest directory that exists, walking up from a path that may not exist yet. */
function nearestExistingDir(path) {
  let dir = dirname(path);
  while (!existsSync(dir) && dirname(dir) !== dir) dir = dirname(dir);
  return dir;
}

function existsOnBase(repo, relativePath) {
  for (const ref of ["origin/main", "main"]) {
    try {
      git(repo, ["cat-file", "-e", `${ref}:${relativePath}`]);
      return true;
    } catch {
      /* not on this ref, or the ref does not exist */
    }
  }
  return false;
}

function block(message) {
  process.stderr.write(`Blocked: ${message}\n`);
  process.exit(2);
}

const raw = await readStdin();
let input;
try {
  input = JSON.parse(raw);
} catch {
  process.exit(0); // not a hook invocation we understand; never break the session over it
}

const toolInput = input?.tool_input ?? {};
const target = toolInput.file_path ?? toolInput.notebook_path ?? toolInput.path;
if (typeof target !== "string" || target === "") process.exit(0);

const absolute = isAbsolute(target) ? target : resolve(input.cwd ?? process.cwd(), target);

let repo;
try {
  // A background session works in its own git worktree, so the repository root is taken from
  // the file's own location, not from where the session was started.
  repo = git(nearestExistingDir(absolute), ["rev-parse", "--show-toplevel"]);
} catch {
  process.exit(0); // outside any repository
}

const relativePath = relative(repo, absolute).split(sep).join("/");
if (relativePath.startsWith("..")) process.exit(0);

const protection = protectionFor(relativePath);
if (!protection) process.exit(0);

if (protection.kind === "never") {
  block(`${relativePath} must not be written through Claude Code: ${protection.why}. Ask Răzvan to make this change himself.`);
}

if (protection.kind === "model") {
  block(
    `${relativePath} is part of the accepted product definition: ${protection.why}. ` +
      "Propose the change under docs/product/changes/active/<chg-id>/proposed/ (see the product skills) and stop for Răzvan's approval.",
  );
}

// kind === "locked"
if (gateEditsAllowed()) process.exit(0);
if (!existsOnBase(repo, relativePath)) process.exit(0); // new file: bootstrap and new migrations are fine

block(
  `${relativePath} is a protected gate file (${protection.why}). ` +
    "Do not work around it. If the task cannot be done without changing it, stop and report why; " +
    "Răzvan can make the change in a session started with RA_ALLOW_GATE_EDITS=1.",
);
