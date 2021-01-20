/*

Program to insert record by using the JDBC RowSet
====================================================

note
======

please note that for some reason update operation has not been working, however
retrieval and deletion is working fine.

 */
package A2JDBCRowSets;

import java.sql.*;

import javax.sql.rowset.*;

import java.util.*;

class JDBCRowSetInsert {

    public static void main(String[] args) throws Exception {

        RowSetFactory rsf = RowSetProvider.newFactory();

        JdbcRowSet jrs = rsf.createJdbcRowSet();

        jrs.setUrl("jdbc:mysql:///vikasDB");

        jrs.setUsername("vikas");

        jrs.setPassword("vikas@1265");

        jrs.setCommand("select * from account");

        jrs.execute();

        Scanner cn = new Scanner(System.in);

        jrs.moveToInsertRow();

        while (true) {

            System.out.println("Enter ID");

            int Id = cn.nextInt();

            System.out.println("Enter name");

            String name = cn.next();

            System.out.println("Enter balance");

            float balance = cn.nextFloat();

            jrs.updateInt(1, Id);

            jrs.updateString(2, name);

            jrs.updateFloat(3, balance);

            jrs.insertRow();
            
            System.out.println("Press y to continue and n to exit");

            String choice = cn.next();

            if (!choice.equalsIgnoreCase("y")) {
                break;

            }

        
        
        }

    }
}
