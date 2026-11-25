import { mkdirSync, writeFileSync } from "node:fs";

// The Moon, finally answering back: four billion years of wishes,
// howls, and late-night promises — and nobody ever wished for the Moon.
const entry =
  "You howl, you wish, you promise to change — and in four billion years, not one of you has ever wished for me.";

// Gate: the entry must be 1-240 characters, not only whitespace.
if (entry.length < 1 || entry.length > 240 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-240 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
