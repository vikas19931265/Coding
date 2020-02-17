/*

Case 2:
------------

Widening vs VarArg methods
================================================================================

Widening again here wins the race and get the chance as widening came in 1.0 version
and varArg came in java 1.5 version.

*/
package AutoBoxingAndAutoUnboxing;


 class Test01 {

     public static void m1(int... x) //Overloaded methods
     {
         System.out.println("varArg methods");
     }


     public static void m1(long l)//Overloaded methods
     {
         System.out.println("widening");
     }


     public static void main(String[] args)
     {
         int x=10;

         m1(x);
     }


 }

/*
run:
widening
BUILD SUCCESSFUL (total time: 0 seconds)

*/