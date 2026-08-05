# Filtering Operator - where

Filtering operators in LINQ filter the sequence (collection) based on some given criteria.

The following table lists all the filtering operators available in LINQ.

| Filtering Operators | Description |
| --- | --- |
| [Where](https://www.tutorialsteacher.com/linq/linq-filtering-operators-where#where) | Returns values from the collection based on a predicate function. |
| [OfType](https://www.tutorialsteacher.com/linq/linq-filtering-operators-oftype) | Returns values from the collection based on a specified type. However, it will depend on their ability to cast to a specified type. |

## Where

The Where operator (Linq extension method) filters the collection based on a given criteria expression and returns a new collection. The criteria can be specified as lambda expression or Func delegate type.

The **Where** extension method has following two overloads. Both overload methods accepts a [Func delegate](https://www.tutorialsteacher.com/csharp/csharp-func-delegate) type parameter. One overload required Func<TSource,bool> input parameter and second overload method required Func<TSource, int, bool> input parameter where int is for index:

```
public static IEnumerable<TSource> Where<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate); public static IEnumerable<TSource> Where<TSource>(this IEnumerable<TSource> source, Func<TSource, int, bool> predicate);
```

### Where clause in Query Syntax

The following query sample uses a Where operator to filter the students who is teen ager from the given collection (sequence). It uses a lambda expression as a predicate function.

```
IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
        new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
    };

var filteredResult = from s in studentList
                    where s.Age > 12 && s.Age < 20
                    select s.StudentName;
```

```
Dim studentList = New List(Of Student) From {
        New Student() With {.StudentID = 1, .StudentName = "John", .Age = 13},
        New Student() With {.StudentID = 2, .StudentName = "Moin", .Age = 21},
        New Student() With {.StudentID = 3, .StudentName = "Bill", .Age = 18},
        New Student() With {.StudentID = 4, .StudentName = "Ram", .Age = 20},
        New Student() With {.StudentID = 5, .StudentName = "Ron", .Age = 15}
    }

Dim filteredResult = From s In studentList
                     Where s.Age > 12 And s.Age < 20
                     Select s.StudentName
```

In the above example, filteredResult will include following students after query execution.

John  
Bill  
Ron

In the above sample query, the lambda expression body `**s.Age > 12 && s.Age < 20**` is passed as a predicate function `**Func<TSource, bool>**` that evaluates every student in the collection.

Alternatively, you can also use a Func type delegate with an anonymous method to pass as a predicate function as below (output would be the same):

```
Func<Student,bool> isTeenAger = delegate(Student s) { 
                                    return s.Age > 12 && s.Age < 20; 
                                };

var filteredResult = from s in studentList
                     where isTeenAger(s)
                     select s;
```

You can also call any method that matches with Func parameter with one of Where() method overloads.

```
public static void Main()
{
    var filteredResult = from s in studentList
                         where isTeenAger(s)
                         select s;
}

public static bool IsTeenAger(Student stud)
{
    return stud.Age > 12 && stud.Age < 20;  
}
```

### Where extension method in Method Syntax

Unlike the query syntax, you need to pass whole lambda expression as a predicate function instead of just body expression in LINQ method syntax.

```
var filteredResult = studentList.Where(s => s.Age > 12 && s.Age < 20);
```

```
Dim filteredResult = studentList.Where(Function(s) s.Age > 12 And s.Age < 20 )
```

As mentioned above, the **Where** extension method also have second overload that includes index of current element in the collection. You can use that index in your logic if you need.

The following example uses the Where clause to filter out odd elements in the collection and return only even elements. Please remember that index starts from zero.

```
IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
        new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
    };

    var filteredResult = studentList.Where((s, i) => { 
            if(i % 2 ==  0) // if it is even element
                return true;
                
        return false;
    });

foreach (var std in filteredResult)
        Console.WriteLine(std.StudentName);
```

 

Output:

John  
Bill  
Ron

### Multiple Where clause

You can call the Where() extension method more than one time in a single LINQ query.

```
var filteredResult = from s in studentList
                    where s.Age > 12
                    where s.Age < 20
                    select s;
```

```
var filteredResult = studentList.Where(s => s.Age > 12).Where(s => s.Age < 20);
```

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Filtering Operator - where](https://www.tutorialsteacher.com/linq/linq-filtering-operators-where)