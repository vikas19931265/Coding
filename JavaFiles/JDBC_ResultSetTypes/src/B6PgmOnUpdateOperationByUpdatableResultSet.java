/*
Application-5: Performing Database updations (UPDATE operation) by using
UPDATABLE ResultSet (Type-1 Driver)
========================================================================

 */

import java.sql.*;
import java.util.*;

class ResultSetTypesDemo4 {

    public static void main(String[] args) throws Exception {
       
        Class.forName("sun.jdbc.odbc.JdbcOdbcDriver"); // mandatary to use type1 or type2 driver.
        
        Connection con = DriverManager.getConnection("jdbc:odbc:demodsn", "scott", "tiger");
        
        Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
        
        ResultSet rs = st.executeQuery("select * from employees");
        
        while (rs.next()) {
           
            float esal = rs.getFloat(3);
            
            if (esal < 5000) {
            
                float incr_sal = esal + 777;
                
                rs.updateFloat(3, incr_sal); // performing update operation on resultSet
                
                rs.updateRow();// updating row 
            }
        }
        con.close();
    }
}
