/*
What is Dispatcher Servlet
================================

In Spring MVC all incoming requests go through a single servlet is called Dispatcher Servlet (front controller).
The front controller is a design pattern in web application development.
 
A single servlet receives all the request and transfers them to all other components of the application.

The job of DispatcherServlet is to take an incoming URI and find the right combination of handlers 
(Controller classes) and views (usually JSPs).

When the DispatcherServlet determines the view, it renders it as the response. Finally, the DispatcherServlet
returns the Response Object to back to the client. In short, the Dispatcher Servlet plays the key role.

*/