/* final-static variable.
=================================
 
1. If the value of a variable is not varied from Object to Object such type of
   variables are not recommended to be declared as instance variables.

2. We have to declare those variables at the class level by using static modifier.


3. In the case of the instance variables for every object a separate copy will be 
    created but in the case of the static variables a single copy will be created at the 
    class level and shared by every Object of that class.


4. For static variables it is not required to perform initialization explicitly. JVM will
   always provide default values.


5. If the static variable declared as final then compulsory we should perform the initialization
   explicitly otherwise we will get the compile time error and JVM will not provide any 
   default values.

*/
package MemberMethodsAndVariables;


 class Test {
    
/*
 final static int x;
 
 Compile error: Variable x might not have been initialized
 
*/
}

//---------------------------------------------------------------------------------*******************--------------------------------------