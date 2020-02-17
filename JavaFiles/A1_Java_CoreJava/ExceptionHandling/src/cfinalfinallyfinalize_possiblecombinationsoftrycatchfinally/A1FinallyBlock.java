package cfinalfinallyfinalize_possiblecombinationsoftrycatchfinally;

/*

Finally block
=================

It is not recommended to take clean up code inside try block because there is no
guarantee for execution of every statement inside the try block.

It is not recommended to place clean up code inside catch block because if there is 
no exception then the catch block will not be executed.

We require some place to maintain the clean up code which should be executed irrespective
of whether exception is raise or not raised and whether handled or not handled. Such type
of the best place is nothing but the finally block.

Hence the main objective of the finally block is to maintain the clean up code.

Example
===================

        try
        { 
            risky code
        }

        catch(x e)
        {
            handling code
        }

        finally
        {
            cleanup code
        }


The specialty of the finally block is that it will be executed always irrespective of
whether the exception is raised or not raised and whether handled or not handled.


*/