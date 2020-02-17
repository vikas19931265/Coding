/* final static variable declaration rules.
=====================================================

Rule 1. For final static variables compulsory we should perform initialization
        before class loading completion (before main method). Following are the various places where 
        we can do declaration.


       1) At the time of the declaration.

       2) inside the static blocks.



1. Above are the only possible places to perform initialization for final/static variables.

2. If we are trying to perform initialization anywhere else then we will get compile time error.


    

*/
 
package MemberMethodsAndVariables;


 class Test9 {
    
 final static int x=10; // x static final variable initialized at the time of the declaration.
 
 final static int y;
 
    static
    {
        y=30; // y static variable initialized inside the static blocks.
    }
 
  /*
    final static int m;
  
    public void m1() // final static variables cannot be declared inside the method.
    {
        m=7;
    }
 
Compile error : cannot assign a value to the final variable x
  */
 
 }

//---------------------------------------------------------------------------------*******************--------------------------------------