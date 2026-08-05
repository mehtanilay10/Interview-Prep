# C# DefaultIfEmpty

The `DefaultIfEmpty()` method returns a new collection with the default value if the given collection on which `DefaultIfEmpty()` is invoked is empty.

Another overload method of `DefaultIfEmpty()` takes a value parameter that should be replaced with default value.

Consider the following example.

```
IList<string> emptyList = new List<string>();

var newList1 = emptyList.DefaultIfEmpty(); 
var newList2 = emptyList.DefaultIfEmpty("None"); 

Console.WriteLine("Count: {0}" , newList1.Count());
Console.WriteLine("Value: {0}" , newList1.ElementAt(0));

Console.WriteLine("Count: {0}" , newList2.Count());
Console.WriteLine("Value: {0}" , newList2.ElementAt(0));
```

In the above example, `emptyList.DefaultIfEmpty()` returns a new string collection with one element whose value is null because null is a default value of string. Another method `emptyList.DefaultIfEmpty("None")` returns a string collection with one element whose value is "None" instead of null.

The following example demonstrates calling DefaultIfEmpty on int collection.

```
IList<int> emptyList = new List<int>();

var newList1 = emptyList.DefaultIfEmpty(); 
var newList2 = emptyList.DefaultIfEmpty(100);

Console.WriteLine("Count: {0}" , newList1.Count());
Console.WriteLine("Value: {0}" , newList1.ElementAt(0));

Console.WriteLine("Count: {0}" , newList2.Count());
Console.WriteLine("Value: {0}" , newList2.ElementAt(0));
```

The following example demonstrates `DefaultIfEmpty()` method on complex type collection.

```
IList<Student> emptyStudentList = new List<Student>();

var newStudentList1 = studentList.DefaultIfEmpty(new Student());
                 
var newStudentList2 = studentList.DefaultIfEmpty(new Student(){ 
                StudentID = 0, 
                StudentName = "" });

Console.WriteLine("Count: {0} ", newStudentList1.Count());
Console.WriteLine("Student ID: {0} ", newStudentList1.ElementAt(0));

Console.WriteLine("Count: {0} ", newStudentList2.Count());
Console.WriteLine("Student ID: {0} ", newStudentList2.ElementAt(0).StudentID);
```

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [C# DefaultIfEmpty](https://www.tutorialsteacher.com/linq/defaultifempty)