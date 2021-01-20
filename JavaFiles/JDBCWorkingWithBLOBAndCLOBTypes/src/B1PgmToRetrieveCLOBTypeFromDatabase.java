import java.sql.*;

import java.text.SimpleDateFormat;

import java.util.*;

import java.io.*;

class RetreivingCLOB {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        PreparedStatement stm = con.prepareStatement("select * from StudentClob");
        
        ResultSet res=stm.executeQuery();
        
        if(res.next())
        {
            Reader is =res.getCharacterStream(2);
        
            char[] buffer = new char[1024];
            
            FileWriter fr= new FileWriter("/home/vikas/Downloads/textFromDatabase.txt");
            
            while(is.read(buffer)>0)  //reda stream data into buffer
            {
                fr.write(buffer);
            }
        
            /*
            
            
            Here is.read(buffer) will write the data to buffer. buffer size is of 1kb
            so 1 kb of data will be written to buffer and then in one single shot
            the entire data will be written.
            
            next again data will be read and put into buffer until entire reading of
            textfile is not complete.
            */
        
        fr.flush();
        
        System.out.println("Data written sucessfully");
        
        }
        
    
        con.close();
    
    }
}

/*
run:
Data written sucessfully
BUILD SUCCESSFUL (total time: 0 seconds)

*/