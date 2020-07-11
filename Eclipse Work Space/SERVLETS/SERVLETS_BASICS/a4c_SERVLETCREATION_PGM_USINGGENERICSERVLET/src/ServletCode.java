

import java.io.*;

import javax.servlet.*;


public class ServletCode extends GenericServlet
{
    
    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException
    {
        
        res.setContentType("text/html");
        
        PrintWriter out = res.getWriter();
        
        out.println("<html>");
        
        out.println("<head>");
        
        out.println("<title> GenericServletApp </title>");
        
        out.println("<body bgcolor=red>");
        
        out.println("<h2> Welcome to GenericServlet App</h2></head></html>");
        
        
     }
    
    
    
}
