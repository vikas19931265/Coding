// Inserting Single Record into the Table.

package jdbcprograms;

import java.sql.*;

class Insert
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt= con.createStatement();
        
        int result = stmt.executeUpdate("insert into employees values(100,'vikas',40000,'chennai')");
        
        System.out.println(result+" row inserted ");
        
        con.close();
        
        
        
    }
}

/*
run:
1 row inserted 
BUILD SUCCESSFUL (total time: 0 seconds)

*/