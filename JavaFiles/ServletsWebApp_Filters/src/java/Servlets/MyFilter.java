/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyFilter implements Filter
{

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        
        
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        
        HttpServletRequest req= (HttpServletRequest) request;
        HttpServletResponse res=(HttpServletResponse) response;
        
        res.setContentType("text/html");
        PrintWriter out=res.getWriter();
        String name=req.getParameter("username");
        String password=req.getParameter("password");
        if(password.equals("admin"))
        {
            chain.doFilter(request, response); // if password is admin then we are calling the next resouce which is servlet
        }
        
        else
        {
           out.println("Access Denied");
           RequestDispatcher rd= req.getRequestDispatcher("homepage.html");
           rd.include(req, res);
        }
    
    }

    @Override
    public void destroy() {
        
    }
    
}