
package GenericServlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.*;

import javax.servlet.GenericServlet;

public class GenericServlets extends GenericServlet //name of class must be same as the file name of program.
{
    @Override
    public void service(ServletRequest req, ServletResponse res) throws ServletException,IOException
    {
        res.setContentType("text/html");
        
        PrintWriter out = res.getWriter();
        
        out.println("<html><head><title>GenericServlet</title><body bgcolor=black>");
        
        out.println("<b><center><font color=red><hr><h2> Welcome to GenericServlets</b></center></font></body></head></html>");
        
        
    }
}
