// To Display Number of Rows by SQL Aggregate Function count(*)

import java.sql.*;

import java.util.*;

class Test4 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        Statement stmt = con.createStatement();

        String query = String.format("select count(*) from employees");;

        ResultSet rs = stmt.executeQuery(query);

        int flag=0;
        
        if(rs.next())
        {
            flag=1;
            
            System.out.println(rs.getInt(1));
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
6
BUILD SUCCESSFUL (total time: 0 seconds)


*/