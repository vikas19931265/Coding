
/*

super() and this() cannot be taken together
===========================================================


1. super() and this() keywords(constructor calls) cannot be taken together inside the constructor.

2. Within the constructor we can take either super or this , but not both simultaneously.



*/

package Constructors;


 class Test7 {
    

 Test7()
 {
    
     /*
     super();
     
     this();
 
             
    This is illegal
     
     Compile error: call to this must be first statement in the constructor.
     
     */        
             
     
 
 
    }
 
 
 }

//--------------------------------------------------------------------------*********--------------------------------------------------------------------------