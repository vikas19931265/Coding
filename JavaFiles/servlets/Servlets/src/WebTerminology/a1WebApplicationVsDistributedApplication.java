/*

Web applications                                                        Distributed applications
----------------------------------------------------------------------------------------------------------------


Here complete application logic is distributed                         Business logic is distributed over both the local 
over server machine only.                                              machine as well as the remote machine


Web technologies used to create web applications are                   Distributed technologies used are socket programming
like CGI, servlets, JSPs                                               RMI, CORBA, EJB, WEB services.


Client is fixed here which is browser                                  Client is not fixed. Client should not be a browser
                                                                       It can be a servlet, core java program with main method
                                                                       GUI application with action performed, JSP application or
                                                                       struts applications , JSF application or Spring web module.0


Here server side application will provide support for                  Server can provide support for any kind of client.
only one type of client and that is browser


Web applications are executed by web servers                           Distributed applications are executed by both web servers
                                                                        and application servers


Web application is collection of web components                       Distributed application is collection of distributed components
which are executed by web containers like Web container              like EJB' which are executed by the EJB containers.
JSP container.




DurgaSoft web Application
--------------------------------------------------------------------------

                                                        
  ------------------------web application------------       -----------------------distributed applications--------
 |                                                  |       |                                                      | 
Web client(browser)------->interacts with durgasoft server machine containing java app------>interacts with ICICI remote machine(java app)
    
        sname                           |       |                                               |       |
        sno                             |       |                                               |       |
        scourse                          database                                                database





1. browser send a request to durgasoft server.

2. durgasoft server contains a java application which needs to interact with ICICI java app at remote in order 
   to receive the payment.

3. Hence  browser and durgasoft server forms a web application and durgasoft server machine and
   icici remote machine forms distributed application.

4. This is a tier three architecture application as we have 2 machines here that is web client, durgaserver machine 
   icici remote machine.




Main purpose of web application and distributed application
-------------------------------------------------------------------

The main purpose of the web application is to generate the dynamic response from server machine

The main purpose of distributed application is to establish a local and remote machine connection
in order to get remote services from the remote machine.









*/