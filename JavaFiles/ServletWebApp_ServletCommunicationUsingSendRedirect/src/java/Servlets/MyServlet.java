
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class MyServlet extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException,IOException
    {
        res.setContentType("text/html");
        
        PrintWriter out= res.getWriter();
        
        res.sendRedirect("http://localhost:8082/ServletWebApp_ServletCommunicationUsingSendRedirect/welcome.html");
    
        out.close();
    }


}
