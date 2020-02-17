/*

Demo program showing how can we pass url, username, password to getConnection parameter
from the property file.

By doing this we are ensuring that whenever username or password or url of the program
changes then the changes get reflected to the program without hard coding anything.

*/
package SortedMap1_Hashtable1_PropertyFile1;

import java.util.*;

import java.io.*;

import java.sql.*;

class PropertiesDemo2
{
    
    public static void main(String[] args) throws Exception
    {
        
        Properties p = new Properties();
        
        FileInputStream fis = new FileInputStream("db.properties");
        
        p.load(fis);
        
        String url=p.getProperty("url");
        
        String user=p.getProperty("user");
        
        String pwd = p.getProperty("pwd");
        
        Connection con =DriverManager.getConnection(url, user, pwd);
    
        /*
        
        ;;;;;;;;;;;;
        
        */
    
    }
}

//---------------------------------------------------------------***************************--------------------------------