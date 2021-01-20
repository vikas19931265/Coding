/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author vikas
 */
public class MyServlet extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        
        res.setContentType("text/html");

        PrintWriter out = res.getWriter();

        ServletConfig config = getServletConfig();// getServletConfig belongs to MyServlet which returns config object, this is 
        // already overriden.

        String driver = config.getInitParameter("driver");

        System.out.println(driver);

        String url = config.getInitParameter("url");

        String user = config.getInitParameter("user");

        String password = config.getInitParameter("password");

        String logical_name = config.getServletName();

        out.println("<html>");

        out.println("<body>");

        out.println("<font color='red size='5'>");

        out.println("<b>Configuration Details</b></font>");

        out.println("<table border='1'>");

        out.println("<tr><td>Logical Name</td><td>" + logical_name + "</td></tr>");

        out.println("<tr><td>Driver</td><td>" + driver + "</td></tr>");

        out.println("<tr><td>url</td><td>" + url + "</td></tr>");

        out.println("<tr><td>username</td><td>" + user + "</td></tr>");

        out.println("<tr><td>password</td><td>" + password + "</td></tr>");

        out.println("</table></body></html>");

    }

}
