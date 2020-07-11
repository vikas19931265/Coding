package servlet_context;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Servlets extends HttpServlet {

   public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException
   {
       res.setContentType("text/html");
       
       PrintWriter out=res.getWriter();
       
       ServletContext con= getServletContext();
       
       Enumeration param=con.getInitParameterNames();
       
       out.println("<html><body bgcolor=golden>");
   
       while(param.hasMoreElements())
       {
          String ele =(String)param.nextElement();
          out.println(con.getInitParameter(ele));
       }
   
       out.println("</body></html>");
   }

}
