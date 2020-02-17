/*


Stored Procedures App5: 
==========================

JDBC Program to call StoredProcedure which returns all
Employees info by using SYS_REFCURSOR based initial characters of the name


create or replace procedure getEmployeesInformation3(initialChar in VARCHAR, empInfo  out SYS_REFCURSOR) as

begin
    
    open empInfo for
        
            select * from emp where ename like initialChar;
            
end;
/


*/


import java.sql.*;

import java.util.*;

import oracle.jdbc.*;

class CursorsProgram3{

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
        CallableStatement stmt = con.prepareCall("{call getEmployeesInformation3(?,?)}");
        
        System.out.println("Enter the char");
        
        Scanner cn = new Scanner(System.in);
        
        String input=cn.next();
        
        String input1= input+"%";
        
        stmt.setString(1, input1); //Here we dont need to append it with ' ' because of usage of method
                                   // setString which will put the data inside the procedure as String automatically.
        
        stmt.registerOutParameter(2,OracleTypes.CURSOR);
        
        stmt.execute();
        
        ResultSet res= (ResultSet)stmt.getObject(2);
        
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
Enter the char
S
7369SMITH
7788SCOTT
BUILD SUCCESSFUL (total time: 1 second)

*/