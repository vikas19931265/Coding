/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Calculator;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Calc extends HttpServlet
{
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException
    {
        res.setContentType("text/html");
        String input1= req.getParameter("input1");
        String input2= req.getParameter("input2");
        
        double inp1= Double.parseDouble(input1);
        double inp2= Double.parseDouble(input2);
    
        double result= inp1+inp2;
        
        PrintWriter out= res.getWriter();
        
        out.println("<html><head><title>sum</title><body bgcolor=black>");
        out.println("<b><center><h2><hr><font color=white>"+result+"</font></hr></h2></center></b>");
        out.println("</body></head></html>");
    
    
    }
}
