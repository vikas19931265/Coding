
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class WelcomeServlet extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException,IOException
    {
        String userName= req.getParameter("uname");
        
        PrintWriter out = res.getWriter();
        
        out.println("<html><body><center><h2>Welcome "+ userName+"</h2></center></body></html");
    }
 
}
