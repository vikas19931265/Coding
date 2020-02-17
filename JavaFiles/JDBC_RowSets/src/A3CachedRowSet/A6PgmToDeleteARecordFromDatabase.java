/*

Application to delete a record in database

*/

package A3CachedRowSet;

import java.sql.*;

import javax.sql.rowset.*;

import java.util.*;

class Demo4 {

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
                jrs.deleteRow();
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