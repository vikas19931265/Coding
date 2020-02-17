package Servlets;

import java.sql.*;

/**
 *
 * @author vikas
 */
public class UserService {

    Connection con;
    Statement stmt;
    ResultSet rs;
    String status = "";

    public UserService() {

        try {

            Class.forName("oracle.jdbc.OracleDriver");

            Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "hr", "hr");

            stmt = con.createStatement();

        } catch (Exception e) {

            e.printStackTrace();

        }

    }

    public String checkLogin(String uname, String upwd) {

        try {

            rs = stmt.executeQuery("select * from reg_users where uname=" + "'" + uname + "'" + "and upwd=" + "'" + upwd + "'");

            boolean b = rs.next();

            if (b == true) {

                String userName = rs.getString(1).trim();

                String userPassword = rs.getString(2).trim();

                if (userName.equals(uname) && userPassword.equals((upwd))) {

                    status = "success";

                } else {
                    status = "failure";

                }

            } else {

                status = "failure";
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return status;

    }

    public String registration(String uname, String upwd, String uemail, String umobile) {

        try {
            rs = stmt.executeQuery("select * from reg_users where uname='" + uname + "'");

            boolean b = rs.next();// This will check and tell if the user is avaialable previously in the database or not.

            if (b == false) {

                stmt.executeUpdate("insert into reg_users values (" + "'" + uname + "'," + "'" + upwd + "'," + "'" + uemail + "'," + "'" + umobile + "')");

                status = "success";
            } else {

                status = "existed";

            }

        } catch (Exception e) {

            status = "failure";

            e.printStackTrace();
        }

        return status;

    }

}
