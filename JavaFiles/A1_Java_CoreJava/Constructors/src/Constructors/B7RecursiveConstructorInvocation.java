/*
 
Recursice constructor call-->compile time error
======================================================
 
1. Recursive constructor invocation is a compile time error.

2. If there is any possibility of recursive constructor call then compiler 
   will check that and will throw the compile time error.

3. Recursive method call is a run time exception saying stack overflow error.
   But in our program if there is a  recursive constructor invocation
   then the code will not compile and we will get compile time error.


*/
package Constructors;

class Testing11
{
    /* Testing11() recursive constructor call which will be checked during the compile time.
    {
        this(10);
    }

    */
    Testing11(int i)
    {
        //this();
    }

    
    public static void main(String[] args)
    {
        System.out.println("hello");
    }

}


//--------------------------------------------------------------------------*********--------------------------------------------------------------------------