# Call Web API from JavaScript with XMLHttpRequest (XHR)

**JavaScript** is a powerful programming language and I will now **Call Web API** from it. To be precise, I will use **XMLHttpRequest (XHR) object to call the web api from JavaScript**. I already have created my [Web API built in ASP.NET Core](https://www.yogihosting.com/aspnet-core-api-controllers/), it is in RESTful pattern and has all the CRUD operations like providing flight reservations data to clients in **JSON**, searching the reservations with their ids, updating and deleting reservations and so on.

So let us **Call the different method of the Web API from JavaScript** and perform tasks like Creating, Reading, Updating and Deleting the reservations. Stay tuned till the end as I will also show you how to **upload Image file with API** using JavaScript. The entire tutorial’s source codes can be dwonloaded from the link given at the end of this tutorial.

Page Contents

## Can we call REST API from JavaScript in HTML Page?

**The most Popular way to call a REST API from JavaScript is with the XMLHttpRequest (XHR) object. You can perform data communication from a URL of the Web API without having to do a full page refresh. Other methods for calling APIS in JavaScript are Fetch API and Promise.**

## Call Web API GET method from JavaScript

The **ASP.NET Core Web API** has a method that returns all the flight reservations in JSON. It’s signature is shown below:

```
[HttpGet]
public IEnumerable<Reservation> Get()
{
//… return all the reservations
}
```

I will now **Call this Web API GET method from JavaScript**. So create an HTML page and call it AllReservation.html or anything you want. In this page all the reservations will be shown inside a HTML table which is given below.

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

12 | `<``table` `id``=``"apiTable"``>`

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

`</``table``>` |

Initially the tbody element is kept empty as the reservations will be shown once they are received from the API Call.

Now, add the following **JavaScript** code to this page inside the script tag:

```
<script type="text/javascript">
    ShowAllReservation();

    function ShowAllReservation() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://localhost:44324/api/Reservation", true);
        xhttp.send();

        xhttp.onreadystatechange = function () {
            var tbody = document.getElementById("apiTable").querySelector("tbody");
            tbody.innerHTML = "";
            if (this.readyState == 4 && this.status == 200) {
                JSON.parse(this.responseText).forEach(function (data, index) {
                    tbody.innerHTML += "<tr><td>" + data.id + "</td>" + "<td>" + data.name + "</td>" + "<td>" + data.startLocation + "</td>" + "<td>" + data.endLocation + "</td></tr>";
                });
            }
        };
    }
</script> 
```

JavaScript Code Explanation

When the page loads the JS function named ShowAllReservation() is called. In this function I am making use of **XMLHttpRequest (XHR) object** to call the Web API:

```
var xhttp = new XMLHttpRequest();
```

I am making an HTTP GET type request to the URL of my API’s method which will return all these reservations. This URL is:

```
https://localhost:44324/api/Reservation
```

The API returns the reservations in JSON as shown below:

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

    `"id": 1,`

    `"name": "Ankit",`

    `"startLocation": "New York",`

    `"endLocation": "Beijing"`

  `},`

  `{`

    `"id": 2,`

    `"name": "Bobby",`

    `"startLocation": "New Jersey",`

    `"endLocation": "Boston"`

  `},`

  `{`

    `"id": 3,`

    `"name": "Jacky",`

    `"startLocation": "London",`

    `"endLocation": "Paris"`

  `}`

`]` |

The **onreadystatechange** handler is called as soon as the JSON returned by the API is received. In this handler I am showing the reservations inside the html table.

See the below image which shows all the reservations (returned by the API) inside the HTML table:

![javascript Web api call](https://www.yogihosting.com/wp-content/uploads/2020/07/javascript-all-reservations.png "JavaScript all Reservations")

## Web API GET by “Id” – Searching Reservations

My **ASP.NET Core API** has a GET method that allows for searching a reservation by it’s Id. It’s definition is given below:

```
[HttpGet("{id}")]
public ActionResult<Reservation> Get(int id)
{
    if (id == 0)
        return BadRequest("Value must be passed in the request body.");
    return Ok(repository[id]);
}
```

To **Call this Web API GET method from JavaScript**, I have to provide the reservation id in the URL, start by creating a new HTML page and call it GetReservation.html. This page has 3 things:

-   1\. An ‘input’ control for entering the id of the reservation to be searched.

-   1\. A ‘button’ on whose click event the call to the Web API is made.
-   2\. An ‘HTML’ table to show the reservations.

The code for this page is shown below. First is the HTML code containing the input, button and table.

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

14 | `<``input` `type``=``"text"` `class``=``"form-control"` `id``=``"Id"` `/>`

`<``button` `id``=``"GetButton"` `onclick``=``"GetReservation()"``>Get Reservation</``button``>`

`<``table` `id``=``"apiTable"``>`

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

`</``table``>` |

Next, the JavaScript code which does the **API** calling part.

```
<script type="text/javascript">
    function GetReservation() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://localhost:44324/api/Reservation/" + document.getElementById("Id").value, true);
        xhttp.send();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                var tbody = document.getElementById("apiTable").querySelector("tbody");
                tbody.innerHTML = "<tr><td>" + response.id + "</td><td>" + response.name + "</td><td>" + response.startLocation + "</td><td>" + response.endLocation + "</td></tr>";
            }
        };        
    }
</script>
```

Code Explanation

This JavaScript code is quite similar to the one which I made earlier. The change is that the API method’s URL is added with the reservation ‘id’ at the end. See the code given below:

```
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://localhost:44324/api/Reservation/" + document.getElementById("Id").value, true);
```

The **API response**, which is the reservation data in JSON, is shown inside the HTML table by appending it to the tbody element:

```
tbody.innerHTML = "<tr><td>" + response.id + "</td><td>" + response.name + "</td><td>" + response.startLocation + "</td><td>" + response.endLocation + "</td></tr>";
```

I have created a small video which shows the working of this search feature:

![javascript  web api search video](https://www.yogihosting.com/wp-content/uploads/2019/11/get-a-reservation-by-id.gif "Video Get a Reservation by Id")

## Upload Image Files to Web API from JavaScript

Did you know we can **upload files** to remote servers using **WEB API** to? Here I will create this feature in JavaScript with very less code.

My Web API has a method that accepts files sent by clients. These files are submitted with the Form. You can see the code of the Web API method which deals with accepting the submitted files from the clients.

| 1

2

3

4

5

6

7

8

9

10 | `[HttpPost(``"UploadFile"``)]`

`public` `async` `Task<``string``> UploadFile([FromForm] IFormFile file)`

`{`

    `string` `path = Path.Combine(hostingEnvironment.WebRootPath,` `"Images/"` `+ file.FileName);`

    `using` `(``var` `stream =` `new` `FileStream(path, FileMode.Create))`

    `{`

        `await` `file.CopyToAsync(stream);`

    `}`

    `return` `"https://localhost:44324/Images/"` `+ file.FileName;`

`}` |

Now I make a call this method of the Web API from JavaScript. I will also attach the file to the **Form data** object when making this call to the Web API.

So, create a new page and call it AddFile.html. To it add 2 html tags:

-   1\. A file type for selecting a file.

-   2\. A button with a click event.

```
<input type="file" id="File" />
<button id="AddButton" onclick="UploadFile()" type="submit">Add</button>
```

Next, add the JavaScript code which makes the call to the API with **XMLHttpRequest (XHR)** object as given below:

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

16 | `<script type=``"text/javascript"``>`

    `function` `UploadFile() {`

        `var` `xhttp =` `new` `XMLHttpRequest();`

        `xhttp.open(``"POST"``,` `"https://localhost:44324/api/Reservation/UploadFile"``,` `true``);`

        `data =` `new` `FormData();`

        `data.append(``"file"``, document.getElementById(``"File"``).files[0]);`

        `xhttp.send(data);`

        `xhttp.onreadystatechange =` `function` `() {`

            `if` `(``this``.readyState == 4 &&` `this``.status == 200) {`

                `alert(``this``.response);`

            `}`

        `};`

    `}`

`</script>` |

Don’t worry you will get all these codes when you download the source codes – see the download link at the bottom.

Code Explanation

I am making an HTTP Post type of call to the Web API with **XMLHttpRequest (XHR)** object. The URL to which this call is made is:

```
https://localhost:44324/api/Reservation/UploadFile
```

Then I am adding the file to the FormData:

```
data = new FormData();
data.append("file", document.getElementById("File").files[0]);
```

finally making the call using send() method and adding the ‘FormData’ to it:

```
xhttp.send(data);
```

Check this video for understanding the working of this feature:

![javascript web api file upload](https://www.yogihosting.com/wp-content/uploads/2019/11/upload-image.gif "javascript web api file upload")

Note: In this video I am uploading an image file and also showing the image in an ‘img’ tag once it gets uploaded. You can use it to upload any type of files.

## Call Web API POST method from JavaScript

The Web API has a POST method that adds a new reservation. It accepts reservation data from the body of the HTTP request.

This is the reason why I have used \[FromBody\] attribute for the parameter of the method.

The code of this method is given below:

```
[HttpPost]
public IActionResult Post([FromBody] Reservation res)
{ 
//… add reservation to the database
}
```

Now let us **Call the POST Method of Web API from JavaScript**. So, create a new html page called AddReservation.html and add the following code to it:

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

18 | `<``input` `type``=``"text"` `id``=``"Name"` `/>`

`<``input` `type``=``"text"` `id``=``"StartLocation"` `/>`

`<``input` `type``=``"text"` `id``=``"EndLocation"` `/>`

`<``button` `type``=``"submit"` `onclick``=``"AddReservation()"``>Add</``button``>`

`<``table` `id``=``"apiTable"``>`

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

`</``table``>` |

There are 3 text boxes for accepting the Name, Start Location and End Location of a new reservation. The button when clicked will **Call the API**.

The html table will show the newly added reservation.

To this page add the following JavaScript code which makes the call to the Web API:

```
<script type="text/javascript">
    function AddReservation() {
        var xhttp = new XMLHttpRequest();

        xhttp.open("POST", "https://localhost:44324/api/Reservation", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("Key", "Secret@123");
        var obj = { Id: 0, Name: document.getElementById("Name").value, StartLocation: document.getElementById("StartLocation").value, EndLocation: document.getElementById("EndLocation").value };
        xhttp.send(JSON.stringify(obj));

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                var tbody = document.getElementById("apiTable").querySelector("tbody");
                tbody.innerHTML = "<tr><td>" + response.id + "</td><td>" + response.name + "</td><td>" + response.startLocation + "</td><td>" + response.endLocation + "</td></tr>";
            }
        };     
    }
</script>
```

JavaScript Code Explanation

The Web API call is made with JavaScript to this URL https://localhost:44324/api/Reservation.

Also note that the ASP.NET Core API which we are calling has a security feature that needs credentials in order to add a new reservation. Therefore I have to **Call the Web API from JavaScript with Parameters**, and the credentials are added to the header of the **XMLHttpRequest** object as shown below:

```
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.setRequestHeader("Key", "Secret@123");
```

Next, the new reservation data is grabbed from the text boxes and added to the **XMLHttpRequest** object as shown below:

```
var obj = { Id: 0, Name: document.getElementById("Name").value, StartLocation: document.getElementById("StartLocation").value, EndLocation: document.getElementById("EndLocation").value };
xhttp.send(JSON.stringify(obj));
```

The added reservation is returned by the API as a respons and I show this newly added reservation inside a table given on the HTML page.

I have created a small video which shows the working of this feature. See below:

![video javascript web api add a reservation](https://www.yogihosting.com/wp-content/uploads/2019/11/add-a-reservation.gif "Video Add a Reservation")

Did you know that you can also use jQuery to call APIs and do all the stuffs. I have created the same feature for doing CRUD operations on API using jQuery to. Kindly check [How to Call Web API from jQuery](https://www.yogihosting.com/aspnet-core-consume-api-jquery/) from scratch.

## Call Web API PUT method from JavaScript

The HTTP PUT type method of the Web API method does the updating task of the reservations. It’s definition is given below:

```
[HttpPut]
public Reservation Put([FromForm] Reservation res)
{
//…
}
```

So we can **Call this Web API PUT method from JavaScript** and update any reservation. Start by creating a new HTML page called UpdateReservation.html. Then add the following HTML to this page:

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

19 | `<``input` `type``=``"text"` `id``=``"Id"` `readonly />`

`<``input` `type``=``"text"` `id``=``"Name"` `/>`

`<``input` `type``=``"text"` `id``=``"StartLocation"` `/>`

`<``input` `type``=``"text"` `id``=``"EndLocation"` `/>`

`<``button` `type``=``"submit"` `onclick``=``"UpdateReservation()"``>Update</``button``>`

`<``table` `id``=``"apiTable"``>`

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

`</``table``>` |

There are some input text boxes to provide the new values for a reservation. This means the user will update the reservation by entering the new values on these input controls, and then click the button to update them. The updated reservation is shown on the html table.

Now add the following JavaScript code to your page. As usual I am making use of **XMLHttpRequest for calling the API**, also I have specified the PUT type of request on the open method of XHR.

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

43 | `<script type=``"text/javascript"``>`

    `GetReservation();`

    `function` `UpdateReservation() {`

        `var` `xhttp =` `new` `XMLHttpRequest();`

        `xhttp.onreadystatechange =` `function` `() {`

            `if` `(``this``.readyState == 4 &&` `this``.status == 200) {`

                `var` `response = JSON.parse(``this``.responseText);`

                `var` `tbody = document.getElementById(``"apiTable"``).querySelector(``"tbody"``);`

                `tbody.innerHTML =` `"<tr><td>"` `+ response.id +` `"</td><td>"` `+ response.name +` `"</td><td>"` `+ response.startLocation +` `"</td><td>"` `+ response.endLocation +` `"</td></tr>"``;`

            `}`

        `};`

        `xhttp.open(``"PUT"``,` `"https://localhost:44324/api/Reservation"``,` `true``);`

        `data =` `new` `FormData();`

        `data.append(``"Id"``, document.getElementById(``"Id"``).value);`

        `data.append(``"Name"``, document.getElementById(``"Name"``).value);`

        `data.append(``"StartLocation"``, document.getElementById(``"StartLocation"``).value);`

        `data.append(``"EndLocation"``, document.getElementById(``"EndLocation"``).value);`

        `xhttp.send(data);`

    `}`

    `function` `GetReservation() {`

        `let` `params = (``new` `URL(document.location)).searchParams;`

        `let` `id = params.get(``"id"``);`

        `var` `xhttp =` `new` `XMLHttpRequest();`

        `xhttp.onreadystatechange =` `function` `() {`

            `if` `(``this``.readyState == 4 &&` `this``.status == 200) {`

                `var` `response = JSON.parse(``this``.responseText);`

                `document.getElementById(``"Id"``).value = response.id;`

                `document.getElementById(``"Name"``).value = response.name;`

                `document.getElementById(``"StartLocation"``).value = response.startLocation;`

                `document.getElementById(``"EndLocation"``).value = response.endLocation;`

            `}`

        `};`

        `xhttp.open(``"GET"``,` `"https://localhost:44324/api/Reservation/"` `+ id,` `true``);`

        `xhttp.send();`

    `}` 

`</script>` |

JavaScript Code Explanation

Once the page loads the GetReservation() function is called whose work is to fetch the reservation data from the API. It does this by sending the ‘id’ of the reservation to the API. We have already seen this when Calling the Web API’s GET Method.

Note that reservation id is send to this page in the URL itself i.e. in the query string. To get this reservation ‘id’ the following 2 lines of codes are used:

```
let params = (new URL(document.location)).searchParams;
let id = params.get("id");
```

On receiving the response the reservation is shown on the html table given on the page.

The UpdateReservation() function is called on the click of the button. Inside this function I make the Call to the Web API to update the reservation.

I have to add the updated reservation values to FormFata which is done as:

```
data = new FormData();
data.append("Id", document.getElementById("Id").value);
data.append("Name", document.getElementById("Name").value);
data.append("StartLocation", document.getElementById("StartLocation").value);
data.append("EndLocation", document.getElementById("EndLocation").value);
```

And then I add the ‘FormData’ object to the **XMLHttpRequest** as a parameter.

```
xhttp.send(data);
```

I have created a small video that shows it’s working:

![JavaScript Update Web API PUT](https://www.yogihosting.com/wp-content/uploads/2019/11/update-reservation-put.gif "Video Update Reservation Put")

Note: You can link this page from the AllReservation.html page by creating a new “td” element on the table to contain an anchor tag. This anchor will link to the UpdateReservation.html page. The changes which you need to do are:

1\. Add update ‘th’ on the ‘thead’ area:

```
<table id="apiTable">
    <thead>
        <tr>
            //…
            <th>Update</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>
```

2\. Add a new ‘td’ element to the ‘tbody’ element and create a link that contains the ‘id’ of the reservation in query string.

```
tbody.innerHTML += "<tr><td>" + data.id + "</td>" + "<td>" + data.name + "</td>" + "<td>" + data.startLocation + "</td>" + "<td>" + data.endLocation + "</td>" + "<td><a href=\"UpdateReservation.html?id=" + data.id + "\">Update</a></td></tr>"; 
```

Don’t worry you will get all these codes when you download the source codes – see the download link at the bottom.

## Call Web API PATCH method from JavaScript

Now let me do the updation of reservations by calling the **HTTP PATCH based API** method. This method of the API looks like:

```
[HttpPatch("{id}")]
public StatusCodeResult Patch(int id, [FromBody]JsonPatchDocument<Reservation> patch)
{
//…
}
```

It has 2 parameters – ‘id’ of the reservation that needs to be updated and JsonPatchDocument object that will contain the new reservation values.

So, create a new html page called UpdateReservationPatch.html and add 3 text boxes for taking new values for the reservation, and a button.

| 1

2

3

4

5 | `<``input` `type``=``"text"` `id``=``"Id"` `readonly />`

`<``input` `type``=``"text"` `id``=``"Name"` `/>`

`<``input` `type``=``"text"` `id``=``"StartLocation"` `/>`

`<``input` `type``=``"text"` `id``=``"EndLocation"` `/>`

`<``button` `type``=``"submit"` `onclick``=``"UpdateReservation()"``>Update</``button``>` |

Next, add the following JavaScript code which will **Call Web API PATCH method from JavaScript** and update the reservation.

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

52

53

54

55

56

57 | `<script type=``"text/javascript"``>`

    `GetReservation();`

    `function` `GetReservation() {`

        `let` `params = (``new` `URL(document.location)).searchParams;`

        `let` `id = params.get(``"id"``);`

        `var` `xhttp =` `new` `XMLHttpRequest();`

        `xhttp.onreadystatechange =` `function` `() {`

            `if` `(``this``.readyState == 4 &&` `this``.status == 200) {`

                `var` `response = JSON.parse(``this``.responseText);`

                `document.getElementById(``"Id"``).value = response.id;`

                `document.getElementById(``"Name"``).value = response.name;`

                `document.getElementById(``"StartLocation"``).value = response.startLocation;`

                `document.getElementById(``"EndLocation"``).value = response.endLocation;`

            `}`

        `};`

        `xhttp.open(``"GET"``,` `"https://localhost:44324/api/Reservation/"` `+ id,` `true``);`

        `xhttp.send();`

    `}`

    `function` `UpdateReservation() {`

        `var` `xhttp =` `new` `XMLHttpRequest();`

        `xhttp.onreadystatechange =` `function` `() {`

            `if` `(``this``.readyState == 4 &&` `this``.status == 200) {`

                `window.location.href =` `"AllReservation.html"``;`

            `}`

        `};`

        `let` `params = (``new` `URL(document.location)).searchParams;`

        `let` `id = params.get(``"id"``);`

        `var` `data = JSON.stringify([`

            `{`

                `op:` `"replace"``,`

                `path:` `"Name"``,`

                `value: document.getElementById(``"Name"``).value`

            `},`

            `{`

                `op:` `"replace"``,`

                `path:` `"StartLocation"``,`

                `value: document.getElementById(``"StartLocation"``).value`

            `},`

            `{`

                `op:` `"replace"``,`

                `path:` `"EndLocation"``,`

                `value: document.getElementById(``"EndLocation"``).value`

            `}`

        `]);`

        `xhttp.open(``"PATCH"``,` `"https://localhost:44324/api/Reservation/"` `+ id,` `true``);`

        `xhttp.setRequestHeader(``"Content-type"``,` `"application/json-patch+json"``);`

        `xhttp.send(data);`

    `}`

`</script>` |

JavaScript Code Explanation

On the button click the UpdateReservation() JS function is called. In this function, I grab the ‘id’ of the reservation from the query string by using the below code:

```
let params = (new URL(document.location)).searchParams;
let id = params.get("id");
```

I then convert the new reservation values (entered in the 3 text boxes) to JSON by using the JSON.stringify method of JS as shown below:

```
var data = JSON.stringify([
    {
        op: "replace",
        path: "Name",
        value: document.getElementById("Name").value
    },
    {
        op: "replace",
        path: "StartLocation",
        value: document.getElementById("StartLocation").value
    },
    {
        op: "replace",
        path: "EndLocation",
        value: document.getElementById("EndLocation").value
    }
]);
```

And then finally making the Call to the Web API with XHR object as given below:

```
xhttp.open("PATCH", "https://localhost:44324/api/Reservation/" + id, true);
xhttp.setRequestHeader("Content-type", "application/json-patch+json");
xhttp.send(data);
```

Check the functionality which is shown by the below video:

![JavaScript Web API Update Patch](https://www.yogihosting.com/wp-content/uploads/2019/11/update-reservation-patch.gif "Video Update Reservation Patch")

## Call Web API DELETE method from JavaScript

The API has a method that deletes a reservation. The method accepts the reservation id in it’s parameter:

```
[HttpDelete("{id}")]
public void Delete(int id){
  //… delete the reservation
}
```

The delete record feature will be added to the AllReservation.html page which I have already build before. So perform the following things on the html table control given on the ‘AllReservation.html’ page:

1\. Add delete ‘th’ on the ‘thead’ area:

| 1

2

3

4

5

6

7

8

9 | `<``table` `id``=``"apiTable"``>`

    `<``thead``>`

        `<``tr``>`

            `//…`

            `<``th``>Delete</``th``>`

        `</``tr``>`

    `</``thead``>`

    `<``tbody``></``tbody``>`

`</``table``>` |

2\. Add a new ‘td’ element to the ‘tbody’ element that contains a ‘cross’ image. When this image is clicked the delete operation is preformed.

```
tbody.innerHTML += "<tr><td>" + data.id + "</td>" + "<td>" + data.name + "</td>" + "<td>" + data.startLocation + "</td>" + "<td>" + data.endLocation + "</td>" + "<td><a href=\"UpdateReservation.html?id=" + data.id + "\"><img src=\"icon/edit.png\" /></a></td>" + "<td><img class=\"delete\" src=\"icon/close.png\" /></td></tr>"; 
```

Next, add the following JS function called ‘CreateClickEvent()’ in your page:

```
function CreateClickEvent() {
    var dimg = document.getElementsByClassName("delete");
    for (let i = 0; i < dimg.length; i++) {
        dimg[i].addEventListener("click", function (e) {
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                ShowAllReservation();
            };

            var resId = e.target.closest("tr").childNodes[0].innerHTML;
            xhttp.open("DELETE", "https://localhost:44324/api/Reservation/" + resId, true);
            xhttp.send();
        })
    }
}
```

Also make sure you update the ShowAllReservation() function so that you call the CreateClickEvent() function from inside the xhttp.onreadystatechange handler. I have shown this below:

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

11 | `function` `ShowAllReservation() {`

    `xhttp.onreadystatechange =` `function` `() {`

        `if` `(``this``.readyState == 4 &&` `this``.status == 200) {`

            `CreateClickEvent();`

        `}`

    `};`           

`}` |

Explanation of code

Once the reservations are fetched from the API, I am creating click event on all the delete images i.e. the cross image. So I am calling the CreateClickEvent() function from inside the http.onreadystatechange handler.

I am grabbing all the click images by their CSS class as:

```
var dimg = document.getElementsByClassName("delete");
```

I am then looping through each of them and adding a click event to them by using the **addEventListener** function of JS:

```
for (let i = 0; i < dimg.length; i++) {
    dimg[i].addEventListener("click", function (e) {
    //…
    })
}
```

Before making the API call to delete a reservation I should get it’s id from the first td of the row which is done by using the below code:

```
var resId = e.target.closest("tr").childNodes[0].innerHTML;
```

And finally making the **Call to the Web API DELETE method from JavaScript**. Note that I am passing the reservation id to the URL also.

```
xhttp.open("DELETE", "https://localhost:44324/api/Reservation/" + resId, true);
```

Test this feature by clicking the cross icon against any reservation object and the API will delete it. Check the below video which shows the delete process:

![video js delete api patch](https://www.yogihosting.com/wp-content/uploads/2019/11/delete-a-reservation.gif "Video Delete Reservation Patch")

The link to download the full source code of this tutorial is given below:

[Download](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/download/aspnetcore/jsAPI.zip)

Conclusion

This API tutorial gives you all the working knowledge of **How to Call a Web API from JavaScript**. Download the source codes and use it freely in your website. Do check my other tutorials to.

---
Source: [Call Web API from JavaScript with XMLHttpRequest (XHR)](https://www.yogihosting.com/aspnet-core-web-api-javascript/)