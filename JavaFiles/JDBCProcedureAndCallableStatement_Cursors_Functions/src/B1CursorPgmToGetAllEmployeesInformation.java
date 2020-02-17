/*

Cursor Program to get all the employees information
============================================================

create or replace procedure getEmployeesInformation(empInfo  out SYS_REFCURSOR) as

begin

    open empInfo for
        
            select * from emp;
            
end;
/


*/


import java.sql.*;

import java.util.*;

import oracle.jdbc.*;

class CursorsProgram {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
        CallableStatement stmt = con.prepareCall("{call getEmployeesInformation(?)}");
        
        stmt.registerOutParameter(1,OracleTypes.CURSOR);
        
        stmt.execute();
        
        ResultSet res=(ResultSet)stmt.getObject(1);
        
        while(res.next())
        {
            System.out.println(res.getInt(1)+"...."+res.getString(2)+"....."+res.getString(3));
            
        }
    
    
    }
    
}

/*

run:
7369....SMITH.....CLERK
7499....ALLEN.....SALESMAN
7521....WARD.....SALESMAN
7566....JONES.....MANAGER
7654....MARTIN.....SALESMAN
7698....BLAKE.....MANAGER
7782....CLARK.....MANAGER
7788....SCOTT.....ANALYST
7839....KING.....PRESIDENT
7844....TURNER.....SALESMAN
7876....ADAMS.....CLERK
7900....JAMES.....CLERK
7902....FORD.....ANALYST
7934....MILLER.....CLERK
BUILD SUCCESSFUL (total time: 0 seconds)


*/