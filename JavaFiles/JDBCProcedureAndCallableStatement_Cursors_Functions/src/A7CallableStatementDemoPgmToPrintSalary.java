/*

Stored Procedures App2: 
=======================================

JDBC Program to call StoredProcedure which can take
employee number as input and provides corresponding salary.



create or replace procedure provideSalary(enum in number, salary out number) as

    BEGIN
            select sal into salary from emp where empno=enum;
            
    END;
    
    /
    
    show errors;
    
  variable res number;
  
  execute provideSalary (7369,:res);
  
  print res;


*/


import java.sql.*;

import java.util.*;

class CallableStatementsPGM2 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
        CallableStatement stmt=con.prepareCall("{call provideSalary(?,?)}"); // Calling a procedure.
        
        stmt.setInt(1, 7369);
        
        stmt.registerOutParameter(2, Types.FLOAT); // Registering the out parameter
        
        stmt.execute();
        
        int result=stmt.getInt(2);
        
        System.out.println(result);
    
    
        con.close();
    }
    

    

}

/*
run:
800
BUILD SUCCESSFUL (total time: 0 seconds)

*/