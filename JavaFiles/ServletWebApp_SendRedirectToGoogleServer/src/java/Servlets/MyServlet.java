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
public class MyServlet extends HttpServlet {

    @Override
    
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        
        
        String search = req.getParameter("search1");

        res.sendRedirect("http://www.google.com/#q=" + search);

    }

}
