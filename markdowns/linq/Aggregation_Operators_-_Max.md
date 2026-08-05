# Aggregation Operators - Max

## Aggregation Operator: Max

The Max() method returns the largest numeric element from a collection.

The following example demonstrates Max() on primitive collection.

```
IList<int> intList = new List<int>() { 10, 21, 30, 45, 50, 87 };

var largest = intList.Max();

Console.WriteLine("Largest Element: {0}", largest);

var largestEvenElements = intList.Max(i => {
			                        if(i%2 == 0)
				                        return i;
			
			                        return 0;
		                        });

Console.WriteLine("Largest Even Element: {0}", largestEvenElements );
```

Output:

Largest Element: 87  
Largest Even Element: 50

The following example demonstrates Max() method on the complex type collection.

```
IList<Student> studentList = new List<Student>>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
        new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
    };

var oldest = studentList.Max(s => s.Age);

Console.WriteLine("Oldest Student Age: {0}", oldest);
```

```
Dim studentList = New List(Of Student) From {
        New Student() With {.StudentID = 1, .StudentName = "John", .Age = 13},
        New Student() With {.StudentID = 2, .StudentName = "Moin", .Age = 21},
        New Student() With {.StudentID = 3, .StudentName = "Bill", .Age = 18},
        New Student() With {.StudentID = 4, .StudentName = "Ram", .Age = 20},
        New Student() With {.StudentID = 5, .StudentName = "Ron", .Age = 15}
}

Dim oldest = studentList.Max(Function(s) s.Age)

Console.WriteLine("Oldest Student Age: {0}", oldest)
```

Output:

Oldest Student Ag: 21

Max returns a result of any data type. The following example shows how you can find a student with the longest name in the collection:

```
public class Student : IComparable<Student> 
{
    public int StudentID { get; set; }
    public string StudentName { get; set; }
    public int Age { get; set; }
    public int StandardID { get; set; }

    public int CompareTo(Student other)
    {
        if (this.StudentName.Length >= other.StudentName.Length)
            return 1;

        return 0;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Student collection
        IList<Student> studentList = new List<Student>>() { 
                new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
                new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
                new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
                new Student() { StudentID = 5, StudentName = "Steve" , Age = 15 } 
            };

        var studentWithLongName = studentList.Max();

        Console.WriteLine("Student ID: {0}, Student Name: {1}", 
                                        .StudentID, studentWithLongName.StudentName)
    }
}
```

Output:

Student ID: 5, Student Name: Steve

You can use Min extension method/operator the same way as Max.

As per the above example, to find the student with the longest name, you need to implement IComparable<T> interface and compare student names' length in CompareTo method. So now, you can use Max() method which will use CompareTo method in order to return appropriate result.

## Max Operator in Query Syntax

Max operator is **Not Supported** in C# Query syntax. However, it is supported in VB.Net query syntax as shown below.

```
Dim studentList = New List(Of Student) From {
        New Student() With {.StudentID = 1, .StudentName = "John", .Age = 13},
        New Student() With {.StudentID = 2, .StudentName = "Moin", .Age = 21},
        New Student() With {.StudentID = 3, .StudentName = "Bill", .Age = 18},
        New Student() With {.StudentID = 4, .StudentName = "Ram", .Age = 20},
        New Student() With {.StudentID = 5, .StudentName = "Ron", .Age = 15}
}

Dim maxAge = Aggregate st In studentList Into Max(st.Age)

Console.WriteLine("Maximum Age of Student: {0}", maxAge);
```

Output:

Maximum Age of Student: 21

Learn about another aggregate operator - Sum in the next section.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Aggregation Operators - Max](https://www.tutorialsteacher.com/linq/linq-aggregation-operator-max)