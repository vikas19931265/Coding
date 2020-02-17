/*

Stored Procedures App7: 
===================================

JDBC Program to call function returns all employees information
based on employee numbers



    create or replace FUNCTION funcpgm2(eno1 in number, eno2 in number) return SYS_REFCURSOR as
    
    emps SYS_REFCURSOR;

    begin
    
        open emps for
        
        select * from emp where empno>=eno1 and empno<=eno2;
        
        return emps;
    
        
    end;
    /


*/

import java.sql.*;

import java.util.*;

import oracle.jdbc.*;


class FunctionProgram34 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        CallableStatement stmt = con.prepareCall("{?=call funcpgm2(?,?)}");

        stmt.setInt(2, 7500);

        stmt.setInt(3, 7600);

        stmt.registerOutParameter(1, OracleTypes.CURSOR);

        stmt.execute();
        
        ResultSet result = (ResultSet)stmt.getObject(1);

        while(result.next())
        {
            System.out.println(result.getInt(1)+"....."+result.getString(2));
        }

        con.close();

    }
}

/*
run:
7521.....WARD
7566.....JONES
BUILD SUCCESSFUL (total time: 0 seconds)

*/