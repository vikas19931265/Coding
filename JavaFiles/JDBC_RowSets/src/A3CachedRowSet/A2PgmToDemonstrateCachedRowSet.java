/*

Application-6: To Demonstrate Disconnected CachedRowSet


*/
package A3CachedRowSet;

import java.sql.DriverManager;

import java.sql.*;

import javax.sql.rowset.*;


public class A2PgmToDemonstrateCachedRowSet {
    
    public static void main(String[] args) throws Exception
    {
        
        
        Connection con = DriverManager.getConnection("jdbc:mysql:///vikasDB", "vikas", "vikas@1265");
        
        Statement stmt= con.createStatement();
        
        ResultSet res= stmt.executeQuery("Select * from account");
        
        RowSetFactory rsf= RowSetProvider.newFactory();
        
        CachedRowSet crs= rsf.createCachedRowSet();
        
        crs.populate(res);
        
        con.close(); // we cant access result not but still cached result set is still active
        
        while(crs.next())
        {
            System.out.println(res.getInt(1)+" "+ res.getString(2));
        }
        
        
        
    }



}
