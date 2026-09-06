import fs from 'fs';
import path from 'path';

const LESSONS_DIR = path.join(process.cwd(), 'content/courses');
const PROGRESS_FILE = path.join(process.cwd(), 'lesson-processing-progress.json');

function loadProgress() {
  if (fs.existsSync(PROGRESS_FILE)) {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
  }
  throw new Error('Progress file not found. Run scan-lessons.js first.');
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

function loadLesson(relativePath) {
  const fullPath = path.join(process.cwd(), relativePath);
  return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
}

function saveLesson(relativePath, lesson) {
  const fullPath = path.join(process.cwd(), relativePath);
  fs.writeFileSync(fullPath, JSON.stringify(lesson, null, 2));
}

function updateProgress(progress, relativePath, status) {
  if (status === 'completed') {
    progress.completed++;
    progress.completedLessons.push(relativePath);
  } else if (status === 'failed') {
    progress.failed++;
    progress.failedLessons.push(relativePath);
  }
  progress.pending = progress.pending.filter(p => p !== relativePath);
  if (progress.inProgress.includes(relativePath)) {
    progress.inProgress = progress.inProgress.filter(p => p !== relativePath);
  }
  saveProgress(progress);
}

export {
  loadProgress,
  saveProgress,
  loadLesson,
  saveLesson,
  updateProgress
};
