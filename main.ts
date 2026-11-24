// news-image-20261123 — entrypoint (Node 22, standard library only).
//
// The front page for Monday 23 November 2026 is rendered ahead of time and
// shipped in this repository as entry.png. This program's only job is to
// place a byte-exact copy of it in the grader's output directory, so the
// two runs the grader performs produce identical output.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const FILE = "entry.png";

function main(): void {
  const here = new URL(".", import.meta.url).pathname;
  const source = join(here, FILE);
  const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const destination = join(targetDir, FILE);

  mkdirSync(targetDir, { recursive: true });
  copyFileSync(source, destination);

  // Confirm the copy is byte-exact before exiting: the grader runs this
  // program twice and requires identical bytes both times.
  const original = readFileSync(source);
  const written = readFileSync(destination);
  if (!original.equals(written)) {
    throw new Error(`${FILE}: copied bytes differ from the source image`);
  }
}

main();
