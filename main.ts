const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// The phone frames its last percent as a gift, but the gift is malicious: it silences your alarm and calls the sabotage a courtesy.
const ENTRY = "Save your charger. I'm spending my last percent turning off your alarm — you're welcome.";

function assertValidEntry(entry) {
  if (typeof entry !== "string" || entry.trim() === "") {
    throw new Error("Entry must be a non-blank string.");
  }
  if (/[\n\r\u2028\u2029]/.test(entry)) {
    throw new Error("Entry must be a single line.");
  }
  if ([...entry].length > 199) {
    throw new Error(`Entry must be at most 199 characters (got ${[...entry].length}).`);
  }
}

assertValidEntry(ENTRY);

const outDir = process.env.OUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(`${ENTRY}\n`);
