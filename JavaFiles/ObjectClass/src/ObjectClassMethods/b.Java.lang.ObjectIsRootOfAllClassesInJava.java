package javalanggpackage;

/*

java.lang.Object
----------------------------

1. The most commonly required methods for every java class(weather it is predefined or customized class)
   are defined in a separate class which is nothing but Object class.

2. Every class in java is the child class of Object either directly or indirectly so that Object class methods
   are by default available to every java class.

3. Hence object class is considered as root of all the java classes.


note
---------

If our class does not extend another class , then only our class is the direct child class of Object.

example
        
    class A
{


        // A is the child of Object

}


If our class extends any other class then our class is indirect child class of Object class.

example
-----------

            class A extends B

            {

                    // A is the child of object , B is the child class of Object
                     hence indirectly A is the child class of object also
            }


                Object
                  |
                  B
                  |
                  A   (multilevel inheritance)----> This is right


               B        object
               \            /  
                \          / 
                 \        /  
                   -  A-  ( Multiple Inheritance)---> This is wrong



Conclusion
--------------

Either directly or indirectly java will not provide support for multiple inheritance with respect to the 
classes.


*/


