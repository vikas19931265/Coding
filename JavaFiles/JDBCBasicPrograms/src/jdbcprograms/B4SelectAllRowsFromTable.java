// Java program to select multiple rows from the table.


package jdbcprograms;

import java.sql.*;

class SelectMultipleRecords {

    public static void main(String[] args) throws Exception {
        Class.forName("oracle.jdbc.OracleDriver");
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        Statement stmt = con.createStatement();
        ResultSet rs = stmt.executeQuery("select * from employees");
        int flag = 0;
        while (rs.next()) {
            flag = 1;

            System.out.println(rs.getInt(1) + "\t" + rs.getString(2) + "\t" + rs.getDouble(3) + "\t" + rs.getString(4));

        }

        if (flag == 0) {
            System.out.println("No Records Found");
        }

    
        con.close();
    
    }
}

/*
run:
2	Swati	2000.0	Banglore
1	Vikas	10000.0	Chennai
BUILD SUCCESSFUL (total time: 0 seconds)

*/
