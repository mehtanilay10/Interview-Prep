import fs from 'fs';
import path from 'path';

const CHEATSHEET_DIR = path.join(process.cwd(), 'content/cheatsheet');

function fixExampleBlocks(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let changed = false;
  
  function fixBlock(block) {
    if (block.type === 'example' && block.data) {
      const d = block.data;
      if (d.code && d.content && d.content === d.code) {
        d.content = '';
        changed = true;
      }
      if (!d.language && d.code) {
        if (d.code.includes('SELECT') || d.code.includes('CREATE TABLE')) d.language = 'sql';
        else if (d.code.includes('npm install') || d.code.includes('docker')) d.language = 'bash';
        else if (d.code.includes('import React') || d.code.includes('useState')) d.language = 'jsx';
        else if (d.code.includes('public class') || d.code.includes('void ') || d.code.includes('using ')) d.language = 'csharp';
        else if (d.code.includes('=>') || d.code.includes('function')) d.language = 'javascript';
        else if (d.code.includes('type ') || d.code.includes('query ') || d.code.includes('mutation ')) d.language = 'graphql';
        else if (d.code.includes('version:') || d.code.includes('services:')) d.language = 'yaml';
        else d.language = 'plaintext';
        changed = true;
      }
    }
    if (block.blocks) {
      block.blocks.forEach(fixBlock);
    }
  }
  
  if (data.blocks) {
    data.blocks.forEach(fixBlock);
  }
  
  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Fixed: ${filePath}`);
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === 'cheatsheet.json') fixExampleBlocks(full);
  }
}

walk(CHEATSHEET_DIR);
console.log('Done fixing example blocks.');
