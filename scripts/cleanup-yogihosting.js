const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'content', 'courses', 'aspnet-core');

const internalLinks = {
  'aspnet-core-introduction': '/courses/aspnet-core/getting-started-aspnet-core-mvc/introduction-to-aspnet-core-mvc',
  'aspnet-core-first-application': '/courses/aspnet-core/getting-started-aspnet-core-mvc/first-aspnet-core-10-0-mvc-application',
  'aspnet-core-first-crud-application': '/courses/aspnet-core/getting-started-aspnet-core-mvc/first-crud-application-aspnet-core-mvc',
  'aspnet-core-configurations': '/courses/aspnet-core/dependency-injection-configuration/aspnet-core-configurations-program-middleware-appsettings',
  'aspnet-core-dependency-injection': '/courses/aspnet-core/dependency-injection-configuration/dependency-injection-aspnet-core',
  'aspnet-core-controllers': '/courses/aspnet-core/controllers-routing/controllers-in-aspnet-core',
  'aspnet-core-actions': '/courses/aspnet-core/controllers-routing/actions-in-aspnet-core',
  'aspnet-core-views': '/courses/aspnet-core/views-tag-helpers/views-in-aspnet-core',
  'aspnet-core-url-routing': '/courses/aspnet-core/controllers-routing/aspnet-core-convention-based-routing',
  'aspnet-core-route-constraint': '/courses/aspnet-core/controllers-routing/aspnet-core-convention-based-routing',
  'aspnet-core-attribute-routing': '/courses/aspnet-core/controllers-routing/aspnet-core-convention-based-routing',
  'aspnet-core-generating-url-routing': '/courses/aspnet-core/controllers-routing/aspnet-core-convention-based-routing',
  'aspnet-core-areas': '/courses/aspnet-core/controllers-routing/aspnet-core-convention-based-routing',
  'aspnet-core-endpoint-routing': '/courses/aspnet-core/controllers-routing/aspnet-core-convention-based-routing',
  'aspnet-core-model-binding': '/courses/aspnet-core/model-binding-validation/model-binding-aspnet-core-beginner-advanced',
  'aspnet-core-advanced-model-binding': '/courses/aspnet-core/model-binding-validation/advanced-model-binding-concepts',
  'aspnet-core-model-validation': '/courses/aspnet-core/model-binding-validation/model-validation-aspnet-core-beginner-expert',
  'aspnet-core-introduction-tag-helpers': '/courses/aspnet-core/views-tag-helpers/introduction-to-tag-helpers',
  'aspnet-core-built-in-tag-helpers': '/courses/aspnet-core/views-tag-helpers/built-in-tag-helpers',
  'aspnet-core-custom-tag-helpers': '/courses/aspnet-core/views-tag-helpers/custom-tag-helper',
  'aspnet-core-filters': '/courses/aspnet-core/filters/filters-aspnet-core-beginner-expert',
  'advanced-filters-topics-aspnet-core': '/courses/aspnet-core/filters/aspnet-core-filters-dependency-injection-global-filters',
  'aspnet-core-api-controllers': '/courses/aspnet-core/web-api/create-web-apis-aspnet-core-restful-pattern',
  'aspnet-core-consume-api': '/courses/aspnet-core/web-api/call-web-api-aspnet-core-net10',
  'aspnet-core-consume-api-jquery': '/courses/aspnet-core/web-api/call-web-api-jquery-aspnet-core',
  'aspnet-core-web-api-javascript': '/courses/aspnet-core/web-api/call-web-api-javascript-xmlhttprequest',
  'how-to-use-globalization-and-localization-in-asp-net-core': '/courses/aspnet-core/localization-globalization/use-globalization-localization-aspnet-core',
  'globalization-localization-resource-files-aspnet-core': '/courses/aspnet-core/localization-globalization/globalization-localization-resource-files',
  'aspnet-core-identity-setup': '/courses/aspnet-core/authentication-identity/setup-configure-aspnet-core-identity',
  'aspnet-core-identity-create-read-update-delete-users': '/courses/aspnet-core/authentication-identity/create-read-update-delete-users-aspnet-core-identity',
  'aspnet-core-identity-username-email-password-policy': '/courses/aspnet-core/authentication-identity/username-email-password-policy-aspnet-core-identity',
  'aspnet-core-identity-authentication': '/courses/aspnet-core/authentication-identity/authentication-of-users-aspnet-core-identity',
  'aspnet-core-identity-roles': '/courses/aspnet-core/authentication-identity/work-with-roles-aspnet-core-identity',
  'aspnet-core-identity-custom-user-properties': '/courses/aspnet-core/authentication-identity/add-custom-user-properties-aspnet-core-identity',
  'aspnet-core-identity-policies': '/courses/aspnet-core/authentication-identity/work-with-policies-aspnet-core-identity',
  'aspnet-core-identity-login-with-google': '/courses/aspnet-core/authentication-identity/integrate-google-login-aspnet-core-identity',
  'aspnet-core-identity-two-factor-authentication': '/courses/aspnet-core/authentication-identity/work-with-claims-aspnet-core-identity',
  'aspnet-core-identity-email-confirmation': '/courses/aspnet-core/authentication-identity/work-with-claims-aspnet-core-identity',
  'aspnet-core-identity-password-reset': '/courses/aspnet-core/authentication-identity/work-with-claims-aspnet-core-identity',
  'aspnet-core-identity-user-lockout': '/courses/aspnet-core/authentication-identity/work-with-claims-aspnet-core-identity',
  'aspnet-core-enable-cors': '/courses/aspnet-core/cors-cross-origin/enable-cors-aspnet-core',
  'aspnet-core-cookie-authentication': '/courses/aspnet-core/authentication-identity/implement-cookie-authentication-aspnet-core',
  'try-catch-block': '/courses/aspnet-core/filters/filters-aspnet-core-beginner-expert',
  'jwt-api-aspnet-core': '/courses/aspnet-core/web-api/create-web-apis-aspnet-core-restful-pattern',
  'jwt-refresh-token-aspnet-core': '/courses/aspnet-core/web-api/create-web-apis-aspnet-core-restful-pattern',
  'jwt-jquery-aspnet-core': '/courses/aspnet-core/web-api/call-web-api-jquery-aspnet-core',
  'category/aspnet-core': '/courses/aspnet-core',
  'category/ef-core': '/courses/aspnet-core',
  'jquery-ajax': '/courses/aspnet-core/web-api/call-web-api-jquery-aspnet-core',
  'jquery-on': '/courses/aspnet-core/web-api/call-web-api-jquery-aspnet-core',
};

