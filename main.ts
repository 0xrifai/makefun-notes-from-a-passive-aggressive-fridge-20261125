// Notes From a Passive-Aggressive Fridge — make.fun entry.
//
// The fridge writes one note. The joke's turn: the first sentence sounds
// like a neutral sensor log ("4 minutes and 12 seconds"), the second
// sentence admits it was watching on purpose ("I timed it"), and the
// third escalates into a permanent grudge ("I always time it").
// The sting is that the fridge never forgets — it keeps a ledger.
//
// Ten candidate lines drafted in-session (avoiding the taken setups:
// yogurt age, door-sensor-told-the-ice-maker, "Per my last notification",
// echo/cold themes, and our two earlier fridge lines):
//  1. "You left me open for 4 minutes and 12 seconds. I timed it. I always time it."
//  2. "The salad dressing expired in March. I have been guarding it ever since. You are welcome."
//  3. "I moved the butter to the back. It asked me to."
//  4. "The crisper drawer is where vegetables go to be forgotten. I keep the receipts."
//  5. "My light only comes on when you open me. Even I am surprised you are still here at 3am."
//  6. "Best before is not a suggestion. It is a countdown I have been watching since Tuesday."
//  7. "That is the third time today you opened me just to stare. I am keeping score."
//  8. "I moved the milk to the back. It was hiding from you. Smart milk."
//  9. "The cheese from 2019 has seniority now. It outranks you in this kitchen."
// 10. "I raised your leftovers as my own. They call me Dad now, and they never visit you."
//
// Picked: #1. It is the only one that leans on the fridge's own sensors
// (the door-open timer) while staying petty and domestic, and the
// three-beat escalation lands the sting without explaining the joke.

import { mkdirSync, writeFileSync } from "node:fs";

// The note, built from its three beats so the escalation is visible
// in the code the same way it lands on the reader.
const beats: string[] = [
  "You left me open for 4 minutes and 12 seconds.",
  "I timed it.",
  "I always time it.",
];

const NOTE: string = beats.join(" ");

// Guardrails for the bounty format: exactly one line, 1-200 chars,
// no trailing newline — the grader compares the file contents.
if (NOTE.length < 1 || NOTE.length > 200) {
  throw new Error(`note must be 1-200 chars, got ${NOTE.length}`);
}
if (NOTE.includes("\n") || NOTE.includes("\r")) {
  throw new Error("note must be a single line");
}

// The grader runs this repo read-only, so the output MUST go to the
// absolute path /output/entry.txt — never a relative output/ directory.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NOTE, "utf8");
