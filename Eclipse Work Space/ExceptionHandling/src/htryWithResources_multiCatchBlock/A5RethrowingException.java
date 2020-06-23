package htryWithResources_multiCatchBlock;

/*

Re throwing Exception.
=============================

We can use this approach  to convert one exception type to another exception type.

Example:



    try

        {

            System.out.println(10/0);
            
        }

   catch(ArithmeticException e)

        {

            throw new NullPointerException();

        }



*/

//--------------------------------------------------------------------------REVISED-----------------------------------------------------