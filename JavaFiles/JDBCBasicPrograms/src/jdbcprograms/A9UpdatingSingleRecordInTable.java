/*

Updating record in table
===============================================================================

Use Cases of Update Operation:

1. Update Train Information According To New Schedule
2. Update/Change Price Of Book In Amazon Database.
3. Update Bonus For All Employees Whose Salary Less Than 5000



*/
package jdbcprograms;

import java.sql.*;

class Update
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt= con.createStatement();
        
        int result = stmt.executeUpdate("update employees set esal=3000 where ename='Vikas'");
        
        System.out.println(result+" row updated ");
        
        con.close();
        
        
        
    }
}

/*
run:
1 row updated 
BUILD SUCCESSFUL (total time: 0 seconds)

*/