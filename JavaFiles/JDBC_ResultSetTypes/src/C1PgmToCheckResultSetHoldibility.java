// Program to check ResultSet Holdability:


import java.sql.*;

class Test4 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        DatabaseMetaData dmd = con.getMetaData();

        if (dmd.supportsResultSetHoldability(1)) {
            System.out.println("HOLD_CURSORS_OVER_COMMIT");
        }

        if (dmd.supportsResultSetHoldability(1)) {
            System.out.println("CLOSE_CURSORS_OVER_COMMIT");
        }

    }

}

/*
run:
HOLD_CURSORS_OVER_COMMIT
CLOSE_CURSORS_OVER_COMMIT
BUILD SUCCESSFUL (total time: 0 seconds)

*/