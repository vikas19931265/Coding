
import java.sql.*;

class ResultSetSupport {

    public static void main(String[] args) throws Exception {
        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        DatabaseMetaData dbmd = con.getMetaData();

        System.out.println(dbmd.supportsResultSetConcurrency(1007, 1005)); //read operation and scroll sensitive checking
        System.out.println(dbmd.supportsResultSetConcurrency(1008, 1005));// update operation and scroll sensitive checking
        System.out.println(dbmd.supportsResultSetType(1005));//scroll sensitive checking
        System.out.println(dbmd.supportsResultSetType(1003));//forward checking.
        System.out.println(dbmd.supportsResultSetType(1004));//scroll insensitive checking.

    }
}

/*
run:
true
true
true
BUILD SUCCESSFUL (total time: 0 seconds)

*/