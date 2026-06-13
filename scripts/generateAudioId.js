// Dev-only script (NOT bundled into the app). Generates Indonesian TTS audio.
//
// Creates app/assets/audio/id/W#.mp3 (one per dictionary word) and P#.mp3 (one
// per phrase), using OpenAI's text-to-speech API. Mirrors the es/it audio that
// ships with the app so playback works once the `audio` fields are wired in.
//
// Usage (run from repo root, Node 18+ for global fetch):
//   OPENAI_API_KEY=sk-...  node scripts/generateAudioId.js
//   PowerShell:  $env:OPENAI_API_KEY="sk-..."; node scripts/generateAudioId.js
//
// Optional env overrides: OPENAI_TTS_MODEL (default tts-1), OPENAI_TTS_VOICE
// (default nova), TTS_CONCURRENCY (default 4).
//
// Safe to re-run: existing files are skipped, so it resumes after interruption.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "app", "assets", "audio", "id");
const DICT_FILE = path.join(ROOT, "app", "lessons", "dictionary-id.js");
const PHRASE_FILE = path.join(ROOT, "app", "lessons", "phraseDictionary-id.js");

// Load scripts/.env (untracked) if present, without overriding real env vars.
// Format: one KEY=value per line; # comments and blank lines ignored.
(function loadDotEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    // strip optional surrounding quotes
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
})();

const API_KEY = process.env.OPENAI_API_KEY;
// gpt-4o-mini-tts honors `instructions`, which is required to make it pronounce
// Indonesian correctly. tts-1 ignores language and mangles non-English text.
const MODEL = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";
const VOICE = process.env.OPENAI_TTS_VOICE || "nova";
const INSTRUCTIONS =
  process.env.OPENAI_TTS_INSTRUCTIONS ||
  "Read the text aloud in Bahasa Indonesia (Indonesian) with a natural native " +
    "Indonesian accent. The text is Indonesian, not English.";
const CONCURRENCY = parseInt(process.env.TTS_CONCURRENCY || "4", 10);

// --- Load the data files (they use `export default {...}`, optionally with a
// legacy `export default X = {...}` named-global form) ---
function loadDefault(file) {
  const src = fs.readFileSync(file, "utf8");
  // Swap the ESM export for a CommonJS assignment. Also neutralize any
  // `require("...mp3")` asset calls (Metro-only; node can't resolve them) so the
  // file can be evaluated for its data even after audio fields are added.
  const cjs = src
    .replace(/export\s+default\s+(?:\w+\s*=\s*)?/, "module.exports = ")
    .replace(/require\(\s*"[^"]*"\s*\)/g, '""');
  const sandbox = { module: { exports: {} } };
  vm.runInNewContext(cjs, sandbox, { filename: file });
  return sandbox.module.exports;
}

// --- Replicate the app's runtime text pipeline for phrases ---
// (mirrors app/utility/stripArray.js, translate.js, punctuate.js)
function stripToken(token) {
  // Keep latin letters/digits/underscore/hyphen; lowercase. Underscores are the
  // dictionary key separator, so they are preserved for lookup.
  return token.replace(/[^A-Za-zŽžÀ-ÿ0-9_-]/g, "").toLowerCase();
}

function buildPhraseText(order, dict) {
  const rawTokens = order.split(" ");
  return rawTokens
    .map((raw) => {
      const key = stripToken(raw);
      if (key === "" || /^[^\w\s]+$/.test(key)) {
        // pure punctuation (e.g. "-", "?") — keep as-is
        return key;
      }
      const entry = dict[key];
      if (!entry) throw new Error(`No dictionary entry for token "${key}"`);
      let word = entry.translation;
      // Reattach a trailing punctuation mark from the original token.
      const punct = /\W/.exec(raw);
      if (punct) word += punct[0];
      return word;
    })
    .filter((w) => w !== "")
    .join(" ");
}

// --- OpenAI TTS request with retry on rate-limit / transient errors ---
async function synthesize(text, outPath, attempt = 1) {
  const res = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      voice: VOICE,
      input: text,
      response_format: "mp3",
      // Only gpt-4o-* TTS models accept instructions; harmless to include here
      // since that is the default model.
      ...(INSTRUCTIONS ? { instructions: INSTRUCTIONS } : {}),
    }),
  });

  if (!res.ok) {
    const retryable = res.status === 429 || res.status >= 500;
    if (retryable && attempt <= 5) {
      const waitMs = Math.min(2000 * attempt, 10000);
      await new Promise((r) => setTimeout(r, waitMs));
      return synthesize(text, outPath, attempt + 1);
    }
    const body = await res.text();
    throw new Error(`TTS ${res.status} for "${text}": ${body}`);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outPath, buf);
}

// --- Simple concurrency-limited runner ---
async function runPool(jobs, worker) {
  let i = 0;
  let done = 0;
  const total = jobs.length;
  async function next() {
    while (i < jobs.length) {
      const job = jobs[i++];
      await worker(job);
      done++;
      if (done % 10 === 0 || done === total) {
        console.log(`  ${done}/${total}`);
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, next));
}

async function main() {
  if (!API_KEY) {
    console.error("ERROR: set OPENAI_API_KEY in your environment first.");
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const dict = loadDefault(DICT_FILE);
  const phrases = loadDefault(PHRASE_FILE);

  // Build the job list: { id, text, outPath }
  const jobs = [];

  for (const key of Object.keys(dict)) {
    const entry = dict[key];
    const id = entry.wordIdNum; // e.g. "W9"
    const text = entry.translation;
    if (!text) {
      console.warn(`  skip ${id} (${key}): empty translation`);
      continue;
    }
    jobs.push({ id, text, outPath: path.join(OUT_DIR, `${id}.mp3`) });
  }

  for (const p of phrases) {
    const id = p.phraseId; // e.g. "P1"
    const text = buildPhraseText(p.order, dict);
    if (!text) {
      console.warn(`  skip ${id}: empty phrase`);
      continue;
    }
    jobs.push({ id, text, outPath: path.join(OUT_DIR, `${id}.mp3`) });
  }

  const pending = jobs.filter((j) => !fs.existsSync(j.outPath));
  console.log(
    `Total ${jobs.length} clips; ${jobs.length - pending.length} already exist; ` +
      `generating ${pending.length} with ${MODEL}/${VOICE} (concurrency ${CONCURRENCY}).`
  );

  await runPool(pending, async (job) => {
    await synthesize(job.text, job.outPath);
  });

  const made = fs.readdirSync(OUT_DIR).filter((f) => f.endsWith(".mp3")).length;
  console.log(`Done. ${made} mp3 files in app/assets/audio/id/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
