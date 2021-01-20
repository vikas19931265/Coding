
/*

Application to update a record in database

*/

package A2JDBCRowSets;

import java.sql.*;

import javax.sql.rowset.*;

import java.util.*;

class JDBCRowSetUpdate {

    public static void main(String[] args) throws Exception {

        RowSetFactory rsf = RowSetProvider.newFactory();

        JdbcRowSet jrs = rsf.createJdbcRowSet();

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
                jrs.updateFloat(3, balance+1000);
                
                jrs.updateRow();
            }
        }
        
        System.out.println("Records updated successfully");
        
        jrs.close();
    
    
    }
}
    
