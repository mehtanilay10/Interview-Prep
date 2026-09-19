const fs = require('fs');
const path = require('path');

// alasql for SQL execution
let alasql;
try {
  alasql = require('alasql');
} catch (e) {
  console.error('alasql not available');
  process.exit(1);
}

// Standard table data
const tables = {
  customers: {
    columns: ['customer_id', 'first_name', 'last_name', 'email', 'city', 'state'],
    rows: [
      [1, 'John', 'Smith', 'john@example.com', 'New York', 'NY'],
      [2, 'Jane', 'Doe', 'jane@example.com', 'Los Angeles', 'CA'],
      [3, 'Bob', 'Johnson', 'bob@example.com', 'Chicago', 'IL'],
      [4, 'Alice', 'Williams', 'alice@example.com', 'Houston', 'TX'],
      [5, 'Charlie', 'Brown', 'charlie@example.com', 'Phoenix', 'AZ']
    ]
  },
  products: {
    columns: ['product_id', 'product_name', 'category_id', 'brand_id', 'list_price', 'model_year'],
    rows: [
      [1, 'Trek Marlin 7', 1, 1, 599.99, 2023],
      [2, 'Electra Townie', 1, 2, 449.99, 2023],
      [3, 'Giant Escape 3', 1, 3, 399.99, 2022],
      [4, 'Northwoods Goose', 2, 4, 1299.99, 2023],
      [5, 'Sun Dolphin', 2, 5, 279.99, 2022]
    ]
  },
  orders: {
    columns: ['order_id', 'customer_id', 'order_date', 'shipped_date', 'status'],
    rows: [
      [1, 1, '2024-01-05', '2024-01-08', 'Shipped'],
      [2, 2, '2024-01-10', '2024-01-12', 'Shipped'],
      [3, 1, '2024-01-15', null, 'Processing'],
      [4, 3, '2024-01-20', '2024-01-22', 'Shipped'],
      [5, 4, '2024-02-01', '2024-02-03', 'Shipped']
    ]
  },
  order_items: {
    columns: ['order_id', 'item_id', 'product_id', 'quantity', 'list_price', 'discount'],
    rows: [
      [1, 1, 1, 2, 599.99, 0.10],
      [1, 2, 3, 1, 399.99, 0.00],
      [2, 1, 2, 1, 449.99, 0.05],
      [3, 1, 1, 1, 599.99, 0.00],
      [4, 1, 4, 1, 1299.99, 0.15]
    ]
  },
  staffs: {
    columns: ['staff_id', 'first_name', 'last_name', 'email', 'phone', 'active', 'manager_id', 'store_id'],
    rows: [
      [1, 'John', 'Doe', 'john@store.com', '123-456-7890', 1, null, 1],
      [2, 'Jane', 'Smith', 'jane@store.com', '234-567-8901', 1, 1, 1],
      [3, 'Bob', 'Johnson', 'bob@store.com', '345-678-9012', 1, 1, 2],
      [4, 'Alice', 'Williams', 'alice@store.com', '456-789-0123', 0, 2, 2],
      [5, 'Charlie', 'Brown', 'charlie@store.com', '567-890-1234', 1, 2, 1]
    ]
  },
  brands: {
    columns: ['brand_id', 'brand_name'],
    rows: [
      [1, 'Trek'],
      [2, 'Electra'],
      [3, 'Giant'],
      [4, 'Northwoods'],
      [5, 'Sun Dolphin']
    ]
  },
  categories: {
    columns: ['category_id', 'category_name'],
    rows: [
      [1, 'Bicycles'],
      [2, 'Mountain Bikes'],
      [3, 'Road Bikes'],
      [4, 'Accessories']
    ]
  }
};

function initDatabase() {
  for (const [name, data] of Object.entries(tables)) {
    const cols = data.columns.map(c => c).join(', ');
    alasql(`CREATE TABLE ${name} (${cols})`);
    for (const row of data.rows) {
      const vals = row.map(v => v === null ? 'NULL' : `'${v}'`).join(', ');
      alasql(`INSERT INTO ${name} VALUES (${vals})`);
    }
  }
}

function isTableImage(src) {
  const baseName = path.basename(src);
  return ['customers.png', 'products.png', 'orders.png', 'staffs.png', 'brands.png', 'categories.png', 'order_items.png'].includes(baseName);
}

