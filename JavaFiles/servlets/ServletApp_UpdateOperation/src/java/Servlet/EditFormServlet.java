/*

1. Here in order to edit the form, first data in the database must be checked to see
   if the entered student id is present in the database or not.

2. For this there must be interaction with a service layer that is StudentService layer
   whcich further interacts with StudentTo class which interacts with the database.

3. To complete this we must first build the code for the StudentService layers and pojo 
   class StudentTo as well.


*/
package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name = "EditFormServlet", urlPatterns = {"/edit"})
public class EditFormServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        String sid = request.getParameter("sid");

        StudentService ss = new StudentService();
            /*
               We created a Student Service object , this object will take getStudent() as 
               the parameter to check if the student in the database or not.
            
               
               After calling the getStudent() object we get the Student object having 
               the student id we passed along with the address as well as the name.
        
               */

        StudentTo sto = ss.getStudent(sid);

        if (sto == null) { // If we dont get any student object then it means that no such student exists in the database.
            out.println("<html>");

            out.println("<body>");

            out.println("<br><br>");

            out.println("<font color='red' size='6'>");

            out.println("Student Not Existed");

            out.println("</font>");

            out.println("<br><br>");

            out.println("<h3><a href='./updateform.html'>|Update Form|</a></h3>");

            out.println("</body></html>");

        } else {
            out.println("<html>");

            out.println("<body>");

            out.println("<font color='red'>");

            out.println("<h2>Durga Software Solutions</h2>");

            out.println("<h3>Student Edit Form</h3>");

            out.println("</font>");

            out.println("<form method='GET' action='./update'>");

            out.println("<table>");

            out.println("<tr><td>Student Id</td><td>" + sid + "</td></tr>");

            out.println("<input type='hidden' name='sid' value='" + sid + "'/>");// hidden means we can only see the value 1234 but cant edit it.

            out.println("<tr><td>Student Name</td><td><input type='text' name='sname' value='" + sto.getSname() + "'/></td></tr>");
            
            /*
            
            We are going to display currently present name and address assocated with the entered student id hence we have
            used value argument here.
            
            */

            out.println("<tr><td>Student Address</td><td><input type='text' name='saddr' value='" + sto.getSaddr() + "'/></td></tr>");

            out.println("<tr><td><input type='submit' value='Update'/></td></tr>");

            out.println("</table></form></body></html>");
        }

    }

}
