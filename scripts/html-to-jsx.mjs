// One-shot: convert the extracted dc-canvas template into React section components.
// Deterministic so the 105KB of hand-authored markup + SVG survives without
// transcription drift. Re-runnable against reference/extracted/template-only.html.
import fs from 'node:fs';
import path from 'node:path';
import { parseFragment } from 'parse5';

// --- attribute naming -------------------------------------------------------
// React wants camelCase for SVG/HTML presentation attributes but leaves
// data-*/aria-* alone. Everything else follows the generic kebab->camel rule.
const LITERAL = new Set(['viewBox', 'preserveAspectRatio', 'xmlns']);
const EXPLICIT = {
  class: 'className',
  for: 'htmlFor',
  'http-equiv': 'httpEquiv',
  crossorigin: 'crossOrigin',
  'xlink:href': 'xlinkHref',
  'xmlns:xlink': 'xmlnsXlink',
  // range inputs are driven imperatively by the diagram hooks, never controlled
  value: 'defaultValue',
};

function jsxAttrName(name) {
  if (name.startsWith('data-') || name.startsWith('aria-')) return name;
  if (EXPLICIT[name]) return EXPLICIT[name];
  if (LITERAL.has(name)) return name;
  if (!name.includes('-')) return name;
  return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

// --- style string -> JSX object --------------------------------------------
// Split on top-level ';' only: gradient/mask values carry nested parens.
function splitDecls(css) {
  const out = [];
  let depth = 0;
  let buf = '';
  for (const ch of css) {
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    if (ch === ';' && depth === 0) {
      out.push(buf);
      buf = '';
    } else buf += ch;
  }
  if (buf.trim()) out.push(buf);
  return out;
}

function styleProp(prop) {
  const p = prop.trim();
  if (p.startsWith('--')) return `'${p}'`; // custom property: must stay quoted
  if (p.startsWith('-webkit-')) return 'Webkit' + camel(p.slice(8));
  if (p.startsWith('-moz-')) return 'Moz' + camel(p.slice(5));
  if (p.startsWith('-ms-')) return 'ms' + camel(p.slice(4)); // React: lowercase ms
  return p.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
const camel = (s) => s.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());

function styleToObject(css) {
  // A Map dedupes repeated declarations the way the CSS cascade does — last
  // wins — which a JS object literal cannot express twice.
  const decls = new Map();
  for (const decl of splitDecls(css)) {
    const i = decl.indexOf(':');
    if (i === -1) continue;
    const prop = styleProp(decl.slice(0, i));
    const val = decl.slice(i + 1).trim();
    if (!prop || !val) continue;
    decls.delete(prop); // re-insert so the surviving value keeps its final position
    decls.set(prop, val);
  }
  const parts = [...decls].map(([p, v]) => `${p}: ${JSON.stringify(v)}`);
  return `{{ ${parts.join(', ')} }}`;
}

// --- text -------------------------------------------------------------------
function jsxText(t) {
  return t
    .replace(/[{}]/g, (c) => `{'${c}'}`)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/ /g, '&nbsp;');
}

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr']);

// HTML event attributes are all-lowercase; React props are camelCase and the
// word boundaries are not recoverable from the lowercase form.
const REACT_EVENTS = [
  'Click', 'DoubleClick', 'MouseDown', 'MouseUp', 'MouseMove', 'MouseEnter',
  'MouseLeave', 'MouseOver', 'MouseOut', 'ContextMenu', 'Focus', 'Blur',
  'Change', 'Input', 'Submit', 'Reset', 'KeyDown', 'KeyUp', 'KeyPress',
  'TouchStart', 'TouchMove', 'TouchEnd', 'TouchCancel', 'PointerDown',
  'PointerUp', 'PointerMove', 'PointerEnter', 'PointerLeave', 'Scroll',
  'Wheel', 'Load', 'Error', 'Animation', 'TransitionEnd',
];
const EVENT_MAP = Object.fromEntries(
  REACT_EVENTS.map((e) => [`on${e.toLowerCase()}`, `on${e}`]),
);

// --- serializer -------------------------------------------------------------
// Whitespace classes that deliberately exclude U+00A0: the markup uses &nbsp;
// as real content, and both \s and String.trim() would eat it.
const LEAD = /^[ \t\n\r\f]*/;
const TAIL = /[ \t\n\r\f]*$/;
const RUN = /[ \t\n\r\f]+/g;

/**
 * Children are emitted one per line, and JSX drops whitespace that touches a
 * line break — so any space that actually renders has to come back as {' '}.
 * A whitespace run containing a newline is source indentation; one without is
 * a real inter-element space ("meets <span>value</span>").
 */