function getTableData(tableName) {
  return tables[tableName];
}

function createTableBlock(data) {
  return {
    type: 'table',
    data: {
      headers: data.columns,
      rows: data.rows.map(row => row.map(v => v === null ? '' : String(v)))
    }
  };
}

function convertSqlToAla(sql) {
  let converted = sql;
  
  // Convert SELECT TOP N to SELECT with LIMIT
  converted = converted.replace(/SELECT\s+TOP\s+(\d+)\s+/i, (match, num) => {
    return `SELECT `;
  });
  
  // Remove trailing LIMIT if present (alasql doesn't use it the same way)
  
  // Convert square brackets to regular identifiers
  converted = converted.replace(/\[([^\]]+)\]/g, '$1');
  
  // Convert ISNULL to COALESCE
  converted = converted.replace(/ISNULL\s*\(([^,]+),\s*([^)]+)\)/gi, 'COALESCE($1, $2)');
  
  // Convert GETDATE() to CURRENT_TIMESTAMP
  converted = converted.replace(/GETDATE\(\)/gi, 'CURRENT_TIMESTAMP');
  
  return converted;
}

function executeQuery(sql) {
  try {
    const converted = convertSqlToAla(sql);
    const result = alasql(converted);
    if (Array.isArray(result) && result.length > 0) {
      const columns = Object.keys(result[0]);
      const rows = result.map(row => columns.map(col => row[col] === null ? '' : String(row[col])));
      return { columns, rows };
    }
    return null;
  } catch (e) {
    return null;
  }
}

function isSSMSBlock(block) {
  if (block.type === 'callout' || block.type === 'paragraph') {
    const text = block.data?.text || '';
    return text.includes('Run this query in SQL Server Management Studio') ||
           text.includes('In SQL Server Management Studio') ||
           text.includes('using SQL Server Management Studio');
  }
  if (block.type === 'example') {
    const text = block.data?.content || '';
    return text.includes('Run this query in SQL Server Management Studio');
  }
  return false;
}

function isRelevantSSMS(block) {
  const text = block.data?.text || block.data?.content || '';
  if (text.includes('SQL Server Management Studio') || text.includes('SSMS')) {
    // Keep if it's describing a feature that involves SSMS as part of the lesson
    if (text.includes('rename') || text.includes('drop') || text.includes('create') || 
        text.includes('modify') || text.includes('navigate') || text.includes('expand') ||
        text.includes('graphical')) {
      return true;
    }
    return false;
  }
  return true;
}

let stats = {
  filesModifiedForTables: new Set(),
  filesModifiedForSSMS: new Set(),
  tableBlocksAdded: 0,
  imagesRemoved: 0,
  ssmsBlocksRemoved: 0
};

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(content);
  
  if (!data.blocks) return;
  
  let modified = false;
  const newBlocks = [];
  
  for (let i = 0; i < data.blocks.length; i++) {
    const block = data.blocks[i];
    
    // Handle table images
    if (block.type === 'image' && isTableImage(block.data?.src)) {
      const tableName = path.basename(block.data.src, '.png');
      const tableData = getTableData(tableName);
      if (tableData) {
        newBlocks.push(createTableBlock(tableData));
        stats.tableBlocksAdded++;
        stats.imagesRemoved++;
        stats.filesModifiedForTables.add(filePath);
        modified = true;
        continue;
      }
    }
    
    // Handle SSMS blocks
    if (isSSMSBlock(block)) {
      if (!isRelevantSSMS(block)) {
        stats.ssmsBlocksRemoved++;
        stats.filesModifiedForSSMS.add(filePath);
        modified = true;
        continue;
      }
    }
    
    newBlocks.push(block);
  }
  
  if (modified) {
    data.blocks = newBlocks;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  }
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(full);
    } else if (entry.name.endsWith('.json') && entry.name !== 'content.json') {
      processFile(full);
    }
  }
}

console.log('Initializing database...');
initDatabase();
console.log('Processing files...');
processDirectory('content/courses/sql-server');
console.log('Done!');
console.log('Files modified for tables:', stats.filesModifiedForTables.size);
console.log('Files modified for SSMS:', stats.filesModifiedForSSMS.size);
console.log('Table blocks added:', stats.tableBlocksAdded);
console.log('Images removed:', stats.imagesRemoved);
console.log('SSMS blocks removed:', stats.ssmsBlocksRemoved);
