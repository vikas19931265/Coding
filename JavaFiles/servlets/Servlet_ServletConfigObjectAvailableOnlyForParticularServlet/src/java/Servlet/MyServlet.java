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


protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
{
    
    response.setContentType("text/html");
    
    PrintWriter out= response.getWriter();
    
    ServletConfig config= getServletConfig();
    
    String a= config.getInitParameter("a");// a is present in first servlet
    
    String b= config.getInitParameter("b");// b is present in first servlet
    
    String c= config.getInitParameter("c");// c and d in third servlet
    
    String d= config.getInitParameter("d");
    
    out.println("<html>");
    
    out.println("<body>");
    
    out.println("<table border='1'");
    
    out.println("<tr><td>a</td><td>"+a+"</td></tr");
    
    out.println("<tr><td>a</td><td>"+b+"</td></tr");
    
    out.println("<tr><td>a</td><td>"+c+"</td></tr");
    
    out.println("<tr><td>a</td><td>"+d+"</td></tr");
            
    out.println("</table></body></html>");
    
}




}