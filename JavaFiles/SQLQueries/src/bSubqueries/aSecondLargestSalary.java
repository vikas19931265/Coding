/*

SQL query to find second most highest salary.

*/

package bSubqueries;
import java.sql.DriverManager;
import java.sql.*;

class Query2 {
    
public static void main(String[] args) throws Exception
{
    
    Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","hr","hr") ; 
    Statement stmt=con.createStatement();
        
    
    
    String query= "select ename , sal from emp where sal=\n"+
                                    "(select max(sal) from emp where sal not in (select max(sal) from emp ))";
    
    
    
    
    
    ResultSet rs= stmt.executeQuery(query); 
        
           while(rs.next()) 
        {
            System.out.println(rs.getString(1)+" \t" + rs.getInt(2)+ " \t " ); 
            
        }
    
    
} }

/*
run:
SCOTT 3000 	 
FORD 3000 	 
BUILD SUCCESSFUL (total time: 0 seconds)

*/