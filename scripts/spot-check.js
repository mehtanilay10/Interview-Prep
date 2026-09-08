import fs from 'fs';
const j = JSON.parse(fs.readFileSync('D:/GitHub/Interview-Prep/content/cheatsheet/csharp/cheatsheet.json', 'utf8'));
for (const b of j.blocks.slice(0, 12)) {
  if (b.type === 'example') console.log(JSON.stringify(b.data));
}