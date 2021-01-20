
/*

Application: To Insert Records by using WebRowSet


*/

package A4WebRowSet;

import java.sql.*;

import javax.sql.rowset.*;

import java.io.*;

class Demo7
{
    public static void main(String[] args) throws Exception
    {
        RowSetFactory rsw= RowSetProvider.newFactory();
        
        WebRowSet rs= rsw.createWebRowSet();
        
        rs.setUrl("jdbc:mysql:///vikasDB?relaxAutoCommit=true");

        rs.setUsername("vikas");

        rs.setPassword("vikas@1265");
        
        rs.setCommand("select * from account");
        
        rs.execute();
        
        FileReader fr = new FileReader("/home/vikas/Desktop/sample.xml");
        
        rs.readXml(fr);
        
        rs.acceptChanges();
        
        System.out.println("Employee data inserted successfully");
        
        fr.close();
        
        rs.close();
    
    }
    
}