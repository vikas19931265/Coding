
package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class MyServlet extends HttpServlet {
    
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException
    {
        
        res.setContentType("text/html");
        
        PrintWriter out = res.getWriter();
        
        String userName= req.getParameter("uname");
        
        String userPassword= req.getParameter("pwd");
        
        out.println("<html><head><body bgcolor='white'>");
        
        if(userName.equalsIgnoreCase("vikas"))
        {
            
            if(userPassword.equals("gautam"))
            {
                
                out.println(" <font color= 'red' , size = 6 >  Welcome "+ userName+"</font>" );
                
            }
            
        
            else
            {
                
                out.println("Incorrect password");
            
                
                out.println("<a href= './Login.html'> <br><br> login </a>");
            
              
            
            }
        
        
        }
        
        else
        {
            out.println("Access Denied...User not registered");
            
            out.println("<a href= ./Login.html><br><br> login </a>");
            
            
            
            
        }
        
        out.println("</body></head></html>");
        
    }
    
    
    
    
}
