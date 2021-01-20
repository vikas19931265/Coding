/*

Autoboxing
===============================================================================

Automatic conversion of primitive to wrapper object by the compiler is called as Autoboxing.


    Example

            Integer I=10;
                [Compiler converts int to integer automatically by autoboxing]

  After compilation the above line will become

            Integer I = Integer.valueOf(10);

  that is internally autoboxing concept is implemented by using valueOf()methods.



Autounboxing
===============================================================================


Automatic conversion of wrapper object to primitive by the compiler is called Autounboxing.

    Example

            Integer I = new Integer(10);

            int i=I;

         Here the compiler converts integer to int automatically by auto unboxing.

  After compilation the above line will become

        int i =I.intValue();

        that is internally autounboxing concept is implemented by using xxxValue()method




primitive value---------valueOf() method used(Autoboxing) to convert to -----Wrapper object

Wrapper object---------xxxValue() method used(Autounboxing) to convert to ----primitive value.


note
---------

Just because of Autoboxing and autounboxing we can use primitives and wrapper object interchangeably
from 1.5 version onwards.


*/


package AutoBoxingAndAutoUnboxing;


 class Test5 {

     static Integer I=10; // Autoboxing

     public static void main(String[] args)
     {
         int i=I; //Autounboxing

         m1(i);
     }

     public static void m1(Integer K) //Autoboxing
     {
         int m=K;

         System.out.println(m);
     }

}

/*

This in valid in 1.5 version but invalid in 1.4 version.

run:
10
BUILD SUCCESSFUL (total time: 0 seconds)

*/