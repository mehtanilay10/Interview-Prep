# Intersect - Set operator

The `Intersect` extension method requires two collections. It returns a new collection that includes common elements that exists in both the collection. Consider the following example.

```
IList<string> strList1 = new List<string>() { "One", "Two", "Three", "Four", "Five" };
IList<string> strList2 = new List<string>() { "Four", "Five", "Six", "Seven", "Eight"};

var result = strList1.Intersect(strList2);

foreach(string str in result)
        Console.WriteLine(str);
```

The `Intersect` extension method doesn't return the correct result for the collection of complex types. You need to implement `IEqualityComparer` interface in order to get the correct result from `Intersect` method.

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
        if (x.StudentID == y.StudentID && 
                        x.StudentName.ToLower() == y.StudentName.ToLower())
            return true;

        return false;
    }

    public int GetHashCode(Student obj)
    {
        return obj.StudentID.GetHashCode();
    }
}
```

Now, you can pass above `StudentComparer` class in the `Intersect` extension method in order to get the correct result:

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

var resultedCol = studentList1.Intersect(studentList2, new StudentComparer()); 

foreach(Student std in resultedCol)
    Console.WriteLine(std.StudentName);
```

The Intersect operator is **Not Supported** in C# & VB.Net Query syntax. However, you can use the Intersect method on a query variable or wrap whole query into brackets and then call Intersect().

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Intersect - Set operator](https://www.tutorialsteacher.com/linq/linq-set-operators-intersect)