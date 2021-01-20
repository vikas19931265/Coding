/*

Moving data from Oracle Database to MySQL Database
=================================================================================


*/

import java.sql.*;

public class A3MovingDataFromOracleToMySQLDatabase {
    
    public static void main(String[] args) throws Exception
    {
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        Statement stmt=con.createStatement();
        
        ResultSet res= stmt.executeQuery("Select * from emp2");
        
        Class.forName("com.mysql.cj.jdbc.Driver");
  
        Connection conMysql =DriverManager.getConnection("jdbc:mysql:///vikasDB","vikas","vikas@1265");
        
        Statement stmtMySQL=conMysql.createStatement();
        
        String query;
        
        int count=0;
        
        while(res.next())
        {
            count++;
            
            query=String.format("insert into emp values(%d,'%s','%s',%d,%f,%f,%d)", res.getInt(1), res.getString(2), res.getString(3), res.getInt(4),res.getDouble(5),res.getDouble(6),res.getInt(7));
            
            stmtMySQL.executeUpdate(query);
        }

        System.out.println(count+" rows inserted successfully");
        
        con.close();
        
        conMysql.close();
    
    }
    
}

/*
run:
14 rows inserted successfully
BUILD SUCCESSFUL (total time: 0 seconds)

*/