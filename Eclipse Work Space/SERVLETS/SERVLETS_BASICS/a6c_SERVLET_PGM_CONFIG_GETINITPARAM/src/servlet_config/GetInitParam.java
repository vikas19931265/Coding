/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet_config;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GetInitParam extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<html><body>");
        ServletConfig config = getServletConfig();
        Enumeration e = config.getInitParameterNames();
        out.println("<table border=1>");
        while (e.hasMoreElements()) {
            String element = e.nextElement().toString();
            // out.println("<tr><td>"+element+"</td>   </tr>");
            out.println("<tr><td>" + element + "</td><td>" + config.getInitParameter(element) + "</td></tr>");
        }

        out.println("</body></html>");

    }

}

/*
password	tiger
url	jdbc:oracle:thin:@localhost:1521:XE
username	scott
*/
