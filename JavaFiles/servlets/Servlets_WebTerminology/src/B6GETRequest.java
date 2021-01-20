/*
GET( making some request)
============================

1. GET method is used for making some request or we can say expecting something from server
   like downloading movies or songs.

2. GET method does not perform any update on the server side hence state of the application
   does not change.

3. Since GET method does not perform any update on the Server side hence this is mostly readonly.


QueryString
==============================

1. Suppose you want to download kabali movie. Hence which movie to download will be given 
   in the form of the query string parameter.

        www.xyz.com/download?moviename:Kabali

                 here moviename:kabali is the query string.

2. In the case of the GET method, user provided information will be appended to the URL as part of the
   query string.

3. Here in the case of the GET method data is always sent in the form of the query string in the URL
   not in the body.




Limitations of GET method
=========================================

1. In the case of the GET method, user providing information in the query string has to be in the
   form of the character data or text data only. We cannot send audio or text in the query string.

2. Here all the data which the user is passing will be appended to the query string, hence there
   must be limit in the amount of data that can be put in the query string. This limit varies from
   browser to browser and mostly browsers supports 2kb.

3. Data sent by us in the form of the query string is visible in the URL hence there is a security issue
   if we are sending sensitive information like username and password.




Advantages of GET
==========================================

1. Bookmarking of GET request is always possible.

2. Caching of GET request is possible hence performance will be good. For example if our request
   was get request to open the facebook page and we are trying to open the same page again in the
   second request then instead of getting the response from the server we will get it from the cache
   memory present in the local system hence the performance is going to be very fast.




How to send GET request.
==========================================================

There are different ways in which we can make a request using the GET method.

1. Open the browser, type URL in the addresss bar and press enter. This kind of request
   is GET request only.

        example wwww.durgasoftwares.com

2. Click here(hyperlink) , clicking hyperlink is always GET request.

3.<form action=/xyz>

        </form>

  submitting form, without specifying method attribute is always GET request only. 

4. <form method="GET">

     submitting form by specifying the corresponding request type method as GET 
     is GET request only. Hence at the server side the corresponding doGET method is going
     to execute.



Some properties of GET request.
========================================

Idempotent

    In case of GET request every time we make request of the page , the response does not 
   change and remains the same hence the same page is going to come as the response.
   This is because using the GET request we are not making any kind of the update on the 
   server side. We are just viewing the page.

    This feature is called Idempotent.


SafeRequest.
    
    In this case even if we are making multiple requests then also server does not get affected.
    Hence GET request is a safe request as it doesn't cause any change to take place in the server
    side.


*/