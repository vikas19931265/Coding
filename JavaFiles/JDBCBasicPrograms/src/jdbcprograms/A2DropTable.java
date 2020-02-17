// Drop table 

package jdbcprograms;

import java.sql.*;

class DropTable
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt= con.createStatement();
        
        stmt.executeUpdate("drop table Employees2");
        
        System.out.println("Table dropped Successfully");
        
        con.close();
        
        
        
    }
}

/*
run:
Table dropped Successfully
BUILD SUCCESSFUL (total time: 0 seconds)

*/