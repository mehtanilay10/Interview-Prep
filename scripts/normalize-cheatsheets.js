import fs from 'fs';

const BASE = 'D:/GitHub/Interview-Prep/content/cheatsheet';

function detectLanguage(slug, title, code) {
  const t = (title || '').toLowerCase();
  const c = code || '';

  // docker-compose: bash commands vs yaml config
  if (slug === 'docker-compose') {
    if (/^docker\s+compose/m.test(c) || t.includes('command') || t.includes('install')) return 'bash';
    return 'yaml';
  }
  if (slug === 'sql-server') return 'sql';
  if (slug === 'csharp' || slug === 'ef-core' || slug === 'linq') return 'csharp';
  if (slug === 'graphql') {
    if (/public class|public interface|services\.|AddGraphQLServer|UsePaging|UseFiltering|\[Use/.test(c)) return 'csharp';
    return 'graphql';
  }
  if (slug === 'apollo') {
    if (/npm install|npm i |yarn add/.test(c)) return 'bash';
    if (/gql`|useQuery|useMutation|ApolloProvider|@apollo\/client|InMemoryCache/.test(c)) return 'jsx';
    if (/makeVar|useReactiveVar|export const/.test(c)) return 'javascript';
    return 'graphql';
  }
  if (slug === 'react' || slug === 'react-router' || slug === 'redux') {
    return 'jsx';
  }
  if (slug === 'typescript') {
    if (/interface |type \w+ =|: string|: number|: boolean|<T>|as [A-Z]/m.test(c)) return 'typescript';
    return 'jsx';
  }
  if (slug === 'javascript') {
    if (/interface |type \w+ =|: string|: number|: boolean|<T>/.test(c)) return 'typescript';
    return 'javascript';
  }
  return 'plaintext';
}

function normalize(slug) {
  const p = `${BASE}/${slug}/cheatsheet.json`;
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  let changed = 0;
  for (const b of j.blocks) {
    if (b.type !== 'example') continue;
    const d = b.data;
    const code = d.code || '';
    const lang = detectLanguage(slug, d.title, code);
    if (d.language !== lang) { d.language = lang; changed++; }
    if (d.content && d.code && d.content.trim() === d.code.trim()) {
      delete d.content;
      changed++;
    }
    if (d.content && d.title && d.content.trim() === d.title.trim()) {
      delete d.content;
      changed++;
    }
  }
  fs.writeFileSync(p, JSON.stringify(j, null, 2));
  console.log(`${slug}: ${changed} blocks changed`);
}

for (const s of ['csharp', 'sql-server', 'react', 'redux', 'apollo', 'graphql', 'docker-compose', 'javascript', 'typescript', 'react-router']) {
  normalize(s);
}