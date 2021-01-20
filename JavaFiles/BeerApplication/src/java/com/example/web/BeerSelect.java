/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.web;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.example.model.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class BeerSelect extends HttpServlet {

         

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
      
        
        String c= request.getParameter(("color"));
        
        BeerExpert be = new BeerExpert();
    
        List result =be.getBrands(c);
        
       // response.setContentType(("text/html"));
        
        //PrintWriter out = response.getWriter();
        
       // out.println("Beer Seelction Advise <br>");
        
        Iterator itr= result.iterator();
        
        /*
        while(itr.hasNext())
        {
            
            out.println("<br> try "+ itr.next());
            
        }
        */
        
        
        
        request.setAttribute("styles", result);
        
        RequestDispatcher view = request.getRequestDispatcher("results.jsp");
        
        view.forward(request, response);
    }

    
}
