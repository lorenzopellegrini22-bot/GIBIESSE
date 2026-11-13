// Build: copia il sito statico da public/ a dist/ (cartella pubblicata da Vercel).
// Nessuna dipendenza esterna: usa solo moduli integrati di Node.
import { cpSync, rmSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const src = "public";
const out = "dist";

if (!existsSync(join(src, "index.html"))) {
  console.error("Errore: manca public/index.html");
  process.exit(1);
}

rmSync(out, { recursive: true, force: true });
cpSync(src, out, { recursive: true });

console.log(`Build completata: ${readdirSync(out).join(", ")} -> ${out}/`);
