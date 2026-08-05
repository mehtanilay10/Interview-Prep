# OrderBy & OrderByDescending - Sorting Operators

A sorting operator arranges the elements of the collection in ascending or descending order. LINQ includes following sorting operators.

| Sorting Operator | Description |
| --- | --- |
| [OrderBy](https://www.tutorialsteacher.com/linq/linq-sorting-operators-orderby-orderbydescending#orderby) | Sorts the elements in the collection based on specified fields in ascending or decending order. |
| [OrderByDescending](https://www.tutorialsteacher.com/linq/linq-sorting-operators-orderby-orderbydescending#orderbydescending) | Sorts the collection based on specified fields in descending order. Only valid in method syntax. |
| [ThenBy](https://www.tutorialsteacher.com/linq/linq-sorting-operators-thenby-thenbydescending) | Only valid in method syntax. Used for second level sorting in ascending order. |
| [ThenByDescending](https://www.tutorialsteacher.com/linq/linq-sorting-operators-thenby-thenbydescending) | Only valid in method syntax. Used for second level sorting in descending order. |
| Reverse | Only valid in method syntax. Sorts the collection in reverse order. |

## OrderBy

OrderBy sorts the values of a collection in ascending or descending order. It sorts the collection in ascending order by default because `ascending` keyword is optional here. Use descending keyword to sort collection in descending order.

```
IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
    new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
    new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
    new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
};

var orderByResult = from s in studentList
                   orderby s.StudentName 
                   select s;

var orderByDescendingResult = from s in studentList
                   orderby s.StudentName descending
                   select s;
```

```
Dim orderByResult = From s In studentList
                   Order By s.StudentName  
                   Select s

Dim orderByDescendingResult = From s In studentList
                   Order By s.StudentName Descending
                   Select s
```

orderByResult in the above example would contain following elements after execution:

Bill  
John  
Ram  
Ron  
Steve

orderByDescendingResult in the above example would contain following elements after execution:

Steve  
Ron  
Ram  
John  
Bill

## OrderBy in Method Syntax

OrderBy extension method has two overloads. First overload of OrderBy extension method accepts the Func delegate type parameter. So you need to pass the lambda expression for the field based on which you want to sort the collection.

The second overload method of OrderBy accepts object of IComparer along with Func delegate type to use custom comparison for sorting.

```
public static IOrderedEnumerable<TSource> OrderBy<TSource, TKey>(this IEnumerable<TSource> source,Func<TSource, TKey> keySelector);public static IOrderedEnumerable<TSource> OrderBy<TSource, TKey>(this IEnumerable<TSource> source,Func<TSource, TKey> keySelector,IComparer<TKey> comparer);
```

The following example sorts the studentList collection in ascending order of StudentName using OrderBy extension method.

```
IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
    new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
    new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
    new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
};

var studentsInAscOrder = studentList.OrderBy(s => s.StudentName);
```

Method syntax does not allow the decending keyword to sorts the collection in decending order. Use OrderByDecending() method for it.

## OrderByDescending

OrderByDescending sorts the collection in descending order.

OrderByDescending is valid only with the Method syntax. It is not valid in query syntax because the query syntax uses ascending and descending attributes as shown above.

```
IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
    new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
    new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
    new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
};

var studentsInDescOrder = studentList.OrderByDescending(s => s.StudentName);
```

```
Dim studentsInDescOrder = studentList.OrderByDescending(Function(s) s.StudentName)
```

A result in the above example would contain following elements after execution.

Steve  
Ron  
Ram  
John  
Bill

Please note that OrderByDescending is not supported in query syntax. Use the decending keyword instead.

## Multiple Sorting

You can sort the collection on multiple fields seperated by comma. The given collection would be first sorted based on the first field and then if value of first field would be the same for two elements then it would use second field for sorting and so on.

```
IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
    new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
    new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
    new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 }, 
    new Student() { StudentID = 6, StudentName = "Ram" , Age = 18 }
};

var orderByResult = from s in studentList
                   orderby s.StudentName, s.Age 
                   select new { s.StudentName, s.Age };
```

In the above example, studentList collection includes two identical StudentNames, Ram. So now, studentList would be first sorted based on StudentName and then by Age in ascending order. So, orderByResult would contain following elements after execution

StudentName: Bill, Age: 25  
StudentName: John, Age: 18  
StudentName: Ram, Age: 18  
StudentName: Ram, Age: 20  
StudentName: Ron, Age: 19  
StudentName: Steve, Age: 15 

Multiple sorting in method syntax works differently. Use ThenBy or ThenByDecending extension methods for secondary sorting.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [OrderBy & OrderByDescending - Sorting Operators](https://www.tutorialsteacher.com/linq/linq-sorting-operators-orderby-orderbydescending)