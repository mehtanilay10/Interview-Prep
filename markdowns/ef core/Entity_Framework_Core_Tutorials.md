# Entity Framework Core Tutorials

Entity Framework Core is the new version of Entity Framework after EF 6.x. It is open-source, lightweight, extensible and a cross-platform version of Entity Framework data access technology.

Entity Framework is an Object/Relational Mapping (O/RM) framework. It is an enhancement to ADO.NET that gives developers an automated mechanism for accessing & storing the data in the database.

EF Core is intended to be used with .NET Core applications. However, it can also be used with standard .NET 4.5+ framework based applications.

The following figure illustrates the supported application types, .NET Frameworks.

[![ef core](https://www.entityframeworktutorial.net/Images/efcore/ef-core.png)](https://www.entityframeworktutorial.net/Images/efcore/ef-core.png)

## EF Core Version History

| EF Core Version | Release Date | Target Framework |
| --- | --- | --- |
| EF Core 10.0 | Nov 11, 2025 | .NET 10 |
| EF Core 9.0 | Nov 12, 2024 | .NET 8 |
| EF Core 8.0 | Nov 14, 2023 | .NET 8 |
| EF Core 7.0 | Nov 8, 2022 | .NET 6 |
| EF Core 6.0 | Nov 8, 2021 | .NET 6 |
| EF Core 5.0 | Nov 10, 2020 | .NET Standard 2.1 |
| EF Core 3.0 | Sept 23, 2019 | .NET Standard 2.1 |
| EF Core 2.0 | August 14, 2017 | .NET Standard 2.0 |
| EF Core 1.0 | June 27, 2016 | .NET Standard 2.1 |

EF Core Official Documentation: [https://learn.microsoft.com/en-us/ef/core/](https://learn.microsoft.com/en-us/ef/core/)

EF Core on GitHub: [https://github.com/dotnet/efcore](https://github.com/dotnet/efcore)

EF Core releases and planning: [https://learn.microsoft.com/en-us/ef/core/what-is-new/](https://learn.microsoft.com/en-us/ef/core/what-is-new/)

## EF Core Development Approaches

EF Core supports two development approaches 1) Code-First 2) Database-First. EF Core mainly targets the code-first approach and provides little support for the database-first approach because the visual designer or wizard for DB model is not supported as of EF Core.

In the code-first approach, EF Core API creates the database and tables using migration based on the conventions and configuration provided in your domain classes. This approach is useful in Domain Driven Design (DDD).

In the database-first approach, EF Core API creates the domain and context classes based on your existing database using EF Core commands. This has limited support in EF Core as it does not support visual designer or wizard.

[![ef core dev approaches](https://www.entityframeworktutorial.net/Images/efcore/ef-core-dev-approaces.png)](https://www.entityframeworktutorial.net/Images/efcore/ef-core-dev-approaces.png)

## EF Core vs EF 6

Entity Framework Core is the new and improved version of Entity Framework for .NET Core applications. EF Core is new, so still not as mature as EF 6.

EF Core continues to support the following features and concepts, same as EF 6.

1.  DbContext & DbSet
2.  Data Model
3.  Querying using Linq-to-Entities
4.  Change Tracking
5.  SaveChanges
6.  Migrations

Learn more on EF Core and EF 6 differences at [here](https://learn.microsoft.com/en-us/ef/efcore-and-ef6).

## EF Core Database Providers

Entity Framework Core uses a provider model to access many different databases. EF Core includes providers as NuGet packages which you need to install.

The following table lists database providers and NuGet packages for EF Core.

| Database | NuGet Package |
| --- | --- |
| SQL Server | [Microsoft.EntityFrameworkCore.SqlServer](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.SqlServer) |
| MySQL | [MySql.Data.EntityFrameworkCore](https://www.nuget.org/packages/MySql.Data.EntityFrameworkCore) |
| PostgreSQL | [Npgsql.EntityFrameworkCore.PostgreSQL](https://www.nuget.org/packages/Npgsql.EntityFrameworkCore.PostgreSQL) |
| SQLite | [Microsoft.EntityFrameworkCore.SQLite](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.SQLite) |
| SQL Compact | [EntityFrameworkCore.SqlServerCompact40](https://www.nuget.org/packages/EntityFrameworkCore.SqlServerCompact40) |
| In-memory | [Microsoft.EntityFrameworkCore.InMemory](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.InMemory) |

Learn to install EF Core in the next chapter.

---
Source: [Entity Framework Core](https://www.entityframeworktutorial.net/efcore/entity-framework-core.aspx)