/**
 * Slide generation.
 *
 * Every visual is an SVG built from the script's cues, so the video template is
 * fully deterministic and reproducible: same article and template version in,
 * same pixels out. Slides are rasterised to PNG by the rasterizer (see
 * ./raster.ts) and assembled by ffmpeg.
 *
 * Code is highlighted by a small tokenizer that mirrors the site's GitHub-like
 * palette, keeping on-screen code visually consistent with the article page
 * without pulling a browser into the pipeline.
 */

export interface Slide {
  id: string;
  /** SVG markup, ready to rasterise. */
  svg: string;
  width: number;
  height: number;
}

export interface SlideTheme {
  width: number;
  height: number;
  background: string;
  panelBackground: string;
  headingColor: string;
  textColor: string;
  mutedColor: string;
  accentColor: string;
  codeBackground: string;
  fontFamily: string;
  monoFamily: string;
}

export const DEFAULT_THEME: SlideTheme = {
  width: 1920,
  height: 1080,
  background: '#0d1117',
  panelBackground: '#161b22',
  headingColor: '#f0f6fc',
  textColor: '#c9d1d9',
  mutedColor: '#8b949e',
  accentColor: '#58a6ff',
  codeBackground: '#0d1117',
  fontFamily: 'Inter, Arial, Helvetica, sans-serif',
  monoFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
};

const SYNTAX_COLORS: Record<string, string> = {
  comment: '#8b949e',
  string: '#a5d6ff',
  keyword: '#ff7b72',
  number: '#79c0ff',
  type: '#ffa657',
  function: '#d2a8ff',
  variable: '#79c0ff',
  punctuation: '#c9d1d9',
  text: '#c9d1d9',
};

const KEYWORDS = new Set([
  'abstract', 'as', 'async', 'await', 'base', 'bool', 'break', 'byte', 'case', 'catch', 'char', 'checked', 'class', 'const', 'continue',
  'decimal', 'default', 'delegate', 'do', 'double', 'else', 'enum', 'event', 'explicit', 'extern', 'false', 'finally', 'fixed', 'float',
  'for', 'foreach', 'from', 'get', 'goto', 'if', 'implicit', 'in', 'int', 'interface', 'internal', 'is', 'lock', 'long', 'namespace', 'new',
  'null', 'object', 'operator', 'out', 'override', 'params', 'partial', 'private', 'protected', 'public', 'readonly', 'record', 'ref', 'return',
  'sbyte', 'sealed', 'select', 'set', 'short', 'sizeof', 'stackalloc', 'static', 'string', 'struct', 'switch', 'this', 'throw', 'true', 'try',
  'typeof', 'uint', 'ulong', 'unchecked', 'unsafe', 'ushort', 'using', 'var', 'virtual', 'void', 'volatile', 'where', 'while', 'with', 'yield',
  'function', 'let', 'def', 'import', 'export', 'type', 'implements', 'extends',
  'SELECT', 'FROM', 'WHERE', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER', 'ON', 'GROUP', 'BY', 'ORDER', 'HAVING', 'INSERT', 'INTO', 'VALUES',
  'UPDATE', 'DELETE', 'CREATE', 'TABLE', 'INDEX', 'VIEW', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'AND', 'OR', 'NOT', 'NULL',
]);

interface Token {
  text: string;
  kind: keyof typeof SYNTAX_COLORS;
}

export function tokenizeCode(code: string, language: string): Token[] {
  const lang = language.toLowerCase();
  const lines = code.replace(/\t/g, '    ').split('\n');
  const tokens: Token[] = [];

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex] ?? '';
    const commentMarker = lang === 'python' || lang === 'bash' || lang === 'shell' ? '#' : '//';
    const commentStart = line.indexOf(commentMarker);
    const codePart = commentStart === -1 ? line : line.slice(0, commentStart);
    const commentPart = commentStart === -1 ? null : line.slice(commentStart);

    tokenizeSegment(codePart, lang, tokens);
    if (commentPart !== null) tokens.push({ text: commentPart, kind: 'comment' });

    if (lineIndex < lines.length - 1) tokens.push({ text: '\n', kind: 'text' });
  }

  return tokens;
}

