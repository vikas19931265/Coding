
import java.sql.*;

import java.io.*;

import java.util.Properties;

class PropertiesFile
{
    
    public static void main(String[] args) throws Exception
    {
        Class.forName("oracle.jdbc.OracleDriver");
        
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
null
BUILD SUCCESSFUL (total time: 0 seconds)

*/