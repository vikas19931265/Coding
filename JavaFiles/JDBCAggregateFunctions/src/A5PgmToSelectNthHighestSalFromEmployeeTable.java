// Pgm to select the nth highest salary from the Employees table

/*

Note: The Rank Function will assign a ranking to each Row starting from 1.
select eno,ename,esal,eaddr, rank() over (order by esal DESC)

700 Sree Mukhi
600 Anasooya
500 Reshmi
400 Veena
300 Mallika
200 Sunny
100 Durga

7000 Hyd ➔ 1
6000 Hyd ➔ 2
5000 Hyd ➔ 3
4000 Chennai ➔ 4
3500 Chennai ➔ 5
2000 Mumbai ➔ 6
1000 Hyd ➔ 7

*/


import java.sql.*;

import java.util.*;

class Test421 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        Statement stmt = con.createStatement();
        
        System.out.println("Enter the rank");
        
        Scanner cn = new Scanner(System.in);
        
        int rank=cn.nextInt();
        
        String query = String.format("select * from ( select employees.* , rank() over (order by esal desc) as ranking from employees ) where ranking=%d",rank);

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
Enter the rank
3
ENO	ENAME	ESALARY	EADDR
4	Amar	6000.0	Chennai
BUILD SUCCESSFUL (total time: 1 second)

*/