# Contains - Quantifier Operator

The Contains operator checks whether a specified element exists in the collection or not and returns a boolean.

The Contains() extension method has following two overloads. The first overload method requires a value to check in the collection and the second overload method requires additional parameter of IEqualityComparer type for custom equalality comparison.

```
public static bool Contains<TSource>(this IEnumerable<TSource> source, TSource value);public static bool Contains<TSource>(this IEnumerable<TSource> source, TSource value,IEqualityComparer<TSource> comparer);
```

As mentioned above, the Contains() extension method requires a value to check as a input parameter. Type of a value must be same as type of generic collection. The following example of Contains checks whether 10 exists in the collection or not. Please notice that `int` is a type of generic collection.

```
IList<int> intList = new List<int>() { 1, 2, 3, 4, 5 };
bool result = intList.Contains(10);  // returns false
```

```
Dim intList As IList(Of Integer) = New List(Of Integer) From {1, 2, 3, 4, 5}
Dim result = intList.Contains(10)  ' returns false
```

The above example works well with primitive data types. However, it will not work with a custom class. Consider the following example:

```
IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
        new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
    };

Student std = new Student(){ StudentID =3, StudentName = "Bill"};
bool result = studentList.Contains(std);  //returns false
```

As you can see in the above example, Contains returns false even if "Bill" exists in the studentList. This is because the Contains extension method only compares reference of an object but not the actual values of an object. So to compare values of the student object, you need to create a class by implementing IEqualityComparer interface, that compares values of two Student objects and returns boolean.

The following is a StudentComparer class that implements IEqualityComparer<Student> interface to compare values of two Students objects:

```

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
            return obj.GetHashCode();
        }
}
```

Now, you can use the above StudentComparer class in second overload method of Contains extension method that accepts second parameter of IEqualityComparer type, as below:

```
IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
        new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
    };

Student std = new Student(){ StudentID =3, StudentName = "Bill"};
bool result = studentList.Contains(std, new StudentComparer()); //<b>returns true</b>
```

Thus, you have to use comparer class in order to get corrent result from Contains extension method for custom classes.

The following is a similar example in VB.Net:

```
public class Student 
{
    public int StudentID { get; set; }
    public string StudentName { get; set; }
    public int Age { get; set; }
}

Public Class StudentComparer Implements IEqualityComparer(Of Student)

    Public Function Equals1(x As Student, y As Student) As Boolean Implements IEqualityComparer(Of Student).Equals
        If (x.StudentID = y.StudentID And x.StudentName.ToLower() = y.StudentName.ToLower()) Then
            Return True
        End If

        Return False
    End Function

    Public Function GetHashCode1(obj As Student) As Integer Implements IEqualityComparer(Of Student).GetHashCode
        Return obj.GetHashCode()
    End Function
End Class

Sub Main
    Dim studentList = New List(Of Student) From {
        New Student() With {.StudentID = 1, .StudentName = "John", .Age = 18},
        New Student() With {.StudentID = 2, .StudentName = "Steve", .Age = 15},
        New Student() With {.StudentID = 3, .StudentName = "Bill", .Age = 25},
        New Student() With {.StudentID = 4, .StudentName = "Ram", .Age = 20},
        New Student() With {.StudentID = 5, .StudentName = "Ron", .Age = 19}
    }

    Dim std As New Student With {.StudentID = 3, .StudentName = "Bill"}
    Dim result = studentList.Contains(std, New StudentComparer()) ' returns true
End Sub
```

Quantifier operators are **Not Supported** with query syntax in C# or VB.Net.

Learn about aggregate operator next.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Contains - Quantifier Operator](https://www.tutorialsteacher.com/linq/linq-quantifier-operator-contains)