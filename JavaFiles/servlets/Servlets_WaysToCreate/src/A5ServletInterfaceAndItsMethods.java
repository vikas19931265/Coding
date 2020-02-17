/*

Servlet Interface
=======================

Servlet interface provides common behavior to all the servlets. Servlet interface defines methods that all servlets must implement.

Servlet interface needs to be implemented for creating any servlet (either directly or indirectly). 
It provides 3 life cycle methods that are used to initialize the servlet, to service the requests, and to destroy the servlet and 2 non-life cycle methods.

Methods of Servlet interface
===============================

There are 5 methods in Servlet interface. The init, service and destroy are the life cycle methods of servlet. These are invoked by the web container.

Method	Description
=======================

public void init(ServletConfig config)	

        initializes the servlet. It is the life cycle method of servlet and invoked by the web container only once.

public void service(ServletRequest request,ServletResponse response)

        provides response for the incoming request. It is invoked at each request by the web container.

public void destroy()	

        is invoked only once and indicates that servlet is being destroyed.

public ServletConfig getServletConfig()	

        returns the object of ServletConfig.

public String getServletInfo()	

        returns information about servlet such as writer, copyright, version etc.


*/



