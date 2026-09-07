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
  const coursePath = path.join(baseDir, dir, 'content.json');
  const course = readJson(coursePath);
  const courseDir = path.join(baseDir, dir);
  
  // Get actual module directories
  const actualDirs = fs.readdirSync(courseDir).filter(d => {
    const p = path.join(courseDir, d);
    return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'content.json'));
  });
  
  // Get slugs from actual directories
  const actualSlugs = actualDirs.map(d => d);
  
  // Check if course moduleSlugs match actual directories
  const mismatched = course.moduleSlugs.filter(slug => !actualSlugs.includes(slug));
  
  if (mismatched.length > 0) {
    console.log(`Course ${dir}: mismatched slugs: ${mismatched.join(', ')}`);
    console.log(`  Actual dirs: ${actualSlugs.join(', ')}`);
    
    // Update course moduleSlugs to match actual directories
    course.moduleSlugs = actualSlugs;
    writeJson(coursePath, course);
    console.log(`  Fixed!`);
  } else {
    console.log(`Course ${dir}: OK`);
  }
}
