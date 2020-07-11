package aSERVLETS_CREATION;


/*FIRST APPROACH TO DESIGN SERVLETS (IMPLEMENTING SERVLET INTERFACE):
======================================================================

1.  If we want to design a servlet with this approach then we have to take an user defined 
    class it should be an implementation class to Servlet interface.

2. Following are the methods which are present in the Servlet Interface.

    a. public void init(ServletConfig config) throws ServletExcetion;
    b. public void service(HttpRequest req, HttpResponse res) throws ServletException;
    b. public ServletConfig getServletConfig();
    c. public String getServletInfo();
    d. public void destroy();
    

    public class MyServlet implements Servlet
    {
        
        
    }


3.  In servlet execution, to perform the servlets initialization container has to first
    access the init() method. But the init method takes ServletConfig object as the 
    parameter hence ServletConfig object has to be created before a call to the init()
    method is made by the container.
    
4.  ServletConfig is an object , it will manage all the configuration details of the 
    particular servlet like logical name of servlet, initialization parameters and so on.
    
5. In servlet, the main purpose of service() method is to accommodate the complete logic
   and to process the request by executing the application logic.
   
6. In servlet, service(_,_) method is almost  same as main(_) method in normal Java
   application.
   
7. When we send a request from client to server then container will access service(_,_) method
  automatically to process the request,      

8. The purpose of getServletConfig() method is to get ServletConfig object which was created
   before the init() method was called having all the information about the servlet driven
   from the web.xml file.
   
9. getServletInfo() method is used to return generalized description about the present servlet. 

10.destroy() method can be used to perform servlet  de instantiation.


                                1. SPECIFY RESPONSE CONTENT TYPE:
                                =====================================
                                
                                
1.To specify response content type to the client we have to use the following method from
ServletResponse
    
        public void setContentType(String MIME_TYPE)
        

2. Where MIME_TYPE may be text/html, text/xml, image/jpeg, img/jpg and so on.

    EX: res.setContentType(text/html);
    NOTE: The default content type in servlets is text/html        
        

3.When container encounters the above method then container will pick up the specified MIME_TYPE
and container will set that value to content type response header in the response format.


4.When protocol dispatch the response format to client, before getting the response from response
format body part first client will pick up content type response header value i.e. MiME_TYPE 
client will prepare itself to hold the response as per the MIME_TYPE.     


5.While executing the servlet we have to generate some dynamic response on response object, where
to carry the dynamic response to the response object Servlet API has provide a predefined
PrintWriter object internally.


6.To get the predefined PrintWriter object we have to use the following method from ServletResponse.
public PrintWriter getWriter()
EX: PrintWriter out=res.getWriter();

        
                                              STEPS TO DESIGN FIRST SERVLET APPLICATION (using servlet)
                                              ===================================================
                                                    
1. WEB APPLICATION DIRECTORY STRUCTURE:

                firstWebApp
                    |
                    --WEB-INF
                        |
                        ----WEB.xml
                        |        
                        ----classes( Servlet1.java, Servlet2. java)
                        |
                        |---lib


2. PREPARE DEPLOYMENT DESCRIPTOR(WEB.XML):

web.xml:-

<web-app>
    <servlet>
        <servlet-name>ms</servlet-name>
        <servlet-class>MyServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>ms</servlet-name>
        <url-pattern>/ms</url-pattern>
    </servlet-mapping>
</web-app>


3. PREPARE SERVLET:



*/


import java.io.*;
import javax.Servlet.*;

 class FirstServlet implements Servlet
{
    
    ServletConfig config;
    
    public void init(ServletConfig config)
    {
        this.config=config;
        
    }
    
    public void service(ServletReqeust req, ServletResponse res)
    {
        res.setContentType("text/html");
        
        PrintWriter out = res.getWriter();
        
        out.println("<html");
        
        out.println("<head");
        
        out.println("<title");
        
        out.println("Demo on Servlet interface");
        
       out.println("<br> Welcome to the Durgasoft Technologies");
        
    }
    
    
    public ServletConfig getServletConfig()
    {
        return this.config; // here we have to give implementation for this method as Servlet is interface.
        
    }
    
    
    public String getServletInfo()
    {
        
        return "copyright"; // Here also we have to give implementation for getServletInfo() as servlet is interface.
        
    }
    
    

