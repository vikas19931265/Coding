/*

Stored Procedures App4:
==============================

JDBC Program to call StoredProcedure which returns all
Employees info by using SYS_REFCURSOR

*/


import java.sql.*;

import java.util.*;

import oracle.jdbc.*;

class CursorsProgram2 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
        CallableStatement stmt = con.prepareCall("{call getEmployeesInformation2(?,?)}");
        
        stmt.setFloat(1, 1600);
        
        stmt.registerOutParameter(2,OracleTypes.CURSOR);
        
        stmt.execute();
        
        ResultSet res =(ResultSet)stmt.getObject(2);
        
        boolean status1=false;
        
        while(res.next())
        {
            status1=true;
            
            System.out.println(res.getInt(1)+res.getString(2));
        }
    
        if(status1==false)
        {
            System.out.println("No record found");
        }
    
        con.close();
    
    }
    
}

/*
run:
7369SMITH
7521WARD
7654MARTIN
7844TURNER
7876ADAMS
7900JAMES
7934MILLER
BUILD SUCCESSFUL (total time: 0 seconds)

*/