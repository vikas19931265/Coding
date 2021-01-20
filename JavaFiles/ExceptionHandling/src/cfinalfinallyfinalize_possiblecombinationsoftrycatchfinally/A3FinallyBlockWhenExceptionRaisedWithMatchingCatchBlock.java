/*


Case 2: If an exception is raised and catch block is matched.
===============================================================



*/
package cfinalfinallyfinalize_possiblecombinationsoftrycatchfinally;


class Test2
{
    public static void main(String[] args)
    {
        try
        {
            System.out.println(10/0);
            
            System.out.println("Try block");
        }
    
        catch(ArithmeticException e)
        {
            System.out.println("Catch block");
        }
            
       finally
        {
            System.out.println("finally block executed");
        }
                    
                
    
    }
}

/*
run:
Catch block
finally block executed
BUILD SUCCESSFUL (total time: 0 seconds)

*/