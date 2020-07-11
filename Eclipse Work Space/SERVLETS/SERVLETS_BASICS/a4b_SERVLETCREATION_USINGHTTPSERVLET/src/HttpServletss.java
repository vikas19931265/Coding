

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HttpServletss extends HttpServlet

{
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException,IOException
    {
        
        res.setContentType("text/html");
        
        PrintWriter out = res.getWriter();
        
        out.println("<html>");
        out.println("<head>");
        out.println("<body>");
        out.println("<font color'red , size='6'>");
        out.println("<b> Welcome to DurgaSoftware Solutions</b>");
        out.println("<hr></font></body></html>");
        
        
        
    }
    
    
}

    