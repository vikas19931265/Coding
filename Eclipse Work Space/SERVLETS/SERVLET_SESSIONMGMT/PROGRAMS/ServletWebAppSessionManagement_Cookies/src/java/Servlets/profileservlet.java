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

public class profileservlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException
    {
        res.setContentType("text/html");
        PrintWriter out= res.getWriter();
        req.getRequestDispatcher("link.html").include(req, res);
        Cookie[] ck= req.getCookies();
        if(ck!=null)
        {
            String name= ck[0].getValue();
            
            if(name!=null||!name.equals(""))
            {
                out.println("Welcome to profile "+ name);
            }
        
            else
            {
                out.println("Please login first");
                req.getRequestDispatcher("login.html").include(req, res);
            }
        
        }
    }


}