
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class Hutch extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException,IOException
    {
        res.setContentType("text/html");
        PrintWriter out= res.getWriter();
        out.println("<html><body bgcolor=red>");
        out.println("<a href='http://localhost:8082/ServletWebApp_RedirectionUsingHyperlinksVodafoneApp/Welcome.html'>visit</a>");
        out.println("</html>");
    
    }
}
