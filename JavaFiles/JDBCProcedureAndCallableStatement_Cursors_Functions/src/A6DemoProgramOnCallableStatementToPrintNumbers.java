/*

Stored Procedures App1: JDBC Program to call StoredProcedure which can take
two input numbers and produces the result.


Stored procedure in the database
=================================


create or replace procedure addition(input1 in number, input2 in number, output out number) as

    BEGIN
            output:=input1+input2;
            
    END;
    
    /
    
  variable res number;
  
  execute addition (10,20,:res);
  
  print res;
    


*/

import java.sql.*;

import java.util.*;

class CallableStatements {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
        CallableStatement stmt=con.prepareCall("{call addition(?,?,?)}"); // Calling a procedure.
        
        stmt.setInt(1, 20);
        
        stmt.setInt(2,40);
        
        stmt.registerOutParameter(3, Types.INTEGER); // Registering the out parameter
        
        stmt.execute();
        
        int result=stmt.getInt(3);
        
        System.out.println(result);
    
    
        con.close();
    }
    

    

}


/*
run:
60
BUILD SUCCESSFUL (total time: 0 seconds)

*/