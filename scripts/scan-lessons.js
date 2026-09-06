import fs from 'fs';
import path from 'path';

const lessonsDir = path.join(process.cwd(), 'content/courses');
const progressFile = path.join(process.cwd(), 'lesson-processing-progress.json');

// Find all lesson JSON files
const lessonFiles = [];
function findLessons(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findLessons(fullPath);
    } else if (entry.name.endsWith('.json') && entry.name !== 'content.json') {
      lessonFiles.push(fullPath);
    }
  }
}

findLessons(lessonsDir);
lessonFiles.sort();

const pending = lessonFiles.map(f => f.replace(process.cwd() + '/', ''));

const progress = {
  totalLessons: pending.length,
  completed: 0,
  failed: 0,
  pending: [...pending],
  inProgress: [],
  completedLessons: [],
  failedLessons: []
};

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));
console.log(`Created progress file with ${pending.length} lessons.`);
console.log(`Progress file: ${progressFile}`);
