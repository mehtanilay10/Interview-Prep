# TrackGraph in Entity Framework Core

In the previous chapter, you learned that different methods set different `EntityState` to each entity of an entity graph in Entity Framework Core 2. Here, you will learn how to track an entity graph and set an appropriate `EntityState` to each individual entity in a graph.

The `ChangeTracker.TrackGraph()` method was introduced in Entity Framework Core to track the entire entity graph and set custom entity states to each entity in a graph.

Signature: `public virtual void TrackGraph(object rootEntity, Action<EntityEntryGraphNode> callback)`

The `ChangeTracker.TrackGraph()` method begins tracking an entity and any entities that are reachable by traversing its navigation properties. The specified callback is called for each discovered entity and an appropriate `EntityState` must be set for each entity. The callback function allows us to implement custom logic to set the appropriate state. If no state is set, the entity remains untracked.

The following example demonstrates the `TrackGraph` method.

```
var student = new Student() { //Root entity (with key value)
    StudentId = 1,
    Name = "Bill",
    Address = new StudentAddress()  //Child entity (with key value)
    {
        StudentAddressId = 1,
        City = "Seattle",
        Country = "USA"
    },
    StudentCourses = new List<StudentCourse>() {
            new StudentCourse(){  Course = new Course(){ CourseName="Machine Language" } },//Child entity (empty key)
            new StudentCourse(){  Course = new Course(){  CourseId=2 } } //Child entity (with key value)
        }
};
       
var context = new SchoolContext();
            
context.ChangeTracker.TrackGraph(student, e => {
                                                if (e.Entry.IsKeySet)
                                                {
                                                    e.Entry.State = EntityState.Unchanged;
                                                }
                                                else
                                                {
                                                    e.Entry.State = EntityState.Added;
                                                }
                                            });

foreach (var entry in context.ChangeTracker.Entries())
{
    Console.WriteLine($"Entity: {entry.Entity.GetType().Name}, 
                        State: {entry.State.ToString()} ");
}
```

Output:

Entity: Student, State: Added  
Entity: StudentAddress, State: Unchanged  
Entity: StudentCourse, State: Added  
Entity: Course, State: Added  
Entity: StudentCourse, State: Added  
Entity: Course, State: Unchanged

In the above example, the `ChangeTracker.TrackGraph()` method is used to set the state for each entity in a `Student` entity graph. The first parameter is an entity graph and the second parameter is a function which sets the state of each entity. We used a lambda expression to set the Unchanged state for entities that have valid key values and the Added state for entities that have empty key values. The `IsKeySet` becomes true when an entity has a valid key property value.

Thus, we can use the `ChangeTracker.TrackGraph()` method to set different `EntityState` for each entity in a graph.

---
Source: [ChangeTracker.TrackGraph() in Entity Framework Core](https://www.entityframeworktutorial.net/efcore/changetracker-trackgraph-ef-core.aspx)