/*

return vs finally
==========================

Even though return statement is present in try or catch blocks. First the finally block
will be executed and after that only return statement will be considered i.e finally
block dominates the return statement.


Flow
=========

1. Firstly try block is executed (System.out.println("I am in try").

2. next return statement is encoutered which must cause the program to terminate
   as the caller of main method is JVM.

3. But this will not happen. Finally method has to be executed first and then
   return statement will be executed. 



*/
package cfinalfinallyfinalize_possiblecombinationsoftrycatchfinally;


class Test4
{
    public static void main(String[] args)
    {
        try
        {
            System.out.println("I am in try");
            
            return; 
           /*
            
            Here return will cause the control to go to the caller of the main method.
            Here the caller of the main method is JVM hence any lines written after
            execution of return statement will not be executed.
            
          */ 
            
        }
    
        catch(ArithmeticException e)
        {
            System.out.println("catch block is executed");
        }
    
    
        finally
        {
            System.out.println("Finally block is executed");
        }
    
    
    System.out.println("Out of try catch block");
    }
}


/*
run:
I am in try
Finally block is executed
BUILD SUCCESSFUL (total time: 0 seconds)

*/