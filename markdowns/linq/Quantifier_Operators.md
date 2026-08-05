# Quantifier Operators

The quantifier operators evaluate elements of the sequence on some condition and return a boolean value to indicate that some or all elements satisfy the condition.

The All operator evalutes each elements in the given collection on a specified condition and returns True if all the elements satisfy a condition.

```
IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
        new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
    };

// checks whether all the students are teenagers    
bool areAllStudentsTeenAger = studentList.All(s => s.Age &gt; 12 && s.Age &lt; 20);

Console.WriteLine(areAllStudentsTeenAger);
```

Any checks whether any element satisfy given condition or not? In the following example, Any operation is used to check whether any student is teen ager or not.

Quantifier operators are **Not Supported** with C# query syntax.

Learn about quanifier operator - Contains in the next section.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Quantifier Operators](https://www.tutorialsteacher.com/linq/linq-quantifier-operators)