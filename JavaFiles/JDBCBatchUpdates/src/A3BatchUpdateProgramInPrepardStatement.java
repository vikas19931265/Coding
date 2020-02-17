
import java.sql.*;

import java.util.*;

class BatchUpdatePrepared {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
        PreparedStatement stm= con.prepareStatement("insert into emp3 values(?,?)");
        
        while(true) 
        {
            
            /*
            
            In this loop we are reading the data from the user, our statement object already
            contains the compiled query. We just need to add the query with input to the batch.
            So we have create the query and then after reading the data from the user putting it
            inside the batch.
            
            This activity will be repeated for every time user is going to provide us with the 
            data. Once we get the data we will put the entire query to the batch.
            
            Once we get the full batch we will execute the batch at the end.
            
            
            
            
            */
            System.out.println("Enter the employeeNumber");
            
            Scanner cn = new Scanner(System.in);
            
            int empNo=cn.nextInt();
            
            System.out.println("Enter the employeeName");
            
            String empName=cn.next();
            
            stm.setInt(1, empNo);
            
            stm.setString(2, empName);
            
            stm.addBatch();  // we are calling this method so that the query(insert into emp values(?,?))
                             // with user provided data can be put inside the batch.
            
            System.out.println("Do you want to insert another record , press y to cont or any other key to quit");
            
            String input= cn.next();
            
            if(!input.equalsIgnoreCase("y"))
            {
                break;
            }
            
            
            
            
        }
    
        
        stm.executeBatch(); //After adding all the queries to batch we are executing it.
        
        System.out.println("Rows Inserted Successfully");
        
        con.close();
    
    }
    
}

/*

run:
Enter the employeeNumber
300
Enter the employeeName
Ajit
Do you want to insert another record , press y to cont or any other key to quit
y
Enter the employeeNumber
700
Enter the employeeName
vijay
Do you want to insert another record , press y to cont or any other key to quit
n
Rows Inserted Successfully
BUILD SUCCESSFUL (total time: 11 seconds)

*/