function tokenizeSegment(segment: string, lang: string, tokens: Token[]): void {
  if (segment === '') return;
  const pattern = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\/\/.*$)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)/g;
  let cursor = 0;
  const match = pattern.exec(segment);

  const pushPlain = (text: string) => {
    if (text !== '') tokens.push({ text, kind: 'punctuation' });
  };

  const classify = (word: string): keyof typeof SYNTAX_COLORS => {
    if (KEYWORDS.has(word)) return 'keyword';
    if (/^\d/.test(word)) return 'number';
    if (/^[A-Z][A-Za-z0-9_]*$/.test(word)) return 'type';
    if (/\w/.test(word)) return 'function';
    return 'text';
  };

  if (match === null) {
    pushPlain(segment);
    return;
  }

  pushPlain(segment.slice(cursor, match.index));
  const [text, stringLiteral, comment] = match;
  if (stringLiteral !== undefined && stringLiteral !== '') {
    tokens.push({ text: stringLiteral, kind: 'string' });
  } else if (comment !== undefined && comment !== '') {
    tokens.push({ text: comment, kind: 'comment' });
  } else if (text !== undefined && text !== '') {
    tokens.push({ text, kind: classify(text) });
  }
  cursor = match.index + text.length;

  let next = pattern.exec(segment);
  while (next !== null) {
    pushPlain(segment.slice(cursor, next.index));
    const [nextText, nextString, nextComment] = next;
    if (nextString !== undefined && nextString !== '') {
      tokens.push({ text: nextString, kind: 'string' });
    } else if (nextComment !== undefined && nextComment !== '') {
      tokens.push({ text: nextComment, kind: 'comment' });
    } else if (nextText !== undefined && nextText !== '') {
      tokens.push({ text: nextText, kind: classify(nextText) });
    }
    cursor = next.index + nextText.length;
    next = pattern.exec(segment);
  }
  pushPlain(segment.slice(cursor));
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/).filter((w) => w.length > 0);
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const candidate = current === '' ? word : `${current} ${word}`;
    if (candidate.length <= maxChars) {
      current = candidate;
      continue;
    }
    if (current !== '') lines.push(current);
    current = word;
  }
  if (current !== '') lines.push(current);
  return lines;
}

function textLines(x: number, y: number, lines: string[], options: { size: number; fill: string; family: string; lineHeight: number; weight?: string; anchor?: string }): string {
  return lines
    .map((line, index) => {
      const top = y + index * options.lineHeight;
      return `<text x="${x}" y="${top}" font-family="${options.family}" font-size="${options.size}" fill="${options.fill}"${options.weight ? ` font-weight="${options.weight}"` : ''}${options.anchor ? ` text-anchor="${options.anchor}"` : ''}>${escapeXml(line)}</text>`;
    })
    .join('');
}

function panel(theme: SlideTheme, x: number, y: number, width: number, height: number, fill = theme.panelBackground, radius = 24): string {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" ry="${radius}" fill="${fill}"/>`;
}

function renderCodeTokens(tokens: Token[], x: number, y: number, theme: SlideTheme, options: { size: number; lineHeight: number }): string {
  let line = 0;
  let column = 0;
  const parts: string[] = [];
  for (const token of tokens) {
    if (token.text.includes('\n')) {
      const segments = token.text.split('\n');
      segments.forEach((segment, index) => {
        if (index > 0) {
          line += 1;
          column = 0;
        }
        if (segment !== '') {
          const tx = x + column * options.size * 0.6;
          const ty = y + line * options.lineHeight;
          parts.push(`<text x="${tx}" y="${ty}" font-family="${theme.monoFamily}" font-size="${options.size}" fill="${SYNTAX_COLORS[token.kind]}">${escapeXml(segment)}</text>`);
          column += segment.length;
        }
      });
      continue;
    }
    const tx = x + column * options.size * 0.6;
    const ty = y + line * options.lineHeight;
    parts.push(`<text x="${tx}" y="${ty}" font-family="${theme.monoFamily}" font-size="${options.size}" fill="${SYNTAX_COLORS[token.kind]}">${escapeXml(token.text)}</text>`);
    column += token.text.length;
  }
  return parts.join('');
}

