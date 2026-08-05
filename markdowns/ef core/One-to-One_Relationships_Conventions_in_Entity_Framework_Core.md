# One-to-One Relationships Conventions in Entity Framework Core

Entity Framework Core introduced default conventions which automatically configure a One-to-One relationship between two entities (EF 6.x or prior does not support conventions for One-to-One relationship).

In EF Core, a one-to-one relationship requires a reference navigation property at both sides. The following `Student` and `StudentAddress` entities follow the convention for the one-to-one relationship.

```
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
       
    public StudentAddress Address { get; set; }
}

public class StudentAddress
{
    public int StudentAddressId { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }

    public int StudentId { get; set; }
    public Student Student { get; set; }
}
```

In the example above, the `Student` entity includes a reference navigation property of type `StudentAddress` and the `StudentAddress` entity includes a foreign key property `StudentId` and its corresponding reference property `Student`. This will result in a one-to-one relationship in corresponding tables `Students` and `StudentAddresses` in the database, as shown below.

[![one to one convention](https://www.entityframeworktutorial.net/images/efcore/onetoone-convention.png)](https://www.entityframeworktutorial.net/images/efcore/onetoone-convention.png)

EF Core creates a unique index on the NotNull foreign key column `StudentId` in the `StudentAddresses` table, as shown above. This ensures that the value of the foreign key column `StudentId` must be unique in the `StudentAddress` table, which is necessary for a one-to-one relationship.

**Note:** Unique constraint is supported in Entity Framework Core but not in EF 6 and that's why EF Core includes conventions for one-to-one relationship but not EF 6.x.

Use Fluent API to configure one-to-one relationships if entities do not follow the conventions.

### Further Reading

-   [Configure one-to-one relationship using Fluent API](https://www.entityframeworktutorial.net/efcore/configure-one-to-one-relationship-using-fluent-api-in-ef-core.aspx)

-   [Configure one-to-many relationship using Fluent API](https://www.entityframeworktutorial.net/efcore/one-to-many-conventions-entity-framework-core.aspx)
-   [Configure many-to-many relationship using Fluent API](https://www.entityframeworktutorial.net/efcore/configure-many-to-many-relationship-in-ef-core.aspx)

---
Source: [One-to-One Relationship Conventions in Entity Framework Core](https://www.entityframeworktutorial.net/efcore/one-to-one-conventions-entity-framework-core.aspx)