/*

Difference between GET and POST


GET                                                                     POST

1. We can use GET method to GET information                            1. We can use POST method to POST information
   from the server                                                        to the server.  


2 usually GET request are read only                                    2. usually POST requests are WRITE or UPDATE operations


3.End user provided information will be appended to the URL            3. End user provided information will be encapsulated in the request
  as part of the query string and send to the server                      body and send to the server  



4.By using GET request we can send only character data(ASCII)          4. By using POST request we can send both binary and character data to the server.
  and we cannot send binary data like image files.


5.By using GET request we can send only limited amount of information  5. By using POST method we can send huge amount of information to the server
   which is varied from browser to browser.


6. Security is less hence we cannot send sensitive information like     6. Security is more hence we can send sensitive information like username and password
   username and password.

7. Bookmarking of GET request is possible                               7. Bookmarking of POST request is not possible.


8. Caching of GET request is possible                                   8. Caching of POST request is not possible.        


9. GET request is idempotent.                                           9.POST request is not idempotent.

10. GET request is safe.                                               10. POST request is not safe.


11. There are multiple ways to send GET request.                       11.There is only one way to send POST request.

    a. Typing URL in address bar and press enter                            Submitting HTML form with method attribute and POST value.
    b. Clicking hyperlink
    c. Sumbitting HTML form without method attribute
    d. Submitting HTML form with method attribute and GET value.



*/