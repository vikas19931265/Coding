/*

Program to demonstrate connection pooling for oracle database
===============================================================


*/

import java.sql.*;

import oracle.jdbc.pool.OracleConnectionPoolDataSource;

class ConnectionPooling
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("oracle.jdbc.OracleDriver");
        
        OracleConnectionPoolDataSource ds = new OracleConnectionPoolDataSource();
        
        ds.setURL("jdbc:oracle:thin:@localhost:1521:XE");
        
        ds.setUser("scott");
        
        ds.setPassword("tiger");
        
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