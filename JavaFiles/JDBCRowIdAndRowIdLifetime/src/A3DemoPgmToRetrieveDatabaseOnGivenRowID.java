
import java.sql.*;

class RowIDDemo2 {

    public static void main(String[] args) throws Exception {
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        Statement stmt = con.createStatement();

        ResultSet res = stmt.executeQuery("select  ename from emp where rowid='AAAE5kAABAAAK/pAAA'");

        while (res.next()) {

            System.out.println("..." + res.getString(1));
        }

    }
}

/*
run:
...SMITH
BUILD SUCCESSFUL (total time: 0 seconds)

 */
