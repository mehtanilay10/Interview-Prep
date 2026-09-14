const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const run = (cmd, options = {}) => {
  try {
    execSync(cmd, { stdio: 'inherit', ...options });
  } catch (e) {
    console.error(`Command failed: ${cmd}`);
    throw e;
  }
};

try {
  run('prisma generate');

  try {
    run('prisma migrate deploy');
  } catch (e) {
    const output = (e.message || '') + (e.stdout || '') + (e.stderr || '');
    if (output.includes('P3005') || output.includes('schema is not empty')) {
      console.log('Database schema already exists. Baselines migrations...');

      const migrationsDir = path.join(__dirname, '..', 'prisma', 'migrations');
      const migrations = fs.readdirSync(migrationsDir)
        .filter((f) => {
          const fullPath = path.join(migrationsDir, f);
          return fs.statSync(fullPath).isDirectory() && fs.existsSync(path.join(fullPath, 'migration.sql'));
        })
        .sort();

      for (const migration of migrations) {
        console.log(`Resolving migration as applied: ${migration}`);
        try {
          execSync(`prisma migrate resolve --applied ${migration}`, { stdio: 'inherit' });
        } catch (resolveError) {
          console.error(`Failed to resolve ${migration}:`, resolveError.message);
        }
      }

      run('prisma migrate deploy');
    } else {
      throw e;
    }
  }

  run('next build');
} catch (e) {
  console.error('Build failed:', e.message);
  process.exit(1);
}
