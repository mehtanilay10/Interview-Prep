# Configurations in Entity Framework Core

You learned about default [Conventions in EF Core](https://www.entityframeworktutorial.net/efcore/conventions-in-ef-core.aspx) in the previous chapter. Many times we want to customize the entity to table mapping and do not want to follow default conventions. EF Core allows us to configure domain classes in order to customize the EF model to database mappings. This programming pattern is referred to as [Convention over Configuration](https://en.wikipedia.org/wiki/Convention_over_configuration).

There are two ways to configure domain classes in EF Core (same as in EF 6).

1.  By using Data Annotation Attributes
2.  By using Fluent API

## Data Annotation Attributes

Data Annotations are a simple attribute-based configuration method where different .NET attributes can be applied to domain classes and properties to configure the model.

Data annotation attributes are not dedicated to Entity Framework, as they are also used in ASP.NET MVC. This is why these attributes are included in a separate namespace [*System.ComponentModel.DataAnnotations*](http://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations\(v=vs.110\).aspx).

The following example demonstrates how the data annotation attributes can be applied to a domain class and properties to override conventions.

```
[Table("StudentInfo")]
public class Student
{
    public Student() { }
        
    [Key]
    public int SID { get; set; }

    [Column("Name", TypeName="ntext")]
    [MaxLength(20)]
    public string StudentName { get; set; }

    [NotMapped]
    public int? Age { get; set; }
        
        
    public int StdId { get; set; }

    [ForeignKey("StdId")]
    public virtual Standard Standard { get; set; }
}
        
```

Data annotation attributes are the same in EF 6 and EF Core. Visit [Data Annotations](https://www.entityframeworktutorial.net/code-first/dataannotation-in-code-first.aspx) chapter in the EF 6 section for more information.

## Fluent API

Another way to configure domain classes is by using Entity Framework Fluent API. EF Fluent API is based on a Fluent API design pattern (a.k.a [Fluent Interface](https://en.wikipedia.org/wiki/Fluent_interface)) where the result is formulated by [method chaining](https://en.wikipedia.org/wiki/Method_chaining).

Learn about Fluent API in the next chapter.

---
Source: [Configurations in Entity Framework Core](https://www.entityframeworktutorial.net/efcore/configuration-in-entity-framework-core.aspx)