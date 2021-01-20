/*

Program to insert CLOB type file in the database.


*/


import java.sql.*;

import java.text.SimpleDateFormat;

import java.util.*;

import java.io.*;

class InsertingClob {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        PreparedStatement stm = con.prepareStatement("insert into StudentClob values (?,?)");
        
        File f = new File("/home/vikas/Downloads/data.txt");
        
        FileReader fr = new FileReader(f);
        
        stm.setString(1, "Gautam");
        
        stm.setCharacterStream(2, fr);
        
        System.out.println("Inserting file at "+ f.getAbsolutePath());
        
        int result=stm.executeUpdate();
        
        
        if(result>0)
        {
            System.out.println("Successfull");
        }
        
        else
        {
            System.out.println("Unsucessfull");
        }
        
    
        con.close();
    
    }
    
}

/*
run:
Inserting image at /home/vikas/Downloads/image2
Successfull
BUILD SUCCESSFUL (total time: 0 seconds)

*/