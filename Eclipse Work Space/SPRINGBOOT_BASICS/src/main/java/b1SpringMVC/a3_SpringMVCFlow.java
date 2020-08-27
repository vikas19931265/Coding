package b1SpringMVC;
/*

Spring MVC Flow
===============================


1.Browser generates the request ends with .htm

2.through the web.xml DispatcherServlet takes the request.

3.DisptcherServlet looks for dispatcher-servlet.xml to know the Controller name using HandlerMapping.

4.If we configured command or model to controller, spring f/w will creates command or model object(LoginModel).

5.on this model(command) object spring f/w calls the setter methods to populate the end user enterd data.

6.Spring f/w creates the controller object and sends the request to the controller.

7. on this controller object spring f/w calls handleRequest(--). So the logic of handleRequest() will executes.

8.controller(LoginController) sends the request to the Model(Business component).And the logic of Model component will executes. (B.logic + p.logic)

9.By using persistance logic model component connect the DB.

10.after executing model component logic result given to the Controller handleRequest().

11.Controller handleRequest(--) returns ModelAndView object.

12.Spring f/w reads the spring configuration file to know the View name using ViewResolver(here spring will use MAV object).

13.After identify the view name spring sends the response to the appropriate jsp page, and for that jsp it send model object.

14.by executing presentation logic of the jsp final response displayed in browser.




*/