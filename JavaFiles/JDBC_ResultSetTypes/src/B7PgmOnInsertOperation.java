/*

Application-8: Performing Database updations (INSERT operation) by using
UPDATABLE ResultSet (Type-1 Driver)
 

Note: 
======

Very few Drivers provide support for CONCUR_UPDATABLE Result Sets. Type-1 Driver will
provide support for this feature.

Type-2 driver also can provide support for CONCUR_UPDATABLE ResultSets. But we should not use
* In select query. we should use only column names.


*/
import java.sql.*;

class ResultSetTypesDemo6 {

    public static void main(String[] args) throws Exception {

        Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");

        Connection con = DriverManager.getConnection("jdbc:odbc:demodsn", "scott", "tiger");

        Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);

        ResultSet rs = st.executeQuery("select * from employees");

        rs.moveToInsertRow();//creates an empty record

        rs.updateInt(1, 900);

        rs.updateString(2, "katrina");

        rs.updateFloat(3, 3000);

        rs.updateString(4, "Hyd");

        rs.insertRow();

        con.close();
    }
}
