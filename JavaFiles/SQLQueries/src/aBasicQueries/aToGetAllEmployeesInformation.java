/* SQL query to get all employees information*/

package aBasicQueries;
import java.sql.DriverManager;
import java.sql.*;

class Query1 {
    
public static void main(String[] args) throws Exception
{
    
    Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","hr","hr") ; 
    Statement stmt=con.createStatement();
        
    
    
    String query="select * from employees";
    
    
    
    
    
    ResultSet rs= stmt.executeQuery(query); 
        
           while(rs.next()) 
        {
            System.out.println(rs.getInt(1)+" " + rs.getString(2)+ " \t "+ rs.getString(3)+"\t\t " ); 
            
        }
    
    
} }