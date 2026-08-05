# Aggregation Operator - Average

Average extension method calculates the average of the numeric items in the collection. Average method returns nullable or non-nullable decimal, double or float value.

The following example demonstrate Agerage method that returns average value of all the integers in the collection.

```
IList<int> intList = new List<int>>() { 10, 20, 30 };

var avg = intList.Average();

Console.WriteLine("Average: {0}", avg);
```

You can specify an int, decimal, double or float property of a class as a lambda expression of which you want to get an average value. The following example demonstrates Average method on the complex type.

```
IList<Student> studentList = new List<Student>>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
        new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
    };

var avgAge = studentList.Average(s =&gt; s.Age);

Console.WriteLine("Average Age of Student: {0}", avgAge);
```

The Average operator in query syntax is **Not Supported** in C#. However, it is supported in VB.Net as shown below.

Learn about another aggregate operator - Count in the next section.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Aggregation Operator - Average](https://www.tutorialsteacher.com/linq/linq-aggregation-operator-average)