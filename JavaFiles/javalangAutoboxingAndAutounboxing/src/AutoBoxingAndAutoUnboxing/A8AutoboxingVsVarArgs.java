/*

Case 3:

Autoboxing vs VarArg
================================================================================

VarArg method always gets the least priority. This method is executed only when none of the method
matches. But there m1(x) is matching with m1(Integer l) of autoboxing hence autoboxing concept is going
to get the chance to execute.

Autoboxing dominates VarArg methods.

In general var-arg method will get the least priority to execute that is if no other method matched
then only var-arg method is going to get the chance. It is exactly same as default case inside the
switch.

Note********
-------------

While resolvoing overloaded methods compile will always give the precedence in the following
order.

1. Widening

2. Autoboxing

3. var-arg methods



*/
package AutoBoxingAndAutoUnboxing;



 class Test010 {

     public static void m1(int... x) //Overloaded methods
     {
         System.out.println("varArg method");
     }


     public static void m1(Integer i)//Overloaded methods
     {
         System.out.println("Autoboxing");
     }


     public static void main(String[] args)
     {
         int x=10;

         m1(x);
     }


 }

/*
run:
Autoboxing
BUILD SUCCESSFUL (total time: 0 seconds)

*/