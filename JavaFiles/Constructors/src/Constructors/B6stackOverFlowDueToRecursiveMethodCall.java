
/*

Recursive call
====================


Recursive method call is a run time exception saying stack overflow error

*/

package Constructors;


 class Testing8 {
    

     public static void m1()
     {
         m2(); // recursive method call
     }
 
     public static void m2()
     {
         m1(); 
     }
 
 
     public static void main(String[] args)
     {
         m1(); // If we comment this line we will get "hello" as we are not calling any method and recursion call does not happen.
         
         System.out.println("hello");
     }
 
 /*
     This will give us stack overflow error due to recursive method call.
     
     1. Firstly we created the main thread.
     2. Inside main method m1() is called.
     3. Inside m1() method, m2() is called.
     4. Inside m2() method, m1() is called , and this will keep on going.
     . 
     .
     .
     
        This will continue forever hence at some point stack will be full and we 
        will get stack overflow error.
     
     
        This issue will occur during the run time when JVM executes.
     
     */
 
 
 
 
 }


//--------------------------------------------------------------------------*********--------------------------------------------------------------------------