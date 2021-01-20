
/*


Function Program to print average of two number


 create or replace FUNCTION funcpgm2(input1 in number, input2 in number) return number as
    
    begin
        
        return (input1+input2)/2;
    
        
    end;

*/



import java.sql.*;

import java.util.*;

import oracle.jdbc.*;

class FunctionProgram31 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        CallableStatement stmt = con.prepareCall("{?=call funcAddition(?,?)}");

        stmt.setInt(2, 30);

        stmt.setInt(3, 45);

        stmt.registerOutParameter(1, Types.FLOAT);

        stmt.execute();
        
        float result = stmt.getFloat(1);

        System.out.println(result);

        con.close();

    }
}

/*

run:
37.5
BUILD SUCCESSFUL (total time: 0 seconds)

*/