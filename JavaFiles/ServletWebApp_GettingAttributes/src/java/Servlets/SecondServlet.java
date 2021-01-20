
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class SecondServlet extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        
        res.setContentType("text/html");

        PrintWriter out = res.getWriter();

        ServletContext con = getServletContext();

        String attribute = (String) con.getAttribute("company");

        out.println("welcome  " + attribute);

        out.close();
    }
}
