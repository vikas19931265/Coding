/* throws keyword.
----------------------------------------------------------------------------------------------------

1. In our program if there is a possibility of raising checked exception then  compulsory
   we should handle that checked exception otherwise we will get compile time error 
   saying

CE: unreported exception XXX; must be caught or declared to be thrown.


*/
package eThrowsKeyword;

import java.io.*; 


// Example 1

class Test

{

    public static void main(String[] args) 
    {
       
        
        PrintWriter pw = new PrintWriter("abc.txt"); //Error--> This line can throw checked exception hence must be handled
                                                     // using the try-catch block or must be declared.
        
    
        //CE: unreported exception FileNotFoundException; must be caught or declared to be thrown.

    }
    
}


// Example 2

 class Test2
 {
     
     public static void main(String[] args)
     {
         
         
         
         Thread.sleep(10000); // Error--> This line can throw InterruptedException.
         
     
         //CE:error: unreported exception InterruptedException; must be caught or declared to be thrown
     }
     
 }


/*

  1. We can handle this compile time error by using the following two ways.
         
         First way: by using try-catch.
*/

class Test21
 {
     
     public static void main(String[] args)
     {
         
         
         try
         {
         
             Thread.sleep(10000);
         
         }
         
         
         catch(InterruptedException e)
         {
             
             
         }
     
     }
     
 }


/*

Second way: by using throws keyword.

1. We can use throws keyword to delegate  responsibility of exception handling to the 
   caller( it may be another method or JVM) then caller method is responsible to handle that
   exception
*/


class Test19
{
    
    public static void main(String[] args) throws InterruptedException
    {
        
        Thread.sleep(10000); // responsibility of exception handling given to the jvm.
    }

}

//-------------------------------------------------------------------------REVISED-------------------------------------------------