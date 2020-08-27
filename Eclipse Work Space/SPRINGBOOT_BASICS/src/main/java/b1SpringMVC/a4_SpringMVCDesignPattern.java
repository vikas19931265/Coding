/*

Spring MVC Design Pattern
=====================================


A Spring MVC is a Java framework which is used to build web applications. It follows the Model-View-Controller design pattern.
It implements all the basic features of a core spring framework like Inversion of Control, Dependency Injection.

A Spring MVC provides an elegant solution to use MVC in spring framework by the help of DispatcherServlet. Here, DispatcherServlet 
is a class that receives the incoming request and maps it to the right resource such as controllers, models, and views.


										
MVC FLOW
==========


1. All the incoming request is intercepted by the DispatcherServlet that works as the front controller.

2. The DispatcherServlet gets an entry of handler mapping from the XML file and forwards the request to the controller.

3. The controller returns an object of ModelAndView.

4. The DispatcherServlet checks the entry of view resolver in the XML file and invokes the specified view component.




*/