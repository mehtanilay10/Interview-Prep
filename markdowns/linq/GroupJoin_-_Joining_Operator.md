# GroupJoin - Joining Operator

We have seen the Join operator in the previous section. The GroupJoin operator performs the same task as Join operator except that GroupJoin returns a result in group based on specified group key. The GroupJoin operator joins two sequences based on key and groups the result by matching key and then returns the collection of grouped result and key.

GroupJoin requires same parameters as Join. GroupJoin has following two overload methods:

```
public static IEnumerable<TResult> GroupJoin<TOuter, TInner, TKey, TResult>(this IEnumerable<TOuter> outer, IEnumerable<TInner> inner, Func<TOuter, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector, Func<TOuter, IEnumerable<TInner>, TResult> resultSelector);public static IEnumerable<TResult> GroupJoin<TOuter, TInner, TKey, TResult>(this IEnumerable<TOuter> outer, IEnumerable<TInner> inner, Func<TOuter, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector, Func<TOuter, IEnumerable<TInner>, TResult> resultSelector, IEqualityComparer<TKey> comparer);
```

As you can see in the first overload method takes five input parameters (except the first 'this' parameter): 1) outer 2) inner 3) outerKeySelector 4) innerKeySelector 5) resultSelector. Please notice that resultSelector is of Func delegate type that has second input parameter as IEnumerable type for inner sequence.

Now, let's understand GroupJoin using following Student and Standard class where Student class includes StandardID that matches with StandardID of Standard class.

```
public class Student{ 
    public int StudentID { get; set; }
    public string StudentName { get; set; }
    public int StandardID { get; set; }
}

public class Standard{ 
    public int StandardID { get; set; }
    public string StandardName { get; set; }
}</code></pre>
        <div className="card-footer example-footer"></div></div>
</div>
    <InArticleAd />
    <p>
        Consider the following GroupJoin query example.
    </p>

    <div className="card code-panel">
        <div className="card-header example-title">Example: GroupJoin in Method syntax C#</div>
        <div className="panel-body"><pre className="csharpcode"><code>IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", StandardID =1 },
    new Student() { StudentID = 2, StudentName = "Moin", StandardID =1 },
    new Student() { StudentID = 3, StudentName = "Bill", StandardID =2 },
    new Student() { StudentID = 4, StudentName = "Ram",  StandardID =2 },
    new Student() { StudentID = 5, StudentName = "Ron" } 
};

IList<Standard> standardList = new List<Standard>() { 
    new Standard(){ StandardID = 1, StandardName="Standard 1"},
    new Standard(){ StandardID = 2, StandardName="Standard 2"},
    new Standard(){ StandardID = 3, StandardName="Standard 3"}
};

var groupJoin = standardList.GroupJoin(studentList,  //inner sequence
                                std => std.StandardID, //outerKeySelector 
                                s => s.StandardID,     //innerKeySelector
                                (std, studentsGroup) =&gt; new // resultSelector 
                                {
                                    Students = studentsGroup,
                                    StandarFulldName = std.StandardName
                                });

foreach (var item in groupJoin)
{ 
    Console.WriteLine(item.StandarFulldName );

    foreach(var stud in item.Students)
        Console.WriteLine(stud.StudentName);
}
```

Output:

Standard 1:  
John,  
Moin,  
Standard 2:  
Bill,  
Ram,  
Standard 3:

In the above example of GroupJoin query, standardList is the outer sequence, because the query starts from it. The first parameter in GroupJoin method is to specify the inner sequence, which is studentList in the above example. The second and third parameters of the GroupJoin() method are to specify a field whose value should be matched using lambda expression, in order to include element in the result. The key selector for the outer sequence `standard => standard.StandardID` indicates that StandardID field of each elements in standardList should be match with the key of inner sequence studentList `student => student.StandardID`. If value of both the key field is matched then include that element into grouped collection studentsGroup where key would be StandardID.

The last parameter in Join method is an expression to formulate the result. In the above example, result selector includes grouped collection studentGroup and StandardName.

