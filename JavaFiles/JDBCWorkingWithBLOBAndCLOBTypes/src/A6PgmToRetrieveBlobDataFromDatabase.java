import java.sql.*;

import java.text.SimpleDateFormat;

import java.util.*;

import java.io.*;

class RetreivingBlob {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        PreparedStatement stm = con.prepareStatement("select * from PersonsBlob");
        
        ResultSet res=stm.executeQuery();
        
        if(res.next())
        {
            InputStream is =res.getBinaryStream(2);
        
            byte[] buffer = new byte[1024];
            
            FileOutputStream fos= new FileOutputStream("/home/vikas/Downloads/imageFromDatabase");
            
            while(is.read(buffer)>0)  //reda stream data into buffer
            {
                fos.write(buffer);
            }
        
            /*
            
            
            Here is.read(buffer) will write the data to buffer. buffer size is of 1kb
            so 1 kb of data will be written to buffer and then in one single shot
            the entire data will be written.
            
            next again data will be read and put into buffer until entire reading of
            binary image file is not complete.
            */
        
        fos.flush();
        
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