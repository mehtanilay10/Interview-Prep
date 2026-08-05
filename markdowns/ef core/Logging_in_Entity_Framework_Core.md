# Logging in Entity Framework Core

We often need to log the SQL and change tracking information for debugging purposes in EF Core.

EF Core logging automatically integrates with the logging mechanisms of .NET Core.Â So, learn about [fundamentals of logging in .NET Core](https://www.tutorialsteacher.com/core/fundamentals-of-logging-in-dotnet-core) before implementing logging in EF Core.

Entity Framework Core integrates with the .NET Core logging to log SQL and change tracking information to the various output targets. First, install the NuGet package for logging provider of your choice and then tie up the `DbContext` to `ILoggerFactory`.

Let's install the logging provider's NuGet package. Here, we will display the logs on the console, so install the Microsoft.Extensions.Logging.Console NuGet package from the NuGet Package Manager or execute the following command in the Package Manager Console:

PM> Install-Package Microsoft.Extensions.Logging.Console

The following figure illustrates how the `DbContext` works with the logging API and console logging provider.

[![logging in ef core](https://www.entityframeworktutorial.net/Images/efcore/logging-in-efcore.png)](https://www.entityframeworktutorial.net/Images/efcore/logging-in-efcore.png)

After installing the console logger provider, you need to create a static/singleton instance of the `LoggerFactory` and then tie it to a `DbContext`, as shown below.

```
public class SchoolContext : DbContext
{
    //static LoggerFactory object
    public static readonly ILoggerFactory loggerFactory = new LoggerFactory(new[] {
              new ConsoleLoggerProvider((_, __) => true, true)
        });

    //or
    // public static readonly ILoggerFactory loggerFactory  = new LoggerFactory().AddConsole((_,___) => true);
    
    public SchoolContext():base()
    {

    }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseLoggerFactory(loggerFactory)  //tie-up DbContext with LoggerFactory object
            .EnableSensitiveDataLogging()  
            .UseSqlServer(@"Server=.\SQLEXPRESS;Database=SchoolDB;Trusted_Connection=True;");
    }
        
    public DbSet<Student> Students { get; set; }
}
```

In the above example, we have created an object of the `LoggerFactory` class and assigned it to the `ILoggerFactory` type static variable. Then, we passed this object in the `optionsBuilder.UseLoggerFactory()` method in the `OnConfiguring()` method. This will enable the `DbContext` to share the information with the `loggerFactory` object, which in turn will display all the logging information on the console.

By default, EF Core will not log sensitive data, such as filter parameter values.Â So, call the `EnableSensitiveDataLogging()` to log sensitive data.

The EF team recommends using the same logger factory object with all the instances of the `DbContext` class during the application lifetime. Otherwise, it may result in a memory leak and poor performance. You can also create a separate factory class that provides you the singleton object of the `LoggerFactory` class to use with the `DbContext`.

Let's understand the above example in detail.

First, we created an object of the `LoggerFactory` class and assigned it to `ILoggerFactory` type static variable, as shown below.

```
public static readonly ILoggerFactory loggerFactory = new LoggerFactory(
    new[] { new ConsoleLoggerProvider ((_, __) => true, true) }
);
```

The `LoggerFactory` can contain one or more logging providers which can be used to log to multiple media concurrently. The constructor of the `LoggerFactory` accepts an array of different logger provider objects as `new[] { }`. We want to display logs on the console, so create an object of the console logger provider `ConsoleLoggerProvider`.

There are four constructors of the `ConsoleLoggerProvider`. Use the one that allows lambda expression (Func<>) for log filtration and includeScope Boolean, as shown below.

```
new ConsoleLoggerProvider((_, __) => true, true)
```

Here, we don't want to filter any information so the lambda expression would always return true `(_, __) => true`.

After creating an object of `ILoggerFactory`, tied-up `DbContext` with the `ILoggerFactory` in the `OnConfiguring()` method using the `DbContextOptionsBuilder`.

```
optionsBuilder.UseLoggerFactory(loggerFactory)
```

Thus, we tied-up the `DbContext` with the `LoggerFactory` which includes the console logger provider. Now, we can see all the logs on the console whenever an instance of the `DbContext` executes any action.

Consider the following example.

```
using (var context = new SchoolContext())
{
    var std = new Student(){ StudentName = "Steve" };
    context.Add(std);
                
    context.SaveChanges();
    Console.ReadLine();
}
```

The above example will display the following logs on the console:

dbug: Microsoft.EntityFrameworkCore.Infrastructure\[100401\]  
An 'IServiceProvider' was created for internal use by Entity Framework.  
info: Microsoft.EntityFrameworkCore.Infrastructure\[100403\]  
Entity Framework Core 2.0.0-rtm-26452 initialized 'SchoolContext' using pr  
ovider 'Microsoft.EntityFrameworkCore.SqlServer' with options: SensitiveDataLoggingEnabled  
dbug: Microsoft.EntityFrameworkCore.Database.Connection\[200000\]  
Opening connection to database 'SchoolDB' on server '.\\SQLEXPRESS'.

dbug: Microsoft.EntityFrameworkCore.Database.Connection\[200001\]  
Opened connection to database 'SchoolDB' on server '.\\SQLEXPRESS'.  
dbug: Microsoft.EntityFrameworkCore.Database.Transaction\[200200\]  
Beginning transaction with isolation level 'ReadCommitted'.  
warn: Microsoft.EntityFrameworkCore.Database.Command\[100400\]  
Sensitive data logging is enabled. Log entries and exception messages may  
include sensitive application data, this mode should only be enabled during development.  
dbug: Microsoft.EntityFrameworkCore.Database.Command\[200100\]  
Executing DbCommand \[Parameters=\[@p0='' (DbType = DateTime2), @p1='' (DbTy  
pe = Int32), @p2='0', @p3='' (Size = 8000) (DbType = Binary), @p4='Steve' (Size = 4000), @p5='0'\], CommandType='Text', CommandTimeout='30'\]  
SET NOCOUNT ON;  
INSERT INTO \[Students\] (\[DateOfBirth\], \[GradeId\], \[Height\], \[Photo\], \[Stud  
entName\], \[Weight\])  
VALUES (@p0, @p1, @p2, @p3, @p4, @p5);  
SELECT \[StudentID\]  
FROM \[Students\]  
WHERE @@ROWCOUNT = 1 AND \[StudentID\] = scope\_identity();  
info: Microsoft.EntityFrameworkCore.Database.Command\[200101\]  
Executed DbCommand (68ms) \[Parameters=\[@p0='' (DbType = DateTime2), @p1=''  
(DbType = Int32), @p2='0', @p3='' (Size = 8000) (DbType = Binary), @p4='Steve'  
(Size = 4000), @p5='0'\], CommandType='Text', CommandTimeout='30'\]  
SET NOCOUNT ON;  
INSERT INTO \[Students\] (\[DateOfBirth\], \[GradeId\], \[Height\], \[Photo\], \[Stud  
entName\], \[Weight\])  
VALUES (@p0, @p1, @p2, @p3, @p4, @p5);  
SELECT \[StudentID\]  
FROM \[Students\]  
WHERE @@ROWCOUNT = 1 AND \[StudentID\] = scope\_identity();  
dbug: Microsoft.EntityFrameworkCore.Database.Command\[200300\]  
A data reader was disposed.  
dbug: Microsoft.EntityFrameworkCore.Database.Transaction\[200202\]  
Committing transaction.  
dbug: Microsoft.EntityFrameworkCore.Database.Connection\[200002\]  
Closing connection to database 'SchoolDB' on server '.\\SQLEXPRESS'.

dbug: Microsoft.EntityFrameworkCore.Database.Connection\[200003\]  
Closed connection to database 'SchoolDB' on server '.\\SQLEXPRESS'.  
dbug: Microsoft.EntityFrameworkCore.Database.Transaction\[200204\]  
Disposing transaction.

As you can see, it logs all the information.

## Filter Logs

In the above example, the `DbContext` logged all the information while saving an entity. Sometimes you don't want to log all the information and filter some unwanted logs. In EF Core, you can filter logs by specifying the logger category and log level.

### Logger Categories

EF Core 2.x includes the `DbLoggerCategory` class to get an Entity Framework Core logger categories using its **Name** property. The following table lists different logger categories.

| Logger Category Class | Description |
| --- | --- |
| Database.Command | Logger category for command execution, including SQL sent to database. |
| Database.Connection | Logger category for db connection operations. |
| Database.Transaction | Logger category for db transactions. |
| Infrastructure | Logger category for miscellaneous messages for the EF infrastructure. |
| Migration | Logger category for migrations. |
| Model | Logger category for model building and metadata. |
| Query | Logger category for queries (excluding generated SQL). |
| Scaffolding | Logger category for scaffolding and reverse engineering. |
| Update | Logger category for DbContext.SaveChanges() messages. |

### Log SQL Queries

To log only SQL queries, specify the `DbLoggerCategory.Database.Command` category and `LogLevel.Information` in the lambda expression in the constructor of the `ConsoleLoggerProvider`, as shown below.

```
public static readonly ILoggerFactory consoleLoggerFactory  
            = new LoggerFactory(new[] {
                  new ConsoleLoggerProvider((category, level) =>
                    category == DbLoggerCategory.Database.Command.Name &&
                    level == LogLevel.Information, true)
                });
```

Or, just call the `AddConsole()` method on LoggerFactory to log SQL queries, by default.

```
public static readonly ILoggerFactory consoleLoggerFactory
         = new LoggerFactory().AddConsole();
```

Now, this will log the following query information while saving an entity using the `DbContext`.

info: Microsoft.EntityFrameworkCore.Database.Command\[200101\]  
Executed DbCommand (73ms) \[Parameters=\[@p0='' (DbType = DateTime2), @p1=''  
(DbType = Int32), @p2='0', @p3='' (Size = 8000) (DbType = Binary), @p4='Steve'  
(Size = 4000), @p5='0'\], CommandType='Text', CommandTimeout='30'\]  
SET NOCOUNT ON;  
INSERT INTO \[Students\] (\[DateOfBirth\], \[GradeId\], \[Height\], \[Photo\], \[Stud  
entName\], \[Weight\])  
VALUES (@p0, @p1, @p2, @p3, @p4, @p5);  
SELECT \[StudentID\]  
FROM \[Students\]  
WHERE @@ROWCOUNT = 1 AND \[StudentID\] = scope\_identity();

---
Source: [Logging in Entity Framework Core](https://www.entityframeworktutorial.net/efcore/logging-in-entityframework-core.aspx)