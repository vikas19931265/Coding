/*
    Execute select and non select queries
==============================================================================
*/

import java.sql.*;

import java.util.*;

class Testing
{
    public static void main(String[] args) throws Exception
    {
        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        Statement stmt = con.createStatement();
    
        System.out.println("Enter the query");
        
        Scanner cn = new Scanner(System.in);
        
        String query=cn.nextLine();
         
        boolean result=stmt.execute(query);
        
        System.out.println("\nENO\tENAME\tESALARY\tEADDR");
        
        if(result==true)
        {
            ResultSet res= stmt.getResultSet();
            
            while(res.next())
            {
                System.out.println(res.getInt(1) + "\t" + res.getString(2) + "\t" + res.getDouble(3) + "\t" + res.getString(4));
            }
            
        }
    
        else
        {
            int updateResult=stmt.getUpdateCount();
            
            System.out.println(updateResult+"rows updated successfully");
        }
    
    
        con.close();
    }
}

/*
run:
Enter the query
update employees set ename='sameer' where ename='gautam'
1rows updated successfully
BUILD SUCCESSFUL (total time: 8 seconds)

*/