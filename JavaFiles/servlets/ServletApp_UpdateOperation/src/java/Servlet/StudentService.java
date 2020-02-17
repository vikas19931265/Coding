package Servlet;

import java.sql.*;

public class StudentService {

    Connection con;
    Statement st;
    ResultSet rs;
    String status = "";
    StudentTo sto;

    public StudentService() {// whenever we create the object using StudentService() constructor we complete all the connection work.
        try {

            Class.forName("oracle.jdbc.OracleDriver");

            Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "hr", "hr");

            st = con.createStatement();

        } catch (Exception e) {

            e.printStackTrace();

        }

    }

    public StudentTo getStudent(String sid) {
        try {

            rs = st.executeQuery("select * from student where sid = '" + sid + "'"); // we execute this query to check if student exist in the db or not

            boolean br = rs.next();// If student exist then br value will be true as single row will be returned at least

            if (br == true) {
                sto = new StudentTo(); // We create a student object immediately and inside that we will store id, name and address
                                       // this object will be returned as part of the call of this method which will be later used to display
                                       // the namd and address of the student id which is entered by the user.

                sto.setSid(rs.getString(1));

                sto.setSname(rs.getString(2));

                sto.setSaddr(rs.getString(3));

            } else {
                sto = null; // if br is not true then sto will be null meaning it is not pointing to any object
            }

        } catch (Exception e) {

        }

        return sto;
    }

    public String updateStudent(String sid, String name, String addr) {

        try {
            int a = st.executeUpdate("update student set sname='" + name + "'," + " saddr='" + addr + "'" + " where sid='" + sid + "'");

            status = "success";

        } catch (Exception e) {

            status = "failure";

            e.printStackTrace();
        }

        return status;

    }

}
