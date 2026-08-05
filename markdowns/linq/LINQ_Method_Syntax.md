# LINQ Method Syntax

In the previous section, you have learned about LINQ Query Syntax. Here, you will learn about Method syntax.

Method syntax (also known as fluent syntax) uses extension methods included in the [Enumerable](http://msdn.microsoft.com/en-us/library/system.linq.enumerable\(v=vs.110\).aspx\)) or [Queryable](http://msdn.microsoft.com/en-us/library/system.linq.queryable\(v=vs.110\).aspx) static class, similar to how you would call the extension method of any class.

The compiler converts query syntax into method syntax at compile time.

The following is a sample LINQ method syntax query that returns a collection of strings which contains a word "Tutorials".

```
// string collection
IList<string> stringList = new List<string>() { 
    "C# Tutorials",
    "VB.NET Tutorials",
    "Learn C++",
    "MVC Tutorials" ,
    "Java" 
};

// LINQ Method Syntax
var result = stringList.Where(s =&gt; s.Contains("Tutorials"));
```

The following figure illustrates the structure of LINQ method syntax.

As you can see in the above figure, method syntax comprises of extension methods and Lambda expression. The extension method **Where()** is defined in the Enumerable class.

If you check the signature of the Where extension method, you will find the Where method accepts a [predicate](https://www.tutorialsteacher.com/csharp/csharp-predicate "predicate in C#") delegate as Func<Student, bool>. This means you can pass any delegate function that accepts a Student object as an input parameter and returns a Boolean value as shown in the below figure. The lambda expression works as a delegate passed in the Where clause. Learn lambda expression in the next section.

The following example shows how to use LINQ method syntax query with the IEnumerable<T> collection.

```
// Student collection
IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
        new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
    };

// LINQ Method Syntax to find out teenager students
var teenAgerStudents = studentList.Where(s => s.Age &gt; 12 && s.Age &lt; 20)
                                  .ToList<Student>();
```

```
// Student collection
Dim studentList = New List(Of Student) From {
        New Student() With {.StudentID = 1, .StudentName = "John", .Age = 13},
        New Student() With {.StudentID = 2, .StudentName = "Moin", .Age = 21},
        New Student() With {.StudentID = 3, .StudentName = "Bill", .Age = 18},
        New Student() With {.StudentID = 4, .StudentName = "Ram", .Age = 20},
        New Student() With {.StudentID = 5, .StudentName = "Ron", .Age = 15}
    }

// LINQ Method Syntax to find out teenager students
Dim teenAgerStudents As IList(Of Student) = studentList.Where(Function(s) s.Age &gt; 12 And s.Age &lt; 20)
                                                       .ToList()
```

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [LINQ Method Syntax](https://www.tutorialsteacher.com/linq/linq-method-syntax)