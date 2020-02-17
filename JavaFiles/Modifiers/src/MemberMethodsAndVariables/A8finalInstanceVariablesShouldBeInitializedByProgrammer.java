package MemberMethodsAndVariables;

/* final instance variables.( not initialized by the JVM)
=============================================================

1. If the value of a variable is varied from Object to Object such type of variables
    are called instance variables.


2. For every Object a separate copy of the instance variables will be created


3. For instance variables we are not required to perform initialization explicitly.
   JVM will always provide the default values.

    eg.

            class Test
            {
                int x;
                
                    public static void main(String[] args)
                     {
                        Test t = new Test();
                        t.x(); // here the output will be 0 as x is initialized with default value of 0 by JVM.
                      }
            }          
                        

4. If instance variable is declared as final then compulsory we have to perform initialization explicitly whether
   we are using or not. JVM will not provide default values to final instance variables.



package MemberMethods;


 class Test {
    
     
    // public final int x; // instance variable with final keyword must be initialized explicitly.
                           // Compile error: Variable x might not have been initialized. 
 }

*/

//---------------------------------------------------------------------------------*******************--------------------------------------

