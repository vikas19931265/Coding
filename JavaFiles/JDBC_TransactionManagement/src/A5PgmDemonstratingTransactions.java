import java.sql.*;

import java.util.*;

class TransactionManagement
{
    public static void main(String[] args) throws Exception
    {
        Class.forName("oracle.jdbc.OracleDriver");
       
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt=con.createStatement();
        
        System.out.println("Database before transaction");
        
        ResultSet res= stmt.executeQuery("select * from accounts");
        
        while(res.next())
        {
            System.out.println(res.getString(1)+".."+res.getInt(2));
        }
    
        System.out.println("Transaction begin");
        
        con.setAutoCommit(false);
        
        stmt.executeUpdate("update accounts set balance=balance+10000 where name='durga'");
        
        stmt.executeUpdate("update accounts set balance=balance+10000 where name='sunny'");
        
        System.out.println("Please confirm your transaction...press y to confirm and no to discard");
        
        Scanner cn = new Scanner(System.in);
        
        String input=cn.next();
        
        if(input.equalsIgnoreCase("y"))
        {
            con.commit();
            
            System.out.println("Transaction completed");
        }
        
        else
        {
            con.rollback();
        }
            
        System.out.println("Database after transaction");
        
        ResultSet res1= stmt.executeQuery("select * from accounts");
        
        while(res1.next())
        {
            System.out.println(res1.getString(1)+".."+res1.getFloat(2));
        }    
    
        con.close();
    
    }
}   

/*
run:
Database before transaction
durga..100000
sunny..10000
Transaction begin
Please confirm your transaction...press y to confirm and no to discard
y
Transaction completed
Database after transaction
durga..110000.0
sunny..20000.0
BUILD SUCCESSFUL (total time: 13 seconds)

*/