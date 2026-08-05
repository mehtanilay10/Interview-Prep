# Aggregation Operators: Aggregate

The aggregation operators perform mathematical operations like Average, Aggregate, Count, Max, Min and Sum, on the numeric property of the elements in the collection.

| Method | Description |
| --- | --- |
| [Aggregate](https://www.tutorialsteacher.com/linq/linq-aggregation-operator-aggregate#aggregate) | Performs a custom aggregation operation on the values in the collection. |
| [Average](https://www.tutorialsteacher.com/linq/linq-aggregation-operator-average) | calculates the average of the numeric items in the collection. |
| [Count](https://www.tutorialsteacher.com/linq/linq-aggregation-operator-count) | Counts the elements in a collection. |
| LongCount | Counts the elements in a collection. |
| [Max](https://www.tutorialsteacher.com/linq/linq-aggregation-operator-max) | Finds the largest value in the collection. |
| Min | Finds the smallest value in the collection. |
| [Sum](https://www.tutorialsteacher.com/linq/linq-aggregation-operator-sum) | Calculates sum of the values in the collection. |

## Aggregate

The Aggregate method performs an accumulate operation. Aggregate extension method has the following overload methods:

```
public static TSource Aggregate<TSource>(this IEnumerable<TSource> source, Func<TSource, TSource, TSource> func); public static TAccumulate Aggregate<TSource, TAccumulate>(this IEnumerable<TSource> source, TAccumulate seed, Func<TAccumulate, TSource, TAccumulate> func); public static TResult Aggregate<TSource, TAccumulate, TResult>(this IEnumerable<TSource> source, TAccumulate seed, Func<TAccumulate, TSource, TAccumulate> func, Func<TAccumulate, TResult> resultSelector);
```

The following example demonstrates Aggregate method that returns comma seperated elements of the string list.

```
IList<String> strList = new List<String>() { "One", "Two", "Three", "Four", "Five"};

var commaSeperatedString = strList.Aggregate((s1, s2) => s1 + ", " + s2);

Console.WriteLine(commaSeperatedString);
```

Output:

One, Two, Three, Four, Five

In the above example, Aggregate extension method returns comma separated strings from strList collection. The following image illustrates the whole aggregate operation performed in the above example.

![Aggregate extension method](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-aggregate-1.webp&w=3840&q=75)

As per the above figure, first item of strList "One" will be pass as s1 and rest of the items will be passed as s2. The lambda expression `(s1, s2) => s1 + ", " + s2` will be treated like `s1 = s1 + ", " + s1` where s1 will be accumulated for each item in the collection. Thus, Aggregate method will return comma separated string.

```
Dim strList As IList(Of String) = New List(Of String) From {
                                                            "One", 
                                                            "Two", 
                                                            "Three", 
                                                            "Four", 
                                                            "Five"
                                                        }

Dim commaSeparatedString = strList.Aggregate(Function(s1, s2) s1 + ", " + s2)
```

## Aggregate Method with Seed Value

The second overload method of Aggregate requires first parameter for seed value to accumulate. Second parameter is Func type delegate:  
`TAccumulate Aggregate<TSource, TAccumulate>(**TAccumulate seed, Func<TAccumulate, TSource, TAccumulate> func**);`.

The following example uses string as a seed value in the Aggregate extension method.

```
// Student collection
IList<Student> studentList = new List<Student>>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
        new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
    };

string commaSeparatedStudentNames = studentList.Aggregate<Student, string>(
                                        "Student Names: ",  // seed value
                                        (str, s) => str += s.StudentName + "," ); 

Console.WriteLine(commaSeparatedStudentNames);
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
 Dim commaSeparatedStudentNames = studentList.Aggregate(Of String)(
               "Student Names: ", 
               Function(str, s) str + s.StudentName + ",")

Console.WriteLine(commaSeparatedStudentNames);
```

Output:

Student Names: John, Moin, Bill, Ram, Ron,

In the above example, the first parameter of the Aggregate method is the "Student Names: " string that will be accumulated with all student names. The comma in the lambda expression will be passed as a second parameter.

The following example use Aggregate operator to add the age of all the students.

```
// Student collection
IList<Student> studentList = new List<Student>>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
        new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
    };

int SumOfStudentsAge = studentList.Aggregate<Student, int>(0, 
                                                (totalAge, s) => totalAge += s.Age  );
```

## Aggregate Method with Result Selector

Now, let's see third overload method that required the third parameter of the Func delegate expression for result selector, so that you can formulate the result.

```
IList<Student> studentList = new List<Student>>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
        new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
    };

string commaSeparatedStudentNames = studentList.Aggregate<Student, string,string>(
                                            String.Empty, // seed value
                                            (str, s) => str += s.StudentName + ",", // returns result using seed value, String.Empty goes to lambda expression as str
                                            str => str.Substring(0,str.Length - 1 )); // result selector that removes last comma

Console.WriteLine(commaSeparatedStudentNames);
```

In the above example, we have specified a lambda expression `str => str.Substring(0,str.Length - 1 )` which will remove the last comma in the string result. Below is the same example in VB.Net.

```
// Student collection
Dim studentList = New List(Of Student) From {
        New Student() With {.StudentID = 1, .StudentName = "John", .Age = 13},
        New Student() With {.StudentID = 2, .StudentName = "Moin", .Age = 21},
        New Student() With {.StudentID = 3, .StudentName = "Bill", .Age = 18},
        New Student() With {.StudentID = 4, .StudentName = "Ram", .Age = 20},
        New Student() With {.StudentID = 5, .StudentName = "Ron", .Age = 15}
    }

Dim commaSeparatedStudentNames = studentList.Aggregate(Of String, String)(
               String.Empty, 
               Function(str, s) str + s.StudentName + ",", 
               Function(str) str.Substring(0, str.Length - 1)) 

Console.WriteLine(commaSeparatedStudentNames);
```

Output:

John, Moin, Bill, Ram, Ron

Aggregate operator is **Not Supported** with query syntax in C# or VB.Net.

Learn about another aggregate operator - Average in the next section.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Aggregation Operators: Aggregate](https://www.tutorialsteacher.com/linq/linq-aggregation-operator-aggregate)