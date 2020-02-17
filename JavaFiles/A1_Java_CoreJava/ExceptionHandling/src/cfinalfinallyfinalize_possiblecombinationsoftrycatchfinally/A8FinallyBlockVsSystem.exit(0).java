/*

finally vs System.exit(0)
============================

There is only one situation where the finally block will not be executed that is whenever
we are using System.exit(0) method.

Whenever we are using System.exit(0) then JVM itself will be shutdown. In that case
the finally block will not be executed.

that is System.exit(0) dominates finally block.


System.exit(0)
===============

1. This argument acts as status code, Instead of zero we can take any integer value.

2. zero means normal termination, non zero means abnormal termination.

3. This status code is internally used by JVM, whether it is zero or non zero
   there is no change in the result and effect with respect to the program.



*/
package cfinalfinallyfinalize_possiblecombinationsoftrycatchfinally;


class Test71
{
    public static void main(String[] args)
    {
        try
        {
            System.out.println("try");
            System.exit(0);
        }
    
        catch(ArithmeticException e)
        {
            System.out.println("Catch block executed");
        }
    
        finally
        {
            System.out.println("Finally block is executed");
        }
    
    }
}

/*
run:
try
BUILD SUCCESSFUL (total time: 0 seconds)

*/