/*

Servlet-WEB Component Communication
====================================================================

-> The process of providing communication between more than one web component available at server
   machine is called as Web-Component Communication.

-> In general, web-component communication is available in between Servlet-Servlet, Servlet-Jsp,
   Servlet-HTML, Jsp-Jsp, Jsp-Servlet, Jsp-HTML and so on.

-> In web applications, we are able to achieve web-component communication in the following 2 ways.

1. Include Mechanism
2. Forward Mechanism

-> If we want to perform the above mechanisms internally we must use RequestDispatcher object. So that
   both include and forward mechanisms are commonly called as Request Dispatching Mechanisms.

-> To achieve web-component communication in web applications we have to use the following 2 steps

**Step 1: Get RequestDispatcher object.
Step 2: Apply either include or forward mechanism by using the respective methods.


-> RequestDispatcher is an object, it will provide very good environment either to include the target
resource response into the present resource response or to forward request from present resource to the
target resource.



*/