/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author vikas
 */
public class LoginServlet extends HttpServlet {

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        String uname = request.getParameter("uname");

        String upwd = request.getParameter("upwd");

        UserService us = new UserService(); // Service is going to interact with the database.

        String status = us.checkLogin(uname, upwd);

        out.println("<html>");

        out.println("<body bgcolor='lightblue'>");

        out.println("<center><br><br>");

        out.println("<font color='red' size='7'>");

        if (status.equals("success")) {
            out.println("Login Success");
        }

        if (status.equals("failure")) {
            out.println("Login failure");

        }

        out.println("</font></center></body></html>");

    }

}
