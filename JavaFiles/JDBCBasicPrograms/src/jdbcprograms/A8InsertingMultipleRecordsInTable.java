
// Program to Insert multiple rows

package jdbcprograms;

import java.sql.*;

import java.util.*;

class InsertMultipleRecords
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt= con.createStatement();
        
        while(true)
        
        {
        
        System.out.println("Enter Eno");
        
        Scanner cn = new Scanner(System.in);
        
        int eno= cn.nextInt();
        
        System.out.println("Enter name");
        
        String ename = cn.next();
        
        System.out.println("Enter the Salary");
        
        double salary= cn.nextDouble();
        
        System.out.println("Enter Address");
        
        String address= cn.next();
        
        String sqlQuery= String.format("insert into employees values (%d , '%s' , '%f', '%s')",eno,ename,salary,address);
        
        stmt.executeUpdate(sqlQuery);
        
        System.out.println("Do you want to make another insertion...press yes or no");
        
        String input= cn.next();
        
        if(input.equalsIgnoreCase("no"))
        {
            break;
        }
        
        }
        
        con.close();
        
        System.out.println("Insertion successfull");
        
    }
}


/*
run:
Enter Eno
400
Enter name
Ravi
Enter the Salary
6000
Enter Address
Delhi
Insertion successfull
BUILD SUCCESSFUL (total time: 11 seconds)

*/