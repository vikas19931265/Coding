
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
        
        //Creating a hiddenform
        
        out.println("<form action=./servlet2>");
        String format=String.format("<input type='hidden' name='uname' value=%s>", name);
        out.println(format);
        out.println("<input type='submit' value='go'>");
        out.println("</form>");
    }



}