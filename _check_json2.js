const fs = require('fs');
const path = require('path');
const files = [
  'module-3/lesson-2.json',
  'module-3/lesson-3.json',
  'module-3/lesson-4.json',
  'module-3/lesson-5.json',
  'module-3/lesson-6.json',
  'module-3/lesson-7.json',
  'module-3/lesson-8.json',
  'module-4/lesson-1.json',
  'module-4/lesson-2.json',
  'module-4/lesson-3.json'
];
const base = 'D:/GitHub/Interview-Prep/content/courses/sql-server';
for (const f of files) {
  const content = fs.readFileSync(path.join(base, f), 'utf8');
  try {
    JSON.parse(content);
  } catch(e) {
    const m = e.message.match(/position (\d+)/);
    if (m) {
      const pos = parseInt(m[1]);
      // Show character codes around the error
      let chars = '';
      for (let i = Math.max(0, pos-5); i < Math.min(content.length, pos+10); i++) {
        chars += content[i] + '(' + content.charCodeAt(i) + ') ';
      }
      console.log(f + ' at pos ' + pos + ':');
      console.log('  chars: ' + chars);
    }
  }
}
