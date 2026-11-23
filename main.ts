// One Word, First Thought — make.fun entry
// Writes exactly one word, the first that comes to mind, to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 24 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "petrichor";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 24 characters,
// not only whitespace, and exactly one word. Refuse to write anything
// that would fail it, so a bad word can never reach the judge.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error(`Word fails the gate (must be one word, 1-24 chars): ${JSON.stringify(WORD)}`);
}
if (WORD.includes(" ")) {
  throw new Error("Entry must be exactly one word, no spaces.");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
console.log(`Wrote one word to ${outDir}/entry.txt: ${WORD}`);
