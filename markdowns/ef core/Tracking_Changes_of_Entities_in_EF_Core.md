# Tracking Changes of Entities in EF Core

Here you will learn how DbContext tracks the changes of entities and modifies their state. This will allow it to perform insert, update or delete operations based on the states.

The [DbContext](https://docs.microsoft.com/en-us/ef/core/api/microsoft.entityframeworkcore.dbcontext) in Entity Framework Core includes the [ChangeTracker](https://docs.microsoft.com/en-us/ef/core/api/microsoft.entityframeworkcore.changetracking.changetracker) property of type `ChangeTracker` class which is responsible for tracking the state of each entity retrieved using the `DbContext` instance.

Note that it is not intended to use it directly in your application code. It is just to understand how EF tracks changes of entities.

The `ChangeTracker` starts tracking of all the entities as soon as it is retrieved using the object of the `DbContext` class, until they go out of its scope. EF keeps track of all the changes applied to all the entities and their properties, so that it can build and execute appropriate DML statements to the underlying data source.

An entity at any point of time has one of the following states which are represented by the enum [Microsoft.EntityFrameworkCore.EntityState](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.entitystate) in EF Core.

-   Added

-   Modified
-   Deleted

-   Unchanged
-   Detached

Let's see how the `EntityState` is changed automatically based on the action performed on the entity.

## Unchanged State

First, all the entities retrieved using direct SQL query or LINQ-to-Entities queries will have the Unchanged state.

```
public static void Main()
{
    using (var context = new SchoolContext())
    {
        // retrieve entity 
        var student = context.Students.FirstOrDefault();
        DisplayStates(context.ChangeTracker.Entries());
    }
}

static void DisplayStates(IEnumerable<EntityEntry> entries)
{
    foreach (var entry in entries)
    {
        Console.WriteLine($"Entity: {entry.Entity.GetType().Name},
                             State: {entry.State.ToString()} ");
    }
}
```

Output:

Entity: Student, State: Unchanged

In the above example, we fetch the student entity using `context.Students.FirstOrDefault()` method. As soon as we retrieve it, the context class starts tracking it. We pass the `context.ChangeTracker.Entries()` to the `DisplayStates()` method. The `context.ChangeTracker.Entries()` returns a collection of [EntityEntry](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.changetracking.entityentry) for each entity being tracked by the context.

The `DisplayStates()` method iterates through each entity entry in the provided `EntityEntry` collection using a `foreach loop`. It prints the name of the entity type (e.g., Student, Grade, etc.) obtained using `entry.Entity.GetType().Name` and the state of the entity obtained using `entry.State.ToString()`.

We don't perform any operation on the `student` object, so the status will be "Unchanged". It means when calling the `context.SaveChanges()` method, nothing will happen. No DB query will be executed as no entity has been changed in the scope of the `context` object.

## Added State

All the new entities without a key property value, added in the `DbContext` using the `Add()` or `Update()` method will be marked as Added.

```
using (var context = new SchoolContext())
{              
    context.Students.Add(new Student() { FirstName = "Bill", LastName = "Gates" });
    
    DisplayStates(context.ChangeTracker.Entries());
}
```

Output:

Entity: Student, State: Added

## Modified State

If the value of any property of an entity is changed in the scope of the `DbContext`, then it will be marked as Modified state.

```
using (var context = new SchoolContext())
{
    var student = context.Students.FirstOrDefault();
    student.LastName = "Friss";
              
    DisplayStates(context.ChangeTracker.Entries());
}
```

Output:

Entity: Student, State: Modified

## Deleted State

If any entity is removed from the `DbContext` using the `DbContext.Remove` or `DbSet.Remove` method, then it will be marked as Deleted.

```
using (var context = new SchoolContext())
{
    var student = context.Students.FirstOrDefault();
    context.Students.Remove(student);
    
    DisplayStates(context.ChangeTracker.Entries());
}
```

Output:

Entity: Student, State: Deleted

## Detached State

All the entities which were created or retrieved out of the scope of the current `DbContext` instance, will have the Detached state. They are also called disconnected entities and are not being tracked by an existing `DbContext` instance.

```
var disconnectedEntity = new Student() { StudentId = 1, Name = "Bill" };

using (var context = new SchoolContext())
{              
    Console.Write(context.Entry(disconnectedEntity).State);
}
```

Output:

Detached

In the above example, `disconnectedEntity` is created out of the scope of `DbContext` instance (context). So, it is in the Detached state for the context.

Learn how to save changes to the database in the next statement.

---
Source: [Tracking Changes of Entities in EF Core](https://www.entityframeworktutorial.net/efcore/changetracker-in-ef-core.aspx)