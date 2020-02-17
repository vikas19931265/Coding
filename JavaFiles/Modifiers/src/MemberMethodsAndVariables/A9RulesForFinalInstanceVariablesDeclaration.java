/*
Rule for final instance variables declaration
=================================================

1. For final instance variables compulsory we should perform initialization before constructor 
   completion.

2. Instance variables declaration should be done before constructor completion.


3. The following are the various places for initialization

       1. At the time of declaration.

       2. Inside instance block.

       3. Inside constructor.

4. These are the only possible places to perform initialization for final instance variables.
   If we are trying to perform the initialization anywhere else then we will get the compile time 
   error.


*/
package MemberMethodsAndVariables;


class Testing7 {
    
    final int x=10; // initializing final variable at the time of declaration.
    
    final int y;
    
    
   
    {
        y=10;   // initializing final variable inside the instance block.
    }

    final int z;
    
   
    
    Testing7()
    {
        z=10; // initializing final variable inside the constructor.
    }
    
    
    /*
    final int b;
    
      public void m1()
    {
        b=20;
    }
    
  1. We cannot initialize a final variable inside a method as a method implementation task happens only after the constructor completion.  
    
    Error: Variable b might not have been initialized.
    
    */
    

 }

//---------------------------------------------------------------------------------*******************--------------------------------------