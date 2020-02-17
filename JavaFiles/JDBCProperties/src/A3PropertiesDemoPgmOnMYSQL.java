/*

note
=========

If we are going to use DriverManager.getConnection(url,p) where p is properties object
then in that case in our properties file we have to define only username and password
and not url.

If we define url also then we will get SQL exception. But if we are using DriverManager.getConnection(url,user,pwd)
then we have to define all three things in properties file.


*/
import java.sql.*;

import java.io.*;

import java.util.Properties;

class PropertiesFile2
{
    
    public static void main(String[] args) throws Exception
    {
         Class.forName("com.mysql.cj.jdbc.Driver");
        
        FileInputStream fis = new FileInputStream("/home/vikas/Desktop/db.properties");
        
        Properties p = new Properties();
        
        p.load(fis);
        
        String url=p.getProperty("url");
        
        String user=p.getProperty("user");
        
        String pwd=p.getProperty("pwd");
        
        Connection con = DriverManager.getConnection(url,user,pwd);
        
        Statement stmt= con.createStatement();
        
        ResultSet res= stmt.executeQuery("Select * from emp");
        
        while(res.next())
        {
            System.out.println(res.getString(2));
        }
        
    
        con.close();
    
    
    }
}

/*
run:
SMITH
ALLEN
WARD
JONES
MARTIN
BLAKE
CLARK
SCOTT
KING
TURNER
ADAMS
JAMES
FORD
MILLER
BUILD SUCCESSFUL (total time: 0 seconds)

*/