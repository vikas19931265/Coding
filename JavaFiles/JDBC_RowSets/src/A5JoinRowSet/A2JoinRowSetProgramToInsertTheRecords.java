/*

Application To Retrieve Records by using JoinRowSet
=========================================================

Note: students and courses tables must require in database with a matched column[Join column]
cid.


addRowSet(RowSet rowset, int columnIdx)
Adds the given RowSet object to this JoinRowSet object and sets the designated column as the
match column for the RowSet object.


*/
package A5JoinRowSet;

import java.sql.*;

import javax.sql.rowset.*;

class JoinRowSetDemo
{
    public static void main(String[] args) throws Exception
    {
        
        Connection con= DriverManager.getConnection("jdbc:mysql://localhost:3306/vikasDB","vikas","vikas@1265");
    
        RowSetFactory rsf= RowSetProvider.newFactory();
        
        JoinRowSet jrs= rsf.createJoinRowSet();
        
        CachedRowSet crs= rsf.createCachedRowSet();
        
        crs.setCommand("select * from account");
        
        crs.execute(con);
        
        CachedRowSet crs1= rsf.createCachedRowSet();
        
        crs1.setCommand("select * from location");
        
        crs1.execute(con);
        
        jrs.addRowSet(crs,1);
        
        jrs.addRowSet(crs1,1);
        
        while(jrs.next())
        {
            
            System.out.println(jrs.getInt(1)+"..."+ jrs.getString(2)+"...."+jrs.getFloat(3)+"...."+jrs.getString(4));
            
        }
    
        jrs.close();
    
    }
}


/*
run:
1...vikas....2000.0....chennai
BUILD SUCCESSFUL (total time: 0 seconds)

*/