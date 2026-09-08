import fs from 'fs';
import path from 'path';

const CHEATSHEET_DIR = path.join(process.cwd(), 'markdowns/cheatsheet');
const OUTPUT_DIR = path.join(process.cwd(), 'content/cheatsheet');

const TECH_MAP = {
  'C#_7_cheatsheet.md': { slug: 'csharp', title: 'C# 7+ Cheat Sheet', icon: '💻' },
  'docker-compose_cheatsheet.md': { slug: 'docker-compose', title: 'Docker Compose Cheat Sheet', icon: '🐳' },
  'ES2015+_cheatsheet.md': { slug: 'javascript', title: 'JavaScript (ES2015+) Cheat Sheet', icon: '⚡' },
  'React_js_cheatsheet.md': { slug: 'react', title: 'React.js Cheat Sheet', icon: '⚛️' },
  'React-router_cheatsheet.md': { slug: 'react-router', title: 'React Router Cheat Sheet', icon: '🧭' },
  'Redux_cheatsheet.md': { slug: 'redux', title: 'Redux Cheat Sheet', icon: '🔄' },
  'typescript-cheatsheet_A_set_of_TypeScript_related_notes_used_for_quick_reference_The_cheatsheet_cont.md': { slug: 'typescript', title: 'TypeScript Cheat Sheet', icon: '📘' },
};

function parseMarkdown(content, filename) {
  const lines = content.split('\n');
  const blocks = [];
  let i = 0;
  const tech = TECH_MAP[filename];

  let title = tech ? tech.title : filename.replace('.md', '').replace(/_/g, ' ');
  const titleMatch = content.match(/^#\s+(.+)$/m);
  if (titleMatch) title = titleMatch[1].trim();

  // For TypeScript cheatsheet, use a cleaner title
  if (filename.includes('typescript')) {
    title = 'TypeScript Cheat Sheet';
  }

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === '') {
      i++;
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      i++;
      continue;
    }

    if (line.trim().startsWith('---') && i > lines.length - 10) {
      i++;
      continue;
    }
    if (line.trim().startsWith('> **Note:**') || line.trim().startsWith('Source:')) {
      i++;
      continue;
    }

    // Skip markdown images
    if (line.trim().startsWith('![')) {
      i++;
      continue;
    }

    // Skip lines that are just TOC links like - [Title](url) or * [Title](url)
    if (/^[-*]\s+\[.*\]\(.*\)\s*$/.test(line.trim())) {
      i++;
      continue;
    }

    // Skip lines that are just [back to top](url)
    if (/^\[.*\]\(.*\)\s*$/.test(line.trim()) && !line.trim().startsWith('#')) {
      i++;
      continue;
    }

    if (line.trim().startsWith('```')) {
      const codeLines = [];
      const langMatch = line.trim().match(/^```(\w*)/);
      const language = langMatch ? langMatch[1] : '';
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++;

      const code = codeLines.join('\n').trim();
      if (code) {
        blocks.push({
          type: 'example',
          data: {
            title: language ? `${language} example` : 'Code example',
            content: code,
            language: language || 'plaintext',
            code: code,
          },
        });
      }
      continue;
    }

    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      const tableLines = [line.trim()];
      i++;
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        if (!/^\|[\s\-:|]+\|$/.test(lines[i].trim())) {
          tableLines.push(lines[i].trim());
        }
        i++;
      }
      if (tableLines.length > 0) {
        const headers = tableLines[0].split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map(h => h.trim());
        const rows = tableLines.slice(1).map(rowLine =>
          rowLine.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map(c => c.trim())
        );
        blocks.push({
          type: 'table',
          data: { headers, rows },
        });
      }
      continue;
    }

    const headingMatch = line.match(/^(#{2,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      blocks.push({
        type: 'heading',
        data: { level: Math.min(level, 4), text },
      });
      i++;
      continue;
    }

    if (/^[-*]\s+/.test(line.trim()) || /^\d+\.\s+/.test(line.trim())) {
      const items = [];
      while (i < lines.length) {
        const listLine = lines[i];
        if (/^[-*]\s+/.test(listLine.trim()) || /^\d+\.\s+/.test(listLine.trim())) {
          items.push(listLine.trim().replace(/^[-*\d.]\s+/, ''));
          i++;
        } else if (listLine.trim() === '') {
          i++;
          break;
        } else {
          break;
        }
      }
      if (items.length > 0) {
        blocks.push({
          type: 'bullet-list',
          data: { items },
        });
      }
      continue;
    }

    const paraLines = [line];
    i++;
    while (i < lines.length) {
      const next = lines[i];
      if (
        next.trim() === '' ||
        next.trim().startsWith('#') ||
        next.trim().startsWith('```') ||
        next.trim().startsWith('|') ||
        /^[-*]\s+/.test(next.trim()) ||
        /^\d+\.\s+/.test(next.trim()) ||
        /^---+$/.test(next.trim()) ||
        next.trim().startsWith('> **Note:**') ||
        next.trim().startsWith('Source:') ||
        next.trim().startsWith('![') ||
        /^\[.*\]\(.*\)\s*$/.test(next.trim())
      ) {
        break;
      }
      paraLines.push(next);
      i++;
    }
    const paraText = paraLines.join(' ').trim();
    if (paraText) {
      blocks.push({
        type: 'paragraph',
        data: { text: paraText },
      });
    }
  }

  return { title, blocks };
}

function processFile(filename) {
  const filepath = path.join(CHEATSHEET_DIR, filename);
  if (!fs.existsSync(filepath)) {
    console.log(`Skipping ${filename} - not found`);
    return;
  }

  const content = fs.readFileSync(filepath, 'utf8');
  const tech = TECH_MAP[filename];
  if (!tech) {
    console.log(`Skipping ${filename} - no tech mapping`);
    return;
  }

  const { title, blocks } = parseMarkdown(content, filename);

  const estimatedMinutes = Math.min(35, Math.max(5, Math.ceil(blocks.length * 2.5)));

  const lesson = {
    id: `lesson-cheatsheet-${tech.slug}`,
    slug: 'cheatsheet',
    moduleSlug: tech.slug,
    courseSlug: 'cheatsheet',
    title: title,
    description: `Quick reference cheat sheet for ${title.replace(' Cheat Sheet', '')}.`,
    order: 1,
    difficulty: 'beginner',
    estimatedMinutes,
    tags: [tech.slug, 'cheatsheet', 'quick-reference'],
    blocks,
    relatedLessons: [],
    furtherReading: [],
  };

  const outputPath = path.join(OUTPUT_DIR, tech.slug, 'cheatsheet.json');
  fs.writeFileSync(outputPath, JSON.stringify(lesson, null, 2));
  console.log(`Generated: ${outputPath} (${blocks.length} blocks, ${estimatedMinutes} min)`);
}

const files = fs.readdirSync(CHEATSHEET_DIR).filter(f => f.endsWith('.md'));
for (const file of files) {
  processFile(file);
}

console.log('\nDone generating cheatsheet content!');
