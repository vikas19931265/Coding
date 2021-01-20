/*

Prepare web resources like Servlets and JSPs.
=========================================================

If we want to prepare servlets then we have to use predefined library provided by the Servlets API in form of 
	
        Javax.servlet and javax.servlet.http packages

                                
                                    Servlet (Interface)
                                        ^
                                        |    
                                     implements
                                        |
                                    GenericServlet(Abstract class)
                                        |
                                      extends
                                        |
                                HttpServlet(Abstract classs)   



1. IMPLEMENTING SERVLET INTERFACE:
=============================================================

In this approach, if we want to prepare servlet then we have to take an user defined class which must
implement Servlet interface.


public class MyServlet implements Servlet
{ --------
-------- }



2. EXTENDING GENERICSERVLET ABSTRACT CLASS:
======================================================


In this approach, if we want to prepare servlet then we have to take an user defined class as a subclass
to GenericServlet abstract class.

public class MyServlet implements GenericServlet
{ --------
-------- }


3. EXTENDING HTTPSERVLET ABSTRACT CLASS:
=========================================================

In this approach, if we want to prepare servlet then we have to take an user defined class as a subclass
to HttpServlet abstract class.

public class MyServlet implements HttpServlet
{ --------
-------- }



*/