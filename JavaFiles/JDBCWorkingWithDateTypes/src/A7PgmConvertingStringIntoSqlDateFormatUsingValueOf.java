/*


***Note: 
=====================

If end user provides Date in the form of "yyyy-MM-dd" then we can convert directly
that String into java.sql.Date form as follows...

String s = "1980-05-27";
java.sql.Date sdate=java.sql.Date.valueOf(s);

This is because the format of java.sql.Date is 'yyyy-MM-dd' only.


 */

import java.sql.*;

import java.text.SimpleDateFormat;

import java.util.*;

class InsertingDateValuesDatabase2 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        PreparedStatement stm = con.prepareStatement("insert into users values(?,?)");

        while (true) {
            System.out.println("Enter the name");

            Scanner cn = new Scanner(System.in);

            String name = cn.next();

            System.out.println("Enter Date(yyyy-MM-dd)");

            String date = cn.next();

            java.sql.Date d1 = java.sql.Date.valueOf(date); 
            
            /*
            
            If date provided is in format of (yyyy-MM-dd) then we can automatically
            converte to java.sql.Date by using valueOf() method.
            
            */

            stm.setString(1, name);

            stm.setDate(2, d1);

            stm.executeUpdate();

            System.out.println("Row inserted successfully");

            System.out.println("Press y to continue and any other key to quit");

            String choice = cn.next();

            if (!choice.equalsIgnoreCase("y")) {
                break;
            }

        }

        con.close();
    }
}

/*
run:
Enter the name
amit
Enter Date(yyyy-MM-dd)
1993-09-09
Row inserted successfully
Press y to continue and any other key to quit
n
BUILD SUCCESSFUL (total time: 10 seconds)

*/