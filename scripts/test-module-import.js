const fs = require('fs');
const path = require('path');

// Read the generated modules/index.ts
const modulesIndex = fs.readFileSync(path.join(__dirname, '..', 'content', 'modules', 'index.ts'), 'utf8');

// Check if the module is exported correctly
console.log('Checking modules/index.ts...');
console.log('Contains import:', modulesIndex.includes("authenticationAuthorizationrefreshTokenStrategiesModule"));
console.log('Contains in array:', modulesIndex.includes("authenticationAuthorizationrefreshTokenStrategiesModule,"));

// Let's also check the actual JSON file
const modJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'content', 'courses', 'authentication-authorization', '07-refresh-token-strategies', 'content.json'), 'utf8'));
console.log('Module JSON slug:', modJson.slug);
console.log('Module JSON icon:', modJson.icon);
console.log('Module JSON icon type:', typeof modJson.icon);
