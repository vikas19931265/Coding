
/*

Application to update a record in database

works perfectly

*/

package A3CachedRowSet;

import java.sql.*;

import javax.sql.rowset.*;

import java.util.*;

class Demo3 {

    public static void main(String[] args) throws Exception {

        RowSetFactory rsf = RowSetProvider.newFactory();

        CachedRowSet jrs = rsf.createCachedRowSet();

        jrs.setUrl("jdbc:mysql:///vikasDB");

        jrs.setUsername("vikas");

        jrs.setPassword("vikas@1265");

        jrs.setCommand("select * from account");
        
        jrs.execute();
        
        while(jrs.next())
        {
            
            float balance= jrs.getFloat(3);
            
            if(balance>4000)
            {
                jrs.updateFloat(3, balance+10000);
                
                jrs.updateRow();
            }
        }
        
        System.out.println("Records updated successfully");
        
        jrs.close();
    
    
    }
}
    
/*
run:
Records updated successfully
BUILD SUCCESSFUL (total time: 0 seconds)


*/