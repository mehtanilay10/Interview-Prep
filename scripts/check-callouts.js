const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..', 'content', 'courses');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

const lessonPath = path.join(baseDir, 'authentication-authorization', '07-refresh-token-strategies', 'secure-storage-strategies.json');
const lesson = readJson(lessonPath);

const validVariants = ['info', 'tip', 'warning', 'note', 'important'];

for (const block of lesson.blocks) {
  if (block.type === 'callout') {
    const variant = block.data?.variant;
    if (!validVariants.includes(variant)) {
      console.log(`Invalid callout variant: ${variant}`);
    }
  }
}
console.log('Check complete.');
