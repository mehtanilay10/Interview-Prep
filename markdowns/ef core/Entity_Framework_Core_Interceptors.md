# Entity Framework Core Interceptors

Entity Framework Core (EF Core) interceptors allow interception, modification and suppression of EF Core operations. Some examples include executing a command, call to SaveChanges and so on. You can download the source code from my [GitHub repository](https://github.com/yogyogi/Entity-Framework-Core-Interceptors).

Page Contents

## Registering Interceptors

Interceptors are registered on DbContext.OnConfiguring method.

```
private static readonly TaggedQueryCommandInterceptor _interceptor
    = new TaggedQueryCommandInterceptor();

protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    => optionsBuilder.AddInterceptors(_interceptor);
```

## Database Interceptor

We will now create a Database interceptor which intercepts the DbCommand operation. It will modify SQL before it is sent to the database.

Inside the Models folder create an interceptor class called TaggedQueryCommandInterceptor.cs whose code is given below.

```
public class TaggedQueryCommandInterceptor : DbCommandInterceptor
{
    public override InterceptionResult<DbDataReader> ReaderExecuting(
        DbCommand command,
        CommandEventData eventData,
        InterceptionResult<DbDataReader> result)
    {
        ManipulateCommand(command);

        return result;
    }

    public override ValueTask<InterceptionResult<DbDataReader>> ReaderExecutingAsync(
        DbCommand command,
        CommandEventData eventData,
        InterceptionResult<DbDataReader> result,
        CancellationToken cancellationToken = default)
    {
        ManipulateCommand(command);

        return new ValueTask<InterceptionResult<DbDataReader>>(result);
    }

    private static void ManipulateCommand(DbCommand command)
    {
        if (command.CommandText.StartsWith("-- Use hint: robust plan", StringComparison.Ordinal))
        {
            command.CommandText += " OPTION (ROBUST PLAN)";
        }
    }
}
```

Let’s explain the working of this interceptor. The interceptor implements the `Executing` methods (ReaderExecuting and ReaderExecutingAsync) which are called by EF Core with the generated SQL before it is sent to the database. There are also Executed method (we have not implemented here), which are called after the database call has returned.

The interceptor inherits from an abstract class called DbCommandInterceptor and implements both sync and async methods. Inside each of these method the same query hint is applied to queries which is `" OPTION (ROBUST PLAN)"`.

We have an entity class called Student.cs with the following code:

```
public class Student 
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Standard { get; set; }
}
```

On fetching all the students with the following 2 EF Core queries.

```
var dept1 = context.Student.TagWith("Use hint: robust plan").ToList();

var dept2 = context.Student.TagWith("Use hint: robust plan").ToListAsync();
```

The tag is detected by the interceptor then the query SQL is modified as shown below.

```
-- Use hint: robust plan

SELECT [s].[Id], [s].[Name], [s].[Standard]
FROM [Student] AS [s] OPTION (ROBUST PLAN)
```

## Interception for Caching

Interceptors can be implemented with caching in such a way that database is queried only on certain times and on the rest of the time the cached result is used. This will greatly reduce the number of database calls made by the app.

Here is an example to understand this concept. First inside the Models folder add the DailyMessage.cs class as shown below.

```
public class DailyMessage
{
    public int Id { get; set; }
    public string Message { get; set; }
}
```

Next, create a new class called CachingCommandInterceptor.cs inside the Models folder. It will serve as an interceptor for caching. It’s code is given below.

```
using Microsoft.EntityFrameworkCore.Diagnostics;
using System.Data.Common;

namespace Interceptors.Models
{
    public class CachingCommandInterceptor : DbCommandInterceptor
    {
        #region InterceptorState
        private readonly object _lock = new object();
        private int _id;
        private string _message;
        private DateTime _queriedAt;
        #endregion

        #region ReaderExecutingAsync
        public override ValueTask<InterceptionResult<DbDataReader>> ReaderExecutingAsync(
            DbCommand command,
            CommandEventData eventData,
            InterceptionResult<DbDataReader> result,
            CancellationToken cancellationToken = default)
        {
            if (command.CommandText.StartsWith("-- Get_Daily_Message", StringComparison.Ordinal))
            {
                lock (_lock)
                {
                    if (_message != null
                        && DateTime.UtcNow < _queriedAt + new TimeSpan(0, 0, 10))
                    {
                        command.CommandText = "-- Get_Daily_Message: Skipping DB call; using cache.";
                        result = InterceptionResult<DbDataReader>.SuppressWithResult(new CachedDailyMessageDataReader(_id, _message));
                    }
                }
            }

            return new ValueTask<InterceptionResult<DbDataReader>>(result);
        }
        #endregion

        #region ReaderExecutedAsync
        public override async ValueTask<DbDataReader> ReaderExecutedAsync(
            DbCommand command,
            CommandExecutedEventData eventData,
            DbDataReader result,
            CancellationToken cancellationToken = default)
        {
            if (command.CommandText.StartsWith("-- Get_Daily_Message", StringComparison.Ordinal)
                && !(result is CachedDailyMessageDataReader))
            {
                try
                {
                    await result.ReadAsync(cancellationToken);

                    lock (_lock)
                    {
                        _id = result.GetInt32(0);
                        _message = result.GetString(1);
                        _queriedAt = DateTime.UtcNow;
                        return new CachedDailyMessageDataReader(_id, _message);
                    }
                }
                finally
                {
                    await result.DisposeAsync();
                }
            }

            return result;
        }
        #endregion
    }
}
```

Also add a new class called CachedDailyMessageDataReader.cs inside the models folder which will return the cached data.

```
using System.Collections;
using System.Data.Common;

namespace Interceptors.Models
{
    public class CachedDailyMessageDataReader : DbDataReader
    {
        private readonly int _id;
        private readonly string _message;
        private bool _read;

        public CachedDailyMessageDataReader(int id, string message)
        {
            _id = id;
            _message = message;
        }

        public override int FieldCount
            => throw new NotImplementedException();

        public override int RecordsAffected
            => 0;

        public override bool HasRows
            => throw new NotImplementedException();

        public override bool IsClosed
            => throw new NotImplementedException();

        public override int Depth
            => throw new NotImplementedException();

        public override bool Read()
            => _read = !_read;

        public override int GetInt32(int ordinal)
            => _id;

        public override bool IsDBNull(int ordinal)
            => false;

        public override string GetString(int ordinal)
            => _message;

        public override bool GetBoolean(int ordinal)
            => throw new NotImplementedException();

        public override byte GetByte(int ordinal)
            => throw new NotImplementedException();

        public override long GetBytes(int ordinal, long dataOffset, byte[] buffer, int bufferOffset, int length)
            => throw new NotImplementedException();

        public override char GetChar(int ordinal)
            => throw new NotImplementedException();

        public override long GetChars(int ordinal, long dataOffset, char[] buffer, int bufferOffset, int length)
            => throw new NotImplementedException();

        public override string GetDataTypeName(int ordinal)
            => throw new NotImplementedException();

        public override DateTime GetDateTime(int ordinal)
            => throw new NotImplementedException();

        public override decimal GetDecimal(int ordinal)
            => throw new NotImplementedException();

        public override double GetDouble(int ordinal)
            => throw new NotImplementedException();

        public override Type GetFieldType(int ordinal)
            => throw new NotImplementedException();

        public override float GetFloat(int ordinal)
            => throw new NotImplementedException();

        public override Guid GetGuid(int ordinal)
            => throw new NotImplementedException();

        public override short GetInt16(int ordinal)
            => throw new NotImplementedException();

        public override long GetInt64(int ordinal)
            => throw new NotImplementedException();

        public override string GetName(int ordinal)
            => throw new NotImplementedException();

        public override int GetOrdinal(string name)
            => throw new NotImplementedException();

        public override object GetValue(int ordinal)
            => throw new NotImplementedException();

        public override int GetValues(object[] values)
            => throw new NotImplementedException();

        public override object this[int ordinal]
            => throw new NotImplementedException();

        public override object this[string name]
            => throw new NotImplementedException();

        public override bool NextResult()
            => throw new NotImplementedException();

        public override IEnumerator GetEnumerator()
            => throw new NotImplementedException();
    }
}
```

Explanation

This interceptor class called CachingCommandInterceptor.cs stores the ID and message text of the most recent daily message queried, plus the time when that query was executed.

```
private int _id;
private string _message;
private DateTime _queriedAt;
```

In the ReaderExecutingAsync() method, which is executed before making a database call, the interceptor detects the tagged query and then checks if there is a cached result. If the result is found, the query is suppressed and cached results are used instead. Notice the cached duration is 10 seconds and after that it expires.

```
if (command.CommandText.StartsWith("-- Get_Daily_Message", StringComparison.Ordinal))
{
    lock (_lock)
    {
        if (_message != null
            && DateTime.UtcNow < _queriedAt + new TimeSpan(0, 0, 10))
        {
            command.CommandText = "-- Get_Daily_Message: Skipping DB call; using cache.";
            result = InterceptionResult<DbDataReader>.SuppressWithResult(new CachedDailyMessageDataReader(_id, _message));
        }
    }
}
```

Also see the code calls `InterceptionResult.SuppressWithResult` that passes a replacement DbDataReader containing the cached data. This is CachedDailyMessageDataReader.cs. This InterceptionResult is then returned, causing suppression of query execution. The replacement reader is instead used by EF Core as the results of the query.

Next, see the below code given inside the ReaderExecutedAsync method.

```
if (command.CommandText.StartsWith("-- Get_Daily_Message", StringComparison.Ordinal)
    && !(result is CachedDailyMessageDataReader))
{
    try
    {
        await result.ReadAsync(cancellationToken);

        lock (_lock)
        {
            _id = result.GetInt32(0);
            _message = result.GetString(1);
            _queriedAt = DateTime.UtcNow;
            return new CachedDailyMessageDataReader(_id, _message);
        }
    }
    finally
    {
        await result.DisposeAsync();
    }
}
```

If cached message is unavailable, or expired, then the code does not suppress the result and EF Core will execute the database query. So will return to the interceptor’s Executed method after execution.

At this point if the result is not already a cached reader, then the new message ID and string is extracted from the real reader and cached ready for the next use of this query.

We also need to register the interceptor on DbContext.OnConfiguring method.

```
private static readonly CachingCommandInterceptor _cachingInterceptor
= new CachingCommandInterceptor();

protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    => optionsBuilder.AddInterceptors(_cachingInterceptor);
```

We can now test the code. The table DailyMessage already as an entry – “Better late than never”. Now on the action method we run the following code.

```
public async Task<IActionResult> ICAsync()
{
    var a = await GetDailyMessage();

    context.Add(new DailyMessage { Message = "Free food for dogs & cats" });
    await context.SaveChangesAsync();

    var b = await GetDailyMessage();

    Console.WriteLine(await GetDailyMessage());

    Console.WriteLine(await GetDailyMessage());

    return RedirectToAction("Index", "Home");
}

async Task<string> GetDailyMessage()
    => (await context.DailyMessages.TagWith("Get_Daily_Message").OrderBy(e => e.Id).LastAsync()).Message;
```

Since the cached duration is 10 seconds so even though we inserted a new message “Free food for dogs & cats” the older message “Better late than never” is shown on the console. If we call the action method after 10 seconds then cache is expired and in that case new message from the database is fetched and we see “Free food for dogs & cats”. The cached duration of 10 seconds is set by the code given below.

```
if (_message != null
            && DateTime.UtcNow < _queriedAt + new TimeSpan(0, 0, 10))
```

The console message are shown below, the second one is called after 10 seconds so it shows the newest message from the database. This is because the cached has expired at that time.

```
info: 20-12-2025 17:13:06.121 RelationalEventId.CommandExecuted[20101] (Microsoft.EntityFrameworkCore.Database.Command)
      Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      -- Get_Daily_Message: Skipping DB call; using cache.
Better late than never

info: 20-12-2025 17:13:15.769 RelationalEventId.CommandExecuted[20101] (Microsoft.EntityFrameworkCore.Database.Command)
      Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
      -- Get_Daily_Message: Skipping DB call; using cache.
Free food for dogs & cats
```

Conclusion

This concludes the tutorial on Interceptors in ASP.NET Core. You can download the source code for this from the GitHub repo the link is given at the top.

---
Source: [Entity Framework Core Interceptors](https://www.yogihosting.com/interceptors-entity-framework-core/)