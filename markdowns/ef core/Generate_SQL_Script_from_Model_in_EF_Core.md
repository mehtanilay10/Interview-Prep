# Generate SQL Script from Model in EF Core

Here you will learn how to generate a SQL script from the EF Core model using a migration which you can use to execute manually or add to the source control.

In the previous [Migrations](https://www.entityframeworktutorial.net/efcore/entity-framework-core-migration.aspx) chapter, we added the migration and created the "SchoolDB" database, as shown below.

[![generate script 1](https://www.entityframeworktutorial.net/Images/efcore/generate-script1.png)](https://www.entityframeworktutorial.net/Images/efcore/generate-script1.png)

EF Core Sample Project

It is recommended to deploy migrations to a production database by generating SQL scripts.

The following table lists PMC/PowerShell commands and .NET Core CLI commands to generate a SQL script from the applied migrations.

| PMC Commands | .NET Core CLI commands | Usage |
| --- | --- | --- |
| Script-Migration | dotnet ef migrations script | Generates a SQL Script for all migrations |
| Script-Migration <FromMigrationName> | dotnet ef migrations script <FromMigrationName> | Generates a SQL script from the given migration to the latest migration. |
| Script-Migration <FromMigrationName> <ToMigrationName> | dotnet ef migrations script <FromMigrationName> <ToMigrationName> | Generates a SQL script from the specified from migration to the specified to migration. |
| Script-Migration -Idempotent | dotnet ef migrations script --idempotent | Generates idempotent scripts, which internally check which migrations have already been applied, and only apply missing ones. |
| Get-Migration | dotnet ef migrations list | List all existing migrations. |

Execute the following migration command to generate a SQL script for the entire database in PMC or PowerShell terminal.

Package Manager Console/PowerShell

generate-script

This will generate the SQL Script, as shown below.

[![generate script 2](https://www.entityframeworktutorial.net/images/efcore/generate-script2.png)](https://www.entityframeworktutorial.net/images/efcore/generate-script2.png)

If you use .NET Core CLI, then enter the following command.

.NET Core CLI

dotnet ef migrations script

You can also generate a SQL script from the specified migration till the last migration or from the specified from and to migrations. Refer commands in the above table.

Visit [generating SQL script](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/applying) for more detailed information.

---
Source: [Generate SQL Script in Entity Framework Core](https://www.entityframeworktutorial.net/efcore/generate-sql-script.aspx)