const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..', 'content', 'courses');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

const modules = [];
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
    const mod = readJson(path.join(courseDir, entry, 'content.json'));
    modules.push(mod);
  }
}

const slugs = modules.map(m => m.slug);
const duplicates = slugs.filter((slug, i) => slugs.indexOf(slug) !== i);
console.log('Total modules:', modules.length);
console.log('Duplicate slugs:', duplicates);

const authMods = modules.filter(m => m.courseSlug === 'authentication-authorization');
console.log('Auth modules:', authMods.map(m => ({ slug: m.slug, icon: m.icon, title: m.title })));

// Check if any module has undefined icon
const noIcon = modules.filter(m => m.icon === undefined || m.icon === null);
console.log('Modules without icon:', noIcon.map(m => ({ slug: m.slug, title: m.title })));
