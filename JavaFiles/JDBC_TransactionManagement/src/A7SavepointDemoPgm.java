/*
Note:
===============

Some drivers won't provide support for Savepoint. Type-1 Driver won't provide support, but Type-
4 Driver can provide support.

Type-4 Driver of Oracle provide support only for setSavepoint() and rollback() methods but not for
releaseSavepoint() method.


*/


import java.sql.*;

class TransactionManagementSavepoint
{
    public static void main(String[] args) throws Exception
    {
        Class.forName("oracle.jdbc.OracleDriver");
       
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        con.setAutoCommit(false);
        
        Statement stmt=con.createStatement();
        
        stmt.executeUpdate("insert into accounts values ('vikas',5000)");
        
        Savepoint s1= con.setSavepoint();
        
        stmt.executeUpdate("insert into accounts values('gautam',10000)");  // this is wrong entry.
        
        con.rollback(s1);  // this will rollback gautam entry and control will go to next line after this rollback.
        
        //con.releaseSavepoint(s1); release savepoint feature is not supported in type4 driver.
        
        System.out.println("Rollback done.");
        
        con.commit();
        
        con.close();
    }
}

/*
run:
Rollback done.
BUILD SUCCESSFUL (total time: 0 seconds)

*/