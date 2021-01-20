/*

Increment and Decrement operators
==============================================================================

++a, means first increment and then use, and a++ means first assign and then use.
However when they are used alone both will do the increment. But if we are using in
expression then then the result is going to vary.

*/
package BasicPrograms;

class SampleIncrementAndDecrement
{
   public static void main(String[] args)
    {
        int a=5;
        int c,d;

        c=a++; // first assign and then use, hence c value will be 5, and a value will be 6
        d=++a; // first increment and then assign, here d value will be 6+1=7
        System.out.println(c); //5
        System.out.println(d); //6
    }
}

/*
run:
5
7
BUILD SUCCESSFUL (total time: 0 seconds)

*/