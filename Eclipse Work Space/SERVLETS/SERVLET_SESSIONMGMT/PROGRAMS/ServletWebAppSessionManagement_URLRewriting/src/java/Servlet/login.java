
package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class login extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException,IOException
    {
        res.setContentType("text/html");
        String name= req.getParameter("username");
        PrintWriter out= res.getWriter();
        out.println("Welcome "+ name);
        String url= String.format("<a href=./servlet2?username=%s>visit</a>", name);
        
                /*this line will send username as query string to the second servlet.
                  we have appended username parameters to the query string whcich will
                  be given to the servlet2 */
                                                                        

       out.println(url);
        
    
    }



}