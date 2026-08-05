# Aggregation Operator - Count

The Count operator returns the number of elements in the collection or number of elements that have satisfied the given condition.

The Count() extension method has the following two overloads:

```
int Count<TSource>();int Count<TSource>(Func<TSource, bool> predicate);
```

The first overload method of Count returns the number of elements in the specified collection, whereas the second overload method returns the number of elements which have satisfied the specified condition given as lambda expression/predicate function.

The following example demonstrates Count() on primitive collection.

```
IList<int> intList = new List<int>() { 10, 21, 30, 45, 50 };

var totalElements = intList.Count();

Console.WriteLine("Total Elements: {0}", totalElements);

var evenElements = intList.Count(i => i%2 == 0);

Console.WriteLine("Even Elements: {0}", evenElements);
```

Output:

Total Elements: 5  
Even Elements: 3

The following example demonstrates Count() method on the complex type collection.

```
IList<Student> studentList = new List<Student>>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
        new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
        new Student() { StudentID = 5, StudentName = "Mathew" , Age = 15 } 
    };

var totalStudents = studentList.Count();

Console.WriteLine("Total Students: {0}", totalStudents);

var adultStudents = studentList.Count(s => s.Age >= 18);

Console.WriteLine("Number of Adult Students: {0}", adultStudents );
```

Output:

Total Students: 5  
Number of Adult Students: 3

```
Dim studentList = New List(Of Student) From {
        New Student() With {.StudentID = 1, .StudentName = "John", .Age = 13},
        New Student() With {.StudentID = 2, .StudentName = "Moin", .Age = 21},
        New Student() With {.StudentID = 3, .StudentName = "Bill", .Age = 18},
        New Student() With {.StudentID = 4, .StudentName = "Ram", .Age = 20},
        New Student() With {.StudentID = 5, .StudentName = "Ron", .Age = 15}
}

Dim totalStudents = studentList.Count()

Console.WriteLine("Total Students: {0}", totalStudents)
```

Output:

Total Students: 5

Count(predicate) extension method with predicate parameter is **Not Supported** in VB.Net.

## Count Operator in Query Syntax

```
// Student collection
Dim studentList = New List(Of Student) From {
        New Student() With {.StudentID = 1, .StudentName = "John", .Age = 13},
        New Student() With {.StudentID = 2, .StudentName = "Moin", .Age = 21},
        New Student() With {.StudentID = 3, .StudentName = "Bill", .Age = 18},
        New Student() With {.StudentID = 4, .StudentName = "Ram", .Age = 20},
        New Student() With {.StudentID = 5, .StudentName = "Ron", .Age = 15}
}

Dim totalStudents = Aggregate st In studentList 
                    Into Count(st.Age >= 18)             

Console.WriteLine("Total Students: {0}", totalStudents)
```

Output:

Total Students: 3

C# Query Syntax doesn't support aggregation operators. However, you can wrap the query into brackets and use an aggregation functions as shown below.

```
var totalAge = (from s in studentList
                select s.age).Count();
```

Learn about another aggregate operator - Max in the next section.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Aggregation Operator - Count](https://www.tutorialsteacher.com/linq/linq-aggregation-operator-count)