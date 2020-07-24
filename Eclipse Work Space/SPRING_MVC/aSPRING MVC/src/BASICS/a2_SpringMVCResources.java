/*

MVC based resouces
========================

To develop spring mvc based application we have to develop the following resources.

1.View
============================
By using JSP's, velocity, freemarker, Angular JS etc we can design veiw layer in spring mvc.

Ex:
login.jsp
---------
<form method="post" action="loginapp/login.spring">
UserName<input type="text" name="username"/>

PassWord<input type="password" name="password"/>

<input type="submit" value="LOGIN">
</form>

2.Controller (DispatcherServlet)
============================
org.springframework.web.servlet.DispatcherServlet is called DispatcherServlet.

It acts as the controller in spring mvc.

It designed as FrontController DP.

FrontController:

Any special servelt or resource available in the application, which is capable of receiving all the requests coming from the browser
to controllers(action classes in struts), that servlet is called Front controller servlet.

by using extenstion match(*.htm) or directory match(/htm/*) we can design Frontcontroller servlet.

In SpringMVC based application, first DispatcherServlet will recieve the request.

DispatcherServlet is also implements Servelt interface.(indirectly).

Servlet
  |
GenericServlet
  |
HttpServlet
  |
HttpServletBean
  |
FrameworkServlet
  |
DispatcherServlet

basic flow
----------
1.Brower generates the request to the spring mvc application.

2.Dispatcher servlet recieves the request and servlet container calls the service() or doget() or doPost().

3.doPost() or doGet() not available in DispatcherServlet, so Servlet container calls the FrameworkServlet doget() or dopost().

4.FrameworkServlet doGet() or doPost() internally calls the processRequest(--). this method defined in same class(Framework servlet)

5.FrameworkServlet processRequest() calls doService(--) method. but doService(--) is an abstract method. this doService() method implemented
 in DispacherServlet.

6.So finally DispacherServlet doService() will execute.

7.doservice(--) process the request and it dispactch the request to doDispatch().

8.doDispatch() will dispatch the request to the controllers or model components.

NOTE:
we never develop the DispacherServlet class while developing the spring mvc applications.

3.web.xml
============================
It is deployement descriptor file.
here we can configure servlets (DispatcherServlet), welcome files, intialization paramters, context parmaters, etc.

<web-app>
<servlet>
  <servlet-name>dispatcher</servlet-name>
 <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
  <servlet-name>dispatcher</servlet-name>
  <url-pattern>*.htm</url-pattern>
</servlet-mapping>

<context-param>
<param-name>contextConfigLocation</param-name>		<param-value>/WEB-INF/dispatcher-servlet.xml</param-value>
</context-param>

</web-app>

4.Models or Commands
=====================================

Spring Models or Commands are similar to Struts ActionForms. 

Models are used to transfers the data from one layer to another layer. (from view layer to controllers(like struts action class))

Spring models are POJO.

Rules for writing pojo or spring models
--------------------------------------
-- public and non abstract
-- implements java.io.Serializable
-- provide default constructor.
--declare the private properties. these property name should be matched with jsp property name.
-- generate the setters and getters.

Ex:
//import stmts
public class LoginModel implements Serializable {
   
   private String username;
   private String password;

  //setters and getters

}

NOTE: Spring Models or commands designed as DTO or VO design pattern.
This Model is not related to MVC designpattern model.

5.Controllers
=========================================

Spring controllers are similar to struts Action classes.

To write the spring controllers we have to use Controller, AbstractController or @Controller annotation.

Rules
-----
1. it should be public and non abstract

2. it implements Controller interface or extends AbstractController class or use @Controller annotation. 

3.override handleRequest(--) or handleRequestInternal(--).

Ex:

package com.rameshit.controller;

//import statements
public class HelloWorldController implents Controller {

@Override
protected ModelAndView handleRequest(HttpServletRequest request,HttpServletResponse response) throws Exception {

System.out.println("handleRequest Called");

//businss logic
//communication code of service layer (business layer)

ModelAndView modelAndView = new ModelAndView("HelloWorldPage");
modelAndView.addObject("msg", "hello world");
return modelAndView;
  }
}

In spring controllers we can place business logic or communication code of model component.

If we placed B.logic in controllers classes it acts as Model in MVC.

If we placed communication in controllers classes it acts as helper class for Controller(DispatcherServlet) in MVC.

According to industry standards we have place communication code of Model.

To transfer the data to these controller we have to use model or commands.

6.Spring config file
=================================================

use the following syntax for config file name.

logical name of the servlet-servlet.xml

if logical name is "dispatcher" then
  dispatcher-sevlet.xml
 
if logical name "dummyservlet"

   dummyservlet-servlet.xml

here we can configure controllers, Handler Mapping classes, ViewResolvers etc.

ex:
dispatcher-servlet.xml
----------------------
<beans>
<bean id="viewResolver"
class="org.springframework.web.servlet.view.InternalResourceViewResolver">
<property name="prefix">
<value>/WEB-INF/pages/</value>
</property>
<property name="suffix">
<value>.jsp</value>
</property>
</bean>
	
<bean name="/welcome.htm" class="com.rameshit.controller.HelloWorldController"></bean>
</beans>

Any request end with welcome.htm spring forwards the request to the HelloWorldController.

In the above code we configured InternalResourceViewResolver as viewResolver to identify jsp as view component.


*/