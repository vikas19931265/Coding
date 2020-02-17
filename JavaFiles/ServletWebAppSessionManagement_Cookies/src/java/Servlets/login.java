/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author vikas
 */
public class login extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException,IOException
    {
        res.setContentType("text/html");
        PrintWriter out= res.getWriter();
        req.getRequestDispatcher("/link.html").include(req, res);
        String uname= req.getParameter("username");
        String password=req.getParameter("password");
        if(password.equals("admin"))
        {
            out.println("Welcome "+uname);
            Cookie ck = new Cookie("name",uname);
            res.addCookie(ck);
        }
        
        else
        {
            out.println("Wrong Credentials");
            req.getRequestDispatcher("/login.html").include(req, res);
        }
        
        out.close();
    
    }


}