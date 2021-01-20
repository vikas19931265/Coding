/*

Stored Procedures App8:
============================

JDBC Program to call function to Demonstrate SQL%ROWCOUNT
implicit cursor

create or replace function getDeletedEmployeesInformation(eno in number,count out number) return SYS_REFCURSOR as

emps SYS_REFCURSOR;

BEGIN

        Open emps for

        SELECT * FROM EMP  where EMPNO=eno;
        
        delete from emp where empno=eno;
        
        count :=SQL%ROWCOUNT;
        
        RETURN emps;
        
END;

/*/

import java.sql.*;

import java.util.*;

import oracle.jdbc.*;


class FunctionProgram345 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        CallableStatement stmt = con.prepareCall("{?=call getDeletedEmployeesInformation(?,?)}");
       
        stmt.setInt(2, 800);
        
        stmt.registerOutParameter(1, OracleTypes.CURSOR );
        
        stmt.registerOutParameter(3, Types.INTEGER);
        
        stmt.execute();
        
        ResultSet res = (ResultSet) stmt.getObject(1);
        
        
        while(res.next())
        {
            System.out.println(res.getInt(1)+"...."+ res.getString(2));
        }
    
        int count=res.getInt(3);
        
        System.out.println(count+" rows were affected");
        
        con.close();
    
    }
}  