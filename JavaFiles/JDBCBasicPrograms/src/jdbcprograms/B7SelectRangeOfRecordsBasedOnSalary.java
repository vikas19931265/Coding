// Java program to select multiple rows based upon the range of the Salary


package jdbcprograms;

import java.sql.*;

import java.util.*;

class Test3 {

    public static void main(String[] args) throws Exception {
        
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
        Statement stmt = con.createStatement();
        
        System.out.println("Enter the starting salary");
        
        Scanner cn = new Scanner(System.in);
        
        float startSal= cn.nextFloat();
        
        System.out.println("Enter the ending salary");
        
        float endSal=cn.nextFloat();
        
        String query=String.format("select * from employees where esal > %f and esal <%f", startSal,endSal);
        
        ResultSet rs = stmt.executeQuery(query);
        
        int flag = 0;
        
        System.out.println("ENO\tENAME\tESALARY\tEADDR");
        
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
Enter the starting salary
4000
Enter the ending salary
8000
ENO	ENAME	ESALARY	EADDR
3	Gautam	5000.0	Utter
4	Amar	6000.0	Chennai
BUILD SUCCESSFUL (total time: 3 seconds)

*/