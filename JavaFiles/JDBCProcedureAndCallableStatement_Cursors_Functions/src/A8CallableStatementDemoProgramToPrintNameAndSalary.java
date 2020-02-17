/*

Stored Procedures App3: 
============================

JDBC Program to call StoredProcedure which can take
employee number as input and provides corresponding name and salary.



create or replace procedure provideSalaryName(enum in number, salary out number,names out varchar) as

    BEGIN
            select sal,ename into salary,names  from emp where empno=enum;
            
    END;
    
    /
    
    show errors;
    
  variable res number;
  variable result1 varchar2;
  
  print res;
  
  execute provideSalaryName (7369,:res,:result1);
  
  show error;
  
  print result1;
  

    
*/
import java.sql.*;

import java.util.*;

class CallableStatementsPGM3 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
        CallableStatement stmt=con.prepareCall("{call provideSalaryName(?,?,?)}"); // Calling a procedure.
        
        stmt.setInt(1, 7369);
        
        stmt.registerOutParameter(2, Types.FLOAT); // Registering the out parameter
        
        stmt.registerOutParameter(3, Types.CHAR);
       
        stmt.execute();
        
        int result=stmt.getInt(2);
        
        String result2= stmt.getString(3);
        
        System.out.println(result+"......"+ result2);
    
    
        con.close();
    }
    

    

}

/*
run:
800......SMITH
BUILD SUCCESSFUL (total time: 0 seconds)

*/