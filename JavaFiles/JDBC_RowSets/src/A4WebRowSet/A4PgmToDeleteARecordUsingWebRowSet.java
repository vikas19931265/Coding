/*

Note: In emp.xml file, <deleteRow> tag must be provided under <data> tag

*/
package A4WebRowSet;

import java.io.*;

import javax.sql.rowset.*;

 class Dem8 {

    public static void main(String[] args) throws Exception {
        
        RowSetFactory rsf = RowSetProvider.newFactory();
        
        WebRowSet rs = rsf.createWebRowSet();
        
        rs.setUrl("jdbc:mysql://localhost:3306/vikasDB?relaxAutoCommit=true");
        
        rs.setUsername("vikas");
        
        rs.setPassword("vikas@1265");
        
        rs.setCommand("select * from account");
        
        rs.execute();
        
        FileReader fr = new FileReader("/home/vikas/Desktop/sample.xml");
        
        rs.readXml(fr);
        
        rs.acceptChanges();
        
        System.out.println("emp data deleted successfully");
        
        fr.close();
        
        rs.close();
    }
}

