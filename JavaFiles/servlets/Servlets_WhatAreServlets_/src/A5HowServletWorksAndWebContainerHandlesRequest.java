/*

How Servlet works?
============================

-> It is important to learn how servlet works for understanding the servlet well. 
   Here, we are going to get the internal detail about the first servlet program.

-> The server checks if the servlet is requested for the first time.

-> If yes, web container does the following tasks:

            loads the servlet class.
            instantiates the servlet class.
            calls the init method passing the ServletConfig object
else

-> calls the service method passing request and response objects

-> The web container calls the destroy method when it needs to remove the servlet such as 
    at time of stopping server or undeploying the project.



How web container handles the servlet request?
===================================================

The web container is responsible to handle the request. 
Let's see how it handles the request.

-> maps the request with the servlet in the web.xml file.

-> creates request and response objects for this request

-> calls the service method on the thread

-> The public service method internally calls the protected service method

-> The protected service method calls the doGet method depending on the type of request.

-> The doGet method generates the response and it is passed to the client.
   After sending the response, the web container deletes the request and response objects.
   The thread is contained in the thread pool or deleted depends on the server implementation.


*/