
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class Registration extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException
    {
        
        res.setContentType("text/html");
        
        PrintWriter out=res.getWriter();
        
        int age= Integer.parseInt(req.getParameter("age"));
        
        out.println("<html><body bgcolor=golden>");
        
        if(age>18)
        {
            out.println("Successfully registered");
        }
        
        else
        {
            res.sendError(555,"Invalid age");
        }
    
        out.println("</body></html>");
    }
            
         

}
