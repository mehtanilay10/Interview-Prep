# EF Core Migrations using CLI

The .NET Core CLI (Command Line Interface) tools for Entity Framework Core perform design-time development tasks such as migrations, script generation, and generating model code from an existing database. It can be used on any platform.

Install the .NET Core CLI tools for EF Core using the following command:

.NET Core CLI

dotnet tool install --global dotnet-ef

After installation, use the --help option to get help on any EF Core commands, as shown below.

```
C:> dotnet ef --help
Entity Framework Core .NET Command-line Tools 7.0.11

Usage: dotnet ef [options] [command]

Options:
  --version        Show version information
  -h|--help        Show help information
  -v|--verbose     Show verbose output.
  --no-color       Don't colorize output.
  --prefix-output  Prefix output with level.

Commands:
  database    Commands to manage the database.
  dbcontext   Commands to manage DbContext types.
  migrations  Commands to manage migrations.

Use "dotnet ef [command] --help" for more information about a command.
    
```

As you can see above, there are three main EF commands available: database, dbcontext and migrations. The following table lists all EF commands and sub-commands.

| Command | Sub Commands | Usage |
| --- | --- | --- |
| Database | [drop](https://www.entityframeworktutorial.net/efcore/cli-commands-for-ef-core-migration.aspx#database-drop) | Drops the database. |
| [update](https://www.entityframeworktutorial.net/efcore/cli-commands-for-ef-core-migration.aspx#database-update) | Updates the database to a specified migration. |
| DbContext | [info](https://www.entityframeworktutorial.net/efcore/cli-commands-for-ef-core-migration.aspx#dbcontext-info) | Gets information about a DbContext type. |
| [list](https://www.entityframeworktutorial.net/efcore/cli-commands-for-ef-core-migration.aspx#dbcontext-list) | Lists available DbContext types. |
| [scaffold](https://www.entityframeworktutorial.net/efcore/cli-commands-for-ef-core-migration.aspx#dbcontext-scaffold) | Scaffolds a DbContext and entity types for a database. |
| Migrations | [add](https://www.entityframeworktutorial.net/efcore/cli-commands-for-ef-core-migration.aspx#migrations-add) | Adds a new migration. |
| [list](https://www.entityframeworktutorial.net/efcore/cli-commands-for-ef-core-migration.aspx#migrations-list) | Lists available migrations. |
| [remove](https://www.entityframeworktutorial.net/efcore/cli-commands-for-ef-core-migration.aspx#migrations-remove) | Removes the last migration. |
| [script:](https://www.entityframeworktutorial.net/efcore/cli-commands-for-ef-core-migration.aspx#migrations-script) | Generates a SQL script from migrations. |

Let's see available options for each command.

### Database Drop

**`> dotnet ef database drop --help`**

```
Usage: dotnet ef database drop [options]

Options:
  -f|--force                             Don't confirm.
  --dry-run                              Show which database would be dropped, but don't drop it.
  -c|--context <DBCONTEXT>               The DbContext to use.
  -p|--project <PROJECT>                 The project to use. Defaults to the current working directory.
  -s|--startup-project <PROJECT>         The startup project to use. Defaults to the current working directory.
  --framework <FRAMEWORK>                The target framework. Defaults to the first one in the project.
  --configuration <CONFIGURATION>        The configuration to use.
  --runtime <RUNTIME_IDENTIFIER>         The runtime to use.
  --msbuildprojectextensionspath <PATH>  The MSBuild project extensions path. Defaults to "obj".
  --no-build                             Don't build the project. Intended to be used when the build is up-to-date.
  -h|--help                              Show help information
  -v|--verbose                           Show verbose output.
  --no-color                             Don't colorize output.
  --prefix-output                        Prefix output with level.
```

### Database Update

**`>dotnet ef database update --help`**

```
Usage: dotnet ef database update [arguments] [options]

Arguments:
  <MIGRATION>  The target migration. If '0', all migrations will be reverted. Defaults to the last migration.

Options:
  --connection <CONNECTION>              The connection string to the database. Defaults to the one specified in AddDbContext or OnConfiguring.
  -c|--context <DBCONTEXT>               The DbContext to use.
  -p|--project <PROJECT>                 The project to use. Defaults to the current working directory.
  -s|--startup-project <PROJECT>         The startup project to use. Defaults to the current working directory.
  --framework <FRAMEWORK>                The target framework. Defaults to the first one in the project.
  --configuration <CONFIGURATION>        The configuration to use.
  --runtime <RUNTIME_IDENTIFIER>         The runtime to use.
  --msbuildprojectextensionspath <PATH>  The MSBuild project extensions path. Defaults to "obj".
  --no-build                             Don't build the project. Intended to be used when the build is up-to-date.
  -h|--help                              Show help information
  -v|--verbose                           Show verbose output.
  --no-color                             Don't colorize output.
  --prefix-output                        Prefix output with level.
```

### DbContext Info

**`> dotnet ef dbcontext info --help`**

```
Usage: dotnet ef dbcontext info [options]

Options:
  --json                                 Show JSON output. Use with --prefix-output to parse programatically.
  -c|--context <DBCONTEXT>               The DbContext to use.
  -p|--project <PROJECT>                 The project to use. Defaults to the current working directory.
  -s|--startup-project <PROJECT>         The startup project to use. Defaults to the current working directory.
  --framework <FRAMEWORK>                The target framework. Defaults to the first one in the project.
  --configuration <CONFIGURATION>        The configuration to use.
  --runtime <RUNTIME_IDENTIFIER>         The runtime to use.
  --msbuildprojectextensionspath <PATH>  The MSBuild project extensions path. Defaults to "obj".
  --no-build                             Don't build the project. Intended to be used when the build is up-to-date.
  -h|--help                              Show help information
  -v|--verbose                           Show verbose output.
  --no-color                             Don't colorize output.
  --prefix-output                        Prefix output with level.
    
```

### DbContext Scaffold

**`> dotnet ef dbcontext scaffold --help`**

```
Usage: dotnet ef dbcontext scaffold [arguments] [options]

Arguments:
  <CONNECTION>  The connection string to the database.
  <PROVIDER>    The provider to use. (E.g. Microsoft.EntityFrameworkCore.SqlServer)

Options:
  -d|--data-annotations                  Use attributes to configure the model (where possible). If omitted, only the fluent API is used.
  -c|--context <NAME>                    The name of the DbContext. Defaults to the database name.
  --context-dir <PATH>                   The directory to put the DbContext file in. Paths are relative to the project directory.
  -f|--force                             Overwrite existing files.
  -o|--output-dir <PATH>                 The directory to put files in. Paths are relative to the project directory.
  --schema <SCHEMA_NAME>...              The schemas of tables to generate entity types for.
  -t|--table <TABLE_NAME>...             The tables to generate entity types for.
  --use-database-names                   Use table and column names directly from the database.
  --json                                 Show JSON output. Use with --prefix-output to parse programatically.
  -n|--namespace <NAMESPACE>             The namespace to use. Matches the directory by default.
  --context-namespace <NAMESPACE>        The namespace of the DbContext class. Matches the directory by default.
  --no-onconfiguring                     Don't generate DbContext.OnConfiguring.
  --no-pluralize                         Don't use the pluralizer.
  -p|--project <PROJECT>                 The project to use. Defaults to the current working directory.
  -s|--startup-project <PROJECT>         The startup project to use. Defaults to the current working directory.
  --framework <FRAMEWORK>                The target framework. Defaults to the first one in the project.
  --configuration <CONFIGURATION>        The configuration to use.
  --runtime <RUNTIME_IDENTIFIER>         The runtime to use.
  --msbuildprojectextensionspath <PATH>  The MSBuild project extensions path. Defaults to "obj".
  --no-build                             Don't build the project. Intended to be used when the build is up-to-date.
  -h|--help                              Show help information
  -v|--verbose                           Show verbose output.
  --no-color                             Don't colorize output.
  --prefix-output                        Prefix output with level.
    
```

### Add

**`> dotnet ef migrations add --help`**

```
Usage: dotnet ef migrations add [arguments] [options]

Arguments:
  <NAME>  The name of the migration.

Options:
  -o|--output-dir <PATH>                 The directory to put files in. Paths are relative to the project directory. Defaults to "Migrations".
  --json                                 Show JSON output. Use with --prefix-output to parse programatically.
  -n|--namespace <NAMESPACE>             The namespace to use. Matches the directory by default.
  -c|--context <DBCONTEXT>               The DbContext to use.
  -p|--project <PROJECT>                 The project to use. Defaults to the current working directory.
  -s|--startup-project <PROJECT>         The startup project to use. Defaults to the current working directory.
  --framework <FRAMEWORK>                The target framework. Defaults to the first one in the project.
  --configuration <CONFIGURATION>        The configuration to use.
  --runtime <RUNTIME_IDENTIFIER>         The runtime to use.
  --msbuildprojectextensionspath <PATH>  The MSBuild project extensions path. Defaults to "obj".
  --no-build                             Don't build the project. Intended to be used when the build is up-to-date.
  -h|--help                              Show help information
  -v|--verbose                           Show verbose output.
  --no-color                             Don't colorize output.
  --prefix-output                        Prefix output with level.
    
```

### List

**`> dotnet ef migrations list --help`**

```
Usage: dotnet ef migrations list [options]

Options:
  --connection <CONNECTION>              The connection string to the database. Defaults to the one specified in AddDbContext or OnConfiguring.
  --no-connect                           Don't connect to the database.
  --json                                 Show JSON output. Use with --prefix-output to parse programatically.
  -c|--context <DBCONTEXT>               The DbContext to use.
  -p|--project <PROJECT>                 The project to use. Defaults to the current working directory.
  -s|--startup-project <PROJECT>         The startup project to use. Defaults to the current working directory.
  --framework <FRAMEWORK>                The target framework. Defaults to the first one in the project.
  --configuration <CONFIGURATION>        The configuration to use.
  --runtime <RUNTIME_IDENTIFIER>         The runtime to use.
  --msbuildprojectextensionspath <PATH>  The MSBuild project extensions path. Defaults to "obj".
  --no-build                             Don't build the project. Intended to be used when the build is up-to-date.
  -h|--help                              Show help information
  -v|--verbose                           Show verbose output.
  --no-color                             Don't colorize output.
  --prefix-output                        Prefix output with level.
    
```

### Remove

**`> dotnet ef migrations remove --help`**

```
Usage: dotnet ef migrations remove [options]

Options:
  -f|--force                             Revert the migration if it has been applied to the database.
  --json                                 Show JSON output. Use with --prefix-output to parse programatically.
  -c|--context <DBCONTEXT>               The DbContext to use.
  -p|--project <PROJECT>                 The project to use. Defaults to the current working directory.
  -s|--startup-project <PROJECT>         The startup project to use. Defaults to the current working directory.
  --framework <FRAMEWORK>                The target framework. Defaults to the first one in the project.
  --configuration <CONFIGURATION>        The configuration to use.
  --runtime <RUNTIME_IDENTIFIER>         The runtime to use.
  --msbuildprojectextensionspath <PATH>  The MSBuild project extensions path. Defaults to "obj".
  --no-build                             Don't build the project. Intended to be used when the build is up-to-date.
  -h|--help                              Show help information
  -v|--verbose                           Show verbose output.
  --no-color                             Don't colorize output.
  --prefix-output                        Prefix output with level.
    
```

### Script

**`> dotnet ef migrations script --help`**

```
Usage: dotnet ef migrations script [arguments] [options]

Arguments:
  <FROM>  The starting migration. Defaults to '0' (the initial database).
  <TO>    The target migration. Defaults to the last migration.

Options:
  -o|--output <FILE>                     The file to write the result to.
  -i|--idempotent                        Generate a script that can be used on a database at any migration.
  --no-transactions                      Don't generate SQL transaction statements.
  -c|--context <DBCONTEXT>               The DbContext to use.
  -p|--project <PROJECT>                 The project to use. Defaults to the current working directory.
  -s|--startup-project <PROJECT>         The startup project to use. Defaults to the current working directory.
  --framework <FRAMEWORK>                The target framework. Defaults to the first one in the project.
  --configuration <CONFIGURATION>        The configuration to use.
  --runtime <RUNTIME_IDENTIFIER>         The runtime to use.
  --msbuildprojectextensionspath <PATH>  The MSBuild project extensions path. Defaults to "obj".
  --no-build                             Don't build the project. Intended to be used when the build is up-to-date.
  -h|--help                              Show help information
  -v|--verbose                           Show verbose output.
  --no-color                             Don't colorize output.
  --prefix-output                        Prefix output with level.
    
```

---
Source: [Command Line Interface Commands for Migrations](https://www.entityframeworktutorial.net/efcore/cli-commands-for-ef-core-migration.aspx)