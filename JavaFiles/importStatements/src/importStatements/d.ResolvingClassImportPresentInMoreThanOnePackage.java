package JavaSourceFileStructure;

import java.util.Date; // Date belong to util package

import java.sql.*;      // Date belong to sql package also.

/*

While resolving class names compiler always gives the precedence in the following order.

1. Explicit class import.

2. Classes present in current working directory.(Default Package)

3. Implicit class import.

*/



 class Testing7
{
    public static void main(String[] args)
    {
        Date d = new Date();
        
        System.out.println(d.getClass().getName()); // 0/p java.util.Date
        
            /*
            
        Here in this case the object will belong to Date Class of util package as we have imported it
        
        explicitly in our import package( import java.util.Date).
        
            
        In this example util package Date got considered.
        
        */
    }
}

//-------------------------------------------------------------------------------------------******************---------------------------------------------
