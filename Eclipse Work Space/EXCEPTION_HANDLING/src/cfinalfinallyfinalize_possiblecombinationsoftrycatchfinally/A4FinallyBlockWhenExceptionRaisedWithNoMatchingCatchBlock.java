/*


Case 3: If an exception is matched but catch block is not matched
===================================================================


*/
package cfinalfinallyfinalize_possiblecombinationsoftrycatchfinally;



class Test3
{
    public static void main(String[] args)
    {
        try
        {
            System.out.println(10/0);
            
            System.out.println("Try block");
        }
    
        catch(NullPointerException e)
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
finally block executed
Exception in thread "main" java.lang.ArithmeticException: / by zero
	at c.finalfinallyfinalize_possiblecombinationsoftrycatchfinally.Test3.main(NewClass3.java:19)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/