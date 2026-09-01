// Runs after html-to-jsx.mjs: marks the interactive sections as client
// components and calls the hook that drives each one. Everything untouched
// stays a server component and ships no JS.
import fs from 'node:fs';

const HOOKS = {
  SeeItWork: 'useTerminal',
  ReliabilityCliff: 'useReliability',
  Embeddings: 'useEmbeddings',
  MarginalAgent: 'useMarginalAgent',
  ConvergencePrinciple: 'useSteps',
  CalibrationGate: 'useCalibration',
  Attention: 'useAttention',
};

/** Client only because of the hover handlers, no hook of their own. */
const HANDLER_ONLY = ['Nav', 'Hero', 'ContactCta'];

for (const name of [...Object.keys(HOOKS), ...HANDLER_ONLY]) {
  const p = `components/${name}.tsx`;
  let s = fs.readFileSync(p, 'utf8');
  if (s.startsWith("'use client'")) throw new Error(`${p} already wired`);

  const hook = HOOKS[name];
  if (hook) {
    const imp = `import { ${hook} } from '@/lib/hooks/${hook}';\n`;
    if (s.startsWith('import ')) {
      const gap = s.indexOf('\n\n');
      s = s.slice(0, gap + 1) + imp + s.slice(gap + 1);
    } else {
      s = `${imp}\n${s}`;
    }
    const marker = `export default function ${name}() {\n`;
    if (!s.includes(marker)) throw new Error(`${p}: component signature not found`);
    s = s.replace(marker, `${marker}  ${hook}();\n\n`);
  }

  fs.writeFileSync(p, `'use client';\n\n${s}`);
  console.log(`${name}: client${hook ? ` + ${hook}()` : ''}`);
}

const rest = fs
  .readdirSync('components')
  .filter((f) => f.endsWith('.tsx'))
  .map((f) => f.slice(0, -4))
  .filter((n) => !HOOKS[n] && !HANDLER_ONLY.includes(n) && n !== 'Reveal')
  .sort();
console.log(`\nserver components (no JS): ${rest.join(', ')}`);
