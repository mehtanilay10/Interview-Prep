# Aggregation Operator - Sum

The Sum() method calculates the sum of numeric items in the collection.

The following example demonstrates Sum() on primitive collection.

```
IList<int> intList = new List<int>() { 10, 21, 30, 45, 50, 87 };

var total = intList.Sum();

Console.WriteLine("Sum: {0}", total);

var sumOfEvenElements = intList.Sum(i => {
			                    if(i%2 == 0)
				                    return i;
			
			                    return 0;
		                        });

Console.WriteLine("Sum of Even Elements: {0}", sumOfEvenElements );
```

Output:

Sum: 243  
Sum of Even Elements: 90

The following example calculates sum of all student's age and also number of adult students in a student collection.

```
IList<Student> studentList = new List<Student>>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
        new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
    };

var sumOfAge = studentList.Sum(s => s.Age);

Console.WriteLine("Sum of all student's age: {0}", sumOfAge);
		
var numOfAdults = studentList.Sum(s => {
			
	if(s.Age >= 18)
	    return 1;
	else
	    return 0;
});
 
Console.WriteLine("Total Adult Students: {0}", numOfAdults);
```

```
// Student collection
Dim studentList = New List(Of Student) From {
        New Student() With {.StudentID = 1, .StudentName = "John", .Age = 13},
        New Student() With {.StudentID = 2, .StudentName = "Moin", .Age = 21},
        New Student() With {.StudentID = 3, .StudentName = "Bill", .Age = 18},
        New Student() With {.StudentID = 4, .StudentName = "Ram", .Age = 20},
        New Student() With {.StudentID = 5, .StudentName = "Ron", .Age = 15}
}

Dim sumOfAge = studentList.Sum(Function(s) s.Age)

Console.WriteLine("Total Age of Student: {0}", sumOfAge)

Dim numOfAdults = studentList.Sum(Function(s) 
            if(s.Age >= 18)
                return 1
            else
                return 0
            end if
        end function)
            
Console.WriteLine("Total Adult Students: {0}", numOfAdults)
```

Output:

Total Age of Student: 87  
Total Adult Students: 3

## Sum operator in query syntax

Sum operator is **Not Supported** in C# Query syntax.

```
// Student collection
Dim studentList = New List(Of Student) From {
        New Student() With {.StudentID = 1, .StudentName = "John", .Age = 13},
        New Student() With {.StudentID = 2, .StudentName = "Moin", .Age = 21},
        New Student() With {.StudentID = 3, .StudentName = "Bill", .Age = 18},
        New Student() With {.StudentID = 4, .StudentName = "Ram", .Age = 20},
        New Student() With {.StudentID = 5, .StudentName = "Ron", .Age = 15}
}

Dim totalAge = Aggregate st In studentList Into Sum(st.Age)

Console.WriteLine("Sum of all student's age: {0}", totalAge);
```

Output:

Sum of all student's age: 87

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Aggregation Operator - Sum](https://www.tutorialsteacher.com/linq/linq-aggregation-operator-sum)