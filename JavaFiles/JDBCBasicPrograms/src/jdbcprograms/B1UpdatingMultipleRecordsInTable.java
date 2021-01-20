package jdbcprograms;

import java.sql.*;

import java.util.*;

class UpdateMultipleRows
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt= con.createStatement();
        
        System.out.println("Enter bonus amount");
        
        Scanner cn = new Scanner(System.in);
        
        double bonus= cn.nextDouble();
        
        System.out.println("Enter the salary range");
        
        double salaryRange= cn.nextDouble();
        
        String query= String.format("update employees set esal = esal+ %f where esal < %f", bonus, salaryRange);
        
        int result = stmt.executeUpdate(query);
        
        System.out.println(result+" row updated ");
        
        con.close();
        
        
        
    }
}

/*
run:
Enter bonus amount
5000
Enter the salary range
6000
3 row updated 
BUILD SUCCESSFUL (total time: 4 seconds)

*/