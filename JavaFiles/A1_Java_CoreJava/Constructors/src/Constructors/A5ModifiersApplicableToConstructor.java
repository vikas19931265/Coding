/*

Modifiers applicable to a constructor
========================================


1. The only applicable modifiers for constructors are

    a) public

    b) private

    c) protected

    d) default.



2. If we are trying to use any other modifier then we will get compile time error

*/
package Constructors;


 class Tests1 {
    
     public Tests1()
     {
         
     }
     
     private Tests1(int i )
     {
         
     }

 
     protected Tests1(double d)
     {
         
     }
     
     Tests1( float f)
     {
         
     }
 
     /*
     static Tests()
     {
        Modifier static not allowed here.
     }
     
     */
 }

//--------------------------------------------------------------------------*********--------------------------------------------------------------------------