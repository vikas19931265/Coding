/*

Web Server/Web Container
====================================

1. Web server is used to run Web Applications.

2. In order to run a web application a special kind of software is needed which is nothing
   but a web server.

3. In other words we can also say that web server provides the environment to run the web applications.

4. Web container is responsible to manage and execute Servlets and JSP. 

5. Web server can handle only standalone requests that is request for static documents pages and videos

There are different types of Web servers present in the marked.

1. Tomcat

2. Resin

3. Jetty

4. OHS

5. Lighttpd



Web Server/ Web container diagram
-----------------------------------

   
1. Web container is responsible to manager and execute Servlets and JSPs

2. Web server can handle only standalone requests that is request for static documents/pages/videos.




        -----------------web server--------------------------------------------------------
        |                                                                                 |  
        |   ---------- web container------------------------------------------------      | 
        |   |                                                                       |     |  
        |   |      -------------------              -------------------             |     |   
        |   |      |                  |            |                  |             |     |  
        |   |      |servlet container |            |  jsp container   |             |     |  
        |   |      |                  |            |                  |             |     |  
        |   |      |------------------             |-------------------             |     |  
        |   |                                                                       |     |  
        |   -------------------------------------------------------------------------     |  
        |-------------------------------------------------------------------------------------
        

1. There are two types of container present inside the web container.

        1. servlet container.

        2. Jsp container.

2. Servlet container is responsible to manage and execute servlet components.

3. JSP container is responsible to manager and execute JSP components.

4. Tomcat servlet container is also known as CATALINA.

5. Tomcat JSP container is also known as JASPER


*/