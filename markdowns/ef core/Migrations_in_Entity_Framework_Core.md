# Migrations in Entity Framework Core

Migration is a way to keep the database schema in sync with the EF Core model by preserving data.

[![EF Core Migration](https://www.entityframeworktutorial.net/images/efcore/ef-core-migration.png)](https://www.entityframeworktutorial.net/images/efcore/ef-core-migration.png)

As per the above figure, EF Core API builds the EF Core model from the entity classes, Data Annotations attributes applied on entity classes and Fluent API configurations in the `DbContext` class. EF Core migrations API will create or update the database schema based on the EF Core model. Whenever you change the domain classes, you need to run migration commands to keep the database schema up to date.

EF Core migrations are a set of commands which you can execute in Package Manager Console or PowerShell or in .NET Core CLI (Command Line Interface).

## Adding a Migration

In the [Working with DbContext](https://www.entityframeworktutorial.net/efcore/working-with-dbcontext.aspx) chapter, we used the `context.Database.EnsureCreated()` method to create the database and schema for the first time. Note that it creates a database the first time only. It cannot change the DB schema after that. For development projects, we must use EF Core Migrations API.

To use EF Core Migrations API, we need to install the NuGet package `Microsoft.EntityFrameworkCore.Tools`. We use EF Core 7.0.11, so install the same version of the package.

The following is our .NET 7 console project along with entities and a context (SchoolDbContext) class.

[![ef project 1](https://www.entityframeworktutorial.net/Images/efcore/efproject1.png)](https://www.entityframeworktutorial.net/Images/efcore/efproject1.png)

EF Core Sample Project

The following are `Student` and `Grade` classes.

```
public class Student
{
    public int StudentId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public int GradeId { get; set; }
    public Grade Grade { get; set; }
}
       
public class Grade
{
     public Grade()
     {
         Students = new List<Student>();
     }

    public int GradeId { get; set; }
    public string GradeName { get; set; }

    public IList<Student> Students { get; set; }
}
```

The following is our context class `SchoolDbContext` created in the [Create DbContext](https://www.entityframeworktutorial.net/efcore/entity-framework-core-dbcontext.aspx) chapter.

```
public class SchoolContext : DbContext
{       
    //entities
    public DbSet<Student> Students { get; set; }
    public DbSet<Grade> Grades { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=SchoolDB;Trusted_Connection=True;");
    }
} 
```

EF Core provides migrations commands to create, update, or remove tables and other DB objects based on the entities and configurations. At this point, there is no `SchoolDB` database. So, we need to create the database from the model (entities and configurations) by adding a migration.

You can execute migration commands using Package Manager Console, PowerShell or [.NET Core CLI tools](https://learn.microsoft.com/en-us/ef/core/cli/dotnet) as per your choice. Microsoft recommends .NET Core CLI tools because they run on all platforms. Since we are using Visual Studio, we will use Package Manager Console commands (PMC and PowerShell commands are the same).

In Visual Studio, open NuGet Package Manager Console from Tools -> NuGet Package Manager -> Package Manager Console and enter the following command:

Package Manager Console/PowerShell

add-migration InitialSchoolDB

Make sure that Default Project points to where your context and entities are, and then execute the command, as shown below.

[![migration 1](https://www.entityframeworktutorial.net/images/efcore/migration1.png)](https://www.entityframeworktutorial.net/images/efcore/migration1.png)

If you use .NET Core CLI, then enter the following command.

.NET Core CLI

dotnet ef migrations add InitialSchoolDB

This will create a new folder named **Migrations** in the project and create the ModelSnapshot files, as shown below.

[![migration 2](https://www.entityframeworktutorial.net/images/efcore/migration2.png)](https://www.entityframeworktutorial.net/images/efcore/migration2.png)

The `Add-Migration` command does not create the database. It just creates two snapshot files in the Migrations folder.

1.  **<timestamp>\_<Migration Name>.cs:** The main migration file which includes migration operations in the `Up()` and `Down()` methods. The `Up()` method includes the code for creating DB objects and the `Down()` method includes code for removing DB objects.
2.  **<contextclassname>ModelSnapshot.cs:** A snapshot of your current model. This is used to determine what changed when creating the next migration.

Now, to create a database, use the `update-database` command in the Package Manager Console, as shown below.

Package Manager Console/PowerShell

update-database â€“verbose

The following executes the `update-database` command and creates the database, as shown below. The `-verbose` option shows the logs while creating the database. It creates a database with the name and location specified in the connection string in the `UseSqlServer()` method. It creates a table for each entity, `Student` and `Grade`. It also creates the `_EFMigrationHistory` table that stores the history of migrations applied over time.

[![migration 3](https://www.entityframeworktutorial.net/images/efcore/migration3.png)](https://www.entityframeworktutorial.net/images/efcore/migration3.png)

Use the following command in .NET Core CLI to create a database.

.NET Core CLI

dotnet ef database update

## Apply Migrations for Modified Entities/Configurations

Suppose we add a new entity or modify an existing entity or change any configuration, then we again need to execute the `add-migration` and `update-database` commands to apply changes to the database schema.

For example, let's modify the `Student` entity and add some properties, as shown below.

```
public class Student
{
    public int StudentId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public byte[] Photo { get; set; }
    public decimal Height { get; set; }
    public float Weight { get; set; }

    public int GradeId { get; set; }
    public Grade Grade { get; set; }
}
```

Now, to sync our "SchoolDB" database with these changes, execute the following commands:

Package Manager Console/PowerShell

add-migration "ModifiedStudentEntity"  

This will generate another snapshot in the Migrations folder.

[![migration 5](https://www.entityframeworktutorial.net/images/efcore/migration5.png)](https://www.entityframeworktutorial.net/images/efcore/migration5.png)

Now, to update the database schema, execute the `update-database` command in PMC/PowerShell. This will add the columns in the `Student` table, as shown below.

[![migration 6](https://www.entityframeworktutorial.net/images/efcore/migration6.png)](https://www.entityframeworktutorial.net/images/efcore/migration6.png)

In this way, you can keep adding, modifying or removing entities from EF Core model and sync the database using migrations.

## Reverting Migration

For some reason, if you want to revert the database to any of the previous states then you can do it by using the `update-database <migration-name>` command.

For example, we modified the `Student` entity and added some more properties. But now we want to revert it back to the state of the "InitialSchoolDB" migration. We can do it by using the following command:

Package Manager Console/PowerShell

Update-database "InitialSchoolDB"

.NET Core CLI

dotnet ef database update "InitialSchoolDB".

[![migration 7](https://www.entityframeworktutorial.net/images/efcore/migration7.png)](https://www.entityframeworktutorial.net/images/efcore/migration7.png)

The above command will revert the database based on a migration named `InitialSchoolDB` and remove all the changes applied by the second migration `ModifiedStudentEntity`. This will also remove `ModifiedStudentEntity` entry from the `__EFMigrationsHistory` table in the database.

[![migration 8](https://www.entityframeworktutorial.net/images/efcore/migration8.png)](https://www.entityframeworktutorial.net/images/efcore/migration8.png)

## List All Migrations

Use the following migration command to get the list of all migrations.

Get-Migration

.NET Core CLI

dotnet ef migrations list

The following lists all migrations:

[![migration 11](https://www.entityframeworktutorial.net/images/efcore/migration11.png)](https://www.entityframeworktutorial.net/images/efcore/migration11.png)

## Removing a Migration

Above, we have reverted the second migration named "ModifiedStudentEntity". We can remove the last migration if it is not applied to the database. Let's remove the "ModifiedStudentEntity" file using the following command.

Package Manager Console/PowerShell

remove-migration

.NET Core CLI

dotnet ef migrations remove

[![migration 10](https://www.entityframeworktutorial.net/images/efcore/migration10.png)](https://www.entityframeworktutorial.net/images/efcore/migration10.png)

The above commands will remove the last migration and revert the model snapshot to the previous migration, as shown below. Please note that if a migration is already applied to the database, then it will throw an exception.

[![migration 12](https://www.entityframeworktutorial.net/images/efcore/migration12.png)](https://www.entityframeworktutorial.net/images/efcore/migration12.png)

---
Source: [Migrations in Entity Framework Core](https://www.entityframeworktutorial.net/efcore/entity-framework-core-migration.aspx)