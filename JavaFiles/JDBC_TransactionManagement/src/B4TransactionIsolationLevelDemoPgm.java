import java.sql.*;

class IsolationLevels
{
    public static void main(String[] args) throws Exception
    {
        Class.forName("oracle.jdbc.OracleDriver");
       
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        System.out.println(con.getTransactionIsolation());
        
        con.setTransactionIsolation(8);
        
        System.out.println(con.getTransactionIsolation());
    
    }
}  

/*
run:
2
8
BUILD SUCCESSFUL (total time: 0 seconds)

*/