package Servlets;



import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;




@WebServlet(urlPatterns={"/Adds"}) // This is how we define that for form action add , this servlet will take the control.

public class AddServlet extends HttpServlet {

        @Override
        public void service( HttpServletRequest req, HttpServletResponse res) throws IOException
        {
        
          PrintWriter out=res.getWriter();
            
         try{   
            Integer a = Integer.parseInt(req.getParameter("t1"));
    
            Integer b = Integer.parseInt(req.getParameter("t2"));
        
            
        
            out.println(a+b);
            }
         
         catch(NumberFormatException e)
         {
             out.println("Please enter legal number");
            
    
         }
    
}



}


