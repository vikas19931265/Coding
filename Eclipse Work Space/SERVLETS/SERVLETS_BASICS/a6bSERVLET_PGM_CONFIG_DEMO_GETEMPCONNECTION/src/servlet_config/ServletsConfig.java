
package servlet_config;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ServletsConfig extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res) {
        res.setContentType("text/html");
        ServletConfig config = getServletConfig();
        String url = config.getInitParameter("url");
        String userName = config.getInitParameter(("username"));
        String pwd = config.getInitParameter("password");

        try {
            PrintWriter out = res.getWriter();
            out.println("<!DOCTYPE html>");
            out.println("<html><body>");
            out.println("<table border=1>");
            Class.forName("oracle.jdbc.OracleDriver");
            Connection con = DriverManager.getConnection(url, userName, pwd);
            Statement stmt = con.createStatement();
            ResultSet re = stmt.executeQuery("Select * from emp");
            while (re.next()) {
                out.println("<tr><td>");

                out.println(re.getInt(1) + "</td><td>" + re.getString(2) + "</td></tr>");

            }

            out.println("</table></body></html>");
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

    }

}


/*
 7399	SMITH
7499	ALLEN
7521	WARD
7566	JONES
7654	MARTIN
7698	BLAKE
7782	CLARK
7788	SCOTT
7839	KING
7844	TURNER
7876	ADAMS
7900	JAMES
7902	FORD
7934	MILLER
8945	null
900	null
1000	null
*/