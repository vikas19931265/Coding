
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class LoginServlet extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException,IOException
    {
        res.setContentType("text/html");
        
        PrintWriter out= res.getWriter();
        
        out.println("<html><body>");
        
        int noOfAttempts=0;
        
        String password= req.getParameter("userpass");
        
        if(password.equals("1234"))
        {
            RequestDispatcher rd=req.getRequestDispatcher("/WelcomeServlet");
            rd.forward(req, res);
        }
        
        else
        {
            RequestDispatcher rd1= req.getRequestDispatcher("/login.html");
            rd1.include(req, res);
         
            
        }
        
        out.println("</body></html>");
    }
    
}
