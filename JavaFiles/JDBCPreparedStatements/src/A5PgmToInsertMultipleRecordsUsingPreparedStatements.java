
import java.sql.*;

import java.util.*;

class DropTable {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        String sqlQuery = "insert into employees values(?,?,?,?)";

        PreparedStatement stm = con.prepareStatement(sqlQuery);

        int count = 0;

        while (true) {
            System.out.println("Enter the number");

            Scanner cn = new Scanner(System.in);

            int num = cn.nextInt();

            System.out.println("Enter the name");

            String name = cn.next();

            System.out.println("Enter the salary");

            double salary = cn.nextDouble();

            System.out.println("Enter the address");

            String address = cn.next();

            stm.setInt(1, num);

            stm.setString(2, name);

            stm.setDouble(3, salary);

            stm.setString(4, address);

            stm.executeUpdate();

            System.out.println("row inserted successfully");

            count++;

            System.out.println("press y to continue n to exit");

            String option = cn.next();

            if (option.equalsIgnoreCase("n")) {
                break;
            }

        }

        System.out.println(count + "rows are successfully inserted");

        con.close();
    
    }

}

/*

run:
Enter the number
11
Enter the name
Sarita
Enter the salary
7000
Enter the address
HYD
row inserted successfully
press y to continue n to exit
y
Enter the number
67
Enter the name
Mamta
Enter the salary
6000
Enter the address
Gurgaon
row inserted successfully
press y to continue n to exit
n
2rows are successfully inserted
BUILD SUCCESSFUL (total time: 30 seconds)




*/
