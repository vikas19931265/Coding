/*
Servlet Container

1. In Java, Servlet container (also known as a Web container) generates dynamic web pages. 

2. So servlet container is the essential part of the web server that interacts with the java servlets.

3. Servlet Container communicates between client Browsers and the servlets.



------------------------------------------------------------------------------------------------------------
|                   --------------------------------------------------------------------------------        |        
| browser1------->  |                                                                              |        |
|                   |                 ------servlet container-------------------------------       |        |    
|                   |                 |               -----servlet-----------------        |       |        |
|                   |                 |               |                            |       |       |        |
|                   |                 |               | 1.load servlet class       |       |       |        |
|                   |web              |               | 2. create server instance  |       |       |        |
|                   |server           |web            | 3. call init()             |       |       |        |
| browser2------->  |                 |app            | 4. call service()          |       |       |        |
|                   |                 |               | 5. call destroy            |       |       |        |
|                   |                 |               |                            |       |       |        |
|                   |                 |               |                            |       |       |        |
|                   |                 |               |-----------------------------       |       |        |
|                   |                  ----------------------------------------------------        |        |    
| browser3------->   ----------------------------------------------------------------------------------      |
------------------------------------------------------------------------------------------------------------|---

4. A client browser accesses a Web server or HTTP server for a page.

5. The Web server redirects the request to the servlet container 
   (Servlets are HTTP listeners that run inside the servlet container).

6. There can be many servlet classes hence thr URL request is for which servlets needs to be mapped in the
   web.xml file.


7. The servlet container redirects the request to the appropriate servlet.

8. The servlet is dynamically retrieved and loaded into the address space of the container, if it is not in the container.


9.  The servlet container invokes servlet init () method once when the servlet is loaded first time for initialization.

10. The servlet container invokes the service () methods of the servlet to process the HTTP request, i.e., read data in the request and formulate a response. 
    The servlet remains in the container's address space and can process other HTTP requests


11. Web servlet generates data (HTML page, picture ...) return the dynamically generated results to the correct location


12. Here in SERVLETS there is no such main method for the servlet class. It is the web container which is calling servlet methods. It is 
    creating the object of the servlet class when the request come after loading it and then call the servlet lifecycle methods  
    that is init(), service() and destroy() method.


*/
