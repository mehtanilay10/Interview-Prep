const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..', 'content', 'courses');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

const courseDir = path.join(baseDir, 'authentication-authorization');
const entries = fs.readdirSync(courseDir).filter(e => {
  const p = path.join(courseDir, e);
  return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'content.json'));
});

for (const entry of entries) {
  const mod = readJson(path.join(courseDir, entry, 'content.json'));
  console.log(`${entry}: slug=${mod.slug}, icon=${mod.icon || 'MISSING'}`);
}
