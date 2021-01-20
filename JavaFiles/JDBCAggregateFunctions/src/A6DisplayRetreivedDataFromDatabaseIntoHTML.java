/*

Program to retrieve data from the database and put it into the html form.

*/
import java.sql.*;

import java.util.*;

import java.io.*;

class Test422 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        Statement stmt = con.createStatement();
        
        String data=("<html><head><body bgcolor='pink'><table border =1 color = 'green'><tr><td>NO</td><td>NAME</td><td>SALARY</td><td>ADDRESS</td></tr>");
        
        ResultSet rs= stmt.executeQuery("Select * from Employees");
        
        int flag=0;
        
        while (rs.next())
        {
            flag=1;
            
            data=data+"<tr><td>"+rs.getInt(1)+"</td><td>"+rs.getString(2)+"</td><td>"+rs.getDouble(3)+"</td><td>"+rs.getString(4)+"</tr></td>";
        }

       
        
        if(flag==0)
        {
            System.out.println("No Records Found");
        }
        
         data=data+"</table></body></head></html>";
         
        FileOutputStream fos = new FileOutputStream("/home/vikas/Desktop/html/html.html");
        
        byte[] b = data.getBytes();
        
        fos.write(b);
        
        System.out.println("page generated successfully");
        con.close();

    }
}
