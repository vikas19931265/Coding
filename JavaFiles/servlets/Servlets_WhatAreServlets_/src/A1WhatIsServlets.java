

/* What is a Servlet???
===============================================================================


1. Servlet technology is used to create web application (resides at server side and generates dynamic web page).

2. Servlet technology is robust and scalable because of java language. Before Servlet, CGI (Common Gateway Interface) 
   scripting language was popular as a server-side programming language.  But there were many disadvantages of this technology. 

3. In case of CGI instead of using threads they were using processes which takes large memory area when in comparison with the threads.
   This results in poor performance , portability issues as the code is not written in java and security concerns as well.

4. There are many interfaces and classes in the servlet API such as Servlet, GenericServlet, 
   HttpServlet, ServletRequest, ServletResponse etc. 


What is a Servlet?
==============================================================================


Servlet can be described in many ways, depending on the context.

    Servlet is a technology i.e. used to create web application.
    
    Servlet is an API that provides many interfaces and classes including documentations.
   
    Servlet is an interface that must be implemented for creating any servlet.
    
    Servlet is a class that extend the capabilities of the servers and respond to the incoming request. 
    It can respond to any type of requests.
    
    Servlet is a web component that is deployed on the server to create dynamic web page.




Client(browser)------------give request(HTTP request)------->Web Server
^                                                            |
|                                                            |
|                                                            |    
|                                                            v
|                                                       Web container(tomcat)
|                                                            |    
response given(http response)                                |    
|                                                            |
|                                                            v
|                                                         Servlet        
|                                                            |
|                                                            |
|                                                         process the request with help of database.  
|                                                            | 
|                                                            |
|----------------------------------------------------------- v                                                           



What is web application?
===============================================================================


1. A web application is an application accessible from the web. 


2. A web application is composed of web components like Servlet, JSP, Filter etc. 
   and other components such as HTML. The web components typically execute in Web Server
   and respond to HTTP request.


*/                                                         