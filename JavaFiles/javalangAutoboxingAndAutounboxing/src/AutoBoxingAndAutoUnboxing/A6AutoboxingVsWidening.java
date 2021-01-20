/*

Overloading with respect to Autoboxing, Widening and Var-Arg methods
=============================================================================

Case 1: Autoboxing vs Widening
---------------------------------

Widening dominates autoboxing. m1() method with long parameter is going to get the chance here
as widening concept came in java 1.0 version but autoboxing concept is new and has come in
java 1.5 version hence Widening concept wins the race.


*/
package AutoBoxingAndAutoUnboxing;


 class Test0 {

     public static void m1(Integer I) //Overloaded methods
     {
         System.out.println("AutoBoxing");
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

// O/P: widening