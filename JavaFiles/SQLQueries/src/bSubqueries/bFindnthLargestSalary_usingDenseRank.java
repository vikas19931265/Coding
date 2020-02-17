/*

SQL Query to find out nth largest salary

*/

package bSubqueries;
import java.sql.DriverManager;
import java.sql.*;

class Query3 {
    
public static void main(String[] args) throws Exception
{
    
    Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","hr","hr") ; 
    Statement stmt=con.createStatement();
        
    
    
    String query= " select * from\n"+
    
                        "(select ename, sal, dense_rank() over ( order by sal desc) as MyRank  from emp)\n"+ 
                
                                "where MyRank=5";
                    
    
    
    
    
    
    ResultSet rs= stmt.executeQuery(query); 
        
            while(rs.next()) 
        {
            System.out.println(rs.getString(1)+" " + rs.getInt(2)+ " \t "+ rs.getInt(3)+"\t\t " ); 
            
        }
    
    
} }

/*
run:
CLARK 2450 	 5		 
BUILD SUCCESSFUL (total time: 0 seconds)

*/