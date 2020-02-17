package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyServlets extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

        res.setContentType("text/html");

        PrintWriter out = res.getWriter();

        out.println("<html>");

        out.println("<head>");

        out.println("<body>");

        String studentName = req.getParameter("StudentName");

        String[] studentQualification = req.getParameterValues("StudentQualification");

        String gender = req.getParameter("StudentGender");

        String[] studentTechnologies = req.getParameterValues("StudentTechnologies");

        String branches = req.getParameter("DurgaBranches");

        String Address = req.getParameter("StudentAddress");

        String studQual = "";

        String studTech = "";

        out.println("<h2> Durga Software Solutions </h2>");

        out.println("<h3> Student Course Registration</h3>");

        out.println("<table border='3' bgcolor='lightblue'> <tr> <td> Student Name </td> <td>" + studentName + "</td> </tr");

        out.println("<tr> <td> Student Qualification </td> ");

        for (String s : studentQualification) {

            studQual = studQual + "\t" + s;

        }

        out.println("<td>" + studQual + "</td></tr>");

        out.println(" <tr> <td> Student Gender </td>  ");

        out.println("<td>" + gender + "</td> </tr>");

        out.println("<tr> <td> Student Technologies </td>");

        for (String s1 : studentTechnologies) {

            studTech = studTech + "\t" + s1;

        }

        out.println("<td>" + studTech + "</td></tr>");

        out.println(" <tr> <td> Branch </td>  ");

        out.println("<td>" + branches + "</td> </tr>");

        out.println(" <tr> <td> Address </td>  ");

        out.println("<td>" + Address + "</td> </tr>");

        out.println("</table></body></head></html>");
    }

}
