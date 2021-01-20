
/*

Every class in java including abstract can contain constructor but interface 
cannot contain constructor.
==============================================================================

*/
package Constructors;


 class Testing1 {
    
     Testing1()
     {
         // This is valid
     }
 
 
 }


abstract class Testing2
{
    Testing2() 
    {
        // abstract class object cannot be created but constructor can be created.
    }
}



interface Testing3
{
    
    /*
    Testing3()
    {
        // this is illegal as we cannot create a constructor inside interface.
    }

 1. job of constructor is to initialize the instance variables.
  
 2. But interface never contains instance variables instead it always contains
    only **static variables hence it is not possible to create a constructor 
    in an interface.
    
    
    */
    
    


}