
import java.sql.*;

class PreparedStatements
{
    public static void main(String[] args) throws Exception
    {
        Class.forName("oracle.jdbc.OracleDriver");
        Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott", "tiger");
        String sqlQuery="delete from employees where ename=?";
            // Step 1 to prepare the query
        
        PreparedStatement pst= con.prepareStatement(sqlQuery); //query will be compiled only once here
           
            /*Step 2 to create the prepared statement which will take query as the argument
                    this query will be compiled only once and can be used several times.*/
        
        
        pst.setString(1, "Gautam");
        
            //Step 3 If the query contains in positional parameters then compulsary set its value
        
        int update=pst.executeUpdate();
            
            //Step 4 : Execute the query
            
        System.out.println("Number of rows updated"+ update);
        
        System.out.println("Reusing the prepared statement to execute one more query");
        pst.setString(1, "Amar"); //Reusing the same query
        int update1=pst.executeUpdate();
        System.out.println("Number of rows updated ="+ update1);
        
    
        con.close();
    
    }
}

/*
run:
Number of rows updated1
Reusing the prepared statement to execute one more query
Number of rows updated =1
BUILD SUCCESSFUL (total time: 0 seconds)

*/