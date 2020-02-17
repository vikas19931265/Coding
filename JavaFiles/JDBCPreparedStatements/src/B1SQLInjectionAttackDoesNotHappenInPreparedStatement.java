// SQL injection attack does not happen in the PreparedStatement

import java.sql.*;

import java.util.*;

 class SQLInjectionDoesNotHappenInPreparedStatement {
    
    public static void main(String[] args) throws Exception
    {
        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        PreparedStatement stmt= con.prepareStatement("select * from Credentials where uname=? and upwd=?");
        
        /*
        
            This query will be compiled first without taking the user input.
        
        */
        
        System.out.println("Enter the username");
        
        Scanner cn = new Scanner(System.in);
        
        String userName= cn.next();
        
        System.out.println("Enter the password");
        
        String upwd= cn.next();
        
        stmt.setString(1, userName);
        
        stmt.setString(2,upwd);
        
        ResultSet res = stmt.executeQuery(); //directly execution will happen without the compilation now.
        
        boolean status=false;
        
        while(res.next())
            
        {
            status=true;
            
            System.out.println(res.getString(1)+".."+res.getString(2)+"..Access Provided");
            
            
        }
                
        if(status==false)
        {
            System.out.println("Access Denied");
        }
        
        con.close();
        
    }

 

}


/*
run:
Enter the username
sachin'--
Enter the password
ff
Access Denied
BUILD SUCCESSFUL (total time: 2 seconds)

*/