# Sample LINQ Queries

In this section, you will learn some complex LINQ queries. We will use the following Student and Standard collection for our queries.

```
IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", Age = 18, StandardID = 1 } ,
    new Student() { StudentID = 2, StudentName = "Steve",  Age = 21, StandardID = 1 } ,
    new Student() { StudentID = 3, StudentName = "Bill",  Age = 18, StandardID = 2 } ,
    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20, StandardID = 2 } ,
    new Student() { StudentID = 5, StudentName = "Ron" , Age = 21 } 
};

IList<Standard> standardList = new List<Standard>() { 
    new Standard(){ StandardID = 1, StandardName="Standard 1"},
    new Standard(){ StandardID = 2, StandardName="Standard 2"},
    new Standard(){ StandardID = 3, StandardName="Standard 3"}
};</code></pre>
        <div className="card-footer example-footer"></div></div>
</div>
    <h2>Multiple Select and where operator</h2>

    <div className="card code-panel">
        <div className="card-header example-title">Example: Multiple Select and where Operator</div>
        <div className="panel-body"><pre className="csharpcode"><code>var studentNames = studentList.Where(s => s.Age > 18)
                              .Select(s => s)
                              .Where(st => st.StandardID > 0)
                              .Select(s =&gt; s.StudentName);
```

The following query returns Enumerable of anonymous object that has only StudentName property:

```
var teenStudentsName = from s in studentList
                       where s.age &gt; 12 && s.age < 20
                       select new { StudentName = s.StudentName };

teenStudentsName.ToList().ForEach(s => Console.WriteLine(s.StudentName));
```

```
var studentsGroupByStandard = from s in studentList
                              group s by s.StandardID into sg
                              orderby sg.Key 
                                    select new { sg.Key, sg };

foreach (var group in studentsGroupByStandard)
{
    Console.WriteLine("StandardID {0}:", group.Key);
    
    group.sg.ToList().ForEach(st =&gt; Console.WriteLine(st.StudentName ));
}
```

The output includes Ron who doesn't have any StandardID. So Ron falls under StandardID 0.

To remove a student who doesn't have a StandardID, use a where operator before the group operator:

```
var studentsGroupByStandard = from s in studentList
                              where s.StandardID &gt; 0
                              group s by s.StandardID into sg
                              orderby sg.Key 
                                    select new { sg.Key, sg };
```

Use left outer join to display students under each standard. Display the standard name even if there is no student assigned to that standard.

```
var studentsGroup = from stad in standardList
                    join s in studentList
                    on stad.StandardID equals s.StandardID
                        into sg
                        select new { 
                                        StandardName = stad.StandardName, 
                                        Students = sg 
                                    };

foreach (var group in studentsGroup)
{
    Console.WriteLine(group.StandardName);
    
    group.Students.ToList().ForEach(st =&gt; Console.WriteLine(st.StudentName));
}
```

In the following example of group by query, we sort the group and select only StudentName:

```
var studentsWithStandard = from stad in standardList
                           join s in studentList
                           on stad.StandardID equals s.StandardID
                           into sg
                               from std_grp in sg 
                               orderby stad.StandardName, std_grp.StudentName 
                               select new { 
                                                StudentName = std_grp.StudentName, 
                                                StandardName = stad.StandardName 
                                };

foreach (var group in studentsWithStandard)
{
    Console.WriteLine("{0} is in {1}", group.StudentName, group.StandardName);
}
```

The following query returns list of students by ascending order of StandardID and Age.

```
var sortedStudents = from s in studentList
                        orderby s.StandardID, s.age
                        select new { 
                                StudentName = s.StudentName, 
                                Age = s.age, 
                                StandardID = s.StandardID };

sortedStudents.ToList().ForEach(s =&gt; Console.WriteLine("Student Name: {0}, Age: {1}, StandardID: {2}", s.StudentName, s.Age , s.StandardID));
```

```
var studentWithStandard = from s in studentList
                          join stad in standardList
                          on s.StandardID equals stad.StandardID 
                          select new { 
                                  StudentName = s.StudentName, 
                                  StandardName = stad.StandardName 
                              };

studentWithStandard.ToList().ForEach(s =&gt; Console.WriteLine("{0} is in {1}", s.StudentName, s.StandardName  ));
```

```
var nestedQueries = from s in studentList
                    where s.age > 18 && s.StandardID == 
                        (from std in standardList
                        where std.StandardName == "Standard 1"
                        select std.StandardID).FirstOrDefault()
                            select s;

nestedQueries.ToList().ForEach(s =&gt; Console.WriteLine(s.StudentName));
```

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Sample LINQ Queries](https://www.tutorialsteacher.com/linq/sample-linq-queries)