const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..', 'content', 'courses');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function writeJson(p, data) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n');
}

const validVariants = ['info', 'tip', 'warning', 'note', 'important'];

const courseDirs = fs.readdirSync(baseDir).filter(d => {
  const p = path.join(baseDir, d);
  return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'content.json'));
});

let fixed = 0;
for (const dir of courseDirs) {
  const courseDir = path.join(baseDir, dir);
  const entries = fs.readdirSync(courseDir).filter(e => {
    const p = path.join(courseDir, e);
    return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'content.json'));
  });
  for (const entry of entries) {
    const modDir = path.join(courseDir, entry);
    const files = fs.readdirSync(modDir).filter(f => f.endsWith('.json') && f !== 'content.json');
    for (const file of files) {
      const lessonPath = path.join(modDir, file);
      const lesson = readJson(lessonPath);
      let changed = false;
      for (const block of lesson.blocks) {
        if (block.type === 'callout') {
          if (!block.data || !validVariants.includes(block.data.variant)) {
            block.data = block.data || {};
            block.data.variant = 'info';
            changed = true;
          }
        }
      }
      if (changed) {
        writeJson(lessonPath, lesson);
        fixed++;
      }
    }
  }
}
console.log(`Fixed ${fixed} lessons with invalid/undefined callout variants.`);
