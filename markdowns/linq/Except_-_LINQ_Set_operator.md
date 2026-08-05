# Except - LINQ Set operator

The `Except()` method requires two collections. It returns a new collection with elements from the first collection which do not exist in the second collection (parameter collection).

```
IList<string> strList1 = new List<string>(){"One", "Two", "Three", "Four", "Five" };
IList<string> strList2 = new List<string>(){"Four", "Five", "Six", "Seven", "Eight"};

var result = strList1.Except(strList2);

foreach(string str in result)
        Console.WriteLine(str);
```

The `Except` extension method doesn't return the correct result for the collection of complex types. You need to implement `IEqualityComparer` interface in order to get the correct result from `Except` method.

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

Now, you can pass above `StudentComparer` class in `Except` extension method in order to get the correct result:

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

var resultedCol = studentList1.Except(studentList2,new StudentComparer()); 

foreach(Student std in resultedCol)
    Console.WriteLine(std.StudentName);
```

The Except operator is **Not Supported** in C# & VB.Net Query syntax. However, you can use Distinct method on query variable or wrap whole query into brackets and then call Except().

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Except - LINQ Set operator](https://www.tutorialsteacher.com/linq/linq-set-operators-except)