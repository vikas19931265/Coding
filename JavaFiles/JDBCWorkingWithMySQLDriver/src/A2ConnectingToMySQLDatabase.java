/*

Connecting to MySQL database
==========================


*/

import java.sql.*;

class  MySQLDatabase
{
    public static void main(String[] args) throws Exception
    {
        Class.forName("com.mysql.cj.jdbc.Driver");
  
        Connection con =DriverManager.getConnection("jdbc:mysql:///vikasDB","vikas","vikas@1265");
        
        Statement stmt=con.createStatement();
        
        ResultSet rs=stmt.executeQuery("select * from Employees;");
        
        while(rs.next())
        {
            System.out.println(rs.getInt(1) + "\t" + rs.getString(2) + "\t" + rs.getDouble(3) + "\t" + rs.getString(4));
        }
    
        con.close();
    
    }


}

/*
run:
1	vikas	10000.0	chennai
BUILD SUCCESSFUL (total time: 0 seconds)


*/