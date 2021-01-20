/*

Program To Retrieve Date Values From The Database:
=====================================================


For this we can use either simple Statement or PreparedStatement.

The retrieved Date values are Stored in ResultSet in the form of "java.sql.Date" and we can get
this value by using getDate() method.

Once we got java.sql.Date object,we can format into our required form by using
SimpleDateFormat object.

            
                    Database
                        |
                            sdate=rs.getDate(2)
                        v    
                    java.sql.Date        
                        |
                            String s =sdf.format(sdate)
                        v 
                    Our required String form.    
                        
*/


import java.sql.*;

import java.text.SimpleDateFormat;

import java.util.*;

class RetrieveValues {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");

        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        PreparedStatement stm = con.prepareStatement("select * from users");
        
        ResultSet res=stm.executeQuery();
        
        while(res.next())
        {
            
            java.sql.Date d = res.getDate(2);
            
           

            /* date is of java format( like 1993-09-06)
            
               this date is not user understandable hence we need to convert
                it to user understandable form.
            

            */
            
            
            SimpleDateFormat sdf= new SimpleDateFormat("dd-MM-yyyy"); //displaying date in user understandable form.
            
            String s =sdf.format(d); //java.sql.Date changed to user understandable.
            
            System.out.println(res.getString(1)+"..."+s);
        }
    
    
        con.close();
    
    }
    
}
        

/*

run:
vikas...06-09-1993
swati...12-02-2002
amit...09-09-1993
BUILD SUCCESSFUL (total time: 0 seconds)

*/