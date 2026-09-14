const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const run = (cmd) => {
  execSync(cmd, { stdio: 'inherit' });
};

try {
  run('prisma generate');

  try {
    run('prisma migrate deploy');
  } catch (e) {
    const output = (e.message || '') + ' ' + (e.stdout || '') + ' ' + (e.stderr || '');
    if (/P3005|schema is not empty|database schema/i.test(output)) {
      console.log('Database schema already exists. Marking migrations as applied...');
      const migrationsDir = path.join(__dirname, '..', 'prisma', 'migrations');
      const migrations = fs.readdirSync(migrationsDir)
        .filter((f) => {
          const full = path.join(migrationsDir, f);
          return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, 'migration.sql'));
        })
        .sort();

      for (const migration of migrations) {
        console.log(`Resolving migration as applied: ${migration}`);
        try {
          execSync(`prisma migrate resolve --applied ${migration}`, { stdio: 'inherit' });
        } catch (resolveError) {
          console.error(`Failed to resolve ${migration}: ${resolveError.message}`);
        }
      }

      run('prisma migrate deploy');
    } else {
      console.error('Migration failed:', e.message);
      process.exit(1);
    }
  }

  run('next build');
} catch (e) {
  console.error('Build failed:', e.message);
  process.exit(1);
}