function replaceInText(text) {
  if (typeof text !== 'string') return text;
  
  let result = text;
  
  // Replace markdown links - handle escaped versions in numbered lists
  // Pattern: [text](https://www.yogihosting.com/path)
  const linkRegex = /\[([^\]]+)\]\(https:\/\/www\.yogihosting\.com\/([^)]+)\)/g;
  result = result.replace(linkRegex, (match, linkText, urlPath) => {
    const cleanPath = urlPath.replace(/\/$/, '');
    if (internalLinks[cleanPath]) {
      return `[${linkText}](${internalLinks[cleanPath]})`;
    }
    return linkText;
  });
  
  // Replace plain yogihosting URLs in text
  result = result.replace(/https:\/\/www\.yogihosting\.com\/?[^\s)"]*/g, (url) => {
    const cleanUrl = url.replace(/\/$/, '').replace(/[)"']/g, '');
    const pathPart = cleanUrl.replace('https://www.yogihosting.com', '').replace(/^\//, '');
    if (pathPart && internalLinks[pathPart]) {
      return internalLinks[pathPart];
    }
    return '';
  });
  
  // Replace wp-content image URLs
  result = result.replace(/https:\/\/www\.yogihosting\.com\/wp-content\/[^\s)"]+/g, '');
  
  // Replace download URLs
  result = result.replace(/https:\/\/www\.yogihosting\.com\/wp-content\/themes\/yogi-yogihosting\/download\/[^\s)"]+/g, '');
  
  return result;
}

function processBlocks(blocks) {
  if (!Array.isArray(blocks)) return blocks;
  
  return blocks.map(block => {
    if (!block || !block.data) return block;
    
    const newBlock = { ...block };
    
    // Process text fields
    if (typeof newBlock.data.text === 'string') {
      newBlock.data.text = replaceInText(newBlock.data.text);
    }
    
    // Process image src
    if (typeof newBlock.data.src === 'string' && newBlock.data.src.includes('yogihosting')) {
      newBlock.data.src = '';
    }
    
    // Process code fields
    if (typeof newBlock.data.code === 'string' && newBlock.data.code.includes('yogihosting')) {
      newBlock.data.code = newBlock.data.code.replace(/https:\/\/www\.yogihosting\.com/g, 'https://example.com');
    }
    
    // Process items arrays (for bullet-list and numbered-list)
    if (Array.isArray(newBlock.data.items)) {
      newBlock.data.items = newBlock.data.items.map(item => replaceInText(item));
    }
    
    // Process content fields
    if (typeof newBlock.data.content === 'string') {
      newBlock.data.content = replaceInText(newBlock.data.content);
    }
    
    // Recursively process nested blocks if any
    if (Array.isArray(newBlock.data.blocks)) {
      newBlock.data.blocks = processBlocks(newBlock.data.blocks);
    }
    
    return newBlock;
  });
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    let modified = false;
    const newData = { ...data };
    
    if (Array.isArray(newData.blocks)) {
      newData.blocks = processBlocks(newData.blocks);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(newData, null, 2) + '\n');
      console.log(`Updated: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

function findJsonFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findJsonFiles(filePath));
    } else if (file.endsWith('.json')) {
      results.push(filePath);
    }
  });
  return results;
}

const jsonFiles = findJsonFiles(contentDir);
console.log(`Found ${jsonFiles.length} JSON files`);
jsonFiles.forEach(processFile);
console.log('Done!');
