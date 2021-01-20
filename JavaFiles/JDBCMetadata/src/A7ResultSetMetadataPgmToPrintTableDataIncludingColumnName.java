//App4: Program to display Table Data including Column Names by using ResultMetaData


import java.sql.*;

import java.util.*;

class ResultSetDemo2 {

    public static void main(String[] args) throws Exception {

        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
        Statement stmt = con.createStatement();
        
        ResultSet res = stmt.executeQuery("Select * from accounts");
        
        ResultSetMetaData rsmd= res.getMetaData();
        
         int count=  rsmd.getColumnCount();
        
         for(int i =1 ; i<=count;i++)
         {
            System.out.print(rsmd.getColumnName(i)+"\t");
         
         }
    
         System.out.println();
         
        while(res.next())
        {
            System.out.println(res.getString(1)+"..."+res.getFloat(2));
        }
    
    
        con.close();;
    }
    
}
 

/*
run:
NAME	BALANCE	
durga...110000.0
sunny...20000.0
vikas...5000.0
BUILD SUCCESSFUL (total time: 0 seconds)

*/