/** Title card slide. */
export function titleSlide(title: string, subtitle: string | undefined, theme: SlideTheme = DEFAULT_THEME): Slide {
  const lines = wrapText(title, 34);
  const subtitleLines = subtitle ? wrapText(subtitle, 60).slice(0, 3) : [];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${theme.width}" height="${theme.height}" viewBox="0 0 ${theme.width} ${theme.height}">
  <rect width="${theme.width}" height="${theme.height}" fill="${theme.background}"/>
  <rect x="120" y="330" width="140" height="8" rx="4" fill="${theme.accentColor}"/>
  ${textLines(120, 460, lines, { size: 96, fill: theme.headingColor, family: theme.fontFamily, lineHeight: 116, weight: '700' })}
  ${textLines(120, 460 + lines.length * 116 + 40, subtitleLines, { size: 40, fill: theme.mutedColor, family: theme.fontFamily, lineHeight: 56 })}
</svg>`;
  return { id: 'title', svg, width: theme.width, height: theme.height };
}

/** Section heading slide with optional bullets. */
export function sectionSlide(heading: string, bullets: string[], theme: SlideTheme = DEFAULT_THEME): Slide {
  const headingLines = wrapText(heading, 40);
  const bodyLines = bullets.flatMap((bullet) => {
    const wrapped = wrapText(`•  ${bullet}`, 62);
    return [...wrapped, ''];
  }).slice(0, -1);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${theme.width}" height="${theme.height}" viewBox="0 0 ${theme.width} ${theme.height}">
  <rect width="${theme.width}" height="${theme.height}" fill="${theme.background}"/>
  ${panel(theme, 120, 140, theme.width - 240, theme.height - 280)}
  ${textLines(180, 250, headingLines, { size: 72, fill: theme.headingColor, family: theme.fontFamily, lineHeight: 92, weight: '700' })}
  ${textLines(180, 250 + headingLines.length * 92 + 60, bodyLines, { size: 44, fill: theme.textColor, family: theme.fontFamily, lineHeight: 68 })}
</svg>`;
  return { id: `section-${slug(heading)}`, svg, width: theme.width, height: theme.height };
}

/** Code slide with syntax highlighting. */
export function codeSlide(code: string, language: string, title: string | undefined, theme: SlideTheme = DEFAULT_THEME): Slide {
  const tokens = tokenizeCode(code, language);
  const titleLines = title ? wrapText(title, 46).slice(0, 2) : [];
  const visibleTokens = limitTokens(tokens, 26);
  const size = visibleTokens.lines > 20 ? 30 : 36;
  const lineHeight = size * 1.45;
  const bodyTop = (titleLines.length > 0 ? 240 : 160) + 130;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${theme.width}" height="${theme.height}" viewBox="0 0 ${theme.width} ${theme.height}">
  <rect width="${theme.width}" height="${theme.height}" fill="${theme.background}"/>
  ${titleLines.length > 0 ? textLines(140, 160, titleLines, { size: 52, fill: theme.headingColor, family: theme.fontFamily, lineHeight: 64, weight: '700' }) : ''}
  ${panel(theme, 140, titleLines.length > 0 ? 240 : 160, theme.width - 280, theme.height - (titleLines.length > 0 ? 400 : 320), theme.codeBackground, 16)}
  <text x="180" y="${(titleLines.length > 0 ? 240 : 160) + 60}" font-family="${theme.monoFamily}" font-size="${Math.round(size * 0.7)}" fill="${theme.mutedColor}">${escapeXml(language)}</text>
  ${renderCodeTokens(visibleTokens.tokens, 180, bodyTop, theme, { size, lineHeight })}
</svg>`;
  return { id: `code-${slug(`${language}-${code.slice(0, 40)}`)}`, svg, width: theme.width, height: theme.height };
}

/** Glossary slide built from the article's key-terms block. */
export function termsSlide(terms: Array<{ term: string; definition: string }>, theme: SlideTheme = DEFAULT_THEME): Slide {
  const rows: string[] = [];
  let y = 260;
  for (const term of terms.slice(0, 4)) {
    const termLines = wrapText(term.term, 30);
    const definitionLines = wrapText(term.definition, 46).slice(0, 3);
    rows.push(textLines(180, y, termLines, { size: 54, fill: theme.accentColor, family: theme.fontFamily, lineHeight: 64, weight: '700' }));
    rows.push(textLines(180, y + 72, definitionLines, { size: 34, fill: theme.textColor, family: theme.fontFamily, lineHeight: 46 }));
    y += 72 + definitionLines.length * 46 + 60;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${theme.width}" height="${theme.height}" viewBox="0 0 ${theme.width} ${theme.height}">
  <rect width="${theme.width}" height="${theme.height}" fill="${theme.background}"/>
  ${panel(theme, 120, 140, theme.width - 240, theme.height - 280)}
  <text x="180" y="220" font-family="${theme.fontFamily}" font-size="56" font-weight="700" fill="${theme.headingColor}">Key terms</text>
  ${rows.join('\n  ')}
</svg>`;
  return { id: `terms-${slug(terms.map((t) => t.term).join('-'))}`, svg, width: theme.width, height: theme.height };
}

