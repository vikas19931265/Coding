package ServletConfig;

/*

SERVLETCONFIG:
================================================================================


-> An object of ServletConfig is created by the web container for each servlet. 

-> This object can be used to get configuration information from web.xml file.

-> If the configuration information is modified from the web.xml file, we don't need to change the servlet. 

-> So it is easier to manage the web application if any specific content is modified from time to time.


->  ServletConfig is an object, it will store all the configuration details of a particular servlet, where the
    configuration details include logical name of the servlet, initialization parameters, reference of  
    ServletContext object and so on.

->  ServletConfig is an object, it will provide the complete view of a particular servlet.

-> In web application, container will prepare ServletConfig objects individual to each and every servlet.

-> In web application execution, container will prepare ServletConfig object immediately after servlet
instantiation and just before calling init(_) method in servlet initialization.

-> Container will destroy the ServletConfig object just before servlet deinstantiation.

-> Due to the above reasons, the life cycle of ServletConfig object is upto a particular servlet.

-> If we declare any data in ServletConfig object then that data will be shared upto the respective servlet.
Due to the above reason, the scope of ServletConfig object is upto a particular servlet.

-> In web applications, ServletConfig object will allow only parameters data, it will not allow attributes
data.

-> In web applications, there are 2 ways to get ServletConfig object .

1. Use getServletConfig() method from Servlet interface
                
            EX: ServletConfig config=getServletConfig();

2. Override init(_) method

EX: public class MyServlet extends HttpServlet {
 ServletConfig config;
 public void init(ServletConfig config) {
 this.config=config;
 }
 -------------
 }

To get logical name of the servlet from its ServletConfig object we have to use the following method.

 public String getServletName()


EX: String lname=config.getServletName();

If we want to provide initialization parameters in ServletConfig object then first we have to
declare them in web.xml file.

 To declare initialization parameters in web.xml file we have to use the following xml tags.
 <web-app>
 <servlet>
 <init-param>
         <param-name>name</param-name>
        <param-value>value</param-value>
 </init-param>
 </servlet>
 </web-app>

-> If we declare initialization parameters with the above approach then container will read them and store
onto ServletConfig object at the time of creation when it receives request from the client.

-> To get a particular initialization parameter from ServletConfig object we have to use the following
method.

public String getInitParameter (String name)
EX: String a=config.getInitParameter("a");

-> To get all the initialization parameters from ServletConfig object we have to use the following method.

public Enumeration getInitParameterNames()
EX: Enumeration e=config.getInitParameterNames();


*/





