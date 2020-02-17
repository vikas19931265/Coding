/*

GenericServlet class
=================================================

-> GenericServlet class implements Servlet, ServletConfig and Serializable interfaces. 

-> It provides the implementation of all the methods of these interfaces **** except the service method.

-> GenericServlet class can handle any type of request so ** it is protocol-independent.

-> You may create a generic servlet by inheriting the GenericServlet class and providing the implementation of the service method.


Methods of GenericServlet class
==========================================
There are many methods in GenericServlet class. They are as follows:

public void init(ServletConfig config) 
                is used to initialize the servlet.

public abstract void service(ServletRequest request, ServletResponse response) 
                provides service for the incoming request. It is invoked at each time when user requests for a servlet.

public void destroy() 
                is invoked only once throughout the life cycle and indicates that servlet is being destroyed.

public ServletConfig getServletConfig()
                returns the object of ServletConfig.

public String getServletInfo() 
                returns information about servlet such as writer, copyright, version etc.

public void init() 
                **it is a convenient method for the servlet programmers, now there is no need to call super.init(config)

public ServletContext getServletContext() 
                returns the object of ServletContext.

public String getInitParameter(String name) 
                returns the parameter value for the given parameter name.

public Enumeration getInitParameterNames() 
                returns all the parameters defined in the web.xml file.

public String getServletName() 
                returns the name of the servlet object.
public void log(String msg) 
                writes the given message in the servlet log file.

public void log(String msg,Throwable t) 
                writes the explanatory message in the servlet log file and a stack trace.


*/

// Generic Servlet Demo Program

import java.io.*;
import javax.servlet.*;

public class A5GenericServletClassAndItsMethods extends GenericServlet
{
    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException
    {
        res.setContentType("text/html");
        PrintWriter out= res.getWriter();
        out.println("<html><body>");
        out.println("<b> hello generic srevlet</b>");
        out.println("</body><html>");
    }
}