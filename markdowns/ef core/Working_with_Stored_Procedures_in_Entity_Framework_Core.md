# Working with Stored Procedures in Entity Framework Core

Here, you will learn how to execute a database stored procedure in Entity Framework Core.

EF Core provides the following methods to execute a stored procedure:

1.  `DbSet<TEntity>.FromSql()`
2.  `DbContext.Database.ExecuteSqlCommand()`

There are some limitations on the execution of database stored procedures using FromSql or ExecuteSqlCommand methods in EF Core 2:

1.  Result must be an entity type. This means that a stored procedure must return all the columns of the corresponding table of an entity.
2.  Result cannot contain related data. This means that a stored procedure cannot perform JOINs to formulate the result.
3.  Insert, Update and Delete procedures cannot be mapped with the entity, so the `SaveChanges` method cannot call stored procedures for CUD operations.

Let's create our stored procedure in MS SQL Server before we execute it in EF Core.

If you follow the database-first approach, then execute the following script in your local SQL Server database:

```
USE [SchoolDB]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[GetStudents]
            @FirstName varchar(50)
        AS
        BEGIN
            SET NOCOUNT ON;
            select * from Students where FirstName like @FirstName +'%'
        END
GO
```

If you are following the code-first approach, then follow the steps below:

1\. Add an empty migration by executing the following command in NPM (NuGet Package Manager):

`PM> Add-migration sp-GetStudents`

2\. Write the following code in the Up method of the empty migration class in `<DateTime>_sp-GetStudents.cs`:

```
public partial class spGetStudents : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        var sp = @"CREATE PROCEDURE [dbo].[GetStudents]
                    @FirstName varchar(50)
                AS
                BEGIN
                    SET NOCOUNT ON;
                    select * from Students where FirstName like @FirstName +'%'
                END";

        migrationBuilder.Sql(sp);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {

    }
}
```

3\. Now, create the above stored procedure in the database by executing the following command in NPM:

`PM> Update-database`

This will create the `GetStudents` stored procedure in the SQL Server database.

## Execute Stored Procedures using FromSql

As mentioned in the previous chapter, the `FromSql` method of `DbSet` can be used to execute the raw SQL queries to the underlying database. In the same way, it can be used to execute the stored procedure which returns entity data, but with some limitations.

In the database, we can execute the `GetStudents` stored procedure with an INPUT parameter value as shown below:

```
GetStudents "Bill"
-- or
exec GetStudents "Bill"
```

You can execute a stored procedure using the `FromSql` method in EF Core in the same way as above, as shown below.

```
var context = new SchoolContext(); 

var students = context.Students.FromSql("GetStudents 'Bill'").ToList();
```

You can also pass a parameter value using C# string interpolation syntax, as shown below.

```
var name = "Bill";

var context = new SchoolContext(); 
var students = context.Students
                      .FromSql($"GetStudents {name}")
                      .ToList();

//or
//var students = context.Students.FromSql($"exec GetStudents {name}").ToList();
```

Use a `SqlParameter` instance to specify the value of `IN` or `OUT` parameters as shown below:

```
var context = new SchoolContext(); 
var param = new SqlParameter("@FirstName", "Bill");
//or
/*var param = new SqlParameter() {
                    ParameterName = "@FirstName",
                    SqlDbType =  System.Data.SqlDbType.VarChar,
                    Direction = System.Data.ParameterDirection.Input,
                    Size = 50,
                    Value = "Bill"
};*/

var students = context.Students.FromSql("GetStudents @FirstName", param).ToList();
```

You can also specify `@p0` for the first parameter, `@p1` for the second, and so on.

```
var context = new SchoolContext(); 

var students = context.Students.FromSql("GetStudents @p0","Bill").ToList();
```

In the above example, `@p0` is used for the first parameter because named parameters are not supported yet in EF Core.

**Note:** All entities in the result will be tracked by the `DbContext` by default. If you execute the same stored procedure with the same parameters multiple times, then it will execute the same SQL statement each time, but it will only track one result set. For example, the following example will execute the `GetStudents` stored procedure three times, but it will cache and track only one copy of the result.

```
var context = new SchoolContext(); 

var list1 = context.Students.FromSql("GetStudents 'Bill'").ToList();
var list2 = context.Students.FromSql("GetStudents 'Bill'").ToList();
var list3 = context.Students.FromSql("GetStudents 'Bill'").ToList();
```

## Execute Stored Procedure using ExecuteSqlCommand()

The `ExecuteSqlCommand()` method is used to execute database commands as a string. It returns an integer for the number of rows that were affected through the specified command.

```
var context = new SchoolContext(); 

var rowsAffected = context.Database.ExecuteSqlCommand("Update Students set FirstName = 'Bill' where StudentId = 1;");
```

In the above example, the update command is passed in the `ExecuteSqlCommand` method. The value of `rowsAffected` will be 1 because only 1 row was affected with the specified update command.

In the same way, we can execute stored procedures for Create, Update and Delete commands. Consider the following stored procedure which inserts a record in the `Students` table in the database:

```
CREATE PROCEDURE CreateStudent
    @FirstName Varchar(50),
    @LastName Varchar(50)
AS
BEGIN
    SET NOCOUNT ON;
    Insert into Students(
           [FirstName]
           ,[LastName]
           )
 Values (@FirstName, @LastName)
END
GO
```

Now, you can execute the above stored procedure as shown below.

```
var context = new SchoolContext(); 

context.Database.ExecuteSqlCommand("CreateStudent @p0, @p1", parameters: new[] { "Bill", "Gates" });
```

In the same way, you can execute stored procedures for Update and Delete commands.

---
Source: [Working with Stored Procedures in Entity Framework Core](https://www.entityframeworktutorial.net/efcore/working-with-stored-procedure-in-ef-core.aspx)