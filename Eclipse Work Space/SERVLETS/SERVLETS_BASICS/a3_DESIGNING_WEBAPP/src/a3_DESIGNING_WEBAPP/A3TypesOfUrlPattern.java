/*

Types of URL pattern
=============================================

Url pattern must be started with the slash.

We can provide more then one url pattern for single servlet. This is possible from the servlet 2.5 
onwards where declaration of more then one url pattern for the single servlet is completely valid.

We can access the servlets from the client using the URL pattern only .

To access it we have to do like this

        http://localhost:1010/loginapp/login

Now container will check the web.xml file and see to what logical name is the url mapped and from the
logical name it will find out the corresponding loginservlet.


In servlet configuration, there are 3 ways to define URL patterns.

        1. Exact Match Method
        2. Directory Match Method
        3. Extension Match Method


1. EXACT MATCH METHOD:
=================================================

1.  In Exact Match Method, we have to define an URL pattern in web.xml file, it must be prefixed with
    forward slash(â€œ/â€�) and pattern name may be anything.

        EX: <url-pattern>/abc/xyz</url-pattern>

2.  If we define any URL pattern with exact match method then to access the respective resource we
    have to provide an URL pattern at client address bar along with URL, it must be matched with the
    URL pattern which we defined in web.xml file.

EX:
        http://localhost:8080/app1/abc/xyz Valid
        http://localhost:8080/app1/xyz/abc Invalid
        http://localhost:8080/app1/xyz   Invalid
        http://localhost:8080/app1/abc  Invalid

NOTE: In general in web applications, we will prefer to use exact match method to define an URL
pattern for a particular servlet when we have a requirement to access respective servlet independently.



2. DIRECTORY MATCH METHOD:
====================================================


1.  In Directory Match Method, we have to define an URL pattern in web.xml file, it must be prefixed
    with forward slash(/) and it must be terminated with *
EX: <url-pattern>/abc/*</url-pattern>

2.  If we define any URL pattern with this method then to access the respective resource from client
    we have to specify an URL pattern at client address bar it should match its prefix value with the prefix
    value of the URL pattern defined in web.xml file.

To achieve this type of requirement we have to use directory match method to define an URL pattern
for the respective Filter.

Note 1: In general in web applications, we will prefer to use directory match method to define an URL
pattern when we have a requirement to pass multiple number of requests to a particular server side
resource.

Note 2: In web applications we will use Filters to provide preprocessing and post processing to one or
more number of servlets. In this context, when we send a request to respective servlet then container
will bypass all the requests to the respective Filter.

EX: http://localhost:8080/app1/abc/xyz Valid
http://localhost:8080/app1/xyz/abc Invalid
http://localhost:8080/app1/abc  Valid
http://localhost:8080/app1/abc/abc Valid

To achieve this type of requirement we have to use directory match method to define an URL pattern
for the respective Filter.


By vikas
---------------

1.  When we want to send groups of requests to the server side there we have to use directory 
    match method to define url pattern.

2.  For example if we have 4 servlets  like as in Servlet1 , Servlet2 , Servlet3 and Servlet4.

3.  Now in these servlets first two servlets will be executed if authentication is passed and
    next two servlets will be executed if validation is passed.

4.  Here for first two servlets I will provide a filter that is going to  authenticate 
    two servlets and  I will provide another filter that is going to be a validation filter for remaining servlets.

5.  So the reqeust has to come to the filter and then authentication has to pass and then only 
    the request is going to pass to the servlets.

6.  So first we have to given URL pattern for authentication filter and then only the request will 
    go to  the servlet.

    For Authenticaion filter: /auth/*
    Validation filter:/val/*

Servlet1:/ auth/ serv1
Servlet2: /auth/ serv2
Servlet 3:/val/Serv3
Servlet 4:/val/serv4


7. So now if we are going to send some request like

	http://1h:1010:/app1/auth1/serv1

8. So container will first check if filter is there or not so the request has to go the filter first. 
   
9.  Now the prefix value must be matched so only the request is going to go to the filter but the main 
    aim is to access the servlet. Now if the authentication will pass then only the servlet will be accessed.

10. Now if I send another request  http://1010/app1/auth/serv2---> to access the servlet2.

11. Now container will take the URL pattern provided and check if any filter is present with url pattern, 
    then container will first forward the request to filter to do filtration . Once the authentication is done
    then the the request will be taken to the exact servlet.

12. Now lets send another request

https://lh/:1010/app1/val/serv4

Again container will take the URL pattern and will check the filter which is matched with the 
URL pattern now control will go the filter and once the validation is successful then the request will go the servet4.

13. If we would not have gone with the  the exact match then only one request can come into picture and 
    authentication and validation can only be done for a single request. Hence directory match can be used
    to process multiple requests based upon some filter.


3. EXTENSION MATCH METHOD:
=======================================================


1.  In Extension Match Method, we have to define an URL pattern in web.xml file, it must be prefixed
    with * and it must be terminated with a particular extension.
    
    EX: <url-pattern>*.do</url-pattern>

    If we define an URL pattern with this method then to access the respective server side resource from
    client we have to specify an URL pattern at client address bar, it may start with anything, but must be
    terminated with an extension which was specified in web.xml file.

    EX: http://localhost:8080/app1/login.do Valid
    http://localhost:8080/app1/reg.do   Valid
    http://localhost:8080/app1/add.xyz  Invalid
    http://localhost:8080/app1/search.doo Invalid

NOTE 1:
    In general in web applications, we will prefer to use extension match method to define an
    URL pattern when we have a requirement to trap all the requests to a particular server side resource
    and to perform the respective server side action on the basis of the URL pattern name if we provided at
    client browser.


NOTE 2: 
    If we design any web application on the basis of MVC then we have to use a servlet as
    controller, where the controller servlet has to trap all the requests and it has to perform a particular
    action on the basis of URL pattern name. Here to define URL pattern for the controller servlet we have
    to use extension method.


Example

We have a servlet which is acting as the controller. Inside the controller Servlet we are having some actions 
like add action or search action or delete action

Now we have to define a url pattern for the controller servlet like *.do

Controller server code
	If(request type is add) then go for search
	If(request type is search) then go for search
	If (request type  is delete) then go for delete

Lets provide url pattern

	https://1h:1010/app1/add.do

Due to add.do , request is first going to come to the controller servlet. If its for add then forward the reqeust to add.

	https://1:1010/app1/search.do

Container will take request and identifies url pattern , request go to controller servlet and as par its implementation the request is going to go the to search.
	
        https://1h:1010:/app1/delete.do

same as abve, based on pattern only actions are performed at the server side.

This extension based will be useful in the MVC based application


Is web.xml file mandatory??
===========================================================

In web applications, web.xml file is mandatory or optional is completely depending on the server
which we used.

In Apache Tomcat Server, web.xml file is optional when we have not used servlets, filters and so on.

In Weblogic Server, web.xml file is mandatory irrespective of using servlets, filters and so on.

In web applications, it is not possible to change the name and location of the deployment descriptor
because container will search for deployment descriptor with web.xml name under WEB-INF folder as
per its predefined implementation .

Up to servlets2.5 version[J2EE5.0] it is mandatory to provide web.xml file if we use servlets, listeners,
filters and so on in our application. But in servlets3.0 version, there is a replacement for web.xml file
i.e. Annotations, Annotations will make web.xml file is optional.


*/