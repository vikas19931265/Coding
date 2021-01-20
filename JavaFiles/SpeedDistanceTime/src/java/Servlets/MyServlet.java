package Servlets;



import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;




//@WebServlet(urlPatterns={"/Adds"}) // This is how we define that for form action add , this servlet will take the control.

 public class MyServlet extends HttpServlet { // file should be declared as public that is name of class and file name should be 
                                              // same or else we will get the error.

        @Override
        public void doPost( HttpServletRequest req, HttpServletResponse res) throws IOException
        {
        
          Float distance = Float.parseFloat(req.getParameter(("t1")));
          
          Float speed = Float.parseFloat(req.getParameter(("t2")));
    
          Float time=distance/speed;
          
          PrintWriter out = res.getWriter();
          
          out.write("Time is "+time);
          
        
        
        }



}


