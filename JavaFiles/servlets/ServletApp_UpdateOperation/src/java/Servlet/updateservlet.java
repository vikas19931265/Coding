package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class updateservlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse res) throws ServletException, IOException {

        res.setContentType("text/html");

        PrintWriter out = res.getWriter();

        String sid = request.getParameter("sid");

        String name = request.getParameter("sname");

        String addr = request.getParameter("saddr");

        StudentService s = new StudentService();

        String status = s.updateStudent(sid, name, addr);

        out.println("<html>");
        out.println("<body>");
        out.println("<h2>");
        out.println("<br><br>");

        if (status.equals("success")) {

            out.println("Student Updated Successfully<br>");

        } else {

            out.println("Student Updation Failed<br>");
        }

        out.println("<a href='./updateform.html'>|Update Form|</a>");

        out.println("</h2></body></html>");

    }

}
