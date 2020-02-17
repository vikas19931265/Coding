/*

No Dangling else part in Java
================================================================================


There is no dangling else problem in java. Every else is mapped to the nearest if 
statement.


        if(true)

            if(true)

                System.out.println("Hello");

            else
                System.out.println("Hi");
                

Here the else always belongs to the nearest if statement.


*/

