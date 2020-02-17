//Application-1: How to Create a Table


package jdbcprograms;

import java.sql.*;

class CreateTable
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt= con.createStatement();
        
        stmt.executeUpdate("create table employees2(eno number,ename varchar2(10),esal number,eaddr varchar2(10))");
        
        System.out.println("Table Created Successfully");
        
        con.close();
        
        
        
    }
}

/*
run:
Table Created Successfully
BUILD SUCCESSFUL (total time: 0 seconds)

*/













