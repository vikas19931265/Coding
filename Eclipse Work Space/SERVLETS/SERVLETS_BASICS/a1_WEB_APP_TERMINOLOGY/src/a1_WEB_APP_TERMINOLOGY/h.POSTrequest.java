/*
POST request.


1. This kind of request method is used to post some information to the server example
   posting resume/profile/application on any portal

2. In this case since we are posting something to the server hence the corresponding entries
   into the DB side are going to get affected.

3. POST performs update or write operations in the server side.


4. In the case of POST request method , request body that is data user is sending to ther server 
   is not visible.

            
                RequestLine
                RequestHeader
                
                RequestBody------->End user provided information which will not be visible in the URL




Advantages of POST request..

1. In case of POST method, there is no size limit in the body hence end user can send huge amount
   of information to the server as well.

2. The kind of data user is sending to the server in the body need not be only text kind of data.
   This can be any kind of data like audio/image.

3. The body information which the end user is sending to the server is not visible to the outside world
   Hence we can send very sensitive information as well like user name and password.



Limitation of POST method

1. Bookmarking is not possible in case of POST method.

2. Caching of POST request is not possible.

3. In case of POST request we cannot expect the same response again and again as we are 
   making some update in the server side.

    Example if ware submitting 10k as funds, now i thought that i did not send correctly so 
            i sent it again hence another 10k will get transfered. So we cannot expect the 
            same result again and again.

            (POST REQUEST IS NOT IDEMPOTENT)

4. POST request is not safe request as we are making updates in the server side as well.



How to send POST request.

    There is one and only one way to send the post request.

1.  Compulsory form should be there, should have a method and value of method should be POST.

        <form method="POST">

            </form>





*/


