# EF Core Course Structure Plan

## Overview

Draft a course structure for Entity Framework Core (EF Core) based on 39 unique markdown source files from `/markdowns/ef core`. The course follows the existing project conventions (JSON content blocks, slugs, module/lesson hierarchy) and targets beginners progressing to intermediate C# developers.

## Source Files

39 unique markdown files.

## Module & Lesson Mapping

### Module 1: Getting Started with EF Core
- **slug**: `getting-started-ef-core`
- **difficulty**: `beginner`
- **estimatedHours`: 2
- **icon**: `🚀`
- **tags**: `["ef-core", "introduction", "fundamentals"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `entity-framework-core-tutorials` | Entity Framework Core Tutorials | `Entity_Framework_Core_Tutorials.md` |
| 2 | `install-entity-framework-core` | Install Entity Framework Core | `Install_Entity_Framework_Core.md` |
| 3 | `working-with-dbcontext-in-ef-core` | Working with DbContext in EF Core | `Working_with_DbContext_in_EF_Core.md` |

### Module 2: DbContext & Configuration
- **slug**: `dbcontext-configuration`
- **difficulty**: `beginner`
- **estimatedHours`: 3
- **icon**: `⚙️`
- **tags**: `["ef-core", "dbcontext", "configuration"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `dbcontext-in-entity-framework-core` | DbContext in Entity Framework Core | `DbContext_in_Entity_Framework_Core.md` |
| 2 | `configurations-in-entity-framework-core` | Configurations in Entity Framework Core | `Configurations_in_Entity_Framework_Core.md` |
| 3 | `fluent-api-in-entity-framework-core` | Fluent API in Entity Framework Core | `Fluent_API_in_Entity_Framework_Core.md` |

### Module 3: Conventions & Relationships
- **slug**: `conventions-relationships`
- **difficulty**: `beginner`
- **estimatedHours`: 3
- **icon**: `🔗`
- **tags**: `["ef-core", "conventions", "relationships"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `entity-framework-core-conventions` | Entity Framework Core Conventions | `Entity_Framework_Core_Conventions.md` |
| 2 | `one-to-many-relationships-conventions` | One-to-Many Relationships Conventions | `One-to-Many_Relationships_Conventions_in_Entity_Framework_Core.md` |
| 3 | `configure-one-to-many-relationships-fluent-api` | Configure One-to-Many Relationships using Fluent API | `Configure_One-to-Many_Relationships_using_Fluent_API_in_Entity_Framework_Core.md` |
| 4 | `one-to-one-relationships-conventions` | One-to-One Relationships Conventions | `One-to-One_Relationships_Conventions_in_Entity_Framework_Core.md` |
| 5 | `configure-one-to-one-relationships-fluent-api` | Configure One-to-One Relationships using Fluent API | `Configure_One-to-One_Relationships_using_Fluent_API_in_Entity_Framework_Core.md` |
| 6 | `configure-many-to-many-relationships` | Configure Many-to-Many Relationships | `Configure_Many-to-Many_Relationships_in_Entity_Framework_Core.md` |

### Module 4: Data Operations - Connected Scenario
- **slug**: `data-operations-connected`
- **difficulty**: `intermediate`
- **estimatedHours`: 2
- **icon**: `💾`
- **tags**: `["ef-core", "crud", "connected"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `entity-framework-core-saving-data-connected` | Saving Data in Connected Scenario | `Entity_Framework_Core_Saving_Data_in_Connected_Scenario.md` |

### Module 5: Data Operations - Disconnected Scenario
- **slug**: `data-operations-disconnected`
- **difficulty**: `intermediate`
- **estimatedHours`: 3
- **icon**: `🔌`
- **tags**: `["ef-core", "crud", "disconnected"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `insert-data-disconnected-scenario` | Insert Data in Disconnected Scenario | `Insert_Data_in_a_Disconnected_Scenario_in_Entity_Framework_Core.md` |
| 2 | `update-data-disconnected-scenario` | Update Data in Disconnected Scenario | `Update_Data_in_Disconnected_Scenario_in_Entity_Framework_Core.md` |
| 3 | `delete-data-disconnected-scenario` | Delete Data in Disconnected Scenario | `Delete_Data_in_Disconnected_Scenario_in_Entity_Framework_Core.md` |
| 4 | `working-with-disconnected-entity-graph` | Working with Disconnected Entity Graph | `Working_with_Disconnected_Entity_Graph_in_Entity_Framework_Core.md` |

### Module 6: Change Tracking
- **slug**: `change-tracking`
- **difficulty**: `intermediate`
- **estimatedHours`: 3
- **icon**: `👁️`
- **tags**: `["ef-core", "change-tracking", "entities"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `tracking-changes-of-entities` | Tracking Changes of Entities | `Tracking_Changes_of_Entities_in_EF_Core.md` |
| 2 | `entity-framework-core-change-tracking` | Entity Framework Core Change Tracking | `Entity_Framework_Core_Change_Tracking.md` |
| 3 | `trackgraph-in-entity-framework-core` | TrackGraph in Entity Framework Core | `TrackGraph_in_Entity_Framework_Core.md` |

### Module 7: Querying
- **slug**: `querying`
- **difficulty**: `intermediate`
- **estimatedHours**: 2
- **icon**: `🔍`
- **tags**: `["ef-core", "querying", "linq"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `querying-in-entity-framework-core` | Querying in Entity Framework Core | `Querying_in_Entity_Framework_Core.md` |
| 2 | `execute-raw-sql-queries` | Execute Raw SQL Queries | `Execute_Raw_SQL_Queries_in_Entity_Framework_Core.md` |
| 3 | `execute-delete-in-entity-framework-core` | Execute Delete in Entity Framework Core | `Execute_Delete_in_Entity_Framework_Core.md` |
| 4 | `execute-update-in-entity-framework-core` | Execute Update in Entity Framework Core | `Execute_Update_in_Entity_Framework_Core.md` |

### Module 8: Inheritance Strategies
- **slug**: `inheritance-strategies`
- **difficulty**: `intermediate`
- **estimatedHours**: 2
- **icon**: `🧬`
- **tags**: `["ef-core", "inheritance", "tph", "tpt", "tpc"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `inheritance-strategy-in-ef-core` | Inheritance Strategy in EF Core | `Inheritance_Strategy_in_EF_Core.md` |
| 2 | `ef-core-table-per-hierarchy-tph` | Table per Hierarchy (TPH) | `EF_Core_Table_per_Hierarchy_(TPH)_—_Inheritance_Strategy.md` |
| 3 | `ef-core-table-per-type-tpt` | Table per Type (TPT) | `EF_Core_Table_per_Type_(TPT)_—_Inheritance_Strategy.md` |
| 4 | `ef-core-table-per-concrete-type-tpc` | Table per Concrete Type (TPC) | `EF_Core_Table_per_Concrete_Type_(TPC)_—_Inheritance_Strategy.md` |

### Module 9: Migrations
- **slug**: `migrations`
- **difficulty**: `intermediate`
- **estimatedHours**: 3
- **icon**: `📦`
- **tags**: `["ef-core", "migrations", "cli"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `migrations-in-entity-framework-core` | Migrations in Entity Framework Core | `Migrations_in_Entity_Framework_Core.md` |
| 2 | `ef-core-migrations-using-cli` | EF Core Migrations using CLI | `EF_Core_Migrations_using_CLI.md` |
| 3 | `pmc-powershell-commands-migrations` | PMC/PowerShell Commands for Migrations | `PMCPowerShell_Commands_for_Migrations_in_EF_Core.md` |
| 4 | `generate-sql-script-from-model` | Generate SQL Script from Model | `Generate_SQL_Script_from_Model_in_EF_Core.md` |

### Module 10: Advanced Features
- **slug**: `advanced-features`
- **difficulty**: `advanced`
- **estimatedHours**: 3
- **icon**: `🧠`
- **tags**: `["ef-core", "advanced", "interceptors", "concurrency"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `entity-framework-core-interceptors` | Entity Framework Core Interceptors | `Entity_Framework_Core_Interceptors.md` |
| 2 | `shadow-property-in-entity-framework-core` | Shadow Property in Entity Framework Core | `Shadow_Property_in_Entity_Framework_Core.md` |
| 3 | `entity-framework-core-concurrency-conflicts` | Entity Framework Core Concurrency Conflicts | `Entity_Framework_Core_Concurrency_Conflicts.md` |
| 4 | `working-with-stored-procedures` | Working with Stored Procedures | `Working_with_Stored_Procedures_in_Entity_Framework_Core.md` |

### Module 11: Database-First & Diagnostics
- **slug**: `database-first-diagnostics`
- **difficulty**: `advanced`
- **estimatedHours**: 2
- **icon**: `🗄️`
- **tags**: `["ef-core", "database-first", "logging"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `entity-framework-core-with-existing-database` | EF Core with Existing Database | `Entity_Framework_Core_with_Existing_Database.md` |
| 2 | `logging-in-entity-framework-core` | Logging in Entity Framework Core | `Logging_in_Entity_Framework_Core.md` |
| 3 | `manage-db-connection-string` | Manage DB Connection String | `Manage_DB_Connection_String_in_EF_Core.md` |

### Module 12: Performance & Bulk Operations
- **slug**: `performance-bulk-operations`
- **difficulty**: `advanced`
- **estimatedHours**: 2
- **icon**: `⚡`
- **tags**: `["ef-core", "performance", "bulk"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `entity-framework-extensions-performance` | Entity Framework Extensions Performance | `The_Entity_Framework_Extensions_Performance-Focused_(Need_for_Speed)_when_working_with_large_Dataset.md` |
| 2 | `best-ways-bulk-inserts-entity-framework` | Best Ways to Do Bulk Inserts | `🚀_4_Best_Ways_to_Do_Bulk_Inserts_in_Entity_Framework_(Free_&_Paid).md` |

## Course Metadata

- **id**: `course-ef-core`
- **slug**: `ef-core`
- **title**: `Entity Framework Core`
- **subtitle**: `Master data access in .NET with EF Core from fundamentals to advanced concepts`
- **description**: `A comprehensive course covering EF Core fundamentals, DbContext, configuration, relationships, data operations, change tracking, querying, inheritance strategies, migrations, advanced features, database-first approach, diagnostics, and performance optimization.`
- **icon**: `🟣`
- **color**: `info`
- **order**: `5` (after LINQ)
- **moduleSlugs**: ordered list of all 12 module slugs above

## Implementation Notes

1. Each lesson JSON file should be placed in `content/courses/ef-core/<module-slug>/<lesson-slug>.json`
2. Each module needs a `content.json` in `content/courses/ef-core/<module-slug>/`
3. A course-level `content.json` goes in `content/courses/ef-core/content.json`
4. Update `content/courses/index.ts` to import the new course
5. Update `content/modules/index.ts` to import all new modules
6. Update `content/lessons/index.ts` to import all new lessons
7. Update `components/layout/Navbar.tsx` and `components/layout/Footer.tsx` to add `/courses/ef-core` link
8. Update `app/sitemap.ts` to include the new course route
9. Update `app/about/page.tsx` if the course is a major section
10. Run `npm run typecheck`, `npm run lint`, and `npm run build` to validate
