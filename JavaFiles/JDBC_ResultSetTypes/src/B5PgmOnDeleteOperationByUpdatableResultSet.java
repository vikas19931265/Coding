/*

Application-7: Performing Database updations (DELETE operation) by using
UPDATABLE ResultSet (Type-1 Driver)
=========================================================================

Note
======

res.deleteRow() operation is not supported in type 4 driver also
res.refreshRow() operation is not supported in type 4 driver.

Note: 
=======
Very few Drivers provide support for CONCUR_UPDATABLE Result Sets. Type-1 Driver will
provide support for this feature.

Type-2 driver also can provide support for CONCUR_UPDATABLE ResultSets. But we should not use
* In select query. We should use only column names.



*/


import java.sql.*;

class Test2 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con =DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger"); // we have to use type1 or type2 driver for delete operation to work.
    
        Statement stmt =con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);
        
        ResultSet res = stmt.executeQuery("Select * from emp");
        
        res.last();
        
        res.deleteRow(); // delete operation not supported in type 4 driver.
        
        while(res.next())
        {
            System.out.println(res.getInt(1)+"....."+ res.getString(2));
        }
    
    }
}

/*
run:
Exception in thread "main" java.sql.SQLException: Invalid operation for read only resultset: deleteRow
	at oracle.jdbc.driver.OracleResultSet.deleteRow(OracleResultSet.java:766)
	at Test2.main(NewClass.java:17)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/