/** Quote / callout slide. */
export function quoteSlide(text: string, theme: SlideTheme = DEFAULT_THEME): Slide {
  const lines = wrapText(text, 46).slice(0, 6);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${theme.width}" height="${theme.height}" viewBox="0 0 ${theme.width} ${theme.height}">
  <rect width="${theme.width}" height="${theme.height}" fill="${theme.background}"/>
  ${panel(theme, 120, 200, theme.width - 240, theme.height - 460)}
  <rect x="180" y="300" width="8" height="${lines.length * 72}" fill="${theme.accentColor}"/>
  ${textLines(240, 360, lines, { size: 52, fill: theme.headingColor, family: theme.fontFamily, lineHeight: 72 })}
</svg>`;
  return { id: `quote-${slug(text.slice(0, 40))}`, svg, width: theme.width, height: theme.height };
}

/** Summary / takeaway slide. */
export function summarySlide(title: string | undefined, points: string[], takeaway: string | undefined, theme: SlideTheme = DEFAULT_THEME): Slide {
  const heading = title ?? 'Key takeaways';
  const headingLines = wrapText(heading, 40);
  const bodyLines = points.flatMap((point) => [...wrapText(`✓  ${point}`, 60), '']).slice(0, -1);
  const takeawayLines = takeaway ? wrapText(takeaway, 60).slice(0, 2) : [];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${theme.width}" height="${theme.height}" viewBox="0 0 ${theme.width} ${theme.height}">
  <rect width="${theme.width}" height="${theme.height}" fill="${theme.background}"/>
  ${panel(theme, 120, 140, theme.width - 240, theme.height - 280)}
  ${textLines(180, 250, headingLines, { size: 68, fill: theme.headingColor, family: theme.fontFamily, lineHeight: 88, weight: '700' })}
  ${textLines(180, 250 + headingLines.length * 88 + 50, bodyLines, { size: 42, fill: theme.textColor, family: theme.fontFamily, lineHeight: 64 })}
  ${textLines(180, theme.height - 220, takeawayLines, { size: 38, fill: theme.accentColor, family: theme.fontFamily, lineHeight: 52 })}
</svg>`;
  return { id: `summary-${slug(heading)}`, svg, width: theme.width, height: theme.height };
}

/** Closing call-to-action slide pointing back to the article. */
export function ctaSlide(text: string, theme: SlideTheme = DEFAULT_THEME): Slide {
  const lines = wrapText(text, 48).slice(0, 5);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${theme.width}" height="${theme.height}" viewBox="0 0 ${theme.width} ${theme.height}">
  <rect width="${theme.width}" height="${theme.height}" fill="${theme.background}"/>
  <rect x="120" y="430" width="140" height="8" rx="4" fill="${theme.accentColor}"/>
  ${textLines(120, 560, lines, { size: 56, fill: theme.headingColor, family: theme.fontFamily, lineHeight: 76 })}
</svg>`;
  return { id: 'cta', svg, width: theme.width, height: theme.height };
}

/** Diagram placeholder slide used when Mermaid cannot be rasterised in-process. */
export function diagramSlide(caption: string, theme: SlideTheme = DEFAULT_THEME): Slide {
  const lines = wrapText(caption, 46).slice(0, 4);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${theme.width}" height="${theme.height}" viewBox="0 0 ${theme.width} ${theme.height}">
  <rect width="${theme.width}" height="${theme.height}" fill="${theme.background}"/>
  ${panel(theme, 200, 220, theme.width - 400, theme.height - 440)}
  <text x="${theme.width / 2}" y="${theme.height / 2}" text-anchor="middle" font-family="${theme.fontFamily}" font-size="46" fill="${theme.mutedColor}">Diagram: see the article for the full version</text>
  ${textLines(200, theme.height / 2 + 80, lines, { size: 34, fill: theme.mutedColor, family: theme.fontFamily, lineHeight: 46, anchor: 'middle' })}
</svg>`;
  return { id: `diagram-${slug(caption.slice(0, 40))}`, svg, width: theme.width, height: theme.height };
}

function limitTokens(tokens: Token[], maxLines: number): { tokens: Token[]; lines: number } {
  let lines = 1;
  const kept: Token[] = [];
  for (const token of tokens) {
    const newlines = (token.text.match(/\n/g) ?? []).length;
    if (lines + newlines > maxLines) {
      kept.push({ text: '\n… truncated (see the article)', kind: 'comment' });
      break;
    }
    kept.push(token);
    lines += newlines;
  }
  return { tokens: kept, lines };
}

function slug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'slide';
}
