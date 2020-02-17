
//SQL injection attack in the Simple Statment.

import java.sql.*;

import java.util.*;

public class A9SQLInjectionDemoProgramInStatement {
    
    public static void main(String[] args) throws Exception
    {
        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        Statement stmt= con.createStatement();
        
        System.out.println("Enter the username");
        
        Scanner cn = new Scanner(System.in);
        
        String userName= cn.next();
        
        System.out.println("Enter the password");
        
        String upwd= cn.next();
        
        String query=String.format("select * from Credentials where uname='%s' and upwd='%s'",userName,upwd); 
        
                        /*
        
                            This query willl be compiled and then executed so user input is considered
                            during the comilation which should actully not be considered.
                    */
        
        ResultSet res = stmt.executeQuery(query);
        
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

Access provided here in the program is wrong

run:
Enter the username
sachin'--
Enter the password
ff
sachin..ramesh..Access Provided
BUILD SUCCESSFUL (total time: 14 seconds)

*/