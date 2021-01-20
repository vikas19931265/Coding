
package aInstanceVariables;

/* INSTANCE VARIABLES.( also known as Object level variables or attributes)..


1. If the value of the variables is varied from object to object, such type of variables
   are called instance variables.

2. For every object, a separate copy of the instance variables will be created.



    Where to Declare Instance Variables??

Instance Variables should be declared within the class directly, but outside of any method,
or block or constructor or any loop( for/while/do-while).

        eg.
                class Test
                {
                        int x=10; // instance variable declared outside any block.
                            Test();
                }           
   

    When Instance Variables is created??

Instance variables will be created at the time of the object creation and destroyed
at the time of the object destruction. Hence the scope of the instance variables
is exactly same as the scope of the object.


    Where Instance Variables is stored??

Instance Variables will be stored, in the heap memory as part of object.


3. Instance and static variables can be accessed by multiple threads simultaneously and hence
   these are not thread safe but in the case of local variables for every thread a separate copy of object
   will be created and hence local variables are thread safe.

   
*/

