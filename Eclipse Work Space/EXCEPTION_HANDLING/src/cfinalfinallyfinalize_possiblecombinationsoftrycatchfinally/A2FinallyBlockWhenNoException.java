package cfinalfinallyfinalize_possiblecombinationsoftrycatchfinally;

/*

Case 1: If there is no Exception
==================================

*/

class Test1
{
    public static void main(String[] args)
    {
        try
        {
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
Try block
finally block executed
BUILD SUCCESSFUL (total time: 0 seconds)

*/