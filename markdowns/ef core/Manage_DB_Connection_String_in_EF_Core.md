# Manage DB Connection String in EF Core

Here you will learn the formats of connection strings and the ways to use them in the Entity Framework Core 6/7 application.

## Database Connection String Formats

The most common format of a connection string in EF Core is:

```
Server={server_address};Database={database_name};UserId={username};Password={password};

```

Replace {server\_address}, {database\_name}, {username}, and {password} with your specific database credentials. For example, the following connection string is for the local database "SchoolDB":

```
"Server=(localdb)\\mssqllocaldb;Database=SchoolDb;UserId=myuserid;Password=mypwd;"

```

In case you have integrated security enabled (Windows authentication), you can use "Trusted\_Connection=True;" instead of specifying the username and password, as shown below.

```
Server={server_address};Database={database_name}; Trusted_Connection={true or false};

```

For our local SQL Server and SchoolDb database:

```
"Server=(localdb)\\mssqllocaldb;Database=SchoolDb; Trusted_Connection=True;"

```

If you use your local SQL Server Express database then you can use the following connection string with windows authentication:

```
"Server=.\SQLEXPRESS;Database=SchoolDb;Trusted_Connection=True;"

```

Another format of the connection string is:

```
"Data Source={server_address};Initial Catalog={database_name};Integrated Security=True;" 

```

This format allows for Windows authentication, which means you do not need to provide the username and password. Instead, the connection will be authenticated using the current Windows user credentials.

## Manage Connection String in EF Core

There are several ways to manage connection strings in EF Core 6/7.

## Hardcoding Connection String

Use the `DbContextOptionsBuilder` class and configure the connection string directly in the `OnConfiguring` method of your `DbContext` class. This allows you to hardcode the connection string within your code, as shown below.

```
public class SchoolContext : DbContext
{       

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=SchoolDb;Trusted_Connection=True;");
    }
} 
```

## appsettings.json file

Another approach is to store the connection string in the appsettings.json file and retrieve it using the configuration API. This allows for easy configuration and flexibility, as the connection string can be changed without modifying the code.

If your project doesn't already have it, add Microsoft.Extensions.Configuration NuGet package to your project.

```
{
    "ConnectionStrings": {
        "SchoolDBLocalConnection": "Server=(localdb)\\mssqllocaldb;Database=SchoolDb;Trusted_Connection=True;"
    }
}
```

Now, you need to install `Microsoft.Extensions.Configuration` and `Microsoft.Extensions.Configuration.Json` NuGet package to your project.

After installing the package, you need to build the configuration by adding appsettings.json file, as shown below.

```
var configuration = new ConfigurationBuilder()
    .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .Build();

```

You also need to add a constructor which accepts the `IConfiguration` object, as shown below.

```
public class SchoolContext : DbContext
{       
     IConfiguration appConfig;

     public SchoolDbContext(IConfiguration config)
     {
         appConfig = config;
     }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(appConfig.GetConnectionString("SchoolDBLocalConnection"));
    }
} 
```

Now, you can pass the configuration when you create an object of DbContext, as shown below:

```
using (var context = new SchoolDbContext(configuration))
{

}
    
```

## Store Connection String in Environment Variables

Store the connection string as an environment variable on the server where your application runs. You can retrieve it using `Environment.GetEnvironmentVariable()` method, as shown below.

```
public class SchoolContext : DbContext
{       
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(Environment.GetEnvironmentVariable("YourConnectionStringEnvVar"));
    }
} 
```

## Secrets Management of Cloud

For cloud-based applications, use services like Azure Key Vault or AWS Secrets Manager to securely store and retrieve connection strings. EF Core can be configured to use these services for connection string management.

---
Source: [Database Connection String in Entity Framework Core](https://www.entityframeworktutorial.net/efcore/db-connection-strings.aspx)