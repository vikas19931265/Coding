/*

Note:
============

Very few Drivers provide support for SCROLL_SENSITIVE Result Sets. Type-1 Driver will
provide support for this feature. But it supports only update operation, but not delete and insert
operations.

Type-2 driver also can provide support for SCROLL_SENSITIVE ResultSets. But we should not use *
in select query. we should use only column names. It supports only update operation, but not
delete and insert operations.


Below program is applicable only to type 1 and type 2 driver but not type 4.


*/


import java.sql.*;

class Test {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con =DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");// we have to use type1 or type2 driver here.
    
        Statement stmt= con.createStatement(1005,1008); // scrollable sensitve and updatable resultset
        
        ResultSet res = stmt.executeQuery("select * from emp");
        
        System.out.println("Original result set");
        
        while(res.next())
        {
            System.out.println(res.getInt(1)+"......"+ res.getString(2));
        }
    
        System.out.println("DB going to the pausing state...please do only update");
        
        System.in.read();
        
        res.beforeFirst();
        
        System.out.println("Database after updation");
        
        res.refreshRow(); // unsupported feature refresh row.
        
        while(res.next())

        {
            System.out.println(res.getInt(1)+"..........."+ res.getString(2));
        }
        
    }
}

/*
run:
Original result set
7399......SMITH
7499......ALLEN
7521......WARD
7566......JONES
7654......MARTIN
7698......BLAKE
7782......CLARK
7788......SCOTT
7839......KING
7844......TURNER
7876......ADAMS
7900......JAMES
7902......FORD
7934......MILLER
8945......null
900......null
1000......null
DB going to the pausing state...please do only update

Database after updation
Exception in thread "main" java.sql.SQLException: Unsupported feature: refreshRow
	at oracle.jdbc.driver.InsensitiveScrollableResultSet.refreshRow(InsensitiveScrollableResultSet.java:792)
	at Test.main(B3ScrollableResultApplicableToType1AndType2Driver.java:50)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 1 second)

*/