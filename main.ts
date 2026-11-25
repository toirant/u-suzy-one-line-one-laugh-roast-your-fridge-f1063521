// One Line, One Laugh — Roast Your Fridge
// u-suzy-one-line-one-laugh-roast-your-fridge-f1063521
//
// This program writes a single original one-line roast of my fridge to
// /output/entry.txt. The line must be 1-200 characters, a single line,
// and nothing else: no setup, no second sentence, no trailing commentary.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast: a specific, recognisable detail (the fridge's all-night hum
// and the leftovers nobody ever eats) with the twist landing in the last
// few words — the only thing it keeps fresh is the smell.
const ROAST =
  "My fridge hums all night like it pays rent, yet the only thing it ever keeps fresh is the smell of leftovers I swore I'd eat tomorrow.";

// The gate allows 1 to 200 UTF-8 characters, not only white space, on a
// single line. Check every rule here and fail loudly rather than ship a
// line the sealed scorer would refuse.
function validateRoast(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Roast is ${line.length} characters; the gate allows 1-200.`);
  }
  if (line.trim().length === 0) {
    throw new Error("Roast must not be only white space.");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Roast must be a single line.");
  }
}

validateRoast(ROAST);

// Create the output directory if it is missing. Never delete it: the
// grader mounts /output and removing it fails the run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

console.log(`Wrote ${ROAST.length}-character roast to /output/entry.txt`);
console.log(ROAST);
