/*

Program showing how batch update is made in Normal Statements.


*/
import java.sql.*;

import java.util.*;

class BatchUpdate {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        Statement stmt = con.createStatement();

        stmt.addBatch("insert into emp values(900,'','','','','','','')"); //addding query to the batch

        stmt.addBatch("update emp set ENAME='VIKAS' where EMPNO=7369");

        int[] result = stmt.executeBatch(); //array will have number of rows affected by the update query

        int sum = 0;

        for (int result1 : result) {
            sum = sum + result1;
        }

        System.out.println("Total number of rows updated is" + sum);

        con.close();

    }

}


/*
run:
Total number of rows updated is2
BUILD SUCCESSFUL (total time: 0 seconds)

*/