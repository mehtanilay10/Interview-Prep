# Working with DbContext in EF Core

We created our entities and DbContext class in the previous chapters. Here you will learn the overview of working with the DbContext to create a database and interact with it using EF Core 7 on the .NET 7 platform.

The following is our .NET 7 console project along with entities and a context (SchoolDbContext) class.

[![](https://www.entityframeworktutorial.net/Images/efcore/efproject1.png)](https://www.entityframeworktutorial.net/Images/efcore/efproject1.png)

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
        optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=SchoolDb;Trusted_Connection=True;");
    }
} 
```

The above context class includes two `DbSet<TEntity>` properties, for `Student` and `Grade`, types which will be mapped to the `Students` and `Grades` tables in the underlying database. In the `OnConfiguring()` method, an instance of `DbContextOptionsBuilder` is used to specify a database connection string.

## Database Schema Creation in EF Core

After creating the context and entity classes, it's time to start interacting with our underlying database using the context class. However, before we save or retrieve data from the database, we first need to ensure that the database schema is created as per our entities and configurations.

There are two ways using which you can create a database and schema:

1.  Using the `EnsureCreated()` method
2.  Using Migration API

Creating a database using the `EnsureCreated()` method is commonly used followed by `EnsureDeleted()` method when testing or prototyping using Entity Framework Core framework.

Migrations API allows you to create an initial database schema based on your entities and then as and when you add/delete/modify your entities and config, it will sync to the corresponding schema changes to your database so that it remains compatible with your EF Core model (entities and other configuration).

Let's use the `EnsureCreated()` method to create a database and use the context class to save student and grade data in the database.

```
using EFCoreTutorialsConsole;

using (var context = new SchoolDbContext())
{
    //creates db if not exists 
    context.Database.EnsureCreated();

    //create entity objects
    var grd1 = new Grade() { GradeName = "1st Grade" };
    var std1 = new Student() {  FirstName = "Yash", LastName = "Malhotra", Grade = grd1};

    //add entity to the context
    context.Students.Add(std1);

    //save data to the database tables
    context.SaveChanges();

    //retrieve all the students from the database
    foreach (var s in context.Students) {
        Console.WriteLine($"First Name: {s.FirstName}, Last Name: {s.LastName}");
    }
}
```

Let's understand the above example code:

-   The `using(){ .. }` statement creates a scope for a `SchoolDbContext` instance called context. It ensures that the context is properly disposed of when it's no longer needed.

-   The `context.Database.EnsureCreated();` statement checks if the database exists. If it doesn't exist, it creates the database based on the entity classes defined as `DbSet<TEntity>` properties in the `SchoolDbContext` class. This is a simple way to create the database schema based on your entity model.
-   Next, two entity objects are created: `grd1` of type `Grade` and `std1` of type `Student`. These objects are entity objects that represent records in the database.

-   The `std1` student entity is added to the `Students` property of the context. It also assigns `grd1` to its `Grade` property. This prepares the `Student` entity to be saved to the database along with the `Grade` entity.
-   The `context.SaveChanges();` is called to persist the changes to the database. It effectively inserts a new student record into the "Students" table and a new grade record into the "Grades" table.

-   After saving changes, a `foreach` loop retrieves all the students from the "Students" table in the database using the `context.Students` property. It then prints the first name and last name of each student to the console.

Now, run the project by pressing Ctrl + F5. It will display the following output.

[![Console Output EF Core](https://www.entityframeworktutorial.net/Images/efcore/ssdb6.png)](https://www.entityframeworktutorial.net/Images/efcore/ssdb6.png)

As you can see, it displays the output. EF Core API has created the "SchoolDB" database and inserted records in the "Students" and "Grades" tables. You can see that in the SQL Server Explorer in your visual studio from View -> SQL Server Object Explorer. If it is not connected to your local db then click on the `+` sign to connect to your db, as shown below.

[![Console Output EF Core](https://www.entityframeworktutorial.net/Images/efcore/ssdb1.png)](https://www.entityframeworktutorial.net/Images/efcore/ssdb1.png)

In the popup, select "MSSQLLocalDB" and click on the "Connect" button, as shown below.

[![Console Output EF Core](https://www.entityframeworktutorial.net/Images/efcore/ssdb2.png)](https://www.entityframeworktutorial.net/Images/efcore/ssdb2.png)

Now, you can see the database, as shown below.

[![Console Output EF Core](https://www.entityframeworktutorial.net/Images/efcore/ssdb3.png)](https://www.entityframeworktutorial.net/Images/efcore/ssdb3.png)

Expand (localdb) > Database > SchoolDB node in SQL Server Object Explorer. You can also see tables and their columns by expanding it further, as shown below.

[![Console Output EF Core](https://www.entityframeworktutorial.net/Images/efcore/ssdb4.png)](https://www.entityframeworktutorial.net/Images/efcore/ssdb4.png)

To see the records, right-click on the table name and click "View Data". It will display records in Visual Studio as below.

[![Console Output EF Core](https://www.entityframeworktutorial.net/Images/efcore/ssdb5.png)](https://www.entityframeworktutorial.net/Images/efcore/ssdb5.png)

In this way, we have successfully used EF Core API to save and retrieve data to the SQL Server database. Visit [Saving Data](https://www.entityframeworktutorial.net/efcore/saving-data-in-connected-scenario-in-ef-core.aspx) and [Querying](https://www.entityframeworktutorial.net/efcore/querying-in-ef-core.aspx) chapters to learn more about saving and retrieving data in EF Core.

The `EnsureCreated()` method does not modify the schema if the database exists and has any tables. Nothing is done to ensure the database schema is compatible with the Entity Framework model. So it is mainly for testing in a clean DB. Use Migration API for the development.

---
Source: [Working with DbContext in EF Core](https://www.entityframeworktutorial.net/efcore/working-with-dbcontext.aspx)