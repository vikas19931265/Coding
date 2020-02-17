//Program to display properties of ResultSet:

import java.sql.*;

import java.util.*;

class ResultSetHoldabilityDemo3 {

    public static void main(String[] args) throws Exception {

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        Statement st = con.createStatement();

        System.out.println("Type :" + st.getResultSetType()); //1003 , it means that result set will be of forward movement type

        System.out.println("Concurrency :" + st.getResultSetConcurrency()); // 1007 , result set is read only

        System.out.println("Holdability:" + st.getResultSetHoldability()); // Result set is hold over commit type by default
    }
}

/*
run:
Type :1003
Concurrency :1007
Holdability:1
BUILD SUCCESSFUL (total time: 0 seconds)

*/