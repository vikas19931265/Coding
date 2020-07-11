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
public class profileservlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException
    {
        res.setContentType("text/html");
        PrintWriter out= res.getWriter();
        HttpSession session= req.getSession(false);
        
        req.getRequestDispatcher("link.html").include(req, res);
        
        if(session!=null)
        {
          String name= (String)session.getAttribute("name");
          out.println("Welcome to your profile "+ name);
        
        }
        
        else
        {
            out.println("Please login first");
            req.getRequestDispatcher("login.html").include(req, res);
        }
                
        out.close();
    
    }


}