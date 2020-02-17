/*

Deleting Single Record in the table
================================================

Use Cases of Delete Operation:

1. Terminate all Employees whose Salary greater than 7 Lakhs.
2. Delete outdated Book Information from Amazon Database.
3. Delete Old Movie Information from BookMyShow Database.


*/

package jdbcprograms;

import java.sql.*;

class Delete
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt= con.createStatement();
        
        int result = stmt.executeUpdate("delete from employees where ename='Vikas'");
        
        System.out.println(result+" row updated ");
        
        con.close();
        
        
        
    }
}

/*
run:
1 row updated 
BUILD SUCCESSFUL (total time: 0 seconds)

*/