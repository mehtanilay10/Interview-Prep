# How to Call Web API from jQuery [ASP.NET Core Edition]

In my **[ASP.NET Core tutorial on Web API](https://www.yogihosting.com/aspnet-core-api-controllers/)** I created a REST Web API having GET, POST, PUT and DELETE methods. This API was performing CRUD operations on Reservation objects. Now in this tutorial I will **Call this Web API from jQuery**. I will use jQuery AJAX to pass **Parameters and Credentials** to the Web API. So let’s get started.

Make sure to keep the Web API project in running state so that the API can be called by jQuery code.

Page Contents

## Call Web API GET Method from jQuery

The Web API GET method returns all the Reservations. This method is shown below:

```
[HttpGet]
public IEnumerable<Reservation> Get()
{
//…
}
```

Now let us **Call this Web API GET Method from jQuery**. So, create an HTML page called AllReservation.html where all the reservations will be shown. These Reservations will be provided by the **Web API** and then will be shown in an HTML table.

In this html page create a table as shown below:

```
<table class="table table-sm table-striped table-bordered m-2">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Start Location</th>
            <th>End Location</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
```

Notice I specifically kept the tbody element empty. This is because by using jQuery I will show the reservations inside it.

Next, add the following **jQuery AJAX Code** to the page:

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

41

42

43

44 | `$(document).ready(``function` `() {`

    `ShowAllReservation();`

    `function` `ShowAllReservation() {`

        `$(``"table tbody"``).html(``""``);`

        `$.ajax({`

            `url:` `"https://localhost:44324/api/Reservation"``,`

            `type:` `"get"``,`

            `contentType:` `"application/json"``,`

            `success:` `function` `(result, status, xhr) {`

                `$.each(result,` `function` `(index, value) {`

                    `$(``"tbody"``).append($(``"<tr>"``));`

                    `appendElement = $(``"tbody tr"``).last();`

                    `appendElement.append($(``"<td>"``).html(value[``"id"``]));`

                    `appendElement.append($(``"<td>"``).html(value[``"name"``]));`

                    `appendElement.append($(``"<td>"``).html(value[``"startLocation"``]));`

                    `appendElement.append($(``"<td>"``).html(value[``"endLocation"``]));`

                    `appendElement.append($(``"<td>"``).html(``"<a href=\"UpdateReservation.html?id="` `+ value[``"id"``] +` `"\"><img src=\"icon/edit.png\" /></a>"`

                    `appendElement.append($(``"<td>"``).html(``"<img class=\"delete\" src=\"icon/close.png\" />"``));`

                `});`

            `},`

            `error:` `function` `(xhr, status, error) {`

                `console.log(xhr)`

            `}`

        `});`

    `}`

    `$(``"table"``).on(``"click"``,` `"img.delete"``,` `function` `() {`

        `var` `reservationId = $(``this``).parents(``"tr"``).find(``"td:nth-child(1)"``).text();`

        `$.ajax({`

            `url:` `"https://localhost:44324/api/Reservation/"` `+ reservationId,`

            `type:` `"delete"``,`

            `contentType:` `"application/json"``,`

            `success:` `function` `(result, status, xhr) {`

                `ShowAllReservation();`

            `},`

            `error:` `function` `(xhr, status, error) {`

                `console.log(xhr)`

            `}`

        `});`

    `});`

`});` |

Explanation

I created a JavaScript function called ShowAllReservation() which contain the [jQuery .ajax() method](https://www.yogihosting.com/jquery-ajax/). With this AJAX method the Web API is consumed.

Notice I am making an **HTTP GET type AJAX Request** to the GET method of the Web API whose URL is https://localhost:44324/api/Reservation.

The reservations are send by the **API in JSON** and they look like:

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20 | `[`

  `{`

    `"id"``: 1,`

    `"name"``:` `"Ankit"``,`

    `"startLocation"``:` `"New York"``,`

    `"endLocation"``:` `"Beijing"`

  `},`

  `{`

    `"id"``: 2,`

    `"name"``:` `"Bobby"``,`

    `"startLocation"``:` `"New Jersey"``,`

    `"endLocation"``:` `"Boston"`

  `},`

  `{`

    `"id"``: 3,`

    `"name"``:` `"Jacky"``,`

    `"startLocation"``:` `"London"``,`

    `"endLocation"``:` `"Paris"`

  `}`

`]` |

Next, check the success callback of the .ajax() method, where I loop through this JSON (with .each method) and showing the values inside the tbody element of the table.

I also added an anchor and an img elements for performing the update and delete actions on the reservations. You will see this in just a moment.

| 1

2

3

4

5

6

7

8

9

10 | `$.each(result,` `function` `(index, value) {`

    `$(``"tbody"``).append($(``"<tr>"``));`

    `appendElement = $(``"tbody tr"``).last();`

    `appendElement.append($(``"<td>"``).html(value[``"id"``]));`

    `appendElement.append($(``"<td>"``).html(value[``"name"``]));`

    `appendElement.append($(``"<td>"``).html(value[``"startLocation"``]));`

    `appendElement.append($(``"<td>"``).html(value[``"endLocation"``]));`

    `appendElement.append($(``"<td>"``).html(``"<a href=\"UpdateReservation.html?id="` `+ value[``"id"``] +` `"\"><img src=\"icon/edit.png\" /></a>"`

    `appendElement.append($(``"<td>"``).html(``"<img class=\"delete\" src=\"icon/close.png\" />"``));`

`});` |

Test the functionality

Double click the AllReservation.html file to open it in your browser. It will show all the reservation fetched from the **Web API** and displayed on the table. Check the below image:

![Call Web API jQuery](https://www.yogihosting.com/wp-content/uploads/2019/11/all-reservations.png "Call Web API in jQuery to fetch all Reservations")

## Call Web API DELETE Method from jQuery

The Web API Delete method is:

```
[HttpDelete("{id}")]
public void Delete(int id) => repository.DeleteReservation(id);
```

To the same AllReservation.html file I also created a click event for the img tag that has a delete class. Then inside this event I will make a **Call to the Web API Delete method** and this will delete a particular reservation. The code which does this work is given below:

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15 | `$(``"table"``).on(``"click"``,` `"img.delete"``,` `function` `() {`

    `var` `reservationId = $(``this``).parents(``"tr"``).find(``"td:nth-child(1)"``).text();`

    `$.ajax({`

        `url:` `"https://localhost:44324/api/Reservation/"` `+ reservationId,`

        `type:` `"delete"``,`

        `contentType:` `"application/json"``,`

        `success:` `function` `(result, status, xhr) {`

            `ShowAllReservation();`

        `},`

        `error:` `function` `(xhr, status, error) {`

            `console.log(xhr)`

        `}`

    `});`

`});` |

Code Explanation

I created the click event using [jQuery .on() method](https://www.yogihosting.com/jquery-on/) for the img tag that has a delete class. This is because the img tag is created dynamically.

The first td element of any row gives the reservation id, which I get from the below code:

```
var reservationId = $(this).parents("tr").find("td:nth-child(1)").text();
```

After that I Call Web API from jQuery to the DELETE method, this call also contains the reservation id added to the url at the last segment.

```
url: "https://localhost:44324/api/Reservation/" + reservationId
```

Once the reservation gets deleted, the ShowAllReservation() function is called in the success callback of jQuery Ajax, and this updates the table.

Test the functionality

Click the cross icon against any reservation object and the API will delete it. Check the below video which shows the delete process:

![Web API jQuery Delete](https://www.yogihosting.com/wp-content/uploads/2019/11/delete-a-reservation.gif "Delete a Reservation")

## Call Web API POST Method from jQuery

The Web API POST method has the task of creating new reservations which it receives in it’s parameter. It’s skeleton is shown below.

```
[HttpPost]
public IActionResult Post([FromBody] Reservation res)
{ 
//…
}
```

Now I will **Call the POST method of Web API from jQuery by passing the reservation on it’s parameter**. This means the new Reservation is send in JSON to the Web API. So, create a new HTML page called AddReservation.html and add the following html code to it.

```
<div class="form-group">
    <label for="Name">Name:</label>
    <input type="text" class="form-control" id="Name" />
</div>
<div class="form-group">
    <label for="StartLocation">Start Location:</label>
    <input type="text" class="form-control" id="StartLocation" />
</div>
<div class="form-group">
    <label for="EndLocation">End Location:</label>
    <input type="text" class="form-control" id="EndLocation" />
</div>
<div class="text-center panel-body">
    <button type="submit" class="btn btn-sm btn-primary" id="AddButton">Add</button>
</div>

<div style="display:none" id="resultDiv">
    <h2>Reservation</h2>
    <table class="table table-sm table-striped table-bordered m-2">
        <thead><tr><th>ID</th><th>Name</th><th>Start Location</th><th>End Location</th></tr></thead>
        <tbody></tbody>
    </table>
</div>
```

There are 3 input controls for accepting the Name, Start Location and End Location of a new reservation:

| 1

2

3 | `<``input` `type``=``"text"` `id``=``"Name"` `/>`

`<``input` `type``=``"text"` `id``=``"StartLocation"` `/>`

`<``input` `type``=``"text"` `id``=``"EndLocation"` `/>` |

There is also a button, on whose click event the API call is made:

```
<button type="submit" class="btn btn-sm btn-primary" id="AddButton">Add</button>
```

Once, the reservation is created then the API will send the new reservation’s data in JSON format. I will show this data in the HTML table which is kept inside the hidden div:

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15 | `<``div` `style``=``"display:none"` `id``=``"resultDiv"``>`

    `<``h2``>Reservation</``h2``>`

    `<``table` `class``=``"table table-sm table-striped table-bordered m-2"``>`

        `<``thead``>`

             `<``tr``>`           

                 `<``th``>ID</``th``>`

                 `<``th``>Name</``th``>`

                 `<``th``>Start Location</``th``>`

                 `<``th``>End Location</``th``>`

            `</``tr``>`

        `</``thead``>`

        `<``tbody``>`

        `</``tbody``>`

    `</``table``>`

`</``div``>` |

Next, add the following jQuery code to this page:

```
$("#AddButton").click(function (e) {
    $.ajax({
        url: "https://localhost:44324/api/Reservation",
        headers: {
            Key: "Secret@123"
        },
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
            Id: 0,
            Name: $("#Name").val(),
            StartLocation: $("#StartLocation").val(),
            EndLocation: $("#EndLocation").val()
        }),
        success: function (result, status, xhr) {
            var str = "<tr><td>" + result["id"] + "</td><td>" + result["name"] + "</td><td>" + result["startLocation"] + "</td><td>" + result[
            $("table tbody").append(str);
            $("#resultDiv").show();
        },
        error: function (xhr, status, error) {
            console.log(xhr)
        }
    });
});
```

Explanation of the Codes

On the button click event I make an AJAX request to the API URL which is https://localhost:44324/api/Reservation.

Since the API will need Credentials for adding a reservation, therefore I have to **Call the Web API with Credentials** this time. The credentials are added to the **HTTP Header** like shown below:

| 1

2

3 | `headers: {`

    `Key:` `"Secret@123"`

`}` |

Recall, the Web API Post method contains the \[FromBody\] attribute. So it receives the reservation parameter in the body of the api request.

In my jQuery AJAX code, I used the **data parameter** to send the new reservation values to the web api.

| 1

2

3

4

5

6 | `data: JSON.stringify({`

    `Id: 0,`

    `Name: $(``"#Name"``).val(),`

    `StartLocation: $(``"#StartLocation"``).val(),`

    `EndLocation: $(``"#EndLocation"``).val()`

`})` |

Once the reservation is added, the API sends back the response which contains the newly added reservation object, which is shown inside the tbody element of the table:

```
success: function (result, status, xhr) {
    var str = "<tr><td>" + result["id"] + "</td><td>" + result["name"] + "</td><td>" + result["startLocation"] + "</td><td>" + result[
    $("table tbody").append(str);
    $("#resultDiv").show();
},
```

Test the functionality

Run the page in your browser and you will be able to add a new reservation just like what is shown by the below video:

![add a reservation](https://www.yogihosting.com/wp-content/uploads/2019/11/add-a-reservation.gif "Add a Reservation")

## Call Web API PUT Method from jQuery

Now I will **Call Web API PUT Method from jQuery**. The HTTP PUT method of Web API is shown below.

```
[HttpPut]
public Reservation Put([FromForm] Reservation res)
{
//…
}
```

Start by creating a new HTML page called UpdateReservation.html. Then add the following HTML to this page:

```
<div class="form-group">
    <label asp-for="Id"></label>
    <input type="text" class="form-control" id="Id" readonly />
</div>
<div class="form-group">
    <label for="Name">Name:</label>
    <input type="text" class="form-control" id="Name" />
</div>
<div class="form-group">
    <label for="StartLocation">Start Location:</label>
    <input type="text" class="form-control" id="StartLocation" />
</div>
<div class="form-group">
    <label for="EndLocation">End Location:</label>
    <input type="text" class="form-control" id="EndLocation" />
</div>
<div class="text-center panel-body">
    <button type="submit" class="btn btn-sm btn-primary" id="UpdateButton">Update</button>
</div>

<div style="display:none" id="resultDiv">
    <h2>Reservation</h2>
    <table class="table table-sm table-striped table-bordered m-2">
        <thead><tr><th>ID</th><th>Name</th><th>Start Location</th><th>End Location</th></tr></thead>
        <tbody></tbody>
    </table>
</div>
```

There are some input controls. The reservation to be updated will first be fetched from the API, and is shown on these input controls.

User will update the reservation by entering the updated values in these input controls, and clicking the button.

On clicking the button the reservation will be updated and the newly updated values are shown inside the HTML table.

Next add the following jQuery code to this page:

```
$(document).ready(function () {
    GetReservation();

    function GetReservation() {
        let params = (new URL(document.location)).searchParams;
        let id = params.get("id");

        $.ajax({
            url: "https://localhost:44324/api/Reservation/" + id,
            type: "get",
            contentType: "application/json",
            success: function (result, status, xhr) {
                $("#Id").val(result["id"]);
                $("#Name").val(result["name"]);
                $("#StartLocation").val(result["startLocation"]);
                $("#EndLocation").val(result["endLocation"]);
            },
            error: function (xhr, status, error) {
                console.log(xhr)
            }
        });
    }

    $("#UpdateButton").click(function (e) {
        let params = (new URL(document.location)).searchParams;
        let id = params.get("id");

        data = new FormData();
        data.append("Id", $("#Id").val());
        data.append("Name", $("#Name").val());
        data.append("StartLocation", $("#StartLocation").val());
        data.append("EndLocation", $("#EndLocation").val());

        $.ajax({
            url: "https://localhost:44324/api/Reservation",
            type: "put",
            data: data,
            processData: false,
            contentType: false,
            success: function (result, status, xhr) {
                var str = "<tr><td>" + result["id"] + "</td><td>" + result["name"] + "</td><td>" + result["startLocation"] + "</td><td>" + result[
                $("table tbody").append(str);
                $("#resultDiv").show();
            },
            error: function (xhr, status, error) {
                console.log(xhr)
            }
        });
    });
});
```

Understanding the Code

The reservation id is send to this page in query string. To get this reservation id the following 2 lines of codes are used:

| 1

2 | `let` `params = (``new` `URL(document.location)).searchParams;`

`let` `id = params.get(``"id"``);` |

So the variable called id now has the reservation id.

I then make the **Call to the GET Method of the API** to fetch the reservation data of this particular id.

Check the URL of the API to see id is added to the end of it.

```
url: "https://localhost:44324/api/Reservation/" + id
```

Once I get the reservation data from the Web API I bind it to the input controls:

| 1

2

3

4 | `$(``"#Id"``).val(result[``"id"``]);`

`$(``"#Name"``).val(result[``"name"``]);`

`$(``"#StartLocation"``).val(result[``"startLocation"``]);`

`$(``"#EndLocation"``).val(result[``"endLocation"``]);` |

Now when the UpdateButton is clicked the reservation gets updated. See the jQuery AJAX code which **Calls the Web API’s PUT Method**.

```
$.ajax({
    url: "https://localhost:44324/api/Reservation",
    type: "put",
    data: data,
    processData: false,
    contentType: false,
    success: function (result, status, xhr) {
        var str = "<tr><td>" + result["id"] + "</td><td>" + result["name"] + "</td><td>" + result["startLocation"] + "</td><td>" + result[
        $("table tbody").append(str);
        $("#resultDiv").show();
    },
    error: function (xhr, status, error) {
        console.log(xhr)
    }
});
```

Notice that I have put the processData and contentType values to false:

| 1

2 | `processData:` `false`

`contentType:` `false` |

Also notice the I send the updated reservation data to the **Web API PUT method in a FormData object**.

| 1

2

3

4

5 | `data =` `new` `FormData();`

`data.append(``"Id"``, $(``"#Id"``).val());`

`data.append(``"Name"``, $(``"#Name"``).val());`

`data.append(``"StartLocation"``, $(``"#StartLocation"``).val());`

`data.append(``"EndLocation"``, $(``"#EndLocation"``).val());` |

Test the functionality

The functionality is shown by the below video:

![jQuery Web API Update PUT](https://www.yogihosting.com/wp-content/uploads/2019/11/update-reservation-put.gif "Update Reservation by HTTP PUT")

## Call Web API PATCH Method from jQuery

Now I will **Call the HTTP PATCH method of Web API**, this method is shown below. Note that the HTTP PATCH method is also used to update a reservation.

```
[HttpPatch("{id}")]
public StatusCodeResult Patch(int id, [FromBody]JsonPatchDocument<Reservation> patch)
{
//…
}
```

Create a new HTML page called UpdateReservationPatch.html. Then add the following HTML to this page:

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19 | `<div` `class``=``"form-group"``>`

    `<label asp-``for``=``"Id"``></label>`

    `<input type=``"text"` `class``=``"form-control"` `id=``"Id"` `readonly />`

`</div>`

`<div` `class``=``"form-group"``>`

    `<label` `for``=``"Name"``>Name:</label>`

    `<input type=``"text"` `class``=``"form-control"` `id=``"Name"` `/>`

`</div>`

`<div` `class``=``"form-group"``>`

    `<label` `for``=``"StartLocation"``>Start Location:</label>`

    `<input type=``"text"` `class``=``"form-control"` `id=``"StartLocation"` `/>`

`</div>`

`<div` `class``=``"form-group"``>`

    `<label` `for``=``"EndLocation"``>End Location:</label>`

    `<input type=``"text"` `class``=``"form-control"` `id=``"EndLocation"` `/>`

`</div>`

`<div` `class``=``"text-center panel-body"``>`

    `<button type=``"submit"` `class``=``"btn btn-sm btn-primary"` `id=``"UpdateButton"``>Update</button>`

`</div>` |

There are input controls where the user can put the updated reservation values, and a button which on clicking will make the Web API call to update the reservation.

Now add the following **jQuery code** to this page:

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51

52 | `$(document).ready(``function` `() {`

    `GetReservation();`

    `function` `GetReservation() {`

        `let` `params = (``new` `URL(document.location)).searchParams;`

        `let` `id = params.get(``"id"``);`

        `$.ajax({`

            `url:` `"https://localhost:44324/api/Reservation/"` `+ id,`

            `type:` `"get"``,`

            `contentType:` `"application/json"``,`

            `success:` `function` `(result, status, xhr) {`

                `$(``"#Id"``).val(result[``"id"``]);`

                `$(``"#Name"``).val(result[``"name"``]);`

                `$(``"#StartLocation"``).val(result[``"startLocation"``]);`

                `$(``"#EndLocation"``).val(result[``"endLocation"``]);`

            `},`

            `error:` `function` `(xhr, status, error) {`

                `console.log(xhr)`

            `}`

        `});`

    `}`

    `$(``"#UpdateButton"``).click(``function` `(e) {`

        `let` `params = (``new` `URL(document.location)).searchParams;`

        `let` `id = params.get(``"id"``);`

        `$.ajax({`

            `url:` `"https://localhost:44324/api/Reservation/"` `+ id,`

            `type:` `"patch"``,`

            `contentType:` `"application/json-patch+json"``,`

            `data: JSON.stringify([`

                `{`

                    `op:` `"replace"``,`

                    `path:` `"Name"``,`

                    `value: $(``"#Name"``).val()`

                `},`

                `{`

                    `op:` `"replace"``,`

                    `path:` `"StartLocation"``,`

                    `value: $(``"#StartLocation"``).val()`

                `}`

            `]),`

            `success:` `function` `(result, status, xhr) {`

                `window.location.href =` `"AllReservation.html"``;`

            `},`

            `error:` `function` `(xhr, status, error) {`

                `console.log(xhr)`

            `}`

        `});`

    `});`

`});` |

Understanding the code

The reservation id is sent to this page’s URL in query string. So the GetReservation() gets this id and fetches it’s data by making the API call with the GET Method.

The HTTP PATCH type of API request is made by the UpdateButton click’s code which is:

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28 | `$(``"#UpdateButton"``).click(``function` `(e) {`

    `let` `params = (``new` `URL(document.location)).searchParams;`

    `let` `id = params.get(``"id"``);`

    `$.ajax({`

        `url:` `"https://localhost:44324/api/Reservation/"` `+ id,`

        `type:` `"patch"``,`

        `contentType:` `"application/json-patch+json"``,`

        `data: JSON.stringify([`

            `{`

                `op:` `"replace"``,`

                `path:` `"Name"``,`

                `value: $(``"#Name"``).val()`

            `},`

            `{`

                `op:` `"replace"``,`

                `path:` `"StartLocation"``,`

                `value: $(``"#StartLocation"``).val()`

            `}`

        `]),`

        `success:` `function` `(result, status, xhr) {`

            `window.location.href =` `"AllReservation.html"``;`

        `},`

        `error:` `function` `(xhr, status, error) {`

            `console.log(xhr)`

        `}`

    `});`

`});` |

Notice that I used the JSON.stringify() method to send a json to the Web API. This json contains 3 name/value pairs:

1.  “op” – contains the type of operation to perform. I passed “replace” value for doing update action.
2.  “path” – contains the reservation field where the operation is performed. As you know there are 3 fields – Name, StartLocation and EndLocation.
3.  “value” – contains the new value for the field.

| 1

2

3

4

5

6

7

8

9

10

11

12 | `data: JSON.stringify([`

    `{`

        `op:` `"replace"``,`

        `path:` `"Name"``,`

        `value: $(``"#Name"``).val()`

    `},`

    `{`

        `op:` `"replace"``,`

        `path:` `"StartLocation"``,`

        `value: $(``"#StartLocation"``).val()`

    `}`

`])` |

Test the functionality

Go to AllReservation.html page and change the URL for the edit icon to UpdateReservationPatch.html.

```
appendElement.append($("<td>").html("<a href=\"UpdateReservationPatch.html?id=" + value["id"] + "\"><img src=\"icon/edit.png\" /></a>"
```

Then check the functionality which is shown by the below video:

![jQuery Web API Update Patch](https://www.yogihosting.com/wp-content/uploads/2019/11/update-reservation-patch.gif "Update Reservation Patch")

## Get a Reservation by it’s Id

Here I will have to invoke the **Web API GET method** and pass id parameter to it. This method is shown bwlow.

| 1

2

3

4

5

6

7 | `[HttpGet(``"{id}"``)]`

`public` `ActionResult<Reservation> Get(``int` `id)`

`{`

    `if` `(id == 0)`

        `return` `BadRequest(``"Value must be passed in the request body."``);`

    `return` `Ok(repository[id]);`

`}` |

So, create a new HTML Page called GetReservation.html and add the following code to it:

```
<div class="form-group">
    <label for="id">Id:</label>
    <input type="text" class="form-control" id="Id" />
</div>
<div class="text-center panel-body">
    <button id="GetButton" class="btn btn-sm btn-primary">Get Reservation</button>
</div>

<div id="resultDiv" style="display:none">
    <h2>Reservation</h2>
    <table class="table table-sm table-striped table-bordered m-2">
        <thead><tr><th>ID</th><th>Name</th><th>Start Location</th><th>End Location</th></tr></thead>
        <tbody></tbody>
    </table>
</div>
```

There is an input control where users will enter the reservation id and a button which on clicking will fetch the reservation’s id data from the API.

There is also a table element which will show the fetched data of the reservation.

Next, add the following jQuery code to this page:

```
$(document).ready(function () {
    $("#GetButton").click(function (e) {
        $("table tbody").html("");
        $.ajax({
            url: "https://localhost:44324/api/Reservation/" + $("#Id").val(),
            type: "get",
            contentType: "application/json",
            success: function (result, status, xhr) {
                $("#resultDiv").show();
                if (typeof result !== 'undefined') {
                    var str = "<tr><td>" + result["id"] + "</td><td>" + result["name"] + "</td><td>" + result["startLocation"] + "</td><td>" + result[
                    $("table tbody").append(str);
                }
                else
                    $("table tbody").append("<td colspan=\"4\">No Reservation</td>");
            },
            error: function (xhr, status, error) {
                console.log(xhr)
            }
        });
    });
});
```

Important thing to note is the id value is added to the URL of the API:

```
url: "https://localhost:44324/api/Reservation/" + $("#Id").val()
```

Once I received the value from the API I then show it inside the HTML table. Check the code inside the success callback method which does this work.

Test the functionality

Open the page in the browser and enter 2 in the text box and click the button. You will soon get the reservation data for the 2nd reservation object.

Check the below video:

![Get jQuery Web API Call](https://www.yogihosting.com/wp-content/uploads/2019/11/get-a-reservation-by-id.gif "Get a Reservation by id")

## Upload Image File to Web API

Now I will show how to **Upload Image Files to the Web API with jQuery**. Here I will have to invoke the following Web API method:

```
[HttpPost("UploadFile")]
public async Task<string> UploadFile([FromForm] IFormFile file)
{
//…
}
```

Start by creating an HTML page called AddFile.html and add the following code to it.

| 1

2

3

4

5

6

7

8

9

10

11

12 | `<p>`

    `<a href=``"AllReservation.html"` `class``=``"btn btn-sm btn-primary"``>Back</a>`

`</p>`

`<input type=``"file"` `id=``"File"` `/>`

`<div` `class``=``"text-center panel-body"``>`

    `<button id=``"AddButton"` `type=``"submit"` `class``=``"btn btn-sm btn-primary"``>Add</button>`

`</div>`

`<div id=``"fileDiv"` `style=``"display:none"``>`

    `<h2>Uploaded File</h2>`

    `<img id=``"fileImg"` `/>`

`</div>` |

There is an input element of type file that will be used to upload an image file to the API. Once the file is uploaded I will show it inside the img tag.

Next, add the following jQuery code to this page:

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21 | `$(document).ready(``function` `() {`

    `$(``"#AddButton"``).click(``function` `(e) {`

        `data =` `new` `FormData();`

        `data.append(``"file"``, $(``"#File"``)[0].files[0]);`

        `$.ajax({`

            `url:` `"https://localhost:44324/api/Reservation/UploadFile"``,`

            `type:` `"post"``,`

            `data: data,`

            `processData:` `false``,`

            `contentType:` `false``,`

            `success:` `function` `(result, status, xhr) {`

                `$(``"#fileImg"``).attr(``"src"``, result);`

                `$(``"#fileDiv"``).show();`

            `},`

            `error:` `function` `(xhr, status, error) {`

                `console.log(xhr)`

            `}`

        `});`

    `});`

`});` |

The file is added to the **FormData** object like:

| 1

2 | `data =` `new` `FormData();`

`data.append(``"file"``, $(``"#File"``)[0].files[0]);` |

And then I make the HTTP POST type call to the Web API, the URL is – https://localhost:44324/api/Reservation/UploadFile.

Once the image is uploaded to the API server, I show it inside the img tag. I do this inside the success callback of jQuery AJAX method:

| 1

2

3 | `success:` `function` `(result, status, xhr) {`

    `$(``"#fileImg"``).attr(``"src"``, result);`

`}` |

Test the functionality

Open the page in the browser and upload an image to the API just like what is shown by the video:

![jQuery Web API Upload Image](https://www.yogihosting.com/wp-content/uploads/2019/11/upload-image.gif "Upload Image")

The link to download the full source code of this tutorial is given below:

[Download](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/download/aspnetcore/jQueryAPI.zip)

Conclusion

This Web API tutorial gives you all the working knowledge of calling/consuming any Web API from jQuery. Download the source codes and use it freely in your website.

---
Source: [How to Call Web API from jQuery [ASP.NET Core Edition]](https://www.yogihosting.com/aspnet-core-consume-api-jquery/)