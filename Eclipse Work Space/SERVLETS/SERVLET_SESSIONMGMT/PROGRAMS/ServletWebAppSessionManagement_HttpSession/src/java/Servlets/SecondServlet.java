
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class SecondServlet extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException,IOException
    {
       res.setContentType("text/html");
       PrintWriter out=res.getWriter();
       HttpSession session = req.getSession(false);
       if(session!=null)
       {
           String uname=(String)session.getAttribute("uname");
           out.println("Hello "+uname);
       
       }
       
       else
       {
           req.getRequestDispatcher("/homepage.html").include(req, res); // if there is no session id and we directly try to access this page
                                                                         // then we are forwarding the page to the homepage.
       }
       
    }

}