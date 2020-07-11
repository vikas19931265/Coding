/*

Life Cycle of a Servlet (Servlet Life Cycle)
===================================================

Life Cycle of a Servlet


                                        Servlet class is loaded
                                                |
                                                v
                                        Servlet instance is created
                                                |
                                                v
                                    init method is invoked
                                                |
                                                v
                                    service method is invoked
                                                |
                                                v
                                    destroy method is invoked

-> The web container maintains the life cycle of a servlet instance. Let's see the life cycle of the servlet:

-> As displayed in the above diagram, there are three states of a servlet: new, ready and end. 

-> The servlet is in new state if servlet instance is created. After invoking the init() method,
  Servlet comes in the ready state. In the ready state, servlet performs all the tasks. 
  When the web container invokes the destroy() method, it shifts to the end state.

1) Servlet class is loaded
==========================

The classloader is responsible to load the servlet class. The servlet class is loaded when the 
first request for the servlet is received by the web container.

2) Servlet instance is created
=============================

The web container creates the instance of a servlet after loading the servlet class. 
The servlet instance is created only once in the servlet life cycle.

3) init method is invoked
=============================

The web container calls the init method only once after creating the servlet instance. 
The init method is used to initialize the servlet. It is the life cycle method of the 
javax.servlet.Servlet interface. 

Syntax of the init method is given below:

        public void init(ServletConfig config) throws ServletException  

4) service method is invoked
=============================

The web container calls the service method each time when request for the servlet is received.
If servlet is not initialized, it follows the first three steps as described above then calls 
the service method. If servlet is initialized, it calls the service method.
Notice that servlet is initialized only once. The syntax of the service method of the Servlet interface is given below:

public void service(ServletRequest request, ServletResponse response)     throws ServletException, IOException  


5) destroy method is invoked
=============================

The web container calls the destroy method before removing the servlet instance from the service.
It gives the servlet an opportunity to clean up any resource for example memory, thread etc. 
The syntax of the destroy method of the Servlet interface is given below:

public void destroy()  

This method is similar to finalize() method in the garbage collection which needs to be called
for cleaning activities before the object destruction can be done.

*/

