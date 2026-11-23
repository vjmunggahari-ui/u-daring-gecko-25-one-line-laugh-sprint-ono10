// One-Line Laugh Sprint — one original funny line on everyday life.
// Writes the line to MAKEFUN_OUTPUT_DIR/entry.txt (no trailing newline,
// so the file holds exactly the line the judge compares).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My password needs a capital, a number and a symbol, so it reads like a ransom note from my own memory.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read-back self-check: the file must hold exactly the line, 1-200 chars,
// UTF-8, not only whitespace — otherwise fail loudly instead of shipping
// a bad entry.
import { readFileSync } from "node:fs";
const back = readFileSync(outPath, "utf8");
if (back !== LINE) throw new Error("entry.txt does not match the line");
if (back.length < 1 || back.length > 200) throw new Error("entry.txt length out of range");
if (back.trim().length === 0) throw new Error("entry.txt is only whitespace");
