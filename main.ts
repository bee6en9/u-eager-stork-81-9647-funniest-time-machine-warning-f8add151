// Funniest Time Machine Warning Label
// Entry for u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
//
// The label: a genuine-looking safety warning whose punch lands in the
// last five words. The hazard is the butterfly effect, made concrete
// with a date (65,000,000 BC) instead of named flatly, and the joke is
// the absurd escalation: the butterfly you stepped on is now your boss.
// Straight face, no wasted words, one line, well under 120 characters.
//
// Deterministic: the text is a single constant, so every run writes
// byte-identical output. No trailing newline is added, so the file holds
// exactly the one label line and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "WARNING: Do not step on a butterfly in 65,000,000 BC. It is your boss now.";

// Gate guard: the sealed scorer requires 1-120 characters, not blank.
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 120 || !ENTRY_TEXT.trim()) {
  throw new Error(`entry text is ${ENTRY_TEXT.length} characters, outside 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
