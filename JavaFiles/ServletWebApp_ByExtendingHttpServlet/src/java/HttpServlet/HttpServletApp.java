package HttpServlet;

import javax.servlet.http.HttpServlet;

import javax.servlet.*;

import java.io.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HttpServletApp extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        
        res.setContentType("text/html");

        PrintWriter out = res.getWriter();

        out.println("<html><head><title>GenericServlet</title><body bgcolor=black>");

        out.println("<b><center><font color=red><hr><h2> Welcome to HttpServlets</b></center></font></body></head></html>");

    }
}
