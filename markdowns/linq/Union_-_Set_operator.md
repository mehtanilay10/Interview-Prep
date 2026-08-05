# Union - Set operator

The `Union` extension method requires two collections and returns a new collection that includes distinct elements from both the collections. Consider the following example.

```
IList<string> strList1 = new List<string>() { "One", "Two", "three", "Four" };
IList<string> strList2 = new List<string>() { "Two", "THREE", "Four", "Five" };

var result = strList1.Union(strList2);

foreach(string str in result)
        Console.WriteLine(str);
```

The `Union` extension method doesn't return the correct result for the collection of complex types. You need to implement `IEqualityComparer` interface in order to get the correct result from `Union` method.

```
public class Student 
{
    public int StudentID { get; set; }
    public string StudentName { get; set; }
    public int Age { get; set; }
}

class StudentComparer : IEqualityComparer<Student>
{
    public bool Equals(Student x, Student y)
    {
        if (x.StudentID == y.StudentID && x.StudentName.ToLower() == y.StudentName.ToLower())
            return true;

        return false;
    }

    public int GetHashCode(Student obj)
    {
        return obj.StudentID.GetHashCode();
    }
}
```

Now, you can pass above `StudentComparer` class in the `Union` extension method to get the correct result:

```
IList<Student> studentList1 = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
        new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
    };

IList<Student> studentList2 = new List<Student>() { 
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
    };

var resultedCol = studentList1.Union(studentList2, new StudentComparer()); 

foreach(Student std in resultedCol)
    Console.WriteLine(std.StudentName);
```

The `Union` operator is **Not Supported** in C# & VB.Net Query syntax. However, you can use `Union` method on query variable or wrap whole query into brackets and then call `Union()`.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Union - Set operator](https://www.tutorialsteacher.com/linq/linq-set-operators-union)