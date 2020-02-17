/*

Program to insert record by using the Cached RowSet
====================================================

note
======



 */
package A3CachedRowSet;

import java.sql.*;

import javax.sql.rowset.*;

import java.util.*;

class Demo2 {

    public static void main(String[] args) throws Exception {

        RowSetFactory rsf = RowSetProvider.newFactory();

        CachedRowSet jrs = rsf.createCachedRowSet();

        jrs.setUrl("jdbc:mysql:///vikasDB");

        jrs.setUsername("vikas");

        jrs.setPassword("vikas@1265");

        jrs.setCommand("select * from account");

        jrs.execute();

        Scanner cn = new Scanner(System.in);

        jrs.moveToInsertRow(); // this will create a buffer for rows to be inserted.

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

        jrs.moveToCurrentRow(); // once insertion is done cursor will move to starting place from where insertion was made.

        jrs.acceptChanges(); // this will make the changes to reflect in DB.

        jrs.close();
    }
}
