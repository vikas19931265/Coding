/*

Program to Read Data From Excel Sheet by using JDBC:(we have to use type 1 driver)

 */
import java.sql.*;

class ExcelDemo1 {

    public static void main(String[] args) throws Exception {

        Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");

        Connection con = DriverManager.getConnection("jdbc:odbc:demoexcel11");

        Statement st = con.createStatement();

        ResultSet rs = st.executeQuery("select * from [Sheet1$]");

        System.out.println("ENO\tENAME\tESAL\tEADDR");

        System.out.println("----------------------------------------- ");

        while (rs.next()) {

            System.out.println(rs.getInt(1) + "..." + rs.getString(2) + "..." + rs.getFloat(3) + "..." + rs.getString(4)
            );
        }
        con.close();
    }
}
