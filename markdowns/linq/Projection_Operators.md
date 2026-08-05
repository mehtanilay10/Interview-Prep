# Projection Operators

## Projection Operators: Select, SelectMany

There are two projection operators available in LINQ. 1) Select 2) SelectMany

### Select

The Select operator always returns an IEnumerable collection which contains elements based on a transformation function. It is similar to the Select clause of SQL that produces a flat result set.

Now, let's understand Select query operator using the following Student class.

```
public class Student{ 
    public int StudentID { get; set; }
    public string StudentName { get; set; }
    public int Age { get; set; }
}
```

### Select in Query Syntax

LINQ query syntax must end with a **Select** or **GroupBy** clause. The following example demonstrates select operator that returns a string collection of StudentName.

```
IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John" },
    new Student() { StudentID = 2, StudentName = "Moin" },
    new Student() { StudentID = 3, StudentName = "Bill" },
    new Student() { StudentID = 4, StudentName = "Ram" },
    new Student() { StudentID = 5, StudentName = "Ron" } 
};

var selectResult = from s in studentList
                   select s.StudentName;
```

The select operator can be used to formulat the result as per our requirement. It can be used to return a collection of custom class or anonymous type which includes properties as per our need.

The following example of the select clause returns a collection of [anonymous type](https://www.tutorialsteacher.com/csharp/csharp-anonymous-type) containing the Name and Age property.

```
IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", Age = 13 } ,
    new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
    new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
    new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
};

// returns collection of anonymous objects with Name and Age property
var selectResult = from s in studentList
                   select new { Name = "Mr. " + s.StudentName, Age = s.Age }; 

// iterate selectResult
foreach (var item in selectResult)
    Console.WriteLine("Student Name: {0}, Age: {1}", item.Name, item.Age);
```

Output:

Student Name: Mr. John, Age: 13  
Student Name: Mr. Moin, Age: 21  
Student Name: Mr. Bill, Age: 18  
Student Name: Mr. Ram, Age: 20  
Student Name: Mr. Ron, Age: 15

### Select in Method Syntax

The Select operator is optional in method syntax. However, you can use it to shape the data. In the following example, Select extension method returns a collection of anonymous object with the Name and Age property:

```
IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
    new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
    new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
    new Student() { StudentID = 5, StudentName = "Ron" , Age = 21 } 
};
    
var selectResult = studentList.Select(s =&gt; new { Name = s.StudentName , 
                                                 Age = s.Age  });
```

In the above example, selectResult would contain anonymous objects with Name and Age property as shown below in the debug view.

![Select clause returns an Anonymous objects](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flnq-select-result.webp&w=3840&q=75)

## Select Many

The SelectMany operator projects sequences of values that are based on a transform function and then flattens them into one sequence.

Visit MSDN for more information on [projection operators](http://msdn.microsoft.com/en-us/library/bb546168.aspx?cs-save-lang=1&cs-lang=csharp#code-snippet-1).

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Projection Operators](https://www.tutorialsteacher.com/linq/linq-projection-operators)