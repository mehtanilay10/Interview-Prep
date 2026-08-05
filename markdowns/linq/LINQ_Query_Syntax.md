# LINQ Query Syntax

There are two basic ways to write a LINQ query to IEnumerable collection or IQueryable data sources.

1.  Query Syntax or Query Expression Syntax
2.  Method Syntax or Method Extension Syntax or Fluent

## Query Syntax

Query syntax is similar to SQL (Structured Query Language) for the database. It is defined within the C# or VB code.

```
from <range variable> in Collection
<Standard Query Operators> <lambda expression>
<select or groupBy operator> <result formation>
```

The LINQ query syntax starts with from keyword and ends with select keyword. The following is a sample LINQ query that returns a collection of strings which contains a word "Tutorials".

```
// string collection
IList<string> stringList = new List<string>() { 
    "C# Tutorials",
    "VB.NET Tutorials",
    "Learn C++",
    "MVC Tutorials" ,
    "Java" 
};

// LINQ Query Syntax
var result = from s in stringList
            where s.Contains("Tutorials") 
            select s;
```

The following figure shows the structure of LINQ query syntax.

![LINQ Query Syntax](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-query-syntax.webp&w=3840&q=75)

Query syntax starts with a ***From*** clause followed by a ***Range*** variable. The ***From*** clause is structured like `"**From** rangeV*ariableName* **in** *IEnumerablecollection*"`. In English, this means, from each object in the collection. It is similar to a foreach loop: `foreach(Student s in studentList)`.

After the From clause, you can use different Standard Query Operators to filter, group, join elements of the collection. There are around 50 Standard Query Operators available in LINQ. In the above figure, we have used "where" operator (aka clause) followed by a condition. This condition is generally expressed using [lambda expression](https://www.tutorialsteacher.com/linq/linq-lambda-expression).

LINQ query syntax always ends with a Select or Group clause. The Select clause is used to shape the data. You can select the whole object as it is or only some properties of it. In the above example, we selected the each resulted string elements.

In the following example, we use LINQ query syntax to find out teenager students from the Student collection (sequence).

```
// Student collection
IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
        new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
    };

// LINQ Query Syntax to find out teenager students
var teenAgerStudent = from s in studentList
                      where s.Age &gt; 12 && s.Age &lt; 20
                      select s;
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

// LINQ Query Syntax to find out teenager students
Dim teenAgerStudents As IList(Of Student) = (From s In studentList _
                                            Where s.Age &gt; 12 And s.Age &lt; 20 _
                                            Select s).ToList()
```

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [LINQ Query Syntax](https://www.tutorialsteacher.com/linq/linq-query-syntax)