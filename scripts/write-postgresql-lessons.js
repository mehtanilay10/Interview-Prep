const fs = require('fs');
const path = require('path');

const DIR = path.join(process.cwd(), 'content/courses/postgresql');

function lesson(id, slug, moduleSlug, order, difficulty, estimatedMinutes, title, description, tags, blocks) {
  return { id, slug, moduleSlug, courseSlug: 'postgresql', title, description, order, difficulty, estimatedMinutes: Math.min(estimatedMinutes, 35), tags, blocks, relatedLessons: [], furtherReading: [] };
}

const lessons = [
  // getting-started
  lesson('lesson-pg-001','what-is-postgresql','getting-started',1,'beginner',35,'What is PostgreSQL?','Learn what PostgreSQL is, its history, and why it is widely used.',['introduction','history','mvcc'],[
    {type:'heading',data:{level:2,text:'What is PostgreSQL?'}},
    {type:'paragraph',data:{text:'PostgreSQL is a powerful, open-source object-relational database system with over 30 years of active development.'}},
    {type:'paragraph',data:{text:'It has earned a strong reputation for reliability, feature robustness, and performance. PostgreSQL supports both SQL and JSON querying.'}},
    {type:'heading',data:{level:3,text:'Why PostgreSQL?'}},
    {type:'comparison-cards',data:{title:'PostgreSQL Strengths',cards:[
      {title:'ACID Compliant',description:'Full ACID compliance with multi-version concurrency control.',tags:['transactions']},
      {title:'Extensible',description:'Support for custom types, indexes, languages, and extensions.',tags:['extensions']},
      {title:'SQL & NoSQL',description:'Relational model plus JSONB for document-style data.',tags:['jsonb']}
    ]}},
    {type:'callout',data:{variant:'info',title:'Note',text:'PostgreSQL is pronounced "post-gress-Q-L".'}},
    {type:'mermaid',data:{id:'mermaid-pg-what-is',caption:'PostgreSQL fits into application architecture.',definition:'flowchart TD\n    A[Application] --> B[PostgreSQL]\n    B --> C[Extensions]\n    C --> D[PostGIS / pgvector / TimescaleDB]'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['PostgreSQL is open source and ACID compliant.','It supports SQL and JSONB.','Extensions add spatial, time-series, and vector capabilities.']}}
  ]),
  lesson('lesson-pg-002','architecture-overview','getting-started',2,'beginner',35,'PostgreSQL Architecture','Explore PostgreSQL process model, shared memory, and WAL.',['architecture','processes','wal'],[
    {type:'heading',data:{level:2,text:'PostgreSQL Architecture'}},
    {type:'paragraph',data:{text:'PostgreSQL uses a process model with a postmaster and multiple backend processes. Shared buffers and WAL provide durability and concurrency.'}},
    {type:'bullet-list',data:{title:'Core Processes',items:['postmaster - main process','backend - one per connection','background writer - writes dirty buffers','WAL writer - writes WAL buffers','autovacuum - cleans dead tuples','logical replication launcher']}},
    {type:'mermaid',data:{id:'mermaid-pg-arch',caption:'PostgreSQL process model',definition:'flowchart TD\n    A[postmaster] --> B[backend]\n    A --> C[WAL writer]\n    A --> D[autovacuum]\n    A --> E[background writer]'}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'PostgreSQL 16 introduces parallel vacuum and incremental sort.'}},
    {type:'faq-block',data:{title:'Architecture FAQ',items:[
      {question:'Does PostgreSQL use threads?',answer:'Backend processes are operating system processes, not threads.'},
      {question:'What is the WAL?',answer:'Write-Ahead Logging ensures changes are logged before data files are modified.'},
      {question:'What are CTID and xmin?',answer:'CTID identifies a row physically. xmin tracks the inserting transaction ID.'}
    ]}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['PostgreSQL uses a process-based model.','WAL provides durability and replication.','Background processes handle maintenance and recovery.']}}
  ]),
  lesson('lesson-pg-003','installation-setup','getting-started',3,'beginner',35,'Installation & Setup','Install PostgreSQL using packages, Docker, or initdb.',['installation','docker','initdb'],[
    {type:'heading',data:{level:2,text:'Installation & Setup'}},
    {type:'paragraph',data:{text:'You can install PostgreSQL using native packages, Docker, or build from source.'}},
    {type:'example',data:{title:'Docker Run',content:'Run PostgreSQL 16 on Docker',language:'bash',code:"docker run --name pg16 \\\n  -e POSTGRES_PASSWORD=secret \\\n  -p 5432:5432 -d postgres:16-alpine"}},
    {type:'example',data:{title:'initdb',content:'Initialize a database cluster',language:'bash',code:"initdb -D /var/lib/postgresql/data \\\n  -U postgres -W -E UTF8"}},
    {type:'callout',data:{variant:'warning',title:'Security',text:'Never use trust authentication in production. Use scram-sha-256 or cert authentication.'}},
    {type:'checklist',data:{title:'Setup Checklist',items:[
      {text:'Install PostgreSQL or pull Docker image',hint:'Use postgres:16-alpine'},
      {text:'Create database cluster with initdb',hint:'Set a strong password for postgres'},
      {text:'Configure pg_hba.conf',hint:'Use scram-sha-256'},
      {text:'Connect with psql',hint:'psql -U postgres -d postgres'}
    ]}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use Docker for local development.','Use scram-sha-256 authentication.','Verify connection with psql.']}}
  ]),
  lesson('lesson-pg-004','psql-basics','getting-started',4,'beginner',35,'psql Basics','Use psql for interactive SQL, meta-commands, and scripting.',['psql','cli','meta-commands'],[
    {type:'heading',data:{level:2,text:'psql Basics'}},
    {type:'paragraph',data:{text:'psql is the standard command-line client for PostgreSQL. It supports meta-commands starting with backslash.'}},
    {type:'table',data:{headers:['Command','Description'],rows:[['\\\\l','List databases'],['\\\\c dbname','Connect to database'],['\\\\dt','List tables'],['\\\\d tablename','Describe table'],['\\\\dn','List schemas'],['\\\\dx','List extensions'],['\\\\g','Execute query'],['\\\\q','Quit']]}},
    {type:'example',data:{title:'psql Scripting',content:'Run SQL from a file',language:'bash',code:"psql -U postgres -f schema.sql -d appdb"}},
    {type:'exercise',data:{title:'Exercise: psql Practice',description:'Connect to a database and list tables, describe a table, and run a query.',steps:['Start psql','List databases','Connect to appdb','List tables','Describe a table'],expectedOutcome:'You can navigate PostgreSQL with psql.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['psql uses backslash meta-commands.','You can script SQL with -f.','Use \\\\d+ for extended table details.']}}
  ]),
  // querying-data
  lesson('lesson-pg-005','select-statement','querying-data',1,'beginner',35,'SELECT Statement','Write SELECT queries, project columns, and use DISTINCT.',['select','projection','distinct'],[
    {type:'heading',data:{level:2,text:'SELECT Statement'}},
    {type:'paragraph',data:{text:'The SELECT statement retrieves rows and columns from a table. You can project specific columns or use *.'}},
    {type:'example',data:{title:'Basic SELECT',content:'Project columns and filter duplicates',language:'sql',code:"SELECT id, email, created_at\nFROM users\nORDER BY created_at DESC\nLIMIT 20;"}},
    {type:'example',data:{title:'DISTINCT',content:'Return unique values',language:'sql',code:"SELECT DISTINCT country\nFROM users\nORDER BY 1;"}},
    {type:'key-terms',data:{terms:[{term:'Projection',definition:'Selecting columns in a query.'},{term:'DISTINCT',definition:'Eliminating duplicate rows.'}]}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['SELECT projects columns.','Use DISTINCT sparingly.','Use ORDER BY and LIMIT for pagination.']}}
  ]),
  lesson('lesson-pg-006','where-clause','querying-data',2,'beginner',35,'WHERE Clause','Filter rows using WHERE, pattern matching, and NULL checks.',['where','filtering','pattern-matching'],[
    {type:'heading',data:{level:2,text:'WHERE Clause'}},
    {type:'paragraph',data:{text:'The WHERE clause filters rows. Use it with equality, comparison, and pattern-matching operators.'}},
    {type:'example',data:{title:'Filter Rows',content:'Use WHERE with multiple conditions',language:'sql',code:"SELECT id, email\nFROM users\nWHERE country = $1\n  AND created_at >= CURRENT_DATE - INTERVAL '7 days'\n  AND email ILIKE '%gmail.com'\nLIMIT 100;"}},
    {type:'callout',data:{variant:'tip',title:'ILIKE',text:'PostgreSQL supports ILIKE for case-insensitive pattern matching.'}},
    {type:'exercise',data:{title:'Exercise: Filter Active Users',description:'Write a query for users updated in the last 30 days with email verified.',steps:['Filter updated_at','Require email_verified = true','Order by updated_at'],expectedOutcome:'Query returns active, verified users.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use WHERE to filter rows.','Use ILIKE for case-insensitive patterns.','Combine conditions with AND/OR.']}}
  ]),
  lesson('lesson-pg-007','and-or-operators','querying-data',3,'beginner',35,'AND, OR, and NOT Operators','Use AND, OR, and NOT to combine conditions.',['and','or','not','operators'],[
    {type:'heading',data:{level:2,text:'AND, OR, and NOT Operators'}},
    {type:'paragraph',data:{text:'Use AND, OR, and NOT to build compound predicates. Parentheses control precedence.'}},
    {type:'example',data:{title:'Compound Predicates',content:'Combine conditions with AND and OR',language:'sql',code:"SELECT id, name\nFROM products\nWHERE (category = $1 OR category = $2)\n  AND price > 0\n  AND deleted_at IS NULL;"}},
    {type:'callout',data:{variant:'warning',title:'Predicate Logic',text:'Use parentheses to avoid unexpected logic precedence.'}},
    {type:'exercise',data:{title:'Exercise: Search Products',description:'Find products matching a category or search term, excluding archived ones.',steps:['Filter category and search term','Exclude archived products','Order by name'],expectedOutcome:'Correct compound predicate query.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use AND for all conditions.','Use OR for any condition.','Use NOT to negate conditions.']}}
  ]),
  lesson('lesson-pg-008','between-in-like','querying-data',4,'beginner',35,'BETWEEN, IN, and LIKE','Use BETWEEN for ranges, IN for lists, and LIKE for patterns.',['between','in','like','patterns'],[
    {type:'heading',data:{level:2,text:'BETWEEN, IN, and LIKE'}},
    {type:'example',data:{title:'BETWEEN',content:'Filter by price range',language:'sql',code:"SELECT id, name, price\nFROM products\nWHERE price BETWEEN $1 AND $2\n  AND category = $3;"}},
    {type:'example',data:{title:'IN',content:'Filter by list',language:'sql',code:"SELECT id, name\nFROM users\nWHERE country IN ($1, $2, $3, $4);"}},
    {type:'example',data:{title:'LIKE',content:'Pattern match with wildcards',language:'sql',code:"SELECT id, email\nFROM users\nWHERE email LIKE 'john%@example.com';"}},
    {type:'callout',data:{variant:'info',title:'SIMILAR TO',text:'PostgreSQL supports SIMILAR TO for regular-expression-like matching.'}},
    {type:'exercise',data:{title:'Exercise: Search Users',description:'Find users with specific countries and email domains.',steps:['Use IN for countries','Use LIKE for email domain','Filter active users'],expectedOutcome:'Correct use of BETWEEN/IN/LIKE.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['BETWEEN is inclusive.','IN simplifies IN-list predicates.','LIKE uses % and _ wildcards.']}}
  ]),
  lesson('lesson-pg-009','null-handling','querying-data',5,'beginner',35,'NULL Handling','Work with NULL, IS NULL, IS NOT NULL, COALESCE, and NULLIF.',['null','coalesce','nullif'],[
    {type:'heading',data:{level:2,text:'NULL Handling'}},
    {type:'paragraph',data:{text:'NULL represents unknown or missing data. Use IS NULL and IS NOT NULL to test for NULL.'}},
    {type:'example',data:{title:'COALESCE',content:'Return first non-NULL value',language:'sql',code:"SELECT id, COALESCE(display_name, email, 'Anonymous') AS name\nFROM users;"}},
    {type:'example',data:{title:'NULLIF',content:'Return NULL if values are equal',language:'sql',code:"SELECT id, NULLIF(status, '') AS status\nFROM orders;"}},
    {type:'key-terms',data:{terms:[{term:'COALESCE',definition:'Returns first non-NULL expression.'},{term:'NULLIF',definition:'Returns NULL if both arguments are equal.'}]}},
    {type:'exercise',data:{title:'Exercise: Normalize Names',description:'Use COALESCE to choose display name, fallback to email.',steps:['Use COALESCE','Provide fallback','Filter NULL emails'],expectedOutcome:'Query returns normalized names.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['NULL means unknown.','Use IS NULL and IS NOT NULL.','Use COALESCE and NULLIF for NULL logic.']}}
  ]),
  lesson('lesson-pg-010','order-by','querying-data',6,'beginner',35,'ORDER BY','Sort result sets with ORDER BY, NULLS FIRST/LAST, and collation.',['order-by','sorting','collation'],[
    {type:'heading',data:{level:2,text:'ORDER BY'}},
    {type:'paragraph',data:{text:'ORDER BY sorts rows. Use ASC or DESC, NULLS FIRST/LAST, and collations for text.'}},
    {type:'example',data:{title:'Sorting',content:'Sort by multiple columns with NULLS LAST',language:'sql',code:"SELECT id, name, completed_at\nFROM tasks\nORDER BY completed_at NULLS LAST, name COLLATE \"en_US\" ASC\nLIMIT 100;"}},
    {type:'callout',data:{variant:'tip',title:'Performance',text:'ORDER BY can use indexes on large tables.'}},
    {type:'exercise',data:{title:'Exercise: Sort Tasks',description:'Sort tasks by completion status and name.',steps:['Use NULLS LAST','Use collation','Limit rows'],expectedOutcome:'Correctly ordered result set.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use NULLS FIRST/LAST.','Use COLLATE for locale sorting.','Use indexes for sorting large sets.']}}
  ]),
  lesson('lesson-pg-011','limit-offset-fetch','querying-data',7,'beginner',35,'LIMIT, OFFSET, and FETCH','Page results with LIMIT, OFFSET, and SQL-standard FETCH.',['limit','offset','pagination'],[
    {type:'heading',data:{level:2,text:'LIMIT, OFFSET, and FETCH'}},
    {type:'example',data:{title:'LIMIT and OFFSET',content:'Page through results',language:'sql',code:"SELECT id, name\nFROM products\nORDER BY created_at DESC\nLIMIT $1 OFFSET $2;"}},
    {type:'example',data:{title:'FETCH',content:'SQL-standard pagination',language:'sql',code:"SELECT id, name\nFROM products\nORDER BY created_at DESC\nFETCH NEXT 25 ROWS ONLY;"}},
    {type:'callout',data:{variant:'warning',title:'Cursors',text:'For large result sets, consider DECLARE CURSOR to avoid repeated scans.'}},
    {type:'exercise',data:{title:'Exercise: Paginate Products',description:'Implement page-based pagination for a product catalog.',steps:['Use LIMIT and OFFSET','Use FETCH NEXT','Use keyset pagination for deep pages'],expectedOutcome:'Correct pagination queries.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use LIMIT and OFFSET for simple pagination.','Use FETCH NEXT for SQL-standard syntax.','Avoid deep OFFSET on large tables.']}}
  ]),
  // joins
  lesson('lesson-pg-012','visualization-joins','joins',1,'beginner',35,'A Visualization Explanation of Joins in PostgreSQL','Understand join types visually with sample tables.',['joins','visualization'],[
    {type:'heading',data:{level:2,text:'A Visualization Explanation of Joins'}},
    {type:'paragraph',data:{text:'PostgreSQL supports INNER JOIN, LEFT/RIGHT OUTER JOIN, FULL OUTER JOIN, CROSS JOIN, and LATERAL joins.'}},
    {type:'example',data:{title:'Sample Tables',content:'Create sample tables',language:'sql',code:"CREATE TABLE candidates (\n  id SERIAL PRIMARY KEY,\n  fullname TEXT NOT NULL\n);\n\nCREATE TABLE employees (\n  id SERIAL PRIMARY KEY,\n  fullname TEXT NOT NULL\n);"}},
    {type:'mermaid',data:{id:'mermaid-pg-joins',caption:'Set-style visualization of join types',definition:'flowchart TD\n    A[Left] --> B[Inner]\n    A --> C[Left Outer]\n    A --> D[Right Outer]\n    A --> E[Full Outer]\n    A --> F[Cross]'}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use LATERAL to join set-returning functions to rows.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Join types determine row inclusion.','Use LATERAL for row-wise set functions.','Avoid large cross joins.']}}
  ]),
  lesson('lesson-pg-013','inner-join','joins',2,'beginner',35,'INNER JOIN','Return matching rows from two tables.',['inner-join','join'],[
    {type:'heading',data:{level:2,text:'INNER JOIN'}},
    {type:'paragraph',data:{text:'INNER JOIN returns rows when there is a match in both tables.'}},
    {type:'example',data:{title:'Inner Join',content:'Join users and orders',language:'sql',code:"SELECT u.id, u.email, o.id AS order_id, o.total\nFROM users u\nINNER JOIN orders o ON o.user_id = u.id\nWHERE u.deleted_at IS NULL\nLIMIT 100;"}},
    {type:'exercise',data:{title:'Exercise: Match Users to Orders',description:'Write an inner join between users and orders.',steps:['Join on user_id','Filter deleted users','Limit rows'],expectedOutcome:'Query returns matched rows.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use INNER JOIN for matching rows.','Use table aliases for readability.','Use WHERE for non-join filters.']}}
  ]),
  lesson('lesson-pg-014','left-right-joins','joins',3,'beginner',35,'LEFT JOIN and RIGHT JOIN','Use outer joins to include unmatched rows.',['left-join','right-join','outer-join'],[
    {type:'heading',data:{level:2,text:'LEFT JOIN and RIGHT JOIN'}},
    {type:'paragraph',data:{text:'LEFT JOIN returns all rows from the left table and matched rows from the right table. RIGHT JOIN does the opposite.'}},
    {type:'example',data:{title:'Left Join',content:'Include users without orders',language:'sql',code:"SELECT u.id, u.email, o.id AS order_id\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id\nWHERE u.deleted_at IS NULL\nORDER BY u.id\nLIMIT 100;"}},
    {type:'callout',data:{variant:'warning',title:'NULL Extension',text:'Unmatched right-side columns are NULL in an outer join.'}},
    {type:'exercise',data:{title:'Exercise: Users Without Orders',description:'Find users with no orders using LEFT JOIN.',steps:['Left join users and orders','Filter orders.id IS NULL','Order by id'],expectedOutcome:'Query returns users without orders.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use LEFT JOIN to include unmatched left rows.','Use RIGHT JOIN rarely; prefer LEFT JOIN.','Check for NULL to find unmatched rows.']}}
  ]),
  lesson('lesson-pg-015','full-outer-join','joins',4,'beginner',35,'FULL OUTER JOIN','Return all rows from both tables with matched and unmatched rows.',['full-outer-join'],[
    {type:'heading',data:{level:2,text:'FULL OUTER JOIN'}},
    {type:'paragraph',data:{text:'FULL OUTER JOIN returns all rows when there is a match in either table. Unmatched rows are filled with NULL.'}},
    {type:'example',data:{title:'Full Outer Join',content:'Compare users and order user_ids',language:'sql',code:"SELECT u.id AS user_id, o.id AS order_id\nFROM users u\nFULL OUTER JOIN orders o ON o.user_id = u.id\nWHERE u.deleted_at IS NULL\nORDER BY 1\nLIMIT 100;"}},
    {type:'callout',data:{variant:'tip',title:'Use Case',text:'Use FULL OUTER JOIN for data reconciliation and auditing.'}},
    {type:'exercise',data:{title:'Exercise: Reconciliation',description:'Use FULL OUTER JOIN to reconcile users and orders.',steps:['Full outer join on user_id','Filter unmatched rows','Order by id'],expectedOutcome:'Reconciliation query returns unmatched and matched rows.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['FULL OUTER JOIN returns unmatched rows from both tables.','Use for auditing and reconciliation.','Use IS NULL to find unmatched rows.']}}
  ]),
  lesson('lesson-pg-016','cross-join','joins',5,'beginner',35,'CROSS JOIN','Generate Cartesian products with CROSS JOIN.',['cross-join'],[
    {type:'heading',data:{level:2,text:'CROSS JOIN'}},
    {type:'paragraph',data:{text:'CROSS JOIN returns the Cartesian product of two tables.'}},
    {type:'example',data:{title:'Cross Join',content:'Generate all combinations',language:'sql',code:"SELECT c.name AS color, s.name AS size\nFROM colors c\nCROSS JOIN sizes s\nORDER BY 1, 2;"}},
    {type:'callout',data:{variant:'warning',title:'Warning',text:'CROSS JOIN produces a large result set: row count = left rows * right rows.'}},
    {type:'exercise',data:{title:'Exercise: Generate Combinations',description:'Generate all color and size combinations.',steps:['Cross join colors and sizes','Order by color and size','Limit rows'],expectedOutcome:'Query returns all combinations.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['CROSS JOIN produces all combinations.','Use for generating datasets.','Avoid on large tables.']}}
  ]),
  lesson('lesson-pg-017','lateral-join','joins',6,'advanced',35,'LATERAL Join','Join with set-returning functions using LATERAL.',['lateral-join','set-returning'],[
    {type:'heading',data:{level:2,text:'LATERAL Join'}},
    {type:'paragraph',data:{text:'LATERAL allows a subquery to reference preceding tables. It is useful for set-returning functions.'}},
    {type:'example',data:{title:'LATERAL',content:'Get latest order per user',language:'sql',code:"SELECT u.id, u.email, o.total\nFROM users u\nLEFT JOIN LATERAL (\n  SELECT id, total\n  FROM orders o\n  WHERE o.user_id = u.id\n  ORDER BY created_at DESC\n  LIMIT 1\n) o ON TRUE\nLIMIT 100;"}},
    {type:'callout',data:{variant:'info',title:'LATERAL',text:'LATERAL can also cross join set-returning functions like generate_series.'}},
    {type:'exercise',data:{title:'Exercise: Latest Order Per User',description:'Use LATERAL to get the latest order for each user.',steps:['Cross join lateral subquery','Filter by user_id','Order by created_at'],expectedOutcome:'Query returns latest order per user.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['LATERAL references preceding tables.','Use for correlated subqueries.','Use with generate_series for intervals.']}}
  ]),
  // set-operations
  lesson('lesson-pg-018','union','set-operations',1,'beginner',35,'UNION','Combine query results with UNION and UNION ALL.',['union','set-operations'],[
    {type:'heading',data:{level:2,text:'UNION'}},
    {type:'paragraph',data:{text:'UNION combines result sets and removes duplicates. UNION ALL keeps duplicates.'}},
    {type:'example',data:{title:'UNION',content:'Combine active and archived users',language:'sql',code:"SELECT id, email FROM active_users\nUNION\nSELECT id, email FROM archived_users\nORDER BY 2\nLIMIT 200;"}},
    {type:'callout',data:{variant:'tip',title:'Performance',text:'UNION ALL is faster because it does not deduplicate.'}},
    {type:'exercise',data:{title:'Exercise: Merge Active Lists',description:'Combine active and VIP users.',steps:['Use UNION or UNION ALL','Deduplicate if needed','Order by email'],expectedOutcome:'Combined result set.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['UNION removes duplicates.','Use UNION ALL when duplicates are acceptable.','Use ORDER BY at the end.']}}
  ]),
  lesson('lesson-pg-019','intersect','set-operations',2,'beginner',35,'INTERSECT','Return common rows with INTERSECT.',['intersect'],[
    {type:'heading',data:{level:2,text:'INTERSECT'}},
    {type:'example',data:{title:'INTERSECT',content:'Find common subscribers',language:'sql',code:"SELECT user_id FROM newsletter_subscribers\nINTERSECT\nSELECT user_id FROM premium_members\nORDER BY 1;"}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['INTERSECT returns common rows.','It removes duplicates.','Use for set overlap checks.']}}
  ]),
  lesson('lesson-pg-020','except','set-operations',3,'beginner',35,'EXCEPT','Find rows in one query but not another.',['except'],[
    {type:'heading',data:{level:2,text:'EXCEPT'}},
    {type:'example',data:{title:'EXCEPT',content:'Find unsubscribed users',language:'sql',code:"SELECT id FROM users\nEXCEPT\nSELECT user_id FROM newsletter_subscribers\nORDER BY 1;"}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['EXCEPT returns rows in the first query but not the second.','It removes duplicates.','Use for anti-join checks.']}}
  ]),
  // grouping-aggregation-subqueries
  lesson('lesson-pg-021','group-by','grouping-aggregation-subqueries',1,'intermediate',35,'GROUP BY','Aggregate rows with GROUP BY and common aggregates.',['group-by','aggregation'],[
    {type:'heading',data:{level:2,text:'GROUP BY'}},
    {type:'paragraph',data:{text:'GROUP BY organizes rows into groups and applies aggregate functions.'}},
    {type:'example',data:{title:'Group By',content:'Count orders per user',language:'sql',code:"SELECT user_id, COUNT(*) AS order_count, SUM(total) AS lifetime\nFROM orders\nWHERE created_at >= CURRENT_DATE - INTERVAL '1 year'\nGROUP BY user_id\nHAVING COUNT(*) > $1\nORDER BY lifetime DESC\nLIMIT 100;"}},
    {type:'exercise',data:{title:'Exercise: Revenue by Region',description:'Calculate total revenue by region.',steps:['Join users and orders','Group by region','Use SUM','Use HAVING'],expectedOutcome:'Query returns revenue per region.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use GROUP BY for aggregation.','Use HAVING to filter groups.','Use aggregates with aliases.']}}
  ]),
  lesson('lesson-pg-022','having-clause','grouping-aggregation-subqueries',2,'intermediate',35,'HAVING Clause','Filter grouped results with HAVING.',['having','aggregation'],[
    {type:'heading',data:{level:2,text:'HAVING Clause'}},
    {type:'paragraph',data:{text:'HAVING filters groups after aggregation. Use WHERE to filter rows before grouping.'}},
    {type:'example',data:{title:'HAVING',content:'Keep users with more than 10 orders',language:'sql',code:"SELECT user_id, COUNT(*) AS order_count\nFROM orders\nGROUP BY user_id\nHAVING COUNT(*) >= 10\nORDER BY order_count DESC;"}},
    {type:'callout',data:{variant:'info',title:'WHERE vs HAVING',text:'WHERE filters rows. HAVING filters groups after aggregation.'}},
    {type:'exercise',data:{title:'Exercise: Power Users',description:'Find users with at least 20 orders and average total > 50.',steps:['Group by user_id','Use COUNT and AVG','Use HAVING'],expectedOutcome:'Query returns power users.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['HAVING filters groups.','Use WHERE for row-level filters.','Aggregates can appear in HAVING.']}}
  ]),
  lesson('lesson-pg-023','aggregate-functions','grouping-aggregation-subqueries',3,'intermediate',35,'Aggregate Functions','Use common aggregate functions in PostgreSQL.',['aggregates','json_agg','string_agg'],[
    {type:'heading',data:{level:2,text:'Aggregate Functions'}},
    {type:'paragraph',data:{text:'PostgreSQL provides many aggregate functions, including JSON aggregation and ordered-set aggregates.'}},
    {type:'example',data:{title:'JSON Aggregation',content:'Aggregate orders per user',language:'sql',code:"SELECT user_id, json_agg(o ORDER BY created_at DESC) AS orders\nFROM orders o\nGROUP BY user_id\nLIMIT 100;"}},
    {type:'key-terms',data:{terms:[{term:'json_agg',definition:'Aggregates rows into a JSON array.'},{term:'string_agg',definition:'Aggregates values into a delimited string.'}]}},
    {type:'exercise',data:{title:'Exercise: Aggregate Products',description:'Aggregate category names into an array per product.',steps:['Use string_agg','Order categories','Group by product'],expectedOutcome:'Query returns aggregated arrays.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use json_agg for JSON arrays.','Use string_agg for delimited strings.','PostgreSQL offers ordered-set aggregates.']}}
  ]),
  lesson('lesson-pg-024','window-functions','grouping-aggregation-subqueries',4,'intermediate',35,'Window Functions','Use ROW_NUMBER, RANK, LAG, LEAD, and running totals.',['window-functions','analytics'],[
    {type:'heading',data:{level:2,text:'Window Functions'}},
    {type:'paragraph',data:{text:'Window functions compute values across rows related to the current row without collapsing groups.'}},
    {type:'example',data:{title:'Running Total',content:'Compute running total of sales',language:'sql',code:"SELECT id, total, SUM(total) OVER (ORDER BY created_at) AS running_total\nFROM orders\nWHERE created_at >= CURRENT_DATE - INTERVAL '3 months'\nLIMIT 100;"}},
    {type:'example',data:{title:'LAG and LEAD',content:'Compare current and previous order',language:'sql',code:"SELECT id, total, LAG(total) OVER (ORDER BY created_at) AS prev_total\nFROM orders\nLIMIT 100;"}},
    {type:'exercise',data:{title:'Exercise: Rank Customers',description:'Rank customers by lifetime revenue.',steps:['Use SUM as window','Use RANK','Partition by country'],expectedOutcome:'Query returns ranked customers.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Window functions do not collapse groups.','Use ORDER BY for running values.','Use PARTITION BY for grouped windows.']}}
  ]),
  lesson('lesson-pg-025','ctes','grouping-aggregation-subqueries',5,'intermediate',35,'Common Table Expressions (CTEs)','Use CTEs for readability and recursive queries.',['cte','recursive'],[
    {type:'heading',data:{level:2,text:'Common Table Expressions'}},
    {type:'paragraph',data:{text:'CTEs use WITH to define temporary result sets. Recursive CTEs handle hierarchical data.'}},
    {type:'example',data:{title:'Recursive CTE',content:'Compute employee hierarchy',language:'sql',code:"WITH RECURSIVE reports AS (\n  SELECT id, name, manager_id, 1 AS depth\n  FROM employees\n  WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.id, e.name, e.manager_id, r.depth + 1\n  FROM employees e\n  JOIN reports r ON r.id = e.manager_id\n)\nSELECT * FROM reports ORDER BY depth, name;"}},
    {type:'callout',data:{variant:'tip',title:'Recursive',text:'Use UNION ALL to avoid repeated distinct sorting in recursive CTEs.'}},
    {type:'exercise',data:{title:'Exercise: Category Tree',description:'Build a category tree with a recursive CTE.',steps:['Anchor query','Recursive member','Order by path'],expectedOutcome:'Query returns category hierarchy.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use WITH for CTEs.','Use RECURSIVE for hierarchies.','CTEs improve readability.']}}
  ]),
  lesson('lesson-pg-026','correlated-subqueries','grouping-aggregation-subqueries',6,'intermediate',35,'Correlated Subqueries','Use correlated subqueries to compute values per row.',['subquery','correlated'],[
    {type:'heading',data:{level:2,text:'Correlated Subqueries'}},
    {type:'paragraph',data:{text:'Correlated subqueries reference the outer query. Use EXISTS, IN, or scalar subqueries.'}},
    {type:'example',data:{title:'EXISTS',content:'Find users with orders',language:'sql',code:"SELECT id, email\nFROM users u\nWHERE EXISTS (\n  SELECT 1 FROM orders o\n  WHERE o.user_id = u.id\n    AND o.created_at >= CURRENT_DATE - INTERVAL '30 days'\n);"}},
    {type:'callout',data:{variant:'info',title:'EXISTS vs IN',text:'Use EXISTS when the subquery is large or uses indexes efficiently.'}},
    {type:'exercise',data:{title:'Exercise: Find VIP Users',description:'Find users with at least one order over 500.',steps:['Use EXISTS','Correlate on user_id','Filter total'],expectedOutcome:'Query returns VIP users.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Correlated subqueries reference the outer query.','Use EXISTS for anti-join checks.','Use indexes for correlated filters.']}}
  ]),
  // data-modification-dml
  lesson('lesson-pg-027','insert','data-modification-dml',1,'beginner',35,'INSERT','Insert rows with VALUES, multi-row inserts, and RETURNING.',['insert','dml','returning'],[
    {type:'heading',data:{level:2,text:'INSERT'}},
    {type:'paragraph',data:{text:'INSERT adds rows. Use VALUES for single or multi-row inserts. RETURNING returns inserted rows.'}},
    {type:'example',data:{title:'Insert',content:'Insert and return id',language:'sql',code:"INSERT INTO users (email, display_name, country)\nVALUES ($1, $2, $3)\nRETURNING id, created_at;"}},
    {type:'example',data:{title:'Multi-Row Insert',content:'Insert multiple rows',language:'sql',code:"INSERT INTO users (email, display_name)\nVALUES\n  ($1, $2),\n  ($3, $4),\n  ($5, $6)\nRETURNING id, email;"}},
    {type:'callout',data:{variant:'tip',title:'RETURNING',text:'RETURNING avoids a second query and is safe for serial columns.'}},
    {type:'exercise',data:{title:'Exercise: Insert Products',description:'Insert products and return ids.',steps:['Insert 3 products','Use RETURNING','Return id and slug'],expectedOutcome:'Insert query returns product rows.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use VALUES for inserts.','Use multi-row inserts.','Use RETURNING for generated values.']}}
  ]),
  lesson('lesson-pg-028','insert-on-conflict','data-modification-dml',2,'intermediate',35,'INSERT ... ON CONFLICT','Use ON CONFLICT for upsert patterns.',['upsert','on-conflict','unique'],[
    {type:'heading',data:{level:2,text:'INSERT ... ON CONFLICT'}},
    {type:'paragraph',data:{text:'ON CONFLICT handles unique or exclusion constraint violations.'}},
    {type:'example',data:{title:'Upsert',content:'Insert or update on conflict',language:'sql',code:"INSERT INTO users (email, display_name, login_count)\nVALUES ($1, $2, 1)\nON CONFLICT (email)\nDO UPDATE SET\n  display_name = EXCLUDED.display_name,\n  login_count = users.login_count + 1\nRETURNING id, login_count;"}},
    {type:'callout',data:{variant:'warning',title:'CONFLICT',text:'Specify the constraint or index used for conflict detection.'}},
    {type:'exercise',data:{title:'Exercise: Upsert Product',description:'Insert or update product by unique slug.',steps:['Use ON CONFLICT','Update name and price','Return updated row'],expectedOutcome:'Query performs upsert.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['ON CONFLICT is PostgreSQL-specific upsert.','Use DO UPDATE for update actions.','Use EXCLUDED for new values.']}}
  ]),
  lesson('lesson-pg-029','update','data-modification-dml',3,'beginner',35,'UPDATE','Update rows and return changed rows.',['update','dml','returning'],[
    {type:'heading',data:{level:2,text:'UPDATE'}},
    {type:'example',data:{title:'Update',content:'Update and return rows',language:'sql',code:"UPDATE users\nSET display_name = $1, updated_at = NOW()\nWHERE id = $2\nRETURNING id, email, updated_at;"}},
    {type:'exercise',data:{title:'Exercise: Mark Orders Paid',description:'Update order status and return ids.',steps:['Set status','Filter pending','Use RETURNING'],expectedOutcome:'Query returns updated rows.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use UPDATE for rows.','Use RETURNING for changed rows.','Use WHERE to limit rows.']}}
  ]),
  lesson('lesson-pg-030','delete','data-modification-dml',4,'beginner',35,'DELETE','Delete rows with RETURNING and soft delete patterns.',['delete','dml','returning'],[
    {type:'heading',data:{level:2,text:'DELETE'}},
    {type:'example',data:{title:'Delete',content:'Delete and return rows',language:'sql',code:"DELETE FROM users\nWHERE deleted_at IS NULL\n  AND last_login_at < CURRENT_DATE - INTERVAL '3 years'\nRETURNING id, email;"}},
    {type:'callout',data:{variant:'info',title:'Soft Delete',text:'Prefer soft delete with deleted_at unless physical removal is required.'}},
    {type:'exercise',data:{title:'Exercise: Cleanup Users',description:'Delete inactive users with RETURNING.',steps:['Filter last login','Use RETURNING','Order by id'],expectedOutcome:'Query returns deleted rows.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use DELETE for rows.','Use RETURNING for confirmation.','Prefer soft delete in apps.']}}
  ]),
  lesson('lesson-pg-031','merge','data-modification-dml',5,'intermediate',35,'MERGE','Use MERGE for conditional inserts and updates.',['merge','dml'],[
    {type:'heading',data:{level:2,text:'MERGE'}},
    {type:'paragraph',data:{text:'MERGE performs conditional inserts, updates, or deletes based on a source.'}},
    {type:'example',data:{title:'Merge',content:'Merge product inventory',language:'sql',code:"MERGE INTO products AS target\nUSING product_snapshots AS source\nON target.id = source.id\nWHEN MATCHED AND source.deleted THEN\n  DELETE\nWHEN MATCHED THEN\n  UPDATE SET price = source.price\nWHEN NOT MATCHED THEN\n  INSERT (id, name, price) VALUES (source.id, source.name, source.price);"}},
    {type:'callout',data:{variant:'tip',title:'MERGE',text:'PostgreSQL 15+ MERGE simplifies ETL-style workflows.'}},
    {type:'exercise',data:{title:'Exercise: Merge Inventory',description:'Use MERGE to sync inventory snapshots.',steps:['Join source and target','Delete removed products','Update prices'],expectedOutcome:'Merge query syncs inventory.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['MERGE handles conditional DML.','Use WHEN MATCHED and NOT MATCHED.','Use for snapshot and CDC sync.']}}
  ]),
  lesson('lesson-pg-032','copy-bulk-load','data-modification-dml',6,'intermediate',35,'COPY Bulk Load','Use COPY for high-performance data loading and unloading.',['copy','bulk','csv'],[
    {type:'heading',data:{level:2,text:'COPY'}},
    {type:'paragraph',data:{text:'COPY is the fastest way to load and unload large datasets.'}},
    {type:'example',data:{title:'COPY',content:'Bulk load from CSV',language:'bash',code:"\\COPY products FROM '/tmp/products.csv' WITH (FORMAT csv, HEADER true, DELIMITER ',')"}},
    {type:'callout',data:{variant:'info',title:'Tip',text:'Use COPY, not INSERT, for bulk loads over 10,000 rows.'}},
    {type:'exercise',data:{title:'Exercise: Load Products',description:'Load products from CSV with COPY.',steps:['Prepare CSV','Use COPY','Validate rows'],expectedOutcome:'COPY loads rows efficiently.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use COPY for bulk loads.','Use CSV or BINARY format.','Use \\\\COPY in psql for client-side files.']}}
  ]),
  // database-schema-table-objects
  lesson('lesson-pg-033','create-database','database-schema-table-objects',1,'beginner',35,'CREATE DATABASE','Create and manage databases with CREATE DATABASE and templates.',['database','ddl'],[
    {type:'heading',data:{level:2,text:'CREATE DATABASE'}},
    {type:'example',data:{title:'Create Database',content:'Create database from template',language:'sql',code:"CREATE DATABASE appdb\n  WITH OWNER app_owner\n  TEMPLATE template0\n  ENCODING 'UTF8'\n  LC_COLLATE 'en_US.UTF-8'\n  LC_CTYPE 'en_US.UTF-8';"}},
    {type:'callout',data:{variant:'tip',title:'Template',text:'Use template0 for a clean base. template1 is the default and can be customized.'}},
    {type:'exercise',data:{title:'Exercise: Create Database',description:'Create appdb with UTF-8 encoding.',steps:['Use CREATE DATABASE','Set owner','Verify with \\\\l'],expectedOutcome:'Database created successfully.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use CREATE DATABASE for databases.','Use templates for reuse.','Set encoding and locale carefully.']}}
  ]),
  lesson('lesson-pg-034','create-schema','database-schema-table-objects',2,'beginner',35,'CREATE SCHEMA','Organize objects with schemas.',['schema','namespace'],[
    {type:'heading',data:{level:2,text:'CREATE SCHEMA'}},
    {type:'paragraph',data:{text:'Schemas are namespaces that group database objects.'}},
    {type:'example',data:{title:'Create Schema',content:'Create hr and sales schemas',language:'sql',code:"CREATE SCHEMA IF NOT EXISTS hr;\nCREATE SCHEMA IF NOT EXISTS sales AUTHORIZATION sales_app;"}},
    {type:'exercise',data:{title:'Exercise: Create Schemas',description:'Create hr and audit schemas.',steps:['Create hr','Create audit with owner','List schemas with \\\\dn'],expectedOutcome:'Schemas created.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Schemas group objects.','Use IF NOT EXISTS.','Use search_path for schema resolution.']}}
  ]),
  lesson('lesson-pg-035','create-table','database-schema-table-objects',3,'beginner',35,'CREATE TABLE','Create tables with column definitions, defaults, and storage parameters.',['table','ddl','serial'],[
    {type:'heading',data:{level:2,text:'CREATE TABLE'}},
    {type:'example',data:{title:'Create Table',content:'Create users and orders tables',language:'sql',code:"CREATE TABLE users (\n  id BIGSERIAL PRIMARY KEY,\n  email CITEXT NOT NULL UNIQUE,\n  display_name TEXT,\n  country CHAR(2) DEFAULT 'US',\n  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),\n  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()\n);\n\nCREATE TABLE orders (\n  id BIGSERIAL PRIMARY KEY,\n  user_id BIGINT NOT NULL REFERENCES users(id),\n  total NUMERIC(12,2) NOT NULL DEFAULT 0,\n  status TEXT NOT NULL DEFAULT 'pending',\n  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()\n);"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use BIGSERIAL for large tables and CITEXT for case-insensitive text.'}},
    {type:'exercise',data:{title:'Exercise: Create Products',description:'Create products table with constraints.',steps:['Use BIGSERIAL','Add unique slug','Add numeric price'],expectedOutcome:'Table created with constraints.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use BIGSERIAL for surrogate keys.','Use CITEXT for emails.','Use TIMESTAMPTZ for timestamps.']}}
  ]),
  lesson('lesson-pg-036','alter-table','database-schema-table-objects',4,'intermediate',35,'ALTER TABLE','Add, alter, and drop columns and constraints.',['alter-table','ddl'],[
    {type:'heading',data:{level:2,text:'ALTER TABLE'}},
    {type:'example',data:{title:'Alter Table',content:'Add column and set default',language:'sql',code:"ALTER TABLE users\n  ADD COLUMN phone TEXT,\n  ALTER COLUMN display_name SET NOT NULL,\n  ADD CONSTRAINT users_phone_key UNIQUE (phone),\n  DROP COLUMN IF EXISTS legacy_id;"}},
    {type:'callout',data:{variant:'warning',title:'Locks',text:'Some ALTER TABLE commands require an ACCESS EXCLUSIVE lock.'}},
    {type:'exercise',data:{title:'Exercise: Alter Orders',description:'Add paid_at and index on status.',steps:['Add paid_at','Add index','Drop unused column'],expectedOutcome:'Table altered safely.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use ADD COLUMN and ALTER COLUMN.','Use IF EXISTS for safe drops.','Check locks for large tables.']}}
  ]),
  lesson('lesson-pg-037','drop-table','database-schema-table-objects',5,'beginner',35,'DROP TABLE','Drop tables and cascading effects.',['drop-table','ddl'],[
    {type:'heading',data:{level:2,text:'DROP TABLE'}},
    {type:'example',data:{title:'Drop Table',content:'Drop table with cascade',language:'sql',code:"DROP TABLE IF EXISTS temp_imports;\nDROP TABLE IF EXISTS order_items CASCADE;"}},
    {type:'callout',data:{variant:'warning',title:'CASCADE',text:'CASCADE drops dependent objects. Use with caution.'}},
    {type:'exercise',data:{title:'Exercise: Drop Staging',description:'Drop staging tables safely.',steps:['Use IF EXISTS','Use CASCADE for dependencies','Verify with \\\\dt'],expectedOutcome:'Tables dropped safely.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use IF EXISTS for safety.','CASCADE drops dependencies.','Avoid dropping production tables.']}}
  ]),
  lesson('lesson-pg-038','object-management','database-schema-table-objects',6,'intermediate',35,'Object Management','Use pg_class, information_schema, and DROP statements safely.',['catalog','information-schema','metadata'],[
    {type:'heading',data:{level:2,text:'Object Management'}},
    {type:'paragraph',data:{text:'Use system catalogs and information_schema to inspect objects.'}},
    {type:'example',data:{title:'Catalog',content:'List tables with sizes',language:'sql',code:"SELECT schemaname, relname, n_live_tup\nFROM pg_stat_user_tables\nORDER BY n_live_tup DESC\nLIMIT 100;"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use pg_stat_user_tables for table statistics.'}},
    {type:'exercise',data:{title:'Exercise: Inspect Objects',description:'Find largest tables.',steps:['Query pg_stat_user_tables','Order by n_live_tup','Filter schema'],expectedOutcome:'Query returns largest tables.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use pg_catalog for metadata.','Use information_schema for ANSI compatibility.','Use \\\\dt and \\\\d+ in psql.']}}
  ]),
  // data-types
  lesson('lesson-pg-039','numeric-types','data-types',1,'beginner',35,'Numeric Types','Use smallint, integer, bigint, numeric, money, and serial types.',['numeric','serial','money'],[
    {type:'heading',data:{level:2,text:'Numeric Types'}},
    {type:'example',data:{title:'Numeric',content:'Create table with numeric columns',language:'sql',code:"CREATE TABLE products (\n  id BIGSERIAL PRIMARY KEY,\n  quantity SMALLINT NOT NULL DEFAULT 0,\n  stock INTEGER NOT NULL DEFAULT 0,\n  price NUMERIC(12,2) NOT NULL,\n  revenue MONEY NOT NULL DEFAULT 0\n);"}},
    {type:'key-terms',data:{terms:[{term:'SERIAL',definition:'Auto-increment integer using a sequence.'},{term:'NUMERIC(p,s)',definition:'Fixed precision and scale.'}]}},
    {type:'exercise',data:{title:'Exercise: Create Products',description:'Create products with numeric columns.',steps:['Use BIGSERIAL','Use NUMERIC(12,2)','Use MONEY'],expectedOutcome:'Table created with numeric types.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use SERIAL for surrogate keys.','Use NUMERIC for money.','Use MONEY with caution.']}}
  ]),
  lesson('lesson-pg-040','text-types','data-types',2,'beginner',35,'Text Types','Use char, varchar, text, and full-text search.',['text','varchar','full-text-search'],[
    {type:'heading',data:{level:2,text:'Text Types'}},
    {type:'example',data:{title:'Text',content:'Create table with text columns',language:'sql',code:"CREATE TABLE posts (\n  id BIGSERIAL PRIMARY KEY,\n  title VARCHAR(255) NOT NULL,\n  body TEXT NOT NULL,\n  tags TEXT[] DEFAULT ARRAY[]::TEXT[]\n);"}},
    {type:'callout',data:{variant:'tip',title:'Full-Text Search',text:'Use tsvector and tsquery for full-text search.'}},
    {type:'exercise',data:{title:'Exercise: Create Posts',description:'Create posts table with tags array.',steps:['Use VARCHAR(255)','Use TEXT','Use TEXT[]'],expectedOutcome:'Table created with text types.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use VARCHAR for bounded strings.','Use TEXT for unbounded strings.','Use arrays for list values.']}}
  ]),
  lesson('lesson-pg-041','date-time-types','data-types',3,'beginner',35,'Date & Time Types','Use date, time, timetz, timestamp, timestamptz, and interval.',['timestamp','timestamptz','interval'],[
    {type:'heading',data:{level:2,text:'Date & Time Types'}},
    {type:'example',data:{title:'Timestamp',content:'Create table with timestamps',language:'sql',code:"CREATE TABLE events (\n  id BIGSERIAL PRIMARY KEY,\n  start_at TIMESTAMPTZ NOT NULL,\n  end_at TIMESTAMPTZ,\n  duration INTERVAL NOT NULL DEFAULT INTERVAL '1 hour'\n);"}},
    {type:'callout',data:{variant:'tip',title:'Timestamptz',text:'Prefer TIMESTAMPTZ for global applications.'}},
    {type:'exercise',data:{title:'Exercise: Create Events',description:'Create events table with timestamps and intervals.',steps:['Use TIMESTAMPTZ','Use INTERVAL','Use NOT NULL defaults'],expectedOutcome:'Table created with date-time types.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use TIMESTAMPTZ for time zones.','Use INTERVAL for durations.','Use AT TIME ZONE to convert.']}}
  ]),
  lesson('lesson-pg-042','jsonb-arrays','data-types',4,'intermediate',35,'JSONB & Arrays','Query JSONB with operators and use arrays.',['jsonb','arrays','generation'],[
    {type:'heading',data:{level:2,text:'JSONB & Arrays'}},
    {type:'example',data:{title:'JSONB',content:'Query JSONB',language:'sql',code:"SELECT id, data->'price' AS price\nFROM products\nWHERE data @> '{\"currency\":\"USD\"}'\n  AND data->'tags' ? 'sale'\nORDER BY (data->>'price')::NUMERIC DESC;"}},
    {type:'example',data:{title:'Arrays',content:'Query arrays',language:'sql',code:"SELECT id, tags\nFROM posts\nWHERE 'postgresql' = ANY(tags)\nORDER BY created_at DESC;"}},
    {type:'callout',data:{variant:'info',title:'GIN',text:'Create a GIN index on jsonb for containment queries.'}},
    {type:'exercise',data:{title:'Exercise: Query Products',description:'Query products by JSONB tags and array tags.',steps:['Use @>','Use ? for key','Use ANY for arrays'],expectedOutcome:'Query returns matching products.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use JSONB for flexible schemas.','Use GIN indexes for JSONB.','Use arrays for ordered lists.']}}
  ]),
  lesson('lesson-pg-043','range-types','data-types',5,'intermediate',35,'Range Types','Use int4range, numrange, tstzrange, and range operators.',['range-types','scheduling'],[
    {type:'heading',data:{level:2,text:'Range Types'}},
    {type:'paragraph',data:{text:'Range types represent intervals. They are useful for scheduling and time-series data.'}},
    {type:'example',data:{title:'Range',content:'Create table with tstzrange',language:'sql',code:"CREATE TABLE bookings (\n  id BIGSERIAL PRIMARY KEY,\n  room_id INT NOT NULL,\n  during TSTZRANGE NOT NULL,\n  EXCLUDE USING gist (room_id WITH =, during WITH &&)\n);"}},
    {type:'callout',data:{variant:'tip',title:'GIST',text:'Use GIST indexes for range exclusion constraints.'}},
    {type:'exercise',data:{title:'Exercise: Book Rooms',description:'Prevent overlapping bookings with exclusion constraints.',steps:['Create bookings table','Use TSTZRANGE','Add EXCLUDE constraint'],expectedOutcome:'Table prevents overlapping bookings.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Range types represent intervals.','Use exclusion constraints for overlap checks.','Use GIST indexes for ranges.']}}
  ]),
  lesson('lesson-pg-044','composite-types','data-types',6,'intermediate',35,'Composite Types','Create composite types, domains, and enums.',['composite-types','enums','domains'],[
    {type:'heading',data:{level:2,text:'Composite Types'}},
    {type:'paragraph',data:{text:'Composite types group multiple fields. Domains add constraints to existing types. Enums define ordered sets.'}},
    {type:'example',data:{title:'Composite Type',content:'Create composite type',language:'sql',code:"CREATE TYPE address AS (\n  street TEXT,\n  city TEXT,\n  postal_code TEXT,\n  country CHAR(2)\n);\n\nCREATE TABLE customers (\n  id BIGSERIAL PRIMARY KEY,\n  billing_address address\n);"}},
    {type:'callout',data:{variant:'info',title:'Enum',text:'Use CREATE TYPE ... AS ENUM for fixed sets like order status.'}},
    {type:'exercise',data:{title:'Exercise: Create Types',description:'Create address composite type and order_status enum.',steps:['Create composite type','Create enum','Create table'],expectedOutcome:'Types created and used in table.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use composite types for structured values.','Use enums for fixed lists.','Use domains for reusable constraints.']}}
  ]),
  // constraints
  lesson('lesson-pg-045','primary-key','constraints',1,'beginner',35,'PRIMARY KEY','Use PRIMARY KEY for entity integrity and index benefits.',['primary-key','constraints'],[
    {type:'heading',data:{level:2,text:'PRIMARY KEY'}},
    {type:'paragraph',data:{text:'A PRIMARY KEY uniquely identifies each row. It creates a unique B-tree index.'}},
    {type:'example',data:{title:'Primary Key',content:'Create table with primary key',language:'sql',code:"CREATE TABLE users (\n  id BIGSERIAL PRIMARY KEY,\n  email CITEXT NOT NULL UNIQUE\n);"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Prefer BIGSERIAL for surrogate keys and use UNIQUE for business keys.'}},
    {type:'exercise',data:{title:'Exercise: Create Orders',description:'Create orders with primary key and foreign key.',steps:['Use BIGSERIAL','Add foreign key','Verify index'],expectedOutcome:'Table created with constraints.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['PRIMARY KEY ensures uniqueness.','It creates a B-tree index.','Use UNIQUE for business keys.']}}
  ]),
  lesson('lesson-pg-046','foreign-key','constraints',2,'beginner',35,'FOREIGN KEY','Use FOREIGN KEY for referential integrity.',['foreign-key','referential-integrity'],[
    {type:'heading',data:{level:2,text:'FOREIGN KEY'}},
    {type:'example',data:{title:'Foreign Key',content:'Create foreign key',language:'sql',code:"CREATE TABLE orders (\n  id BIGSERIAL PRIMARY KEY,\n  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE\n);"}},
    {type:'callout',data:{variant:'warning',title:'Actions',text:'Use ON DELETE SET NULL or CASCADE carefully.'}},
    {type:'exercise',data:{title:'Exercise: Orders and Users',description:'Create orders referencing users.',steps:['Add foreign key','Use ON DELETE CASCADE','Verify constraint'],expectedOutcome:'Foreign key created.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['FOREIGN KEY enforces referential integrity.','Use ON DELETE actions for cascading deletes.','Use deferrable for complex transactions.']}}
  ]),
  lesson('lesson-pg-047','unique-check','constraints',3,'beginner',35,'UNIQUE & CHECK Constraints','Use UNIQUE and CHECK for data quality.',['unique','check','constraints'],[
    {type:'heading',data:{level:2,text:'UNIQUE & CHECK'}},
    {type:'example',data:{title:'UNIQUE',content:'Unique constraint',language:'sql',code:"CREATE TABLE products (\n  id BIGSERIAL PRIMARY KEY,\n  slug VARCHAR(255) NOT NULL UNIQUE,\n  price NUMERIC(12,2) CHECK (price >= 0)\n);"}},
    {type:'exercise',data:{title:'Exercise: Products',description:'Create products with unique slug and price check.',steps:['Add UNIQUE slug','Add CHECK price','Verify constraint'],expectedOutcome:'Constraints created.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['UNIQUE prevents duplicates.','CHECK enforces conditions.','Use named constraints for management.']}}
  ]),
  lesson('lesson-pg-048','not-null','constraints',4,'beginner',35,'NOT NULL Constraint','Use NOT NULL to prevent NULL values.',['not-null','constraints'],[
    {type:'heading',data:{level:2,text:'NOT NULL'}},
    {type:'paragraph',data:{text:'Use NOT NULL to ensure columns always have values.'}},
    {type:'example',data:{title:'NOT NULL',content:'Create table with NOT NULL columns',language:'sql',code:"CREATE TABLE invoices (\n  id BIGSERIAL PRIMARY KEY,\n  amount NUMERIC(12,2) NOT NULL,\n  issued_at TIMESTAMPTZ NOT NULL DEFAULT NOW()\n);"}},
    {type:'exercise',data:{title:'Exercise: Invoices',description:'Create invoices with NOT NULL constraints.',steps:['Add NOT NULL','Use default NOW()','Verify constraint'],expectedOutcome:'Table created with NOT NULL.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use NOT NULL for required columns.','Use defaults for timestamps.','Use COALESCE for NULL handling.']}}
  ]),
  lesson('lesson-pg-049','exclusion-constraints','constraints',5,'intermediate',35,'Exclusion Constraints','Prevent overlapping data with EXCLUDE USING gist.',['exclusion','gist','scheduling'],[
    {type:'heading',data:{level:2,text:'Exclusion Constraints'}},
    {type:'paragraph',data:{text:'EXCLUDE USING gist prevents overlapping values for specified operators.'}},
    {type:'example',data:{title:'Exclusion',content:'Prevent double bookings',language:'sql',code:"CREATE TABLE bookings (\n  id BIGSERIAL PRIMARY KEY,\n  room_id INT NOT NULL,\n  during TSTZRANGE NOT NULL,\n  EXCLUDE USING gist (room_id WITH =, during WITH &&)\n);"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Create a GIST index before adding the constraint.'}},
    {type:'exercise',data:{title:'Exercise: Bookings',description:'Prevent overlapping bookings with exclusion constraints.',steps:['Use TSTZRANGE','Use EXCLUDE','Test overlap'],expectedOutcome:'Constraint prevents overlap.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['EXCLUDE prevents overlap.','Use GIST indexes.','Use for scheduling and time-series.']}}
  ]),
  // indexes
  lesson('lesson-pg-050','index-fundamentals','indexes',1,'intermediate',35,'Index Fundamentals','Understand B-tree indexes, columns, and expressions.',['indexes','btree'],[
    {type:'heading',data:{level:2,text:'Index Fundamentals'}},
    {type:'paragraph',data:{text:'Indexes improve read performance. PostgreSQL includes B-tree by default.'}},
    {type:'example',data:{title:'Index',content:'Create index on email',language:'sql',code:"CREATE INDEX idx_users_email ON users (email);"}},
    {type:'example',data:{title:'Expression Index',content:'Index on expression',language:'sql',code:"CREATE INDEX idx_users_email_lower ON users (LOWER(email));"}},
    {type:'callout',data:{variant:'info',title:'Tip',text:'Use unique indexes for business keys.'}},
    {type:'exercise',data:{title:'Exercise: Create Indexes',description:'Create indexes for frequent queries.',steps:['Create index on email','Create index on status','Create expression index'],expectedOutcome:'Indexes created.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['B-tree is the default index type.','Use expression indexes for functions.','Use CONCURRENTLY for online rebuilds.']}}
  ]),
  lesson('lesson-pg-051','btree-indexes','indexes',2,'intermediate',35,'B-tree Indexes','Use B-tree indexes for equality and range queries.',['btree','composite','covering'],[
    {type:'heading',data:{level:2,text:'B-tree Indexes'}},
    {type:'example',data:{title:'Composite Index',content:'Index on country and created_at',language:'sql',code:"CREATE INDEX idx_users_country_created ON users (country, created_at DESC);"}},
    {type:'example',data:{title:'Covering Index',content:'Include display_name for index-only scans',language:'sql',code:"CREATE INDEX idx_users_email_inc ON users (email) INCLUDE (display_name);"}},
    {type:'callout',data:{variant:'tip',title:'Performance',text:'Use covering indexes to avoid heap fetches.'}},
    {type:'exercise',data:{title:'Exercise: Create Covering Index',description:'Create covering index for frequent queries.',steps:['Create composite index','Include display columns','Check plan'],expectedOutcome:'Index supports query.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Composite indexes support left-prefix queries.','INCLUDE creates covering indexes.','Use DESC for index ordering.']}}
  ]),
  lesson('lesson-pg-052','gin-gist-indexes','indexes',3,'intermediate',35,'GIN & GIST Indexes','Use GIN for JSONB and full-text search, and GIST for geometric and range data.',['gin','gist','jsonb','full-text-search'],[
    {type:'heading',data:{level:2,text:'GIN & GIST Indexes'}},
    {type:'example',data:{title:'GIN',content:'Create GIN index on JSONB',language:'sql',code:"CREATE INDEX idx_products_data_gin ON products USING GIN (data jsonb_path_ops);"}},
    {type:'example',data:{title:'GIST',content:'Create GIST index for full-text search',language:'sql',code:"CREATE INDEX idx_posts_fts ON posts USING GIST (to_tsvector('english', title || ' ' || body));"}},
    {type:'callout',data:{variant:'info',title:'Tip',text:'Use jsonb_path_ops for containment-only queries.'}},
    {type:'exercise',data:{title:'Exercise: JSONB Search',description:'Create GIN index and query JSONB.',steps:['Create GIN index','Query with @>','Explain plan'],expectedOutcome:'GIN index supports query.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use GIN for JSONB and arrays.','Use GIST for ranges and full-text.','Use opclass for index strategy.']}}
  ]),
  lesson('lesson-pg-053','partial-expression','indexes',4,'intermediate',35,'Partial & Expression Indexes','Use partial and expression indexes for selective performance gains.',['partial-index','expression-index'],[
    {type:'heading',data:{level:2,text:'Partial & Expression Indexes'}},
    {type:'example',data:{title:'Partial',content:'Partial index on active users',language:'sql',code:"CREATE INDEX idx_users_active_email ON users (email)\nWHERE deleted_at IS NULL;"}},
    {type:'example',data:{title:'Expression',content:'Expression index on LOWER(email)',language:'sql',code:"CREATE INDEX idx_users_email_lower ON users (LOWER(email));"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Partial indexes are smaller and faster for selective predicates.'}},
    {type:'exercise',data:{title:'Exercise: Active Indexes',description:'Create partial index for active users.',steps:['Use WHERE clause','Use LOWER expression','Use CONCURRENTLY'],expectedOutcome:'Partial index created.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Partial indexes target frequent predicates.','Expression indexes support functions.','Use CONCURRENTLY to avoid locks.']}}
  ]),
  lesson('lesson-pg-054','covering-indexes','indexes',5,'intermediate',35,'Covering Indexes','Use INCLUDE to avoid heap fetches and enable index-only scans.',['covering-index','index-only-scan'],[
    {type:'heading',data:{level:2,text:'Covering Indexes'}},
    {type:'paragraph',data:{text:'Use INCLUDE to add non-key columns for covering queries.'}},
    {type:'example',data:{title:'Covering Index',content:'Include display_name for email lookup',language:'sql',code:"CREATE INDEX idx_users_email_inc ON users (email) INCLUDE (display_name, country);"}},
    {type:'callout',data:{variant:'info',title:'Tip',text:'Index-only scans read only the index.'}},
    {type:'exercise',data:{title:'Exercise: Cover Query',description:'Create covering index for email lookup.',steps:['Create index','Include display columns','Use EXPLAIN'],expectedOutcome:'Index supports covering scan.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['INCLUDE adds covering columns.','Covering indexes support index-only scans.','Use for low-cardinality key columns.']}}
  ]),
  lesson('lesson-pg-055','index-maintenance','indexes',6,'intermediate',35,'Index Maintenance','Monitor index usage, rebuild, and manage bloat.',['index-maintenance','bloat'],[
    {type:'heading',data:{level:2,text:'Index Maintenance'}},
    {type:'paragraph',data:{text:'Indexes can bloat due to MVCC. Monitor and rebuild when needed.'}},
    {type:'example',data:{title:'Rebuild',content:'Rebuild index concurrently',language:'sql',code:"REINDEX INDEX CONCURRENTLY idx_users_email;"}},
    {type:'callout',data:{variant:'warning',title:'Bloat',text:'Unused indexes increase write cost and storage.'}},
    {type:'exercise',data:{title:'Exercise: Rebuild Index',description:'Rebuild bloated index.',steps:['Find unused index','Rebuild concurrently','Verify size'],expectedOutcome:'Index rebuilt with minimal lock.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Monitor index usage with pg_stat_user_indexes.','Rebuild bloated indexes.','Drop unused indexes.']}}
  ]),
  // views
  lesson('lesson-pg-056','simple-views','views',1,'intermediate',35,'Simple Views','Create and use simple and materialized views.',['views','materialized-views'],[
    {type:'heading',data:{level:2,text:'Views'}},
    {type:'example',data:{title:'View',content:'Create view for active users',language:'sql',code:"CREATE VIEW active_users AS\nSELECT id, email, display_name\nFROM users\nWHERE deleted_at IS NULL;"}},
    {type:'example',data:{title:'Materialized View',content:'Create materialized view',language:'sql',code:"CREATE MATERIALIZED VIEW user_stats AS\nSELECT user_id, COUNT(*) AS order_count, SUM(total) AS lifetime\nFROM orders\nGROUP BY user_id;"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Create UNIQUE index on materialized views for REFRESH CONCURRENTLY.'}},
    {type:'exercise',data:{title:'Exercise: Create View',description:'Create view for active users and materialized stats.',steps:['Create view','Create materialized view','Refresh'],expectedOutcome:'Views created and refreshed.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Views are stored queries.','Materialized views store results.','Use REFRESH CONCURRENTLY with UNIQUE index.']}}
  ]),
  lesson('lesson-pg-057','materialized-views','views',2,'intermediate',35,'Materialized Views','Refresh materialized views, create indexes, and use for reports.',['materialized-views','refreshes'],[
    {type:'heading',data:{level:2,text:'Materialized Views'}},
    {type:'example',data:{title:'Refresh',content:'Refresh materialized view concurrently',language:'sql',code:"CREATE UNIQUE INDEX ON user_stats (user_id);\nREFRESH MATERIALIZED VIEW CONCURRENTLY user_stats;"}},
    {type:'exercise',data:{title:'Exercise: Refresh Stats',description:'Refresh materialized view for reports.',steps:['Create unique index','Refresh concurrently','Monitor duration'],expectedOutcome:'Materialized view refreshed.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Materialized views store precomputed results.','Use UNIQUE index for concurrent refresh.','Use for reporting and dashboards.']}}
  ]),
  lesson('lesson-pg-058','view-management','views',3,'intermediate',35,'View Management','Alter, replace, and drop views securely.',['views','security'],[
    {type:'heading',data:{level:2,text:'View Management'}},
    {type:'paragraph',data:{text:'Use CREATE OR REPLACE VIEW to update definitions. Use ALTER VIEW for column security.'}},
    {type:'example',data:{title:'Replace View',content:'Replace view definition',language:'sql',code:"CREATE OR REPLACE VIEW user_stats AS\nSELECT user_id, COUNT(*) AS order_count, SUM(total) AS lifetime\nFROM orders\nWHERE status <> 'canceled'\nGROUP BY user_id;"}},
    {type:'exercise',data:{title:'Exercise: Secure View',description:'Replace view with column restrictions.',steps:['Use CREATE OR REPLACE','Remove sensitive columns','Test permissions'],expectedOutcome:'View replaced securely.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use OR REPLACE for safer updates.','Use column lists for security.','Revoke permissions from underlying tables.']}}
  ]),
  // stored-procedures-functions
  lesson('lesson-pg-059','plpgsql-basics','stored-procedures-functions',1,'intermediate',35,'PL/pgSQL Basics','Use PL/pgSQL for procedural logic, control structures, and exception handling.',['plpgsql','procedural'],[
    {type:'heading',data:{level:2,text:'PL/pgSQL Basics'}},
    {type:'paragraph',data:{text:'PL/pgSQL is PostgreSQL\'s procedural language. Use it in functions and procedures.'}},
    {type:'example',data:{title:'Function',content:'Create function with control structure',language:'sql',code:"CREATE OR REPLACE FUNCTION get_order_total(p_order_id INT)\nRETURNS NUMERIC\nLANGUAGE plpgsql\nAS $$\nDECLARE\n  v_total NUMERIC;\nBEGIN\n  SELECT SUM(total) INTO v_total\n  FROM order_items\n  WHERE order_id = p_order_id;\n\n  IF v_total IS NULL THEN\n    v_total := 0;\n  END IF;\n\n  RETURN v_total;\nEXCEPTION\n  WHEN OTHERS THEN\n    RAISE WARNING 'Failed to get order total: %', SQLERRM;\n    RETURN 0;\nEND;\n$$;"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use IMMUTABLE or STABLE volatility for query planning benefits.'}},
    {type:'exercise',data:{title:'Exercise: Create Function',description:'Create function to calculate order total.',steps:['Create function','Use PL/pgSQL','Handle NULL'],expectedOutcome:'Function returns total or 0.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use PL/pgSQL for procedural logic.','Use DECLARE and BEGIN blocks.','Use EXCEPTION for error handling.']}}
  ]),
  lesson('lesson-pg-060','sql-functions','stored-procedures-functions',2,'intermediate',35,'SQL Functions','Write SQL-language functions for simple reusable logic.',['sql-functions','immutable'],[
    {type:'heading',data:{level:2,text:'SQL Functions'}},
    {type:'example',data:{title:'SQL Function',content:'Create immutable SQL function',language:'sql',code:"CREATE OR REPLACE FUNCTION discount_price(p_price NUMERIC, p_rate NUMERIC)\nRETURNS NUMERIC\nLANGUAGE SQL\nIMMUTABLE\nAS $$ SELECT p_price * (1 - p_rate); $$;"}},
    {type:'callout',data:{variant:'info',title:'IMMUTABLE',text:'IMMUTABLE functions always return the same result for the same arguments.'}},
    {type:'exercise',data:{title:'Exercise: Discount Function',description:'Create SQL function for discount.',steps:['Use LANGUAGE SQL','Use IMMUTABLE','Return price'],expectedOutcome:'Function returns discounted price.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['SQL functions are simple and fast.','Use IMMUTABLE for constants.','Use STABLE for table lookups.']}}
  ]),
  lesson('lesson-pg-061','plpgsql-functions','stored-procedures-functions',3,'intermediate',35,'PL/pgSQL Functions','Use OUT parameters, RETURNS TABLE, and set-returning functions.',['plpgsql','returns-table'],[
    {type:'heading',data:{level:2,text:'PL/pgSQL Functions'}},
    {type:'example',data:{title:'Set-Returning',content:'Return rows from function',language:'sql',code:"CREATE OR REPLACE FUNCTION user_orders(p_user_id INT)\nRETURNS TABLE (order_id INT, total NUMERIC)\nLANGUAGE plpgsql\nAS $$\nBEGIN\n  RETURN QUERY\n  SELECT id, total\n  FROM orders\n  WHERE user_id = p_user_id\n  ORDER BY created_at DESC;\nEND;\n$$;"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use RETURNS TABLE for ad-hoc result sets.'}},
    {type:'exercise',data:{title:'Exercise: User Orders Function',description:'Create set-returning function for user orders.',steps:['Use RETURNS TABLE','Use RETURN QUERY','Order by created_at'],expectedOutcome:'Function returns rows.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use RETURNS TABLE for result sets.','Use RETURN QUERY for dynamic rows.','Use OUT parameters for scalar values.']}}
  ]),
  lesson('lesson-pg-062','stored-procedures','stored-procedures-functions',4,'intermediate',35,'Stored Procedures','Use stored procedures for transactions and batch operations.',['stored-procedures','transactions'],[
    {type:'heading',data:{level:2,text:'Stored Procedures'}},
    {type:'paragraph',data:{text:'Stored procedures can manage transactions explicitly and do not return values.'}},
    {type:'example',data:{title:'Procedure',content:'Create procedure',language:'sql',code:"CREATE OR REPLACE PROCEDURE archive_old_orders(p_months INT)\nLANGUAGE plpgsql\nAS $$\nDECLARE\n  r RECORD;\nBEGIN\n  FOR r IN\n    SELECT id\n    FROM orders\n    WHERE created_at < CURRENT_DATE - (p_months || ' months')::INTERVAL\n    AND status = 'completed'\n  LOOP\n    INSERT INTO archived_orders SELECT * FROM orders WHERE id = r.id;\n    DELETE FROM orders WHERE id = r.id;\n  END LOOP;\n  COMMIT;\nEND;\n$$;"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use procedures for batch jobs and explicit transaction control.'}},
    {type:'exercise',data:{title:'Exercise: Archive Procedure',description:'Create procedure to archive old orders.',steps:['Create procedure','Use loop','Commit'],expectedOutcome:'Procedure archives rows.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Procedures do not return values.','Use for explicit transaction control.','Use CALL to execute procedures.']}}
  ]),
  lesson('lesson-pg-063','set-returning-functions','stored-procedures-functions',5,'intermediate',35,'Set-Returning Functions','Use set-returning functions in SELECT and FROM.',['set-returning','setof'],[
    {type:'heading',data:{level:2,text:'Set-Returning Functions'}},
    {type:'example',data:{title:'Set-Returning',content:'Generate series',language:'sql',code:"SELECT generate_series(1, 5) AS n;\n\nSELECT id, jsonb_array_elements(tags) AS tag\nFROM posts;"}},
    {type:'exercise',data:{title:'Exercise: Generate Series',description:'Use generate_series for date ranges.',steps:['Generate series','Join with orders','Compute gaps'],expectedOutcome:'Query returns generated rows.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Set-returning functions return rows.','Use generate_series for ranges.','Use LATERAL for row-wise functions.']}}
  ]),
  lesson('lesson-pg-064','aggregates','stored-procedures-functions',6,'intermediate',35,'Aggregates & Extensions','Create custom aggregates and use extensions.',['aggregates','extensions'],[
    {type:'heading',data:{level:2,text:'Aggregates'}},
    {type:'example',data:{title:'Aggregate',content:'Create aggregate for mode',language:'sql',code:"CREATE OR REPLACE FUNCTION mode_state(INTERNAL, ANYARRAY)\nRETURNS ANYARRAY\nLANGUAGE SQL\nAS $$ SELECT mode() WITHIN GROUP (ORDER BY $2); $$;\n\nCREATE AGGREGATE mode (ANYARRAY) (\n  SFUNC = mode_state,\n  STYPE = ANYARRAY,\n  FINALFUNC = mode_state\n);"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use extensions such as tablefunc and earthdistance for advanced aggregates.'}},
    {type:'exercise',data:{title:'Exercise: Create Aggregate',description:'Create custom aggregate for string_agg with order.',steps:['Create aggregate','Use ordered_set','Use for data'],expectedOutcome:'Aggregate created.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Create custom aggregates with CREATE AGGREGATE.','Use ordered-set aggregates.','Use extensions for reusable logic.']}}
  ]),
  // triggers
  lesson('lesson-pg-065','trigger-basics','triggers',1,'intermediate',35,'Trigger Basics','Create triggers with timing, events, and arguments.',['triggers','ddl-triggers'],[
    {type:'heading',data:{level:2,text:'Trigger Basics'}},
    {type:'paragraph',data:{text:'Triggers execute functions in response to data changes.'}},
    {type:'example',data:{title:'Trigger',content:'Create trigger',language:'sql',code:"CREATE OR REPLACE FUNCTION audit_users()\nRETURNS TRIGGER\nLANGUAGE plpgsql\nAS $$\nBEGIN\n  IF TG_OP = 'INSERT' THEN\n    INSERT INTO audit_log (table_name, row_id, action)\n    VALUES ('users', NEW.id, 'INSERT');\n  ELSIF TG_OP = 'UPDATE' THEN\n    INSERT INTO audit_log (table_name, row_id, action)\n    VALUES ('users', NEW.id, 'UPDATE');\n  END IF;\n  RETURN COALESCE(NEW, OLD);\nEND;\n$$;\n\nCREATE TRIGGER users_audit\n  AFTER INSERT OR UPDATE ON users\n  FOR EACH ROW\n  EXECUTE FUNCTION audit_users();"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use TG_OP and TG_TABLE_NAME in trigger functions.'}},
    {type:'exercise',data:{title:'Exercise: Audit Trigger',description:'Create audit trigger for users.',steps:['Create trigger function','Use TG_OP','Create trigger'],expectedOutcome:'Audit trigger inserts rows.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Triggers execute functions.','Use TG_OP for operation.','Use BEFORE for validation.']}}
  ]),
  lesson('lesson-pg-066','before-after-triggers','triggers',2,'intermediate',35,'BEFORE & AFTER Triggers','Use BEFORE for validation and AFTER for audit.',['triggers','audit'],[
    {type:'heading',data:{level:2,text:'BEFORE & AFTER Triggers'}},
    {type:'paragraph',data:{text:'BEFORE triggers can modify row data. AFTER triggers run after the operation.'}},
    {type:'example',data:{title:'BEFORE Trigger',content:'Validation trigger',language:'sql',code:"CREATE OR REPLACE FUNCTION validate_email()\nRETURNS TRIGGER\nLANGUAGE plpgsql\nAS $$\nBEGIN\n  IF NEW.email !~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$' THEN\n    RAISE EXCEPTION 'Invalid email: %', NEW.email;\n  END IF;\n  RETURN NEW;\nEND;\n$$;\n\nCREATE TRIGGER users_email_validate\n  BEFORE INSERT OR UPDATE OF email ON users\n  FOR EACH ROW\n  EXECUTE FUNCTION validate_email();"}},
    {type:'exercise',data:{title:'Exercise: Validation Trigger',description:'Create BEFORE trigger for email validation.',steps:['Use BEFORE','Use regex','Raise exception'],expectedOutcome:'Trigger validates email.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use BEFORE for validation.','Use AFTER for audit.','Use RAISE EXCEPTION to cancel.']}}
  ]),
  lesson('lesson-pg-067','instead-of-triggers','triggers',3,'intermediate',35,'INSTEAD OF Triggers','Use INSTEAD OF triggers for updatable views.',['instead-of-triggers','views'],[
    {type:'heading',data:{level:2,text:'INSTEAD OF Triggers'}},
    {type:'paragraph',data:{text:'INSTEAD OF triggers replace the original operation on views.'}},
    {type:'example',data:{title:'Instead of',content:'Make view updatable',language:'sql',code:"CREATE OR REPLACE VIEW active_users AS\nSELECT id, email, display_name\nFROM users\nWHERE deleted_at IS NULL;\n\nCREATE OR REPLACE FUNCTION active_users_ins()\nRETURNS TRIGGER\nLANGUAGE plpgsql\nAS $$\nBEGIN\n  INSERT INTO users (email, display_name)\n  VALUES (NEW.email, NEW.display_name)\n  RETURNING id INTO NEW;\n  RETURN NEW;\nEND;\n$$;\n\nCREATE TRIGGER active_users_ins_trig\n  INSTEAD OF INSERT ON active_users\n  FOR EACH ROW\n  EXECUTE FUNCTION active_users_ins();"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use INSTEAD OF for row-level security and view logic.'}},
    {type:'exercise',data:{title:'Exercise: Updatable View',description:'Make active_users view updatable.',steps:['Create view','Create INSTEAD OF trigger','Test insert'],expectedOutcome:'View supports inserts.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['INSTEAD OF replaces operation.','Use for updatable views.','Use for row-level security.']}}
  ]),
  lesson('lesson-pg-068','trigger-management','triggers',4,'intermediate',35,'Trigger Management','Enable, disable, replace, and drop triggers.',['triggers','maintenance'],[
    {type:'heading',data:{level:2,text:'Trigger Management'}},
    {type:'paragraph',data:{text:'Use ALTER TABLE to enable or disable triggers. Use CREATE OR REPLACE to update functions.'}},
    {type:'example',data:{title:'Enable/Disable',content:'Manage triggers',language:'sql',code:"ALTER TABLE users DISABLE TRIGGER users_audit;\nALTER TABLE users ENABLE TRIGGER users_audit;"}},
    {type:'exercise',data:{title:'Exercise: Manage Triggers',description:'Disable trigger, run migration, re-enable.',steps:['Disable trigger','Run migration','Enable trigger'],expectedOutcome:'Trigger managed safely.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use DISABLE/ENABLE for bulk loads.','Use CONCURRENTLY for rebuilds.','Document trigger behavior.']}}
  ]),
  // transactions-error-handling-backup
  lesson('lesson-pg-069','transaction-fundamentals','transactions-error-handling-backup',1,'intermediate',35,'Transaction Fundamentals','Use COMMIT, ROLLBACK, SAVEPOINT, and transaction blocks.',['transactions','acid'],[
    {type:'heading',data:{level:2,text:'Transaction Fundamentals'}},
    {type:'example',data:{title:'Transaction',content:'Transfer funds',language:'sql',code:"BEGIN;\nUPDATE accounts SET balance = balance - $1 WHERE id = $2;\nUPDATE accounts SET balance = balance + $1 WHERE id = $3;\nINSERT INTO transfers (from_id, to_id, amount)\nVALUES ($2, $3, $1);\nCOMMIT;"}},
    {type:'exercise',data:{title:'Exercise: Transfer Funds',description:'Use transaction block for safe transfer.',steps:['Use BEGIN','Update accounts','Commit'],expectedOutcome:'Transaction commits or rolls back.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Transactions ensure atomicity.','Use BEGIN and COMMIT.','Use SAVEPOINT for partial rollbacks.']}}
  ]),
  lesson('lesson-pg-070','isolation-levels','transactions-error-handling-backup',2,'intermediate',35,'Transaction Isolation Levels','Use READ COMMITTED, REPEATABLE READ, and SERIALIZABLE.',['isolation','serializable','mvcc'],[
    {type:'heading',data:{level:2,text:'Isolation Levels'}},
    {type:'paragraph',data:{text:'Isolation levels control visibility of concurrent transactions.'}},
    {type:'example',data:{title:'Isolation',content:'Set isolation level',language:'sql',code:"BEGIN ISOLATION LEVEL SERIALIZABLE;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nCOMMIT;"}},
    {type:'key-terms',data:{terms:[{term:'READ COMMITTED',definition:'Default. Sees committed rows before each statement.'},{term:'SERIALIZABLE',definition:'Highest isolation. Prevents write conflicts.'}]}},
    {type:'exercise',data:{title:'Exercise: Isolation',description:'Use isolation level for reporting.',steps:['Set isolation level','Run transaction','Verify isolation'],expectedOutcome:'Transaction sees consistent snapshot.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use READ COMMITTED for OLTP.','Use REPEATABLE READ for reporting.','Use SERIALIZABLE for critical sections.']}}
  ]),
  lesson('lesson-pg-071','locking-rows','transactions-error-handling-backup',3,'intermediate',35,'Row Locking & Deadlocks','Use explicit row locks and handle deadlocks.',['locking','deadlocks'],[
    {type:'heading',data:{level:2,text:'Row Locking & Deadlocks'}},
    {type:'example',data:{title:'Lock',content:'Lock row for update',language:'sql',code:"BEGIN;\nSELECT * FROM accounts WHERE id = $1 FOR UPDATE;\nUPDATE accounts SET balance = balance - $2 WHERE id = $1;\nCOMMIT;"}},
    {type:'callout',data:{variant:'warning',title:'Deadlocks',text:'Handle deadlocks with retry logic and consistent lock order.'}},
    {type:'exercise',data:{title:'Exercise: Lock Row',description:'Lock row for update and check balance.',steps:['Use FOR UPDATE','Update balance','Commit'],expectedOutcome:'Row locked and updated.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use FOR UPDATE to lock rows.','Use NOWAIT or SKIP LOCKED for queues.','Retry on deadlock errors.']}}
  ]),
  lesson('lesson-pg-072','exception-handling','transactions-error-handling-backup',4,'intermediate',35,'Exception Handling','Use EXCEPTION blocks and SQLSTATE codes.',['exception','error-handling'],[
    {type:'heading',data:{level:2,text:'Exception Handling'}},
    {type:'example',data:{title:'Exception',content:'Handle unique violation',language:'sql',code:"CREATE OR REPLACE FUNCTION upsert_user(p_email TEXT)\nRETURNS VOID\nLANGUAGE plpgsql\nAS $$\nBEGIN\n  INSERT INTO users (email) VALUES (p_email);\nEXCEPTION\n  WHEN unique_violation THEN\n    NULL;\nEND;\n$$;"}},
    {type:'callout',data:{variant:'info',title:'Tip',text:'Use SQLSTATE codes and WHEN OTHERS for catch-all.'}},
    {type:'exercise',data:{title:'Exercise: Handle Unique',description:'Handle unique violation silently.',steps:['Use EXCEPTION','Catch unique_violation','Test duplicate'],expectedOutcome:'Duplicate ignored safely.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use EXCEPTION blocks.','Use SQLSTATE for specific errors.','Use RAISE for custom errors.']}}
  ]),
  lesson('lesson-pg-073','pg-dump-restore','transactions-error-handling-backup',5,'intermediate',35,'pg_dump & pg_restore','Back up and restore databases with pg_dump and pg_restore.',['backup','pg_dump','restore'],[
    {type:'heading',data:{level:2,text:'pg_dump & pg_restore'}},
    {type:'example',data:{title:'pg_dump',content:'Back up database',language:'bash',code:"pg_dump -U postgres -F c -b -v -f appdb.dump appdb"}},
    {type:'example',data:{title:'pg_restore',content:'Restore database',language:'bash',code:"pg_restore -U postgres -d appdb_restore -v appdb.dump"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use custom format (-F c) for parallel restore.'}},
    {type:'exercise',data:{title:'Exercise: Backup and Restore',description:'Back up and restore database.',steps:['Run pg_dump','Run pg_restore','Validate'],expectedOutcome:'Database restored.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use custom format for parallel restore.','Include blobs with -b.','Use pg_dumpall for cluster backups.']}}
  ]),
  lesson('lesson-pg-074','point-in-time-recovery','transactions-error-handling-backup',6,'advanced',35,'Point-in-Time Recovery','Use WAL and base backups for PITR.',['pitr','wal','recovery'],[
    {type:'heading',data:{level:2,text:'Point-in-Time Recovery'}},
    {type:'paragraph',data:{text:'PostgreSQL uses WAL for PITR. Configure archive_command and recovery settings.'}},
    {type:'example',data:{title:'Recovery',content:'recovery.conf or postgresql.conf',language:'conf',code:"wal_level = replica\narchive_mode = on\narchive_command = 'cp %p /archive/%f'\nrestore_command = 'cp /archive/%f %p'\nrecovery_target_time = '2026-09-24 03:00:00'"}},
    {type:'callout',data:{variant:'warning',title:'PITR',text:'PITR requires continuous WAL archiving and base backups.'}},
    {type:'exercise',data:{title:'Exercise: Configure PITR',description:'Configure archive_command and recover to a target time.',steps:['Set wal_level','Set archive_command','Set restore_command'],expectedOutcome:'PITR configured.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use WAL for PITR.','Configure archive_command.','Test recovery regularly.']}}
  ]),
  // advanced-topics
  lesson('lesson-pg-075','partitioning','advanced-topics',1,'advanced',35,'Partitioning','Partition tables by range, list, or hash.',['partitioning','inheritance','query-plan'],[
    {type:'heading',data:{level:2,text:'Partitioning'}},
    {type:'example',data:{title:'Range Partition',content:'Partition orders by month',language:'sql',code:"CREATE TABLE orders (\n  id BIGSERIAL,\n  created_at TIMESTAMPTZ NOT NULL,\n  total NUMERIC(12,2) NOT NULL\n) PARTITION BY RANGE (created_at);\n\nCREATE TABLE orders_2026_09 PARTITION OF orders\n  FOR VALUES FROM ('2026-09-01') TO ('2026-10-01');"}},
    {type:'exercise',data:{title:'Exercise: Partition Orders',description:'Partition orders by month.',steps:['Create parent table','Create partitions','Insert data'],expectedOutcome:'Partitioned table works.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use PARTITION BY RANGE/LIST/HASH.','Use declarative partitioning.','Use constraint exclusion for pruning.']}}
  ]),
  lesson('lesson-pg-076','table-inheritance','advanced-topics',2,'advanced',35,'Table Inheritance','Use table inheritance for time-series and partitioned data.',['inheritance','time-series'],[
    {type:'heading',data:{level:2,text:'Table Inheritance'}},
    {type:'paragraph',data:{text:'Table inheritance allows child tables to inherit columns from parent tables. Prefer declarative partitioning.'}},
    {type:'example',data:{title:'Inheritance',content:'Inherit from logs',language:'sql',code:"CREATE TABLE logs (id BIGSERIAL PRIMARY KEY, created_at TIMESTAMPTZ NOT NULL);\n\nCREATE TABLE logs_2026_09 () INHERITS (logs);\nINSERT INTO logs_2026_09 SELECT * FROM logs\nWHERE created_at >= '2026-09-01';"}},
    {type:'callout',data:{variant:'info',title:'Note',text:'Use declarative partitioning for new designs.'}},
    {type:'exercise',data:{title:'Exercise: Partition with Inheritance',description:'Create child table and inherit.',steps:['Create parent','Create child','Insert data'],expectedOutcome:'Inheritance works.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use declarative partitioning for new tables.','Use inheritance for time-series.','Use CHECK constraints for pruning.']}}
  ]),
  lesson('lesson-pg-077','foreign-data-wrappers','advanced-topics',3,'advanced',35,'Foreign Data Wrappers','Use FDW to query external data sources.',['fdw','postgres_fdw','citus'],[
    {type:'heading',data:{level:2,text:'Foreign Data Wrappers'}},
    {type:'example',data:{title:'postgres_fdw',content:'Query remote database',language:'sql',code:"CREATE EXTENSION IF NOT EXISTS postgres_fdw;\n\nCREATE SERVER remote_db\n  FOREIGN DATA WRAPPER postgres_fdw\n  OPTIONS (host 'remote', dbname 'appdb');\n\nCREATE USER MAPPING FOR postgres\n  SERVER remote_db\n  OPTIONS (user 'app_user', password 'secret');\n\nIMPORT FOREIGN SCHEMA public\n  LIMIT TO (users, orders)\n  FROM SERVER remote_db INTO remote_schema;"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use FDW for sharding and query federation.'}},
    {type:'exercise',data:{title:'Exercise: Query Remote',description:'Query remote users and orders.',steps:['Create extension','Create server','Import schema'],expectedOutcome:'Remote tables queried.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use postgres_fdw for remote queries.','Use IMPORT FOREIGN SCHEMA.','Use FDW for sharding.']}}
  ]),
  lesson('lesson-pg-078','logical-replication','advanced-topics',4,'advanced',35,'Logical Replication','Use logical replication and subscriptions for selective data.',['logical-replication','subscriptions','decoding'],[
    {type:'heading',data:{level:2,text:'Logical Replication'}},
    {type:'example',data:{title:'Publication',content:'Create publication',language:'sql',code:"CREATE PUBLICATION user_changes FOR TABLE users, orders\n  WITH (publish = 'insert, update, delete');"}},
    {type:'example',data:{title:'Subscription',content:'Create subscription',language:'sql',code:"CREATE SUBSCRIPTION user_sync\n  CONNECTION 'host=primary dbname=appdb user=replicator password=secret' \n  PUBLICATION user_changes\n  WITH (copy_data = false, create_slot = true);"}},
    {type:'callout',data:{variant:'info',title:'Tip',text:'Use logical replication for CDC and multi-master with BDR.'}},
    {type:'exercise',data:{title:'Exercise: Logical Replication',description:'Create publication and subscription for selective tables.',steps:['Create publication','Create subscription','Monitor pg_stat_subscription'],expectedOutcome:'Logical replication running.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use publications and subscriptions.','Use for selective replication.','Monitor with pg_stat_subscription.']}}
  ]),
  lesson('lesson-pg-079','extensions','advanced-topics',5,'intermediate',35,'Extensions','Use extensions: pg_stat_statements, pgcrypto, citext, unaccent, pg_trgm, and uuid-ossp.',['extensions','pg_stat_statements','uuid'],[
    {type:'heading',data:{level:2,text:'Extensions'}},
    {type:'paragraph',data:{text:'Extensions add functionality to PostgreSQL.'}},
    {type:'example',data:{title:'Extensions',content:'Create extensions',language:'sql',code:"CREATE EXTENSION IF NOT EXISTS pg_stat_statements;\nCREATE EXTENSION IF NOT EXISTS citext;\nCREATE EXTENSION IF NOT EXISTS pgcrypto;\nCREATE EXTENSION IF NOT EXISTS unaccent;\nCREATE EXTENSION IF NOT EXISTS pg_trgm;\nCREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use pg_trgm for LIKE optimization.'}},
    {type:'exercise',data:{title:'Exercise: Enable Extensions',description:'Enable extensions for full-text and UUID.',steps:['Create extensions','Use citext','Use gen_random_uuid'],expectedOutcome:'Extensions enabled.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use CREATE EXTENSION.','Use pg_stat_statements for query stats.','Use uuid-ossp or gen_random_uuid.']}}
  ]),
  lesson('lesson-pg-080','toast-mvcc','advanced-topics',6,'advanced',35,'TOAST & MVCC','Understand TOAST for large values and MVCC snapshots.',['toast','mvcc','ctid'],[
    {type:'heading',data:{level:2,text:'TOAST & MVCC'}},
    {type:'paragraph',data:{text:'TOAST stores large values externally. MVCC provides multi-version concurrency control.'}},
    {type:'example',data:{title:'CTID',content:'Use CTID for physical row IDs',language:'sql',code:"SELECT ctid, xmin, cmin, xmax, cmax, t.om\nFROM users AS t\nWHERE id = $1;"}},
    {type:'callout',data:{variant:'info',title:'TOAST',text:'PostgreSQL TOASTs values over 2 KB.'}},
    {type:'exercise',data:{title:'Exercise: Inspect MVCC',description:'Inspect CTID and transaction IDs.',steps:['Select ctid','Inspect xmin','Check ctid'],expectedOutcome:'Query returns MVCC metadata.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['TOAST stores large values externally.','MVCC provides snapshots.','CTID identifies physical rows.']}}
  ]),
  // performance-tuning
  lesson('lesson-pg-081','query-planning','performance-tuning',1,'advanced',35,'Query Planning','Read query plans and understand node types.',['query-plan','explain','nested-loop'],[
    {type:'heading',data:{level:2,text:'Query Planning'}},
    {type:'paragraph',data:{text:'PostgreSQL optimizes queries into plans. Read plans with EXPLAIN.'}},
    {type:'example',data:{title:'Explain',content:'Show query plan',language:'sql',code:"EXPLAIN (ANALYZE, BUFFERS)\nSELECT u.id, COUNT(o.id)\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id\nWHERE u.deleted_at IS NULL\nGROUP BY u.id\nORDER BY COUNT(o.id) DESC\nLIMIT 100;"}},
    {type:'exercise',data:{title:'Exercise: Read Plan',description:'Read explain plan and identify sequential scans.',steps:['Run EXPLAIN ANALYZE','Identify seq scans','Add index'],expectedOutcome:'Plan reads with index scans.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Read EXPLAIN output.','Use BUFFERS for I/O stats.','Look for seq scans on large tables.']}}
  ]),
  lesson('lesson-pg-082','explain-analyze','performance-tuning',2,'advanced',35,'EXPLAIN ANALYZE','Use EXPLAIN ANALYZE, track rows, and avoid regressions.',['explain','analyze','buffers'],[
    {type:'heading',data:{level:2,text:'EXPLAIN ANALYZE'}},
    {type:'paragraph',data:{text:'EXPLAIN ANALYZE runs the query and returns actual row counts and timings.'}},
    {type:'example',data:{title:'Explain',content:'Show actual timings',language:'sql',code:"EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)\nSELECT * FROM users WHERE email = $1;"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Save plans with pg_stat_statements for regression detection.'}},
    {type:'exercise',data:{title:'Exercise: Analyze Query',description:'Analyze slow query and compare plans.',steps:['Run EXPLAIN ANALYZE','Identify seq scan','Add index','Re-analyze'],expectedOutcome:'Plan improves with index.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use ANALYZE for actual timings.','Use BUFFERS for I/O.','Use pg_stat_statements for long-term tracking.']}}
  ]),
  lesson('lesson-pg-083','vacuum-analyze','performance-tuning',3,'advanced',35,'VACUUM & ANALYZE','Use VACUUM, VACUUM FULL, and ANALYZE for maintenance.',['vacuum','analyze','bloat'],[
    {type:'heading',data:{level:2,text:'VACUUM & ANALYZE'}},
    {type:'paragraph',data:{text:'VACUUM reclaims dead tuples. ANALYZE updates statistics.'}},
    {type:'example',data:{title:'VACUUM',content:'Vacuum and analyze',language:'sql',code:"VACUUM (VERBOSE, ANALYZE) users;\nVACUUM FULL orders;"}},
    {type:'callout',data:{variant:'warning',title:'Warning',text:'VACUUM FULL requires an ACCESS EXCLUSIVE lock and rewrites the table.'}},
    {type:'exercise',data:{title:'Exercise: Vacuum',description:'Vacuum bloated table and check bloat.',steps:['Run VACUUM','Check page counts','Monitor autovacuum'],expectedOutcome:'Table maintained.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use autovacuum.','Use VACUUM FULL for massive bloat.','Use ANALYZE after bulk loads.']}}
  ]),
  lesson('lesson-pg-084','configuration-tuning','performance-tuning',4,'advanced',35,'Configuration Tuning','Tune postgresql.conf for memory, parallelism, and planner.',['configuration','work_mem','shared_buffers'],[
    {type:'heading',data:{level:2,text:'Configuration Tuning'}},
    {type:'paragraph',data:{text:'Tune memory, parallelism, and planner settings for your workload.'}},
    {type:'example',data:{title:'Config',content:'Sample postgresql.conf settings',language:'conf',code:"shared_buffers = 4GB\nwork_mem = 64MB\nmaintenance_work_mem = 512MB\neffective_cache_size = 12GB\nmax_parallel_workers_per_gather = 4\nrandom_page_cost = 1.1"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use pg_settings to inspect current values.'}},
    {type:'exercise',data:{title:'Exercise: Tune Config',description:'Tune settings for reporting workload.',steps:['Set shared_buffers','Set work_mem','Set effective_cache_size'],expectedOutcome:'Configuration improved.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use shared_buffers for caching.','Use work_mem for sorts and hashes.','Use effective_cache_size for planner estimates.']}}
  ]),
  lesson('lesson-pg-085','connection-pooling','performance-tuning',5,'advanced',35,'Connection Pooling','Use pgbouncer and connection pooling for serverless and web apps.',['pgbouncer','pooling','serverless'],[
    {type:'heading',data:{level:2,text:'Connection Pooling'}},
    {type:'paragraph',data:{text:'PostgreSQL connections are expensive. Use pgbouncer for pooling.'}},
    {type:'example',data:{title:'pgbouncer',content:'pgbouncer config',language:'conf',code:"[databases]\nappdb = host=127.0.0.1 port=5432 dbname=appdb\n\n[pgbouncer]\nlisten_addr = 0.0.0.0\nlisten_port = 5432\npool_mode = transaction\ndefault_pool_size = 20"}},
    {type:'callout',data:{variant:'info',title:'Tip',text:'Use transaction pooling for web apps and session pooling for stateful apps.'}},
    {type:'exercise',data:{title:'Exercise: Configure pgbouncer',description:'Configure pgbouncer for appdb.',steps:['Install pgbouncer','Configure databases','Test pooling'],expectedOutcome:'Connection pooling active.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use pgbouncer for connection pooling.','Use transaction pooling for serverless.','Monitor with pgbouncer stats.']}}
  ]),
  lesson('lesson-pg-086','monitoring','performance-tuning',6,'advanced',35,'Monitoring','Monitor PostgreSQL with pg_stat_statements, pg_stat_activity, and metrics.',['monitoring','pg_stat_statements','metrics'],[
    {type:'heading',data:{level:2,text:'Monitoring'}},
    {type:'paragraph',data:{text:'Use built-in views and extensions to monitor database health and query performance.'}},
    {type:'example',data:{title:'Stats',content:'Top queries by total time',language:'sql',code:"SELECT query, calls, total_exec_time, mean_exec_time\nFROM pg_stat_statements\nORDER BY total_exec_time DESC\nLIMIT 10;"}},
    {type:'example',data:{title:'Activity',content:'Current connections',language:'sql',code:"SELECT pid, usename, state, query_start, query\nFROM pg_stat_activity\nWHERE state <> 'idle'\nORDER BY query_start;"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use pg_stat_statements for query regression detection.'}},
    {type:'exercise',data:{title:'Exercise: Monitor Database',description:'Find slow queries and active connections.',steps:['Query pg_stat_statements','Query pg_stat_activity','Identify slow queries'],expectedOutcome:'Database monitored.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use pg_stat_statements for query stats.','Use pg_stat_activity for sessions.','Use pg_stat_user_tables for table stats.']}}
  ]),
  // security-hardening
  lesson('lesson-pg-087','roles-privileges','security-hardening',1,'advanced',35,'Roles & Privileges','Manage roles, grants, and principle of least privilege.',['roles','privileges','security'],[
    {type:'heading',data:{level:2,text:'Roles & Privileges'}},
    {type:'paragraph',data:{text:'PostgreSQL uses roles for authentication and authorization. Grant only necessary privileges.'}},
    {type:'example',data:{title:'Roles',content:'Create role and grant privileges',language:'sql',code:"CREATE ROLE app_user NOINHERIT LOGIN PASSWORD 'secret';\nGRANT CONNECT ON DATABASE appdb TO app_user;\nGRANT USAGE ON SCHEMA public TO app_user;\nGRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_user;"}},
    {type:'callout',data:{variant:'warning',title:'Least Privilege',text:'Grant only required privileges. Avoid superuser for application roles.'}},
    {type:'exercise',data:{title:'Exercise: Create App Role',description:'Create app_user with limited privileges.',steps:['Create role','Grant schema usage','Grant table privileges'],expectedOutcome:'Role created with least privilege.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use roles for authorization.','Grant schema usage.','Use default privileges for new tables.']}}
  ]),
  lesson('lesson-pg-088','row-level-security','security-hardening',2,'advanced',35,'Row Level Security','Implement row-level security policies.',['rls','policies','security'],[
    {type:'heading',data:{level:2,text:'Row Level Security'}},
    {type:'paragraph',data:{text:'RLS restricts which rows users can see or modify.'}},
    {type:'example',data:{title:'RLS',content:'Enable RLS and create policy',language:'sql',code:"ALTER TABLE users ENABLE ROW LEVEL SECURITY;\n\nCREATE POLICY user_isolation ON users\n  FOR ALL\n  TO app_user\n  USING (id = current_setting('app.current_user_id')::INT);"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use current_setting for tenant isolation.'}},
    {type:'exercise',data:{title:'Exercise: Enable RLS',description:'Enable RLS on users table.',steps:['Enable RLS','Create policy','Test access'],expectedOutcome:'Users see only their rows.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Enable RLS on sensitive tables.','Use policies for access control.','Use app_current_user_id for tenant isolation.']}}
  ]),
  lesson('lesson-pg-089','ssl-tls','security-hardening',3,'advanced',35,'SSL/TLS','Configure SSL/TLS for encrypted connections.',['ssl','tls','encryption'],[
    {type:'heading',data:{level:2,text:'SSL/TLS'}},
    {type:'paragraph',data:{text:'PostgreSQL supports SSL/TLS for encrypted client-server communication.'}},
    {type:'example',data:{title:'SSL',content:'Configure postgresql.conf',language:'conf',code:"ssl = on\nssl_cert_file = 'server.crt'\nssl_key_file = 'server.key'\nssl_ca_file = 'ca.crt'\nssl_min_protocol_version = 'TLSv1.2'"}},
    {type:'callout',data:{variant:'warning',title:'Security',text:'Use TLSv1.2 or higher. Verify client certificates for mutual TLS.'}},
    {type:'exercise',data:{title:'Exercise: Enable SSL',description:'Enable SSL on PostgreSQL.',steps:['Generate certificates','Configure postgresql.conf','Test connection'],expectedOutcome:'SSL connection established.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use ssl = on.','Use TLSv1.2 or higher.','Use client certificates for mTLS.']}}
  ]),
  lesson('lesson-pg-090','encryption-at-rest','security-hardening',4,'advanced',35,'Encryption at Rest','Use pgcrypto for column-level encryption and filesystem encryption.',['encryption','pgcrypto','security'],[
    {type:'heading',data:{level:2,text:'Encryption at Rest'}},
    {type:'paragraph',data:{text:'Use pgcrypto for column-level encryption. Use filesystem encryption for full-disk encryption.'}},
    {type:'example',data:{title:'Encrypt',content:'Encrypt and decrypt column',language:'sql',code:"CREATE EXTENSION IF NOT EXISTS pgcrypto;\n\nINSERT INTO sensitive_data (ssn, encrypted_ssn)\nVALUES ('123-45-6789', pgp_sym_encrypt('123-45-6789', 'secret_key'));\n\nSELECT pgp_sym_decrypt(encrypted_ssn, 'secret_key') AS ssn\nFROM sensitive_data;"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use pgp_sym_encrypt for symmetric encryption.'}},
    {type:'exercise',data:{title:'Exercise: Encrypt SSN',description:'Encrypt and decrypt SSN column.',steps:['Create extension','Encrypt data','Decrypt data'],expectedOutcome:'Data encrypted and decrypted.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use pgcrypto for column encryption.','Use filesystem encryption for full disk.','Rotate keys regularly.']}}
  ]),
  lesson('lesson-pg-091','auditing','security-hardening',5,'advanced',35,'Auditing','Audit data changes with triggers and pgaudit.',['auditing','pgaudit','triggers'],[
    {type:'heading',data:{level:2,text:'Auditing'}},
    {type:'paragraph',data:{text:'Use pgaudit for SQL-level auditing. Use triggers for row-level auditing.'}},
    {type:'example',data:{title:'Audit Trigger',content:'Audit changes to sensitive tables',language:'sql',code:"CREATE TABLE audit_log (\n  id BIGSERIAL PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  row_id BIGINT NOT NULL,\n  action TEXT NOT NULL,\n  changed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),\n  changed_by TEXT NOT NULL\n);"}},
    {type:'callout',data:{variant:'info',title:'Tip',text:'Use pgaudit for comprehensive SQL auditing.'}},
    {type:'exercise',data:{title:'Exercise: Create Audit Trigger',description:'Create audit trigger for sensitive tables.',steps:['Create audit_log table','Create trigger function','Create trigger'],expectedOutcome:'Audit log captures changes.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use triggers for row-level audit.','Use pgaudit for SQL audit.','Store audit logs securely.']}}
  ]),
  // high-availability-dr
  lesson('lesson-pg-092','streaming-replication','high-availability-dr',1,'advanced',35,'Streaming Replication','Configure streaming replication for high availability.',['replication','streaming','ha'],[
    {type:'heading',data:{level:2,text:'Streaming Replication'}},
    {type:'paragraph',data:{text:'Streaming replication sends WAL records from primary to standby servers in real time.'}},
    {type:'example',data:{title:'Primary',content:'Configure primary',language:'conf',code:"wal_level = replica\nmax_wal_senders = 10\nwal_keep_size = 1GB\nhot_standby = on"}},
    {type:'example',data:{title:'Standby',content:'Configure standby',language:'conf',code:"primary_conninfo = 'host=primary port=5432 user=replicator password=secret'\nrestore_command = 'cp /archive/%f %p'\n standby_mode = 'on'"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use synchronous replication for zero data loss.'}},
    {type:'exercise',data:{title:'Exercise: Configure Replication',description:'Configure primary and standby.',steps:['Set wal_level','Create replication user','Start standby'],expectedOutcome:'Replication running.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use wal_level = replica.','Use replication slots.','Monitor with pg_stat_replication.']}}
  ]),
  lesson('lesson-pg-093','logical-replication-ha','high-availability-dr',2,'advanced',35,'Logical Replication for HA','Use logical replication for selective HA and migrations.',['logical-replication','ha','migrations'],[
    {type:'heading',data:{level:2,text:'Logical Replication for HA'}},
    {type:'paragraph',data:{text:'Logical replication replicates changes at the row level. Use it for selective replication and online migrations.'}},
    {type:'example',data:{title:'Publication',content:'Create publication',language:'sql',code:"CREATE PUBLICATION ha_pub FOR TABLE users, orders WITH (publish = 'insert, update, delete');"}},
    {type:'example',data:{title:'Subscription',content:'Create subscription',language:'sql',code:"CREATE SUBSCRIPTION ha_sub\n  CONNECTION 'host=primary dbname=appdb user=replicator password=secret'\n  PUBLICATION ha_pub\n  WITH (copy_data = false);"}},
    {type:'callout',data:{variant:'info',title:'Tip',text:'Use logical replication for version upgrades and multi-master.'}},
    {type:'exercise',data:{title:'Exercise: Logical HA',description:'Set up logical replication for HA.',steps:['Create publication','Create subscription','Monitor lag'],expectedOutcome:'Logical replication active.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use publications and subscriptions.','Use for selective replication.','Monitor replication lag.']}}
  ]),
  lesson('lesson-pg-094','patroni-repmgr','high-availability-dr',3,'advanced',35,'Patroni & repmgr','Use Patroni and repmgr for automatic failover.',['patroni','repmgr','failover'],[
    {type:'heading',data:{level:2,text:'Patroni & repmgr'}},
    {type:'paragraph',data:{text:'Patroni and repmgr automate failover and cluster management for PostgreSQL.'}},
    {type:'example',data:{title:'Patroni',content:'Sample patroni.yml',language:'yaml',code:"scope: postgresql-cluster\nnamespace: /service/postgresql\nname: node1\n\nrestapi:\n  listen: 0.0.0.0:8008\n  connect_address: 10.0.0.1:8008\n\netcd:\n  hosts: 10.0.0.1:2379\n\npostgresql:\n  listen: 0.0.0.0:5432\n  connect_address: 10.0.0.1:5432\n  data_dir: /var/lib/postgresql/data\n  authentication:\n    replication:\n      username: replicator\n      password: secret\n    superuser:\n      username: postgres\n      password: secret"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use Patroni with etcd, Consul, or ZooKeeper for distributed consensus.'}},
    {type:'exercise',data:{title:'Exercise: Install Patroni',description:'Set up Patroni cluster.',steps:['Install Patroni','Configure etcd','Start cluster'],expectedOutcome:'Patroni cluster running.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use Patroni for automatic failover.','Use etcd for distributed consensus.','Test failover regularly.']}}
  ]),
  lesson('lesson-pg-095','failover-switchover','high-availability-dr',4,'advanced',35,'Failover & Switchover','Perform planned and unplanned failovers.',['failover','switchover','ha'],[
    {type:'heading',data:{level:2,text:'Failover & Switchover'}},
    {type:'paragraph',data:{text:'Failover promotes a standby to primary. Switchover is a planned role swap.'}},
    {type:'example',data:{title:'Switchover',content:'Switchover with Patroni',language:'bash',code:"patronictl failover postgresql-cluster --candidate node2"}},
    {type:'callout',data:{variant:'warning',title:'Failover',text:'Test failover regularly. Ensure applications reconnect automatically.'}},
    {type:'exercise',data:{title:'Exercise: Switchover',description:'Perform planned switchover.',steps:['Check cluster status','Run patronictl failover','Verify new primary'],expectedOutcome:'Switchover successful.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use patronictl for failover.','Test switchover regularly.','Monitor replication lag.']}}
  ]),
  lesson('lesson-pg-096','disaster-recovery','high-availability-dr',5,'advanced',35,'Disaster Recovery','Plan backup retention, recovery testing, and RPO/RTO.',['dr','backup','rpo'],[
    {type:'heading',data:{level:2,text:'Disaster Recovery'}},
    {type:'paragraph',data:{text:'Define RPO and RTO. Use base backups, WAL archiving, and PITR for recovery.'}},
    {type:'example',data:{title:'Backup Strategy',content:'Base backup and WAL',language:'bash',code:"pg_basebackup -D /backup/primary -Ft -z -P -U replicator\npg_dump -F c -b -v -f appdb.dump appdb"}},
    {type:'callout',data:{variant:'info',title:'Tip',text:'Store backups offsite. Test recovery quarterly.'}},
    {type:'exercise',data:{title:'Exercise: DR Plan',description:'Create disaster recovery plan.',steps:['Define RPO/RTO','Configure backups','Test restore'],expectedOutcome:'DR plan documented.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Define RPO and RTO.','Use base backups and WAL.','Test recovery regularly.']}}
  ]),
  // modern-data-tools
  lesson('lesson-pg-097','postgis-spatial','modern-data-tools',1,'intermediate',35,'PostGIS Spatial','Use PostGIS for spatial queries, geometry, and geography.',['postgis','spatial','gis'],[
    {type:'heading',data:{level:2,text:'PostGIS'}},
    {type:'paragraph',data:{text:'PostGIS adds spatial support to PostgreSQL with geometry and geography types.'}},
    {type:'example',data:{title:'Spatial',content:'Create spatial table',language:'sql',code:"CREATE EXTENSION IF NOT EXISTS postgis;\n\nCREATE TABLE places (\n  id BIGSERIAL PRIMARY KEY,\n  name TEXT NOT NULL,\n  location GEOGRAPHY(Point, 4326)\n);\n\nINSERT INTO places (name, location)\nVALUES ('Office', ST_MakePoint(-73.935242, 40.730610)::GEOGRAPHY);"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use geography for earth coordinates and geometry for planar data.'}},
    {type:'exercise',data:{title:'Exercise: Spatial Query',description:'Find places within 10km.',steps:['Create extension','Insert points','Use ST_DWithin'],expectedOutcome:'Query returns nearby places.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use PostGIS for spatial data.','Use geography for earth coordinates.','Use spatial indexes.']}}
  ]),
  lesson('lesson-pg-098','timescaledb-time-series','modern-data-tools',2,'intermediate',35,'TimescaleDB','Use TimescaleDB for time-series data.',['timescaledb','time-series','hypertable'],[
    {type:'heading',data:{level:2,text:'TimescaleDB'}},
    {type:'paragraph',data:{text:'TimescaleDB is a PostgreSQL extension for time-series data. It uses hypertables.'}},
    {type:'example',data:{title:'Hypertable',content:'Create hypertable',language:'sql',code:"CREATE EXTENSION IF NOT EXISTS timescaledb;\n\nCREATE TABLE metrics (\n  time TIMESTAMPTZ NOT NULL,\n  device_id INT NOT NULL,\n  temperature NUMERIC NOT NULL\n);\n\nSELECT create_hypertable('metrics', 'time');"}},
    {type:'callout',data:{variant:'info',title:'Tip',text:'Use continuous aggregates for downsampling.'}},
    {type:'exercise',data:{title:'Exercise: Create Hypertable',description:'Create hypertable for metrics.',steps:['Create extension','Create table','Create hypertable'],expectedOutcome:'Hypertable created.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use TimescaleDB for time-series.','Use hypertables for partitioning.','Use continuous aggregates.']}}
  ]),
  lesson('lesson-pg-099','pgvector-ai','modern-data-tools',3,'intermediate',35,'pgvector','Use pgvector for embeddings and vector search.',['pgvector','embeddings','ai'],[
    {type:'heading',data:{level:2,text:'pgvector'}},
    {type:'paragraph',data:{text:'pgvector adds vector similarity search to PostgreSQL.'}},
    {type:'example',data:{title:'Vector',content:'Create vector table',language:'sql',code:"CREATE EXTENSION IF NOT EXISTS vector;\n\nCREATE TABLE embeddings (\n  id BIGSERIAL PRIMARY KEY,\n  content TEXT NOT NULL,\n  embedding VECTOR(1536)\n);\n\nCREATE INDEX ON embeddings USING HNSW (embedding vector_cosine_ops);"}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use HNSW or IVFFlat indexes for approximate nearest neighbor search.'}},
    {type:'exercise',data:{title:'Exercise: Vector Search',description:'Find similar embeddings.',steps:['Create extension','Insert embeddings','Use <=> operator'],expectedOutcome:'Similar items returned.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use pgvector for embeddings.','Use HNSW for ANN search.','Use cosine distance for similarity.']}}
  ]),
  lesson('lesson-pg-100','jsonb-advanced','modern-data-tools',4,'intermediate',35,'JSONB Advanced','Use JSONB for document storage, indexing, and querying.',['jsonb','document','advanced'],[
    {type:'heading',data:{level:2,text:'JSONB Advanced'}},
    {type:'paragraph',data:{text:'JSONB stores JSON in a decomposed binary format. Use GIN indexes for containment queries.'}},
    {type:'example',data:{title:'JSONB',content:'Query JSONB',language:'sql',code:"SELECT id, data->'price' AS price\nFROM products\nWHERE data @> '{\"currency\":\"USD\"}'\n  AND data->'tags' ? 'sale'\nORDER BY (data->>'price')::NUMERIC DESC;"}},
    {type:'callout',data:{variant:'info',title:'GIN',text:'Create a GIN index on jsonb for containment queries.'}},
    {type:'exercise',data:{title:'Exercise: Query JSONB',description:'Query products by JSONB tags.',steps:['Use @>','Use ? for key','Use ANY for arrays'],expectedOutcome:'Query returns matching products.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use JSONB for flexible schemas.','Use GIN indexes for JSONB.','Use jsonb_path_ops for containment.']}}
  ]),
  lesson('lesson-pg-101','operational-tips','modern-data-tools',5,'intermediate',35,'Operational Tips','Use operational best practices for PostgreSQL in production.',['operations','best-practices','production'],[
    {type:'heading',data:{level:2,text:'Operational Tips'}},
    {type:'paragraph',data:{text:'Follow best practices for running PostgreSQL in production.'}},
    {type:'bullet-list',data:{title:'Checklist',items:['Use connection pooling with pgbouncer','Monitor with pg_stat_statements','Tune autovacuum','Use replicas for read scaling','Back up with pg_dump and base backups','Use SSL/TLS for connections']}},
    {type:'callout',data:{variant:'tip',title:'Tip',text:'Use pg_stat_statements to identify slow queries.'}},
    {type:'exercise',data:{title:'Exercise: Production Checklist',description:'Review production checklist.',steps:['Review configuration','Set up monitoring','Test backups'],expectedOutcome:'Production checklist complete.'}},
    {type:'summary-box',data:{title:'Key Takeaways',points:['Use pgbouncer for pooling.','Monitor with pg_stat_statements.','Test backups and failover.']}}
  ])
];

const written = [];
lessons.forEach(l => {
  const filePath = path.join(DIR, l.moduleSlug, `${l.slug}.json`);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(l, null, 2));
  written.push(filePath);
});

console.log('WROTE', written.length, 'lessons');
written.forEach(w => console.log(w));
