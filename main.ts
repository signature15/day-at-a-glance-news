/**
 * day-at-a-glance-news — entrypoint for the make.fun news-image-20261117 contest.
 *
 * What it does:
 *   Copies the repository's committed poster (entry.png) to the output
 *   directory as entry.png. The source is resolved with
 *   new URL('./entry.png', import.meta.url), so the current working directory
 *   never matters.
 *
 * Determinism:
 *   This is a byte-for-byte copy of a fixed, committed asset. It reads no
 *   clock, uses no randomness, and takes no runtime input, so two runs write
 *   identical bytes to the destination.
 *
 * Why no network is needed:
 *   The poster is fully pre-rendered in the repository. The program performs no
 *   network access and uses only the Node.js standard library.
 *
 * Output location (MAKEFUN_OUTPUT_DIR stand-in):
 *   Inside the grading container the expected path is /output/entry.png.
 *   Outside the container, set MAKEFUN_OUTPUT_DIR to name the output directory
 *   instead (e.g. MAKEFUN_OUTPUT_DIR=./out node main.ts). That directory must
 *   already exist.
 */
import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
const destination = join(outputDir, "entry.png");

copyFileSync(source, destination);
console.log(`wrote ${destination}`);
