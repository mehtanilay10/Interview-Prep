# Execute Raw SQL Queries in Entity Framework Core

Entity Framework Core provides the `DbSet.FromSql()` method to execute raw SQL queries for the underlying database and get the results as entity objects.

The following example demonstrates executing a raw SQL query to MS SQL Server database.

```
var context = new SchoolContext();

var students = context.Students
                  .FromSql("SELECT * FROM Students WHERE Name = 'Bill'")
                  .ToList();
```

In the above example, the `FromSql()` method is used after the `Students` entity set (`DbSet<Student>`), so the specified SQL query must return records from the `Students` table which will be transformed into `Student` entities. Entity Framework Core will execute the specified query to the database i.e. `Select * from Students where Name = 'Bill'` in the above example.

## Parameterized Query

The `FromSql` method allows parameterized queries using string interpolation syntax in C#, as shown below.

```
string name = "Bill";

var context = new SchoolContext();
var students = context.Students
                    .FromSql($"SELECT * FROM Students WHERE Name = '{name}'")
                    .ToList();
```

The following is also valid.

```
string name = "Bill";

var context = new SchoolContext();
var students = context.Students
                    .FromSql("SELECT * FROM Students WHERE Name = '{0}'", name)
                    .ToList();
```

The examples above will execute the following SQL query to the SQL Server database:

```
exec sp_executesql N'SELECT * FROM Students WHERE Name = ''@p0''
',N'@p0 nvarchar(4000)',@p0=N'Bill'
go
```

## LINQ Operators

You can also use LINQ Operators after a raw query using `FromSql` method.

```
string name = "Bill";

var context = new SchoolContext();
var students = context.Students
                    .FromSql("SELECT * FROM Students WHERE Name = '{0}'", name)
                    .OrderBy(s => s.StudentId)
                    .ToList();
```

In the above example, EF Core executes the following query by combining `FromSql` method and `OrderBy` operator.

```
exec sp_executesql N'SELECT [s].[StudentId], [s].[Name]
FROM (
    SELECT * FROM Students WHERE Name = ''@p0''
) AS [s]
ORDER BY [s].[StudentId]',N'@p0 nvarchar(4000)',@p0=N'Bill'
go
```

## FromSql Limitations

1.  SQL queries must return entities of the same type as `DbSet<T>` type. e.g. the specified query cannot return the `Course` entities if `FromSql` is used after `Students`. Returning ad-hoc types from `FromSql()` method is in the [backlog](https://github.com/aspnet/EntityFrameworkCore/issues/1862).
2.  The SQL query must return all the columns of the table. e.g. `context.Students.FromSql("SELECT StudentId, LastName FROM Students").ToList()` will throw an exception.
3.  The SQL query cannot include JOIN queries to get related data. Use [Include](https://www.entityframeworktutorial.net/efcore/querying-in-ef-core.aspx#include-in-ef-core) method to load related entities after `FromSql()` method.

---
Source: [Execute Raw SQL Queries in Entity Framework Core](https://www.entityframeworktutorial.net/efcore/raw-sql-queries-in-ef-core.aspx)