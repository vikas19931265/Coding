/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ConfigServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse res) throws ServletException, IOException {

        res.setContentType("text/html");

        PrintWriter out = res.getWriter();

        ServletConfig config = getServletConfig();

        String logical_name = config.getServletName();

        String a = config.getInitParameter("a");

        String b = config.getInitParameter("b");

        String c = config.getInitParameter("c");

        String d = config.getInitParameter("d");

        Enumeration<String> e = config.getInitParameterNames();

        String param_name = "";

        while (e.hasMoreElements()) {
            param_name = param_name + e.nextElement() + "<br> ";

        }

        out.println("<html>");

        out.println("<body>");

        out.println("<font color='red' size='5'>");

        out.println("<b> Configuration Details</b>");

        out.println("</font>");

        out.println("<table border='1'>");

        out.println("<tr><td>Logical Name</td><td>" + logical_name + "</td></tr>");

        out.println("<tr><td>a</td><td>" + a + "</td></tr>");
        out.println("<tr><td>b</td><td>" + b + "</td></tr>");
        out.println("<tr><td>c</td><td>" + c + "</td></tr>");
        out.println("<tr><td>d</td><td>" + d + "</td></tr>");

        out.println("<tr><td> Param names</td><td>" + param_name + "</td></tr>");

        out.println("</table></body></html>");

    }

}
