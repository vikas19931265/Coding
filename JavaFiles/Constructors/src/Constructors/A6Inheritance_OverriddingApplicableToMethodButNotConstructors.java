
/*

**Constructor overloading is possible but not inheritance and overriding of constructor
======================================================================================

For constructors inheritance and overriding concepts are not applicable. But overloading
concept is applicable.

*/


package Constructors;


 class Person {
    

     Person()
     {
         /*
          This parent class constructor is not available to the child classes. If
          we want to call this parent class constructor from the child class then 
          we have to use super keyword.
          */
     }
 
 }


 class Child extends Person
{
    Child(int i)
    {
        
    }

   /*
    Here we are trying to called Child(), that is no argument constructor present in the parent class.
    
    Child c = new Child(); // This will throw error as parent class constructor is not applicable to the child
    
                           // If the parent class constructor itself is not available then overriding concept is also not applicable.
    
    */
    
   

}

//--------------------------------------------------------------------------*********--------------------------------------------------------------------------