/*

Formatting SQL Queries with dynamic Input (Bad method)
===============================================================================

*/
package jdbcprograms;

import java.sql.*;

import java.util.*;

class ReadingDynamicInput2
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt= con.createStatement();
        
        System.out.println("Enter Eno");
        
        Scanner cn = new Scanner(System.in);
        
        int eno= cn.nextInt();
        
        System.out.println("Enter name");
        
        String ename = cn.next();
        
        System.out.println("Enter the Salary");
        
        double salary= cn.nextDouble();
        
        System.out.println("Enter Address");
        
        String address= cn.next();
        
        String sqlQuery="insert into employees values("+eno+",'"+ename+"',"+salary+",'"+address+"')"; //bad way
        
        System.out.println("Formattted SQL query is"+ sqlQuery);
        
        stmt.executeUpdate(sqlQuery);
        
        con.close();
        
        System.out.println("Insertion successfull");
        
    }
}

/*
run:
Enter Eno
34
Enter name
Amar
Enter the Salary
678
Enter Address
HYD
Formattted SQL query is

insert into employees values(34,'Amar',678.0,'HYD')

Insertion successfull
BUILD SUCCESSFUL (total time: 7 seconds)

*/