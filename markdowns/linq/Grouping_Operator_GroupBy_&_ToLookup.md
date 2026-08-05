# Grouping Operator: GroupBy & ToLookup

## Grouping Operators: GroupBy & ToLookup

The grouping operators do the same thing as the GroupBy clause of SQL query. The grouping operators create a group of elements based on the given key. This group is contained in a special type of collection that implements an IGrouping<TKey,TSource> interface where TKey is a key value, on which the group has been formed and TSource is the collection of elements that matches with the grouping key value.

| Grouping Operators | Description |
| --- | --- |
| [GroupBy](https://www.tutorialsteacher.com/linq/linq-grouping-operator-groupby-tolookup#groupby) | The GroupBy operator returns groups of elements based on some key value. Each group is represented by IGrouping<TKey, TElement> object. |
| [ToLookup](https://www.tutorialsteacher.com/linq/linq-grouping-operator-groupby-tolookup#tolookup) | ToLookup is the same as GroupBy; the only difference is the execution of GroupBy is deferred whereas ToLookup execution is immediate. |

The GroupBy operator returns a group of elements from the given collection based on some key value. Each group is represented by IGrouping<TKey, TElement> object. Also, the GroupBy method has eight overload methods, so you can use appropriate extension method based on your requirement in method syntax.

A LINQ query can end with a GroupBy or Select clause.

The result of GroupBy operators is a collection of groups. For example, GroupBy returns IEnumerable<IGrouping<TKey,Student>> from the Student collection:

![Return type of GroupBy()](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-groupby.webp&w=3840&q=75)

### GroupBy in Query Syntax

The following example creates a groups of students who have same age. Students of the same age will be in the same collection and each grouped collection will have a key and inner collection, where the key will be the age and the inner collection will include students whose age is matched with a key.

```
IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
        new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
        new Student() { StudentID = 5, StudentName = "Abram" , Age = 21 } 
    };

var groupedResult = from s in studentList
                    group s by s.Age;

//iterate each group        
foreach (var ageGroup in groupedResult)
{
    Console.WriteLine("Age Group: {0}", ageGroup .Key); //Each group has a key 
             
    foreach(Student s in ageGroup) // Each group has inner collection
        Console.WriteLine("Student Name: {0}", s.StudentName);
}
```

Output:

AgeGroup: 18  
StudentName: John  
StudentName: Bill  
AgeGroup: 21  
StudentName: Steve  
StudentName: Abram  
AgeGroup: 20  
StudentName: Ram

As you can see in the above example, you can iterate the group using a 'foreach' loop, where each group contains a key and inner collection. The following figure shows the result in debug view.

![Grouped collection with key and inner collection](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-groupby-2.webp&w=3840&q=75)

Use "Into Group" with the 'Group By' clause in VB.Net as shown below.

```
Dim groupQuery = From s In studentList
                 Group By s.Age Into Group

For Each group In groupQuery
    Console.WriteLine("Age Group: {0}", group.Age) // Each group has key property name
    
    For Each student In group.Group // Each group has inner collection
        Console.WriteLine("Student Name: {0}", student.StudentName)
    Next
Next
```

Notice that each group will have a property name on which group is performed. In the above example, we have used Age to form a group so each group will have "Age" property name instead of "Key" as a property name.

Output:

AgeGroup: 18  
StudentName: John  
StudentName: Bill  
AgeGroup: 21  
StudentName: Steve  
StudentName: Abram  
AgeGroup: 20  
StudentName: Ram

## GroupBy in Method Syntax

The GroupBy() extension method works the same way in the method syntax. Specify the lambda expression for key selector field name in GroupBy extension method.

```
IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
        new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
        new Student() { StudentID = 5, StudentName = "Abram" , Age = 21 } 
    };

var groupedResult = studentList.GroupBy(s =&gt; s.Age);

foreach (var ageGroup in groupedResult)
{
    Console.WriteLine("Age Group: {0}", ageGroup.Key);  //Each group has a key 
             
    foreach(Student s in ageGroup)  //Each group has a inner collection  
        Console.WriteLine("Student Name: {0}", s.StudentName);
}
```

```
Dim groupQuery = studentList.GroupBy(Function(s) s.Age)
        
For Each ageGroup In groupQuery
            
    Console.WriteLine("Age Group: {0}", ageGroup.Key)  //Each group has a key 
            
    For Each student In ageGroup.AsEnumerable()  //Each group has a inner collection
        Console.WriteLine("Student Name: {0}", student.StudentName)
    Next
Next
```

Output:

AgeGroup: 18  
StudentName: John  
StudentName: Bill  
AgeGroup: 21  
StudentName: Steve  
StudentName: Abram  
AgeGroup: 20  
StudentName: Ram

## ToLookup

ToLookup is the same as GroupBy; the only difference is GroupBy execution is deferred, whereas ToLookup execution is immediate. Also, ToLookup is only applicable in Method syntax. **ToLookup is not supported in the query syntax.**

```
IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
        new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 } ,
        <span className="kwrd">new</span> <span className="userclass">Student</span>() { StudentID = 3, StudentName = <span className="str">"Bill"</span>,  Age = 18 } ,
        <span className="kwrd">new</span> <span className="userclass">Student</span>() { StudentID = 4, StudentName = <span className="str">"Ram"</span> , Age = 20 } ,
        <span className="kwrd">new</span> <span className="userclass">Student</span>() { StudentID = 5, StudentName = <span className="str">"Abram"</span> , Age = 21 } 
    };

<span className="kwrd">var</span> lookupResult = studentList.ToLookup(s =&gt; s.age);</code>

<span className="kwrd">foreach</span> (<span className="kwrd">var</span> group <span className="kwrd">in</span> lookupResult)
{
    <span className="userclass">Console</span>.WriteLine(<span className="str">"Age Group: {0}"</span>, group.Key);  <span className="rem">//Each group has a key </span>
             
    <span className="kwrd">foreach</span>(Student s <span className="kwrd">in</span> group)  <span className="rem">//Each group has a inner collection </span> 
        Console.WriteLine("Student Name: {0}", s.StudentName);
}
        
```

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Grouping Operator: GroupBy & ToLookup](https://www.tutorialsteacher.com/linq/linq-grouping-operator-groupby-tolookup)