function textNode(raw, pad) {
  const lead = LEAD.exec(raw)[0];
  if (lead.length === raw.length) {
    return raw.includes('\n') ? '' : `${pad}{' '}\n`;
  }
  const tail = TAIL.exec(raw)[0];
  const core = raw.slice(lead.length, raw.length - tail.length).replace(RUN, ' ');
  const before = lead && !lead.includes('\n') ? "{' '}" : '';
  const after = tail && !tail.includes('\n') ? "{' '}" : '';
  return `${pad}${before}${jsxText(core)}${after}\n`;
}

const handlers = new Set();

function serialize(node, indent) {
  const pad = '  '.repeat(indent);

  if (node.nodeName === '#text') return textNode(node.value, pad);
  if (node.nodeName === '#comment') {
    const c = node.data.trim().replace(/\*\//g, '*\\/');
    return `${pad}{/* ${c} */}\n`;
  }

  const tag = node.tagName;
  const attrs = [];
  for (const a of node.attrs || []) {
    let name = a.name;
    let value = a.value;

    // dc-canvas event binding: onmouseenter="{{ navHover }}" -> onMouseEnter={navHover}
    const bind = /^\{\{\s*([A-Za-z0-9_$]+)\s*\}\}$/.exec(value.trim());
    if (bind && name.startsWith('on')) {
      const evt = EVENT_MAP[name];
      if (!evt) throw new Error(`unmapped event attribute: ${name}`);
      handlers.add(bind[1]);
      attrs.push(`${evt}={${bind[1]}}`);
      continue;
    }
    if (name === 'style') {
      attrs.push(`style=${styleToObject(value)}`);
      continue;
    }
    attrs.push(`${jsxAttrName(name)}=${JSON.stringify(value)}`);
  }

  // attribute layout: inline when short, one-per-line when long
  const inline = attrs.join(' ');
  const head = inline.length <= 88
    ? `<${tag}${inline ? ' ' + inline : ''}`
    : `<${tag}\n${attrs.map((a) => pad + '  ' + a).join('\n')}\n${pad}`;

  // Keep inline spaces between elements; drop only source indentation.
  const kids = (node.childNodes || []).filter(
    (c) => !(c.nodeName === '#text' && !c.value.trim() && c.value.includes('\n')),
  );

  if (VOID.has(tag) || kids.length === 0) return `${pad}${head} />\n`;

  let out = `${pad}${head}>\n`;
  for (const c of kids) out += serialize(c, indent + 1);
  out += `${pad}</${tag}>\n`;
  return out;
}

// --- split into sections ----------------------------------------------------
const NAMES = [
  'Nav', 'Hero', 'SeeItWork', 'ReliabilityCliff', 'Pillars', 'Embeddings',
  'Automation', 'MarginalAgent', 'ConvergencePrinciple', 'CalibrationGate',
  'Capabilities', 'Attention', 'SelectedWork', 'GlobalReach', 'Engagements',
  'Writing', 'ContactCta', 'Footer',
];

const src = fs.readFileSync('reference/extracted/template-only.html', 'utf8');
const frag = parseFragment(src);
const root = frag.childNodes.find((n) => n.tagName === 'div');
if (!root) throw new Error('root <div> not found');

const sections = (root.childNodes || []).filter((n) => n.tagName);
if (sections.length !== NAMES.length) {
  throw new Error(`expected ${NAMES.length} sections, found ${sections.length}: ` +
    sections.map((s) => s.tagName + (s.attrs?.find((a) => a.name === 'id')?.value ?? '')).join(', '));
}

fs.mkdirSync('components', { recursive: true });

sections.forEach((node, i) => {
  handlers.clear();
  const body = serialize(node, 2).replace(/\n$/, '');
  const name = NAMES[i];

  const needsHandlers = handlers.size > 0;
  const imports = needsHandlers
    ? `import { hoverHandlers } from '@/lib/hoverHandlers';\n\n`
    : '';
  const destructure = needsHandlers
    ? `  const { ${[...handlers].sort().join(', ')} } = hoverHandlers;\n\n`
    : '';

  const file = `${imports}export default function ${name}() {\n${destructure}  return (\n${body}\n  );\n}\n`;
  fs.writeFileSync(path.join('components', `${name}.tsx`), file);
  console.log(`${name}.tsx  ${file.length} bytes${needsHandlers ? '  (handlers: ' + [...handlers].sort().join(', ') + ')' : ''}`);
});

console.log(`\n${sections.length} components written`);
