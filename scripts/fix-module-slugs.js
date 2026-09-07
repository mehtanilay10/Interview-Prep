const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..', 'content', 'courses');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function writeJson(p, data) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n');
}

const courseDirs = fs.readdirSync(baseDir).filter(d => {
  const p = path.join(baseDir, d);
  return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'content.json'));
});

for (const dir of courseDirs) {
  const courseDir = path.join(baseDir, dir);
  const entries = fs.readdirSync(courseDir).filter(e => {
    const p = path.join(courseDir, e);
    return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'content.json'));
  });
  for (const entry of entries) {
    const modPath = path.join(courseDir, entry, 'content.json');
    const mod = readJson(modPath);
    if (mod.slug !== entry) {
      console.log(`Fixing ${dir}/${entry}: ${mod.slug} -> ${entry}`);
      mod.slug = entry;
      writeJson(modPath, mod);
    }
  }
}
console.log('Module slugs updated to match directory names.');