The following image illustrate that inner sequence grouped into studentsGroup collection for matching StandardID key and that grouped collection can be used to formulate the result.

![Grouping Operator - GroupJoin](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-groupjoin.webp&w=3840&q=75)

Resultset would include an anonymous objects that has the Students and StandardFullName properties. Students property will be a collection of Students whose StandardID matches with Standard.StandardID.

![GroupJoin Result in Debug View](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2FgroupJoin-result.webp&w=3840&q=75)

You can access the result using a 'foreach' loop. Each element will have the StandardFullName & Students property, where Students will be a collection.

```
foreach (var item in groupJoinResult)
{ 
    Console.WriteLine(item.StandarFulldName );

    foreach(var stud in item.Students)
        Console.WriteLine(stud.StudentName);
}</code></pre>
        <div className="card-footer example-footer"></div></div>
</div>
    <p>Following is an example of GroupJoin in VB.Net:</p>
    <div className="card code-panel">
        <div className="card-header example-title">Example: GroupJoin in Method VB.Net</div>
        <div className="panel-body"><pre className="csharpcode"><code>Dim groupJoin = standardList.GroupJoin(  ' outer sequence 
                    studentList, ' inner sequence 
                    Function(s) s.StandardID, ' outerKeySelector  
                    Function(stud) stud.StandardID, ' innerKeySelector 
                    Function(s, studentGroup) New With { ' result selector
                            .students = studentGroup, 
                            .standardName = s.StandardName
                    })

For Each item In groupJoin
    
    Console.WriteLine(item.standardName)
            
    For Each std In item.students
            Console.WriteLine( std.StudentName)
    Next

Next
```

Output:

Standard 1:  
John,  
Moin,  
Standard 2:  
Bill,  
Ram,  
Standard 3:

## GroupJoin in Query Syntax

GroupJoin operator in query syntax works slightly different than method syntax. It requires an outer sequence, inner sequence, key selector and result selector. 'on' keyword is used for key selector where the left side of 'equals' operator is the outerKeySelector and the right side of 'equals' is the innerKeySelector. Use the **into** keyword to create the grouped collection.

```
from ... in outerSequence
join ... in innerSequence  
on outerKey equals innerKey
into groupedCollection    
select ...
```

The following example demonstrates the GroupJoin in query syntax.

```
IList<Student> studentList = new List<Student>() { 
                    new Student() { StudentID = 1, StudentName = "John", Age = 13, StandardID =1 },
                    new Student() { StudentID = 2, StudentName = "Moin",  Age = 21, StandardID =1 },
                    new Student() { StudentID = 3, StudentName = "Bill",  Age = 18, StandardID =2 },
                    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20, StandardID =2 },
                    new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
};

IList<Standard> standardList = new List<Standard>() { 
                    new Standard(){ StandardID = 1, StandardName="Standard 1"},
                    new Standard(){ StandardID = 2, StandardName="Standard 2"},
                    new Standard(){ StandardID = 3, StandardName="Standard 3"}
};

var groupJoin = from std in standardList 
                    join s in studentList 
                    on std.StandardID equals s.StandardID
                    into studentGroup
                    select new { 
                              Students = studentGroup , 
                              StandardName = std.StandardName 
                          };

foreach (var item in groupJoin)
{ 
                    Console.WriteLine(item.StandarFulldName );

                    foreach(var stud in item.Students)
                    Console.WriteLine(stud.StudentName);
}
```

```
Dim groupJoin = From s In standardList
                Group Join stud In studentList 
                On stud.StandardID Equals s.StandardID
                Into Group _
                Select _
                StudentsGroup = Group,
                StandardName = s.StandardName
```

Output:

Standard 1:  
John,  
Moin,  
Standard 2:  
Bill,  
Ram,  
Standard 3:

In the VB.Net, the **InTo** keyword will create a group of all students of same standard and assign it to the **Group** keyword. So, use Group in the projection result.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [GroupJoin - Joining Operator](https://www.tutorialsteacher.com/linq/linq-joining-operator-groupjoin)