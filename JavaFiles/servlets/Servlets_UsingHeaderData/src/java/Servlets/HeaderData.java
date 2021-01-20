
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

public class HeaderData extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest req,  HttpServletResponse res) throws ServletException, IOException
    {
        
       res.setContentType("text/html");
       
       PrintWriter out = res.getWriter();
       
       out.println("<html>");
       
       out.println("<head>");
       
       out.println("<body><center><br><br>");
       
       out.println("<table border='1' bgcolor='lightblue'>");
       
       out.println("<tr> <td align='center'> <h3> Header name</h3></td> <td align ='center'><h3> Header Value</h3></td>");
       
       Enumeration e = req.getHeaderNames(); // gives us all header names like in data structure.
       
       /*
        This will provide us all the header names. Header names are like labels
        example "host". For each of the header names there will be a corresponding values
        associated with it.
       
        We can get the values associated with the particular head name using the below method.
       
               String headerValues= res.getHeaders(headNames)
        
        If more then one values is associated with the particular headname then we can use the method
       
              String[] headerValues= res.getHeaders(headNames);
       
       */
       
       while(e.hasMoreElements())
       {
           
          
          String  headNames = (String)e.nextElement();
           
          String headValues=req.getHeader(headNames);
           
          out.println("<tr> <td align= 'center'> <h3>"+  headNames + "</h3> </td> <td align = 'center'><h3>"+ headValues+ "</h3> </td></tr>");
           
       
       }   
       
       out.println("</table>");
       
       out.println("</body></head></html>");
        
        
    }
}

/*

Header name             Header Value
================================================================================

host                    localhost:8082

user-agent              Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0

accept                  text/html,application/xhtml+xml,application/xml;q=0.9, ;q=0.8

accept-language         en-GB,en;q=0.5

accept-encoding         gzip, deflate


connection              keep-alive

upgrade-insecure-requests 1

*/

    