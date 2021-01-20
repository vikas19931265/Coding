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
import javax.servlet.http.HttpSession;

/**
 *
 * @author vikas
 */
public class LoginServlet extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException,IOException
    {
        res.setContentType("text/html");
        PrintWriter out= res.getWriter();
        String username=req.getParameter("username");
        HttpSession session= req.getSession(); // we created a session object for the request, with help of internally used cookies
                                               // and session id will keep track of requests coming from the different users.
        session.setAttribute("uname", username);
        out.println("Welcome "+username);
        out.println("<a href=SecondServlet>visit</a>");
    }
}
