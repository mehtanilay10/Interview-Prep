import fs from 'fs';

const BASE = 'D:/GitHub/Interview-Prep/content/cheatsheet';

const efCoreModule = {
  id: 'module-cheatsheet-ef-core',
  slug: 'ef-core',
  courseSlug: 'cheatsheet',
  title: 'EF Core Cheat Sheet',
  description: 'Quick reference for Entity Framework Core: contexts, models, migrations, querying, and change tracking.',
  order: 11,
  difficulty: 'beginner',
  estimatedHours: 1,
  icon: '🗄️',
  tags: ['ef-core', 'entity-framework', 'dotnet', 'orm', 'cheatsheet', 'quick-reference'],
  lessonSlugs: ['cheatsheet'],
  whatYouLearn: [
    'DbContext and model configuration',
    'Relationships and conventions',
    'Migrations and change tracking',
    'Querying and saving data'
  ]
};

const linqModule = {
  id: 'module-cheatsheet-linq',
  slug: 'linq',
  courseSlug: 'cheatsheet',
  title: 'LINQ Cheat Sheet',
  description: 'Quick reference for LINQ: filtering, projection, sorting, grouping, joins, and aggregation operators.',
  order: 12,
  difficulty: 'beginner',
  estimatedHours: 1,
  icon: '🧩',
  tags: ['linq', 'dotnet', 'csharp', 'query', 'cheatsheet', 'quick-reference'],
  lessonSlugs: ['cheatsheet'],
  whatYouLearn: [
    'Core LINQ operators',
    'Filtering and projection',
    'Sorting and grouping',
    'Join and set operations'
  ]
};

fs.writeFileSync(`${BASE}/ef-core/content.json`, JSON.stringify(efCoreModule, null, 2));
fs.writeFileSync(`${BASE}/linq/content.json`, JSON.stringify(linqModule, null, 2));
console.log('Module content written');