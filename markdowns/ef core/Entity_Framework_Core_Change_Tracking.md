# Entity Framework Core Change Tracking

Entity Framework Core Change Tracker keeps track of all the loaded entities changes and these changes are applied to the database when SaveChanges method is called.

Entities are tracked on the following conditions :

1.  Returned from a query executed on the database.
2.  Attached to the DbContext by Add, Attach, Update methods.
3.  A new entity connected to an existing tracked entity.

The full codes implemented in this tutorial can be downloaded from my [GitHub repository](https://github.com/yogyogi/Change-Tracking-Entity-Framework-Core).

Page Contents

![](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/Images/up-arrow.jpg)

#### This tutorial is a part of **Entity Framework Core** series.

-   1\. [Introduction to Entity Framework Core](https://www.yogihosting.com/introduction-entity-framework-core/)

-   2\. [Installation of Entity Framework Core](https://www.yogihosting.com/install-entity-framework-core/)
-   3\. [Database-First approach in Entity Framework Core](https://www.yogihosting.com/database-first-approach-entity-framework-core/)

-   4\. [DbContext Class in Entity Framework Core](https://www.yogihosting.com/dbcontext-entity-framework-core/)
-   5\. [Code-First Approach in Entity Framework Core](https://www.yogihosting.com/code-first-entity-framework-core/)

-   6\. [Migrations in Entity Framework Core](https://www.yogihosting.com/migrations-entity-framework-core/)
-   7\. [Insert Records in Entity Framework Core](https://www.yogihosting.com/insert-records-entity-framework-core/)

-   8\. [Read Records in Entity Framework Core](https://www.yogihosting.com/read-records-entity-framework-core/)
-   9\. [Update Records in Entity Framework Core](https://www.yogihosting.com/update-records-entity-framework-core/)

-   10\. [Delete Records in Entity Framework Core](https://www.yogihosting.com/delete-records-entity-framework-core/)
-   11\. [Conventions in Entity Framework Core](https://www.yogihosting.com/conventions-entity-framework-core/)

-   12\. [Configurations in Entity Framework Core](https://www.yogihosting.com/configurations-entity-framework-core/)
-   13\. [Fluent API in Entity Framework Core](https://www.yogihosting.com/fluent-api-entity-framework-core/)

-   14\. [Configure One-to-Many relationship using Fluent API in Entity Framework Core](https://www.yogihosting.com/fluent-api-one-to-many-relationship-entity-framework-core/)
-   15\. [Configure One-to-One relationship using Fluent API in Entity Framework Core](https://www.yogihosting.com/fluent-api-one-to-one-relationship-entity-framework-core/)

-   16\. [Configure Many-to-Many relationship using Fluent API in Entity Framework Core](https://www.yogihosting.com/fluent-api-many-to-many-relationship-entity-framework-core/)
-   17\. [Execute Raw SQL Queries using FromSqlRaw() method in Entity Framework Core](https://www.yogihosting.com/raw-sql-queries-entity-framework-core/)

-   18\. [Execute SQL Stored Procedures using FromSqlRaw() & ExecuteSqlRawAsync() methods in Entity Framework Core](https://www.yogihosting.com/stored-procedures-entity-framework-core/)
-   19\. [Xaero – Entity Framework Core Advanced Project](https://www.yogihosting.com/xaero-project-entity-framework-core/)

-   20\. [Value Converters and Comparers in Entity Framework Core](https://www.yogihosting.com/value-converters-comparers-entity-framework-core/)
-   21\. [Owned Entity Types in Entity Framework Core](https://www.yogihosting.com/owned-entity-entity-framework-core/)

-   22\. [Entity Framework Core Optimization Techniques](https://www.yogihosting.com/optimizing-techniques-entity-framework-core/)
-   23\. [Entity Framework Core Complex Queries](https://www.yogihosting.com/complex-queries-entity-framework-core/)

-   24\. [Entity Framework Core Concurrency Conflicts](https://www.yogihosting.com/concurrency-conflicts-entity-framework-core/)
-   25\. *Entity Framework Core Change Tracking*

-   26\. [Entity Framework Core Logging in details](https://www.yogihosting.com/entity-framework-core-logging/)

An Entity is stopped tracking when :

1.  The entity is detached.
2.  DbContext is disposed.
3.  Change Tracker is cleared.

An entity can have 5 following states which are described by the EntityState enum:

1.  Detached – those not being tracked.
2.  Added – those added but not inserted in the database. Calling the SaveChanges method will insert them to the database.
3.  Unchanged – those not changed since the time they were queried from the database.
4.  Modified – those that are changed since they were queried from the database. Calling the SaveChanges method will update them on the database. The Modified state means that at least one property value of the entity has been marked as modified.
5.  Deleted – those that need to be deleted from the database. Calling the SaveChanges method will delete them to the database.

## Understanding Change Tracking during Read and Update

We will read an entity along with it’s related entity and then perform some changes to them. Here the same DbContext instance is used to both query for entities and update them by calling SaveChanges. This approach works best because EF Core automatically tracks the state of queried entities and then detects any changes made to these entities when SaveChanges is called.

The entities are given below.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17 | `public` `class` `Department`

`{`

    `public` `int` `Id {` `get``;` `set``; }`

    `public` `string` `Name {` `get``;` `set``; }`

    `public` `IList<Employee> Employees {` `get``; } =` `new` `List<Employee>();`

`}`

`public` `class` `Employee`

`{`

    `public` `int` `Id {` `get``;` `set``; }`

    `public` `string` `Name {` `get``;` `set``; }`

    `public` `string` `Designation {` `get``;` `set``; }`

    `public` `int` `DepartmentId {` `get``;` `set``; }`

    `public` `Department Department {` `get``;` `set``; } =` `null``!;`

`}` |

We query the entity by the name of “Development” along with all it’s “Employees”. We then change the department name to .NET Development and designation of “Junior” employees to “Trainee”. See the below code.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14 | `var` `dept = context.Department.Include(e => e.Employees).First(e => e.Name ==` `"Development"``);`

`dept.Name =` `".NET Development"``;`

`foreach` `(``var` `emp` `in` `dept.Employees.Where(e => e.Designation.Contains(``"Junior"``)))`

`{`

    `emp.Designation = emp.Designation.Replace(``"Junior"``,` `"Trainee"``);`

`}`

`context.ChangeTracker.DetectChanges();`

`Console.WriteLine(context.ChangeTracker.DebugView.LongView);`

`context.SaveChanges();` |

Note that we added the code for Change Tracker Debug View just before the SaveChanges. It offers a great way to see detailed information in the console window of the entities being tracked along with the messages when the change tracker detects state and fixes up relationships of the entities. This code is:

```
context.ChangeTracker.DetectChanges();
Console.WriteLine(context.ChangeTracker.DebugView.LongView);
```

The Department table has only 1 record and is shown below.

| Id | Name |
| --- | --- |
| 1 | Development |

The Employee table has 3 records as shown below.

| Id | Name | Designation | DepartmentId |
| --- | --- | --- | --- |
| 1 | John | Junior | 1 |
| 2 | Rahul | Manager | 1 |
| 3 | Alice | Lead | 1 |

Multiple users trying to update an entity data at the same time can lead to inconsistencies and data corruption. This is handled by [Entity Framework Core Concurrency Conflicts](https://www.yogihosting.com/concurrency-conflicts-entity-framework-core/) methods.

When the SaveChanges method is called to Update the database, the 2 Update commands executes – one for the Department table and other for the Employee table. You can check them on the console window.

```
UPDATE [Department] SET [Name] = @p0
      OUTPUT 1
      WHERE [Id] = @p1;
      
UPDATE [Employee] SET [Designation] = @p2
      OUTPUT 1
      WHERE [Id] = @p3;
```

Also check the output of the Change Tracker Debug View on the console window to find the entities that are tracked and their states. Check the below image:

![Change Tracker Debug View](https://www.yogihosting.com/wp-content/uploads/2025/10/Change-Tracker-Debug-View.png "Change Tracker Debug View")

Notice the messages.

-   The Department.Name property is marked as modified (Name: ‘.NET Development’ Modified Originally ‘Development’), and this results in the Deparment being in the Modified state.

-   The Employee.Designation property of employee 1 is marked as modified (Designation: ‘Trainee’ Modified Originally ‘Junior’), and this results in this employee being in the Modified state.
-   The other property values of employee 1 have not changed and are therefore not marked as modified. This is why these values will not be included in the database update.

-   The other employees 2 and 3 were not modified in any way. This is are it is still in the Unchanged state and not included in the database update.

## Understanding Change Tracking during Insert, Update and Delete

In this example we will see how change tracking works for insert, update and delete functionalities. We will execute the following code.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22 | `var` `dept = context.Department.Include(e => e.Employees).First(e => e.Name ==` `"Development"``);`

`dept.Name =` `".NET Development"``;`

`dept.Employees.Add(`

    `new` `Employee`

    `{`

        `Name =` `"Rock"``,`

        `Designation =` `"VP"``,`

        `DepartmentId = 1`

    `});`

`var` `d = dept.Employees.Single(e => e.Designation ==` `"Lead"``);`

`context.Remove(d);`

`context.ChangeTracker.DetectChanges();`

`Console.WriteLine(context.ChangeTracker.DebugView.LongView);`

`context.SaveChanges();` |

The above code does 3 things – updates the Department name, inserts a new Employee and deletes another Employee. When the SaveChanges method is called the following commands are executed which can be seen on the console window.

```
UPDATE [Department] SET [Name] = @p0
      OUTPUT 1
      WHERE [Id] = @p1;
      
DELETE FROM [Employee]
      OUTPUT 1
      WHERE [Id] = @p2;

INSERT INTO [Employee] ([DepartmentId], [Designation], [Name])
      OUTPUT INSERTED.[Id]
      VALUES (@p3, @p4, @p5);
```

Also check the output of the Change Tracker Debug View on the console window which is shown below.

```
Department {Id: 1} Modified
    Id: 1 PK
    Name: '.NET Development' Modified Originally 'Development'
  Employees: [{Id: 1}, {Id: 2}, {Id: 3}, {Id: -2147482647}]
Employee {Id: -2147482647} Added
    Id: -2147482647 PK Temporary
    DepartmentId: 1 FK
    Designation: 'VP'
    Name: 'Rock'
  Department: {Id: 1}
Employee {Id: 1} Unchanged
    Id: 1 PK
    DepartmentId: 1 FK
    Designation: 'Junior'
    Name: 'John'
  Department: {Id: 1}
Employee {Id: 2} Unchanged
    Id: 2 PK
    DepartmentId: 1 FK
    Designation: 'Manager'
    Name: 'Rahul'
  Department: {Id: 1}
Employee {Id: 3} Deleted
    Id: 3 PK
    DepartmentId: 1 FK
    Designation: 'Lead'
    Name: 'Alice'
  Department: {Id: 1}
```

The messages states.

-   Department 1 is marked as Modified – Name: ‘.NET Development’ Modified Originally ‘Development’.

-   A new employee is added – Name: ‘Rock’.
-   Employee 3 is marked as Deleted – Employee {Id: 3} Deleted.

The 2 tables are updated as shown below.

The Department table.

| Id | Name |
| --- | --- |
| 1 | .NET Development |

The Employee table.

| Id | Name | Designation | DepartmentId |
| --- | --- | --- | --- |
| 1 | John | Trainee | 1 |
| 2 | Rahul | Manager | 1 |
| 4 | Rock | VP | 1 |

## Explicitly Tracking Entities

In this case we will see how change tracker works when entities are attached explicitly to a DbContext for tracking or when re-attaching entities that were queried from a different DbContext.

An example of a disconnected entity is a web server that sends entities to a client. The client make changes on the entities and sends them back to the web server for updation on the database. The entities received by the server are disconnected entities.

### Inserting Entities with EF Core Add method

Inserting a new Entity is done with Add, AddRange, AddAsync, AddRangeAsync methods of EF Core. An entity must be tracked in the Added state to be inserted by SaveChanges. Let us insert a new deparment to the database. Check the below code.

```
context.Add(new Department { Name = "Testing" });

context.ChangeTracker.DetectChanges();
Console.WriteLine(context.ChangeTracker.DebugView.LongView);

context.SaveChanges();

Console.WriteLine(context.ChangeTracker.DebugView.LongView);
```

In the above code we added the change tracker debug view code at 2 places – before and after the SaveChanges method.

The message given by change tracker debug view is given below.

```
Department {Id: -2147482647} Added
    Id: -2147482647 PK Temporary
    Name: 'Testing'
  Employees: []

Department {Id: 2} Unchanged
    Id: 2 PK
    Name: 'Testing'
  Employees: []
```

First message shows that the context is tracking the new entity in the Added state. The second message shows that the entity is tracked in the Unchanged state after SaveChanges completes, since the entity now exists in the database:

Notice in the first message – Id: -2147482647 PK Temporary, this is a temporary key value that has been generated for the entity. This value is used by EF Core until SaveChanges is called, at which point real key values are read back from the database i.e. Id: 2 PK.

We can also insert entity along with it’s related entity using the Add method like shown below.

```
context.Add(
    new Department
    {
        Name = "Testing",
        Employees =
        {
            new Employee
            {
                Name = "Sharapova",
                Designation = "VP",
            }
        }
    });
```

### Attaching Entities with EF Core Attach method

Entities returned from queries are tracked in the Unchanged state, it means the entity has not been modified since it was queried. We know such entities as Disconnected entities. Example – a disconnected entity is returned from a web client in an HTTP request. To start tracking a disconnected entity we us EF Core Attach or AttachRange methods. In the below code we are inserting a department entity along with it’s related employee records using the attach method.

```
context.Attach(
    new Department
    {
        Name = "Testing",
        Employees =
        {
            new Employee
            {
                Name = "Ronaldo",
                Designation = "MD"
            }
        }
    });

context.ChangeTracker.DetectChanges();
Console.WriteLine(context.ChangeTracker.DebugView.LongView);

context.SaveChanges();
```

In this case the change tracker debug view code gave the following messages.

```
Department {Id: -2147482647} Added
    Id: -2147482647 PK Temporary
    Name: 'Testing'
  Employees: [{Id: -2147482647}]
Employee {Id: -2147482647} Added
    Id: -2147482647 PK Temporary
    DepartmentId: -2147482647 FK Temporary
    Designation: 'VP'
    Name: 'Sharapova'
  Department: {Id: -2147482647}
```

The tracker tracks the department entity in the Added state. The new Employee is also marked in the Added state. Once the SaveChanges method is called the new department and the new employee is added to the database.

### Updating Entities with EF Core Update method

The Update and UpdateRange methods of EF Core put the entity in the Modified state so that when SaveChanges method is called the entity is updated on the database.

In the below code the department 2 name is updated to “Testing”.

```
context.Update(new Department { Id = 2, Name = "Testing" });

context.ChangeTracker.DetectChanges();
Console.WriteLine(context.ChangeTracker.DebugView.LongView);

context.SaveChanges();
```

Inspecting the change tracker debug view messages shows that the context is tracking this entity in the Modified state.

```
Department {Id: 2} Modified
    Id: 2 PK
    Name: 'Testing' Modified
  Employees: []
```

We can also update the entity along with it’s related entity as shown in the below code.

```
context.Update(
    new Department
    {
        Id = 1,
        Name = ".NET Development",
        Employees =
        {
            new Employee
            {
                Name = "Rock",
                Designation = "VP",
            },
            new Employee
            {
                Id = 1,
                Name = "Sharapova",
                Designation = "MD",
            }
        }
    });

context.ChangeTracker.DetectChanges();
Console.WriteLine(context.ChangeTracker.DebugView.LongView);

context.SaveChanges();
```

Note that 2 related Employees are provided in the code. The Employee with no key value is detected as new and set to the Added state. The other entities are marked as Modified.

The change tracker debug view messages are given below.

```
Department {Id: 1} Modified
    Id: 1 PK
    Name: '.NET Development' Modified
  Employees: [{Id: -2147482647}, {Id: 1}]

Employee {Id: -2147482647} Added
    Id: -2147482647 PK Temporary
    DepartmentId: 1 FK
    Designation: 'VP'
    Name: 'Rock'
  Department: {Id: 1}

Employee {Id: 1} Modified
    Id: 1 PK
    DepartmentId: 1 FK Modified Originally 0
    Designation: 'MD' Modified
    Name: 'Sharapova' Modified
  Department: {Id: 1}
```

The SaveChanges method causes updates for all the existing entities, while the new entity is inserted.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14 | `Executed DbCommand (54ms) [Parameters=[@p1=``'?'` `(DbType = Int32), @p0=``'?'` `(Size = 4000), @p5=``'?'` `(DbType = Int32), @p2=``'?'` `(DbType = Int32), @p3=``'?'` `(Size = 4000), @p4=``'?'` `(Size = 4000), @p6=``'?'` `(DbType = Int32), @p7=``'?'` `(Size = 4000), @p8=``'?'` `(Size = 4000)], CommandType=``'Text'``, CommandTimeout=``'30'``]`

      `SET NOCOUNT ON;`

`UPDATE [Department] SET [Name] = @p0`

      `OUTPUT 1`

      `WHERE [Id] = @p1;`

`UPDATE [Employee] SET [DepartmentId] = @p2, [Designation] = @p3, [Name] = @p4`

      `OUTPUT 1`

      `WHERE [Id] = @p5;`

`INSERT INTO [Employee] ([DepartmentId], [Designation], [Name])`

      `OUTPUT INSERTED.[Id]`

      `VALUES (@p6, @p7, @p8);` |

### Deleting Entities with EF Core Remove method

The EF Core Remove and RemoveRange methods deletes the Entity from the database. These method make the Change Tracker marks the entity to be in Deleted state.

In the below code we are deleting Employee 1.

```
context.Remove(
    new Employee { Id = 1 });

context.ChangeTracker.DetectChanges();
Console.WriteLine(context.ChangeTracker.DebugView.LongView);

context.SaveChanges();
```

Inspecting the change tracker debug view following this call shows that the context is tracking the Employee entity in the “Deleted” state:

```
Employee {Id: 1} Deleted
    Id: 1 PK
    DepartmentId: 0 FK
    Designation: <null>
    Name: <null>
  Department: <null>
```

EF Core will execute the following SQL Command to delete this entity when SaveChanges method is called. You can see this command in the console window.

```
DELETE FROM [Employee]
      OUTPUT 1
      WHERE [Id] = @p0;
```

Deleting dependent / child entities

In the below code we first load Parent and it’s related entities i.e. Department 1 with it’s employees. We then marked it’s first employee to be deleted.

| 1

2

3

4

5

6

7

8 | `var` `dept = context.Department.Include(e => e.Employees).First(e => e.Name ==` `"Development"``);`

`context.Remove(dept.Employees[0]);`

`context.ChangeTracker.DetectChanges();`

`Console.WriteLine(context.ChangeTracker.DebugView.LongView);`

`context.SaveChanges();` |

All entities are marked as “Unchanged”, except the Employee 1 which is marked as “Deleted” since the Remove method was called on it.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22 | `Department {Id: 1} Unchanged`

    `Id: 1 PK`

    `Name:` `'Development'`

  `Employees: [{Id: 1}, {Id: 2}, {Id: 3}]`

`Employee {Id: 1} Deleted`

    `Id: 1 PK`

    `DepartmentId: 1 FK`

    `Designation:` `'Trainee'`

    `Name:` `'John'`

  `Department: {Id: 1}`

`Employee {Id: 2} Unchanged`

    `Id: 2 PK`

    `DepartmentId: 1 FK`

    `Designation:` `'Manager'`

    `Name:` `'Rahul'`

  `Department: {Id: 1}`

`Employee {Id: 3} Unchanged`

    `Id: 3 PK`

    `DepartmentId: 1 FK`

    `Designation:` `'Lead'`

    `Name:` `'Alice'`

  `Department: {Id: 1}` |

After SaveChanges completes, the deleted entity is detached from the DbContext since it no longer exists in the database. Other entities remain in the Unchanged state.

```
Department {Id: 1} Unchanged
    Id: 1 PK
    Name: 'Development'
  Employees: [{Id: 2}, {Id: 3}]
Employee {Id: 2} Unchanged
    Id: 2 PK
    DepartmentId: 1 FK
    Designation: 'Manager'
    Name: 'Rahul'
  Department: {Id: 1}
Employee {Id: 3} Unchanged
    Id: 3 PK
    DepartmentId: 1 FK
    Designation: 'Lead'
    Name: 'Alice'
  Department: {Id: 1}
```

Deleting principal / parent entities

In the preceding examples we were deleting a dependent / child entity which is Employee. This is relatively straightforward since removal of a dependent/child entity does not have any impact on other entities. Now we will be deleting a principal / parent entity which is Department. Deleting principal entity leave a foreign key value on the child referencing a primary key value on the principla no longer exists. This is an invalid model state and results in a referential constraint error in most databases.

This invalid model state can be handled in two ways:

1.  Setting FK values to null. This means the dependents are no longer related to any principal. This is the case for optional relationships where the foreign key can be a null. Note that setting the FK to null is not valid for required relationships, where the foreign key is typically non-nullable.
2.  Deleting the dependents. This is the default for required relationships, and is also valid for optional relationships.

Required Relationship

Here EF Core will delete the Child entities when the Parent is deleted. See the below code where we are deleting a Department.

```
var dept = context.Department.Include(e => e.Employees).First(e => e.Name == "Development");

context.Remove(dept);

context.ChangeTracker.DetectChanges();
Console.WriteLine(context.ChangeTracker.DebugView.LongView);

context.SaveChanges();
```

The change tracker debug view messages shows all the Employees of the department are also marked as Deleted.

```
Department {Id: 1} Deleted
    Id: 1 PK
    Name: 'Development'
  Employees: [{Id: 1}, {Id: 2}, {Id: 3}]
Employee {Id: 1} Deleted
    Id: 1 PK
    DepartmentId: 1 FK
    Designation: 'Trainee'
    Name: 'John'
  Department: {Id: 1}
Employee {Id: 2} Deleted
    Id: 2 PK
    DepartmentId: 1 FK
    Designation: 'Manager'
    Name: 'Rahul'
  Department: {Id: 1}
Employee {Id: 3} Deleted
    Id: 3 PK
    DepartmentId: 1 FK
    Designation: 'Lead'
    Name: 'Alice'
  Department: {Id: 1}
```

In this case is that all related Employees have also been marked as Deleted. Calling SaveChanges causes the Department and all related Employees to be deleted from the database. Check the console window for the delete sql commands.

```
DELETE FROM [Employee]
      OUTPUT 1
      WHERE [Id] = @p0;
      
DELETE FROM [Employee]
      OUTPUT 1
      WHERE [Id] = @p1;

DELETE FROM [Employee]
      OUTPUT 1
      WHERE [Id] = @p2;

DELETE FROM [Department]
      OUTPUT 1
      WHERE [Id] = @p3;
```

Optional Relationship

In this case the the child entities foreign key is set to Null.

The change tracker debug view messages shows FK key for all the Employees of the department are set as Null.

```
Department {Id: 1} Deleted
    Id: 1 PK
    Name: 'Development'
  Employees: [{Id: 1}, {Id: 2}, {Id: 3}]
Employee {Id: 1} Unchanged 
    Id: 1 PK
    DepartmentId: <null> FK
    Designation: 'Trainee'
    Name: 'John'
  Department: {Id: 1}
Employee {Id: 2} Unchanged 
    Id: 2 PK
    DepartmentId: <null> FK
    Designation: 'Manager'
    Name: 'Rahul'
  Department: {Id: 1}
Employee {Id: 3} Unchanged 
    Id: 3 PK
    DepartmentId: <null> FK
    Designation: 'Lead'
    Name: 'Alice'
  Department: {Id: 1}
```

## Changing Navigations

In this section we will understand how Entity Framework Core Change Tracking works when their is a relationship between 2 entities i.e. Parent Entity & Child (dependent) Entity. We will also understand how change tracker works when relationship between the 2 entities are changed.

We have a Department Entity which is the parent while Employee Entity is the child (dependent). There is a One – To – Many relationship between these two, for this their is a collection navigation property defined on the parent and reference navigation property with a foreign key defined on the child.

```
public class Department
{
    public int Id { get; set; }
    public string Name { get; set; }
 
    public IList<Employee> Employees { get; } = new List<Employee>(); // Collection navigation 
}
 
public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Designation { get; set; }
 
    public int DepartmentId { get; set; } // Foreign key 
    public Department Department { get; set; } = null!; // Reference navigation 
}
```

The Department table has 2 records.

| Id | Name |
| --- | --- |
| 1 | Development |
| 2 | Testing |

The Employee table has 3 records as shown below.

| Id | Name | Designation | DepartmentId |
| --- | --- | --- | --- |
| 1 | John | Junior | 1 |
| 2 | Rahul | Manager | 1 |
| 3 | Alice | Lead | 1 |

Relationships can be changed by any of the 3 given ways:

1.  Changing from Collection Navigations
2.  Changing Reference Navigations
3.  Changing relationships using Foreign Key Values

### Changing from Collection Navigations

In the below code we are changing the relationship of Employee “Rahul’s” department from Development to Testing.

| 1

2

3

4

5

6

7

8

9

10

11

12 | `var` `dev =` `await` `context.Department.Include(e => e.Employees).SingleAsync(e => e.Name ==` `"Development"``);`

`var` `tes =` `await` `context.Department.Include(e => e.Employees).SingleAsync(e => e.Name ==` `"Testing"``);`

`Console.WriteLine(context.ChangeTracker.DebugView.LongView);`

`var` `post = dev.Employees.Single(e => e.Name.StartsWith(``"Rahul"``));`

`tes.Employees.Add(post);`

`context.ChangeTracker.DetectChanges();`

`Console.WriteLine(context.ChangeTracker.DebugView.LongView);`

`await` `context.SaveChangesAsync();` |

The Change Tracker Debug View initial messages are:

```
Department {Id: 1} Unchanged
    Id: 1 PK
    Name: 'Development'
  Employees: [{Id: 1}, {Id: 2}, {Id: 3}]

Department {Id: 2} Unchanged
    Id: 2 PK
    Name: 'Testing'
  Employees: []

Employee {Id: 1} Unchanged
    Id: 1 PK
    DepartmentId: 1 FK
    Designation: 'Junior'
    Name: 'John'
  Department: {Id: 1}

Employee {Id: 2} Unchanged
    Id: 2 PK
    DepartmentId: 1 FK
    Designation: 'Manager'
    Name: 'Rahul'
  Department: {Id: 1}

Employee {Id: 3} Unchanged
    Id: 3 PK
    DepartmentId: 1 FK
    Designation: 'Lead'
    Name: 'Alice'
  Department: {Id: 1}
```

The Department.Employees navigation on the Development department has three Employees (Employees: \[{Id: 1}, {Id: 2}, {Id: 3}\]). Likewise, the Department.Employees navigation on the Testing department has no Employees post (Employees: \[\]).

The Change Tracker Debug View messages after the employee department is changes are given below.

```
Department {Id: 1} Unchanged
    Id: 1 PK
    Name: 'Development'
  Employees: [{Id: 1}, {Id: 3}]

Department {Id: 2} Unchanged
    Id: 2 PK
    Name: 'Testing'
  Employees: [{Id: 2}]

Employee {Id: 1} Unchanged
    Id: 1 PK
    DepartmentId: 1 FK
    Designation: 'Junior'
    Name: 'John'
  Department: {Id: 1}

Employee {Id: 2} Modified
    Id: 2 PK
    DepartmentId: 2 FK Modified Originally 1
    Designation: 'Manager'
    Name: 'Rahul'
  Department: {Id: 2}

Employee {Id: 3} Unchanged
    Id: 3 PK
    DepartmentId: 1 FK
    Designation: 'Lead'
    Name: 'Alice'
  Department: {Id: 1}
```

Here notice now we have only 2 employees – Employees: \[{Id: 1}, {Id: 3}\] for the Development department. The Testing department now has the 2nd Employee – Employees: \[{Id: 2}\].

Also, the Employee.DepartmentId foreign key value has been updated (DepartmentId: 1 FK) to match the primary key value of the Testing Department. This change to the FK value is then persisted to the database when SaveChanges is called.

### Changing Reference Navigations

Changes to the relationship can also be achieved by changing the Employee.Department reference navigation to point to the new Department. For example:

```
var emp = dev.Employees.Single(e => e.Name.StartsWith("Rahul"));
emp.Department = tes;
```

The Change Tracker Debug View messages will be same like before.

### Changing relationships using Foreign Key Values

Changing the relationships can be done by changing the foreign key – FK values directly. For example, we can move an Employee from one Department to another by changing the Employee.DepartmentId foreign key value.

```
var emp = dev.Employees.Single(e => e.Name.StartsWith("Rahul"));
post.DepartmentId = tes;
```

Here also the Change Tracker Debug View messages will be same like before.

Conclusion

In this article we covered Entity Framework Core Change Tracker in complete details. We first introduced it’s working and how it keeps track of the loaded entities. I hope you understood it, if you have any confusion then let me know in the comments section.

---
Source: [Entity Framework Core Change Tracking](https://www.yogihosting.com/change-tracking-entity-framework-core/)