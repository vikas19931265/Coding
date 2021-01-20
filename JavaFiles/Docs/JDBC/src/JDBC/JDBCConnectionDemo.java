package JDBC;


import java.sql.DriverManager;
import java.sql.*;

public class JDBCConnectionDemo {
    
public static void main(String[] args) throws Exception
{
    
    Class.forName("oracle.jdbc.OracleDriver"); // This will load the Driver class. Inside the driver class there is 
                                               // already static block code written for the purpose of regristration of the
                                               // driver
    
     Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","hr","hr") ; 
     /*
     
     1. In this step we are tring to create the Connection object.
     2. Here Connection is an interface which will be holding the object of one of its implementation class.
     
     */
     
     {
       
        Statement stmt=con.createStatement(); // In this step we are creating the Statement object.
        
        ResultSet rs= stmt.executeQuery("select * from employees"); // Executing the query on the statement.
        
        
        while(rs.next()) // This will loop for the entire table.
        {
            System.out.println(rs.getInt(1)+" " + rs.getString(2)+ " \t "+ rs.getString(3)+"\t\t " ); // Here 1 , 2 ,3 specifies the column numbers.
            
            
        }
    }
    
}  



}


