//How to Select highest salaried Employee Information by using SQL Aggregate Function Max

import java.sql.*;

import java.util.*;

class Test41 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        Statement stmt = con.createStatement();

        String query = String.format("select * from employees where esal=(select max(esal) from employees)");

        ResultSet rs = stmt.executeQuery(query);

        int flag=0;
        
        System.out.println("ENO\tENAME\tESALARY\tEADDR");
        
        while (rs.next())
        {
            flag=1;
            
            System.out.println(rs.getInt(1) + "\t" + rs.getString(2) + "\t" + rs.getDouble(3) + "\t" + rs.getString(4));
        }

        if(flag==0)
        {
            System.out.println("No Records Found");
        }
        
        con.close();

    }
}

/*

run:
ENO	ENAME	ESALARY	EADDR
5	Ajit	70000.0	Karnataka
BUILD SUCCESSFUL (total time: 0 seconds)


*/