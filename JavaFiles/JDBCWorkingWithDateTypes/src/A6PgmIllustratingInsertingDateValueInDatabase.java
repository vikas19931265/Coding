/*

Program To Demonstrate Inserting Date Values Into Database:
============================================================



*/

import java.sql.*;

import java.text.SimpleDateFormat;

import java.util.*;

class InsertingDateValuesDatabase
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("oracle.jdbc.OracleDriver");
    
        Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        PreparedStatement stm= con.prepareStatement("insert into users values(?,?)");
        
        while(true)
        {
            System.out.println("Enter the name");
            
            Scanner cn = new Scanner(System.in);
            
            String name=cn.next();
            
            System.out.println("Enter Date(dd-MM-yyyy)");
            
            String date= cn.next();
            
            SimpleDateFormat df= new SimpleDateFormat("dd-MM-yyyy"); 
            
                    /*
                        please note that its mandatary here for "dd" to be lowercse
                        MM to be uppercase and "yyyy" to be again lowercase.
            
                    */
        
         java.util.Date d=  df.parse(date);
                
                /*
                    In this line we have converted the date entered in the String format
                    by the user to java.util.Date which is java format date.
         
                    so here our date will be converted in dd-MM-yyyy format which we
                    specified in our SimpleDateFormat.
                
                */
        
        
        long l =d.getTime();
        
        java.sql.Date d1= new java.sql.Date(l);
        
        stm.setString(1, name);
        
        stm.setDate(2, d1);
        
        
        /*
            note here we used prepared statement so we did not need to convert
            the date in the java format to database supported format as it is done
            internally.
        
            Here the actual date is 06-09-1993 in the java format , it will be
            changed automatically to oracle ( 06-sep-1993) or mysql date supported
            format we dont need to do it.
        
            However if we were using simple normal statement then compulsary we must
            change the date to datbase specific form and hence going with the prepared
            statement is the wise thing.
        
        
        
        */
        
        stm.executeUpdate();
        
        System.out.println("Row inserted successfully");
        
        System.out.println("Press y to continue and any other key to quit");
        
        String choice=cn.next();
        
        if(!choice.equalsIgnoreCase("y"))
        {
            break;
        }
        
        
        }
                
        
        con.close();
    }
}
        

/*
run:
Enter the name
vikas
Enter Date(dd-MM-yyyy)
06-09-1993
Row inserted successfully
Press y to continue and any other key to quit
y
Enter the name
swati
Enter Date(dd-MM-yyyy)
12-02-2002
Row inserted successfully
Press y to continue and any other key to quit
n
BUILD SUCCESSFUL (total time: 26 seconds)

*/