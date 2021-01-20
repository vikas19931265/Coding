/*

Delete multiple records from table

Example : Deleting employees with salary less then certain amount.


*/
package jdbcprograms;

import java.sql.*;

import java.util.*;


class DeletingMultipleRecords
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt= con.createStatement();
        
        System.out.println("Enter cut off salary");
        
        Scanner cn = new Scanner(System.in);
        
        float cutOffSal= cn.nextFloat();
        
        String query= String.format("delete from employees where esal< %f ",cutOffSal);
        
        int result = stmt.executeUpdate(query);
        
        System.out.println(result+" row updated ");
        
        con.close();
        
        
        
    }
}

/*
run:
Enter cut off salary
11000
2 row updated 
BUILD SUCCESSFUL (total time: 2 seconds)

*/