    public void destroy()
    {
        
        System.out.println("Servlet has beeen destroyed");
        
    }
    
    
    
}


/*
                                                                        SERVLETS FLOW OF EXECUTION:
                                                                        ===========================


1.When we start the server the main job of container is to recognize each and every web application and
to prepare ServletContext object to each and every web application.

2.While recognizing web application container will recognize web.xml file under WEB-INF folder then
perform loading, parsing and reading the content of web.xml file.

3.While reading the content of web.xml file, if container identifies any context data in web.xml file then
container will store context data in ServletContext object at the time of creation.


4.After the server startup when we send a request from client to server protocol will pick up the request
 then perform the following actions.
 
 
        a. Protocol will establish virtual socket connection between client and server as part of the
            server IP address and port number which we specified in the URL.
 
        b. protocol will prepare a request format having request header part and body part, where header
         part will maintain request headers and body part will maintain request parameters provided by
         the user.
         
         
       c.After getting the request format protocol will carry request format to the main server
       
       
5.Upon receiving the request from protocol main server will check whether the request data is in well-formed
 format or not, if it is in well-formed then the main server will bypass request to container.  
 
 

6.Upon receiving the request from main server container will pick up application name and resource
  name from request and check whether the resource is for any html page or Jsp page or an URL pattern
  for a servlet


7.If the resource name is any html page or Jsp page then container will pick up from application folder
and send them as a response to client.


8.If the resource name is an URL pattern for a particular servlet available under classes folder then
container will go to web.xml file identifies the respective servlet class name on the basis of the URL
pattern.


9.After identifying the servlet class name from web,xml file container will recognize the respective
servlet .class file under classes folder then perform the following actions.


STEP 1: SERVLET LOADING:
==========================


1.Here container will load the respective servlet class byte code to the memory.

STEP 2: SERVLET INSTANTIATION:
=================================

Here container will create a object for the loaded servlet.


STEP 3: SERVLET INITIALIZATION:
=================================

Here container will create ServletConfig object and access init(_) method by passing ServletConfig
object reference.


STEP 4: CREATING REQUEST AND RESPONSE OBJECTS (REQUEST PROCESSING):
=======================================================================


After the servlet initialization container will create a thread to access service(_,_) method, for this
container has to create request and response objects.


STEP 5: GENERATING DYNAMIC RESPONSE:
=========================================================================

By passing request and response objects references as parameters to the service(_,_) method then
container will access service(_,_) method, executes application logic and generate the required
response on response object.



STEP 6: DISPATCHING DYNAMIC RESPONSE TO CLIENT:
=====================================================

When container generated thread reaching to the ending point of service (_,_) method then container
will keep the thread in dead state, with this container will dispatch the dynamic response to main
server from response object, where main server will bypass the response to the protocol.
When protocol receives the response from main server then protocol will prepare response format with
header part and body part, where header part will manage all the response headers and body part will
manage the actual dynamic response.
After getting response format protocol will carry that response format to the client.



STEP 7: DESTROYING REQUEST AND RESPONSE OBJECTS:
========================================================

When the response is reached to the client protocol will terminate the virtual socket connection
between client and server, with this container destroy the request and response objects.


STEP 8: SERVLET DEINSTANTIATION:
==========================================================

When container destroy request and response objects then container will go to the waiting state
depends on the container implementation, if container identifies no further request for the same
resource then container will destroy servlet object.

NOTE: In servlet execution, container will destroy ServletConfig object just before destroying the
servlet object.


STEP 9: SERVLET UNLOADING:
=======================================================
After servlet deinstantiation container will eliminate the loaded servlet byte code from operational
memory.


STEP 10: DESTROYING SERVLETCONTEXT OBJECT:
=========================================================

In the above servlet life cycle, all the objects like request, response and ServletConfig are destroyed
before servlet deinstantiation, but still ServletContext object is available in memory.

In general ServletContext object will be destroyed at the time of server shut down.


DRAWBACKS OF FIRST APPROACH:
========================================================

To design servlets if we use this approach we have to provide implementation for each and every
method declared in Servlet interface irrespective of the actual application requirement.
The above approach will increase burden to the developers and it will increase unnecessary methods in
web applications.

To overcome the above problem we have to use an alternative i.e. GenericServlet.



*/
