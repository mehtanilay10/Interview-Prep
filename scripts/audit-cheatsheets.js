import fs from 'fs';

const slugs = ['csharp', 'sql-server', 'react', 'redux', 'docker-compose', 'javascript', 'typescript', 'react-router'];
let total = 0;
let dup = 0;
const lang = {};
for (const s of slugs) {
  const p = `D:/GitHub/Interview-Prep/content/cheatsheet/${s}/cheatsheet.json`;
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const b of j.blocks) {
    if (b.type === 'example') {
      total++;
      const d = b.data;
      const key = d.language || 'none';
      lang[key] = (lang[key] || 0) + 1;
      if (d.content && d.code && d.content === d.code) dup++;
    }
  }
}
console.log('examples:', total, 'dup:', dup, JSON.stringify(lang));