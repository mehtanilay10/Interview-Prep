# SequenceEqual - LINQ Equality Operator

There is only one equality operator: `SequenceEqual`. The `SequenceEqual` method checks whether the number of elements, value of each element and order of elements in two collections are equal or not.

If the collection contains elements of primitive data types then it compares the values and number of elements, whereas collection with complex type elements, checks the references of the objects. So, if the objects have the same reference then they considered as equal otherwise they are considered not equal.

The following example demonstrates the `SequenceEqual` method with the collection of primitive data types.

```
IList<string> strList1 = new List<string>(){"One", "Two", "Three", "Four", "Three"};

IList<string> strList2 = new List<string>(){"One", "Two", "Three", "Four", "Three"};

bool isEqual = strList1.SequenceEqual(strList2); // returns true
Console.WriteLine(isEqual);
```

Output:

true

If the order of elements are not the same then `SequenceEqual` method returns false.

```
IList<string> strList1 = new List<string>(){"One", "Two", "Three", "Four", "Three"};

IList<string> strList2 = new List<string>(){ "Two", "One", "Three", "Four", "Three"};

bool isEqual = strList1.SequenceEqual(strList2); // returns false
Console.WriteLine(isEqual);
```

Output:

false

The `SequenceEqual` extension method checks the references of two objects to determine whether two sequences are equal or not. This may give wrong result. Consider following example:

```
Student std = new Student() { StudentID = 1, StudentName = "Bill" };

IList<Student> studentList1 = new List<Student>(){ std };

IList<Student> studentList2 = new List<Student>(){ std };
       
bool isEqual = studentList1.SequenceEqual(studentList2); // returns true

Student std1 = new Student() { StudentID = 1, StudentName = "Bill" };
Student std2 = new Student() { StudentID = 1, StudentName = "Bill" };

IList<Student> studentList3 = new List<Student>(){ std1};

IList<Student> studentList4 = new List<Student>(){ std2 };
       
isEqual = studentList3.SequenceEqual(studentList4);// returns false
```

In the above example, the `studentList1` and `studentList2` contains the same student object, `std`. So `studentList1.SequenceEqual(studentList2)` returns true. But, `stdList1` and `stdList2` contains two seperate student object, `std1` and `std2`. So now, `stdList1.SequenceEqual(stdList2)` will return false even if `std1` and `std2` contain the same value.

To compare the values of two collection of complex type (reference type or object), you need to implement `IEqualityComparer<T>` interface as shown below.

```
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
        return obj.GetHashCode();
    }
}
```

Now, you can use above `StudentComparer` class in `SequenceEqual` extension method as a second parameter to compare the values:

```
IList<Student> studentList1 = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
        new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
    };

IList<Student> studentList2 = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
        new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
    };
// following returns true
bool isEqual = studentList1.SequenceEqual(studentList2, new StudentComparer());
```

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [SequenceEqual - LINQ Equality Operator](https://www.tutorialsteacher.com/linq/linq-equality-operator)