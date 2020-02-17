/*

Program to demonstrate connection pooling for MySQL database
===============================================================


import java.sql.*;
import javax.sql.*;
import com.mysql.jdbc.jdbc2.optional.*;

class ConnectionPoolingMySQL
{
    public static void main(String[] args) throws Exception
    {
        
        MysqlConnectionPoolDataSource ds = new MysqlConnectionPoolDataSource();
            
        ds.setURL("jdbc:mysql://localhost:3306/durgadb");
        
        ds.setUser("root");
        
        ds.setPassword("root");
        
        Connection con =ds.getConnection();
        
        Statement stmt= con.createStatement();
        
        ResultSet res = stmt.executeQuery("Select * from emp");
        
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