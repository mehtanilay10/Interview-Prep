# Conversion Operators

The Conversion operators in LINQ are useful in converting the type of the elements in a sequence (collection). There are three types of conversion operators: **As** operators (AsEnumerable and AsQueryable), **To** operators (ToArray, ToDictionary, ToList and ToLookup), and **Casting** operators (Cast and OfType).

The following table lists all the conversion operators.

| Method | Description |
| --- | --- |
| AsEnumerable | Returns the input sequence as IEnumerable<t> |
| AsQueryable | Converts IEnumerable<T> to IQueryable, to simulate a remote query provider |
| Cast | Coverts a non-generic collection to a generic collection (IEnumerable to IEnumerable<T>) |
| [OfType](https://www.tutorialsteacher.com/linq/linq-filtering-operators-oftype) | Filters a collection based on a specified type |
| ToArray | Converts a collection to an array |
| ToDictionary | Puts elements into a Dictionary based on key selector function |
| ToList | Converts collection to List<T> |
| [ToLookup](https://www.tutorialsteacher.com/linq/linq-grouping-operator-groupby-tolookup) | Groups elements into an Lookup<TKey,TElement> |

## AsEnumerable & AsQueryable

The AsEnumerable and AsQueryable methods cast or convert a source object to IEnumerable<T> or IQueryable<T> respectively.

Consider the following example: (courtesy: [Jon Skeet](http://stackoverflow.com/a/9063184/861716))

```
class Program
{

    static void ReportTypeProperties<T>(T obj)
    {
        Console.WriteLine("Compile-time type: {0}", typeof(T).Name);
        Console.WriteLine("Actual type: {0}", obj.GetType().Name);
    }

    static void Main(string[] args)
    {
        Student[] studentArray = { 
                new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
                new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 } ,
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
                new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 31 } ,
            };   
            
        ReportTypeProperties( studentArray);
        ReportTypeProperties(studentArray.AsEnumerable());
        ReportTypeProperties(studentArray.AsQueryable());   
    }
}
```

Output:

Compile-time type: Student\[\]  
Actual type: Student\[\]  
Compile-time type: IEnumerable\`1  
Actual type: Student\[\]  
Compile-time type: IQueryable\`1  
Actual type: EnumerableQuery\`1

As you can see in the above example AsEnumerable and AsQueryable methods convert compile time type to IEnumerable and IQueryable respectively

Visit [stackoverflow](http://stackoverflow.com/questions/17968469/whats-the-differences-between-tolist-asenumerable-asqueryable) for detail information on AsEnumerable and AsQueryable method.

## Cast

Cast does the same thing as AsEnumerable<T>. It cast the source object into IEnumerable<T>.

```
class Program
{

    static void ReportTypeProperties<T>(T obj)
    {
        Console.WriteLine("Compile-time type: {0}", typeof(T).Name);
        Console.WriteLine("Actual type: {0}", obj.GetType().Name);
    }

    static void Main(string[] args)
    {
        Student[] studentArray = { 
                new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
                new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 } ,
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
                new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 31 } ,
            };   
         
        ReportTypeProperties( studentArray);
        ReportTypeProperties(studentArray.Cast<Student>());
    }
}
```

Output:

Compile-time type: Student\[\]  
Actual type: Student\[\]  
Compile-time type: IEnumerable\`1  
Actual type: Student\[\]  
Compile-time type: IEnumerable\`1  
Actual type: Student\[\]  
Compile-time type: IEnumerable\`1  
Actual type: Student\[\]  

`studentArray.Cast<Student>()` is the same as `(IEnumerable<Student>)studentArray` but Cast<Student>() is more readable.

## To Operators: ToArray(), ToList(), ToDictionary()

As the name suggests, ToArray(), ToList(), ToDictionary() method converts a source object into an array, List or Dictionary respectively.

**To** operators force the execution of the query. It forces the remote query provider to execute a query and get the result from the underlying data source e.g. SQL Server database.

```
IList<string> strList = new List<string>() { 
                                            "One", 
                                            "Two", 
                                            "Three", 
                                            "Four", 
                                            "Three" 
                                            };

string[] strArray = strList.ToArray<string>();// converts List to Array

IList<string> list = strArray.ToList<string>(); // converts array into list
```

ToDictionary - Converts a Generic list to a generic dictionary:

```
IList<Student> studentList = new List<Student>() { 
                    new Student() { StudentID = 1, StudentName = "John", age = 18 } ,
                    new Student() { StudentID = 2, StudentName = "Steve",  age = 21 } ,
                    new Student() { StudentID = 3, StudentName = "Bill",  age = 18 } ,
                    new Student() { StudentID = 4, StudentName = "Ram" , age = 20 } ,
                    new Student() { StudentID = 5, StudentName = "Ron" , age = 21 } 
                };

//following converts list into dictionary where StudentId is a key
IDictionary<int, Student> studentDict = 
                                studentList.ToDictionary<Student, int>(s =&gt; s.StudentID); 

foreach(var key in studentDict.Keys)
	Console.WriteLine("Key: {0}, Value: {1}", 
                                key, (studentDict[key] as Student).StudentName);
```

Output:

Key: 1, Value: John  
Key: 2, Value: Steve  
Key: 3, Value: Bill  
Key: 4, Value: Ram  
Key: 5, Value: Ron

The following figure shows how studentDict in the above example contains a key-value pair, where key is a StudentID and the value is Student object.

![LINQ-ToDictionary Operator](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-todictionary.webp&w=3840&q=75)

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Conversion Operators](https://www.tutorialsteacher.com/linq/linq-conversion-operators)