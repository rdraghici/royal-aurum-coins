// The single list of paths an agent must not change on its own.
// Used by the PreToolUse hook (.claude/hooks/protect-paths.mjs) and by the diff check
// (scripts/lib/check-protected.mjs) that backs the hook up.
//
//   never   blocked always, for everyone working through Claude Code (secrets).
//   model   the accepted product definition: written only by `prodshape change apply`.
//   locked  quality gates and their configuration: blocked once the file exists on the base
//           branch. New files are allowed, so the bootstrap tasks can create them. A human
//           changing a gate on purpose starts the session with RA_ALLOW_GATE_EDITS=1.
//
// Patterns: `**` matches any number of path segments, `*` matches within one segment.

export const PROTECTED = [
  { kind: "never", pattern: "**/.env", why: "environment files hold credentials" },
  { kind: "never", pattern: "**/.env.local", why: "environment files hold credentials" },
  { kind: "never", pattern: "**/.env.*.local", why: "environment files hold credentials" },
  { kind: "never", pattern: "**/.env.production", why: "environment files hold credentials" },
  { kind: "never", pattern: "secrets/**", why: "secrets never live in the repository" },

  { kind: "model", pattern: "docs/product/model/**", why: "the accepted product definition changes only through an applied Product Change" },

  { kind: "locked", pattern: ".claude/settings.json", why: "permissions and hooks are a gate" },
  { kind: "locked", pattern: ".claude/hooks/**", why: "hooks are a gate" },
  { kind: "locked", pattern: ".claude/agents/**", why: "the reviewer's instructions are a gate" },
  { kind: "locked", pattern: ".product/**", why: "product-definition tooling configuration" },
  { kind: "locked", pattern: ".github/workflows/**", why: "CI is a gate" },
  { kind: "locked", pattern: "scripts/verify.sh", why: "the verify script is the definition of done" },
  { kind: "locked", pattern: "scripts/product-accept.sh", why: "product acceptance is a human step" },
  { kind: "locked", pattern: "scripts/lib/**", why: "repository checks are gates" },
  { kind: "locked", pattern: "quality/**", why: "gate thresholds and allowlists" },
  { kind: "locked", pattern: "apps/api/quality/**", why: "static-analysis configuration" },
  { kind: "locked", pattern: "apps/api/lombok.config", why: "affects what the analysers see" },
  { kind: "locked", pattern: "apps/api/src/test/java/**/architecture/**", why: "architecture rules are a gate" },
  { kind: "locked", pattern: "apps/api/src/main/resources/db/migration/**", why: "a migration that has reached main is immutable; add a new one" },
  { kind: "locked", pattern: "apps/web/eslint.config.*", why: "lint rules are a gate" },
  { kind: "locked", pattern: "apps/web/.dependency-cruiser.*", why: "import boundaries are a gate" },
  { kind: "locked", pattern: "apps/web/tsconfig.json", why: "compiler strictness is a gate" },
  { kind: "locked", pattern: "apps/web/vitest.config.*", why: "test configuration is a gate" },
  { kind: "locked", pattern: "apps/web/playwright.config.*", why: "test configuration is a gate" },
];

function toRegExp(pattern) {
  let re = "";
  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];
    if (c === "*" && pattern[i + 1] === "*") {
      if (pattern[i + 2] === "/") {
        re += "(?:.*/)?"; // `**/` also matches zero segments
        i += 2;
      } else {
        re += ".*";
        i += 1;
      }
    } else if (c === "*") {
      re += "[^/]*";
    } else {
      re += c.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    }
  }
  return new RegExp(`^${re}$`);
}

const COMPILED = PROTECTED.map((entry) => ({ ...entry, re: toRegExp(entry.pattern) }));

/** The protection entry matching a repository-relative path (forward slashes), or null. */
export function protectionFor(relativePath) {
  return COMPILED.find((entry) => entry.re.test(relativePath)) ?? null;
}

export const gateEditsAllowed = () => process.env.RA_ALLOW_GATE_EDITS === "1";
