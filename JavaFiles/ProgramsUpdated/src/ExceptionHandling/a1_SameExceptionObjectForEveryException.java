
/*
Main Class Exception is able to hold any exception object and display the Exception information.
However if for expception type we want to show some information then that would be bad idea to hold
every exception with Exception type object.

In that case for every exception same information would be stored..

*/





package ExceptionHandling;

class Test
{
    public static void main(String[] args)
    {
        try
        {
            double result=10/0;
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        
    }
}
/*
run:
java.lang.ArithmeticException: / by zero
	at ExceptionHandling.Test.main(a1_SameExceptionObjectForEveryException.java:23)
BUILD SUCCESSFUL (total time: 1 second)

*/
