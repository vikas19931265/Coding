
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class FirstServlet extends HttpServlet {


    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException,IOException
    {
        res.setContentType("text/html");
        
        PrintWriter out=res.getWriter();
        
        ServletContext con= getServletContext();
        
        con.setAttribute("company", "ibm");
        
        out.println("Welcome to the first servlet");
        
        out.println("<a href='SecondServlet'>visit</a>");
        
        out.close();
    }


}