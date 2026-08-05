# Install Entity Framework Core

Here we will create domain classes for our demo application and will see the difference between domain classes and entity classes of Entity Framework Core.

After installing the NuGet package for EF Core 6/7, itâ€™s time to create domain classes. We are building a school application so here we will create two classes `Student` and `Grade` for the school domain.

Right-click on the project in Solution Explorer and click Add -> Class. Create two classes `Student` and `Grade`, as below.

[![domain class](https://www.entityframeworktutorial.net/Images/efcore/domainclasses.png)](https://www.entityframeworktutorial.net/Images/efcore/domainclasses.png)

Domain Classes

Write the following code in each class accordingly.

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

The above `Student` class includes student-related properties such as `StudentId`, `FirstName`, and `LastName`. It also includes the `GradeId` and `Grade` properties which refer to the `GradeId` property of the `Grade` class. This is because each student belongs to any one grade and a grade can contain multiple students.

These are our two simple domain classes, but they have not become entities of Entity Framework yet. The terms "entities" and "domain classes" are often used interchangeably, but they are slightly different concepts.

Entities in the Entity Framework are mapped to the corresponding tables in the database. Entity Framework keeps track of these entities so that it can perform database CRUD (Create, Read, Update, Delete) operations automatically based on their objectâ€™s status.

Domain classes include the core functionality and business rules of the application, ensuring that the business logic is properly implemented.

The `Student` and `Grade` classes are domain classes. To treat them as entities, we need to include them as `DbSet<T>` properties in the `DbContext` class of Entity Framework so that EF engine can track their status.

Let's create a `DbContext` class and specify these domain classes as entities in the next chapter.

---
Source: [Create Entities in Entity Framework Core](https://www.entityframeworktutorial.net/efcore/create-entities.aspx)