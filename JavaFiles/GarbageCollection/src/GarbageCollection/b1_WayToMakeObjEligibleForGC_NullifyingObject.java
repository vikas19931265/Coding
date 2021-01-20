/*

The ways to make an object eligible for the garbage collection
================================================================================

Even though programmer is not responsible to destroy useless objects but still it
is highly recommended to make an object eligible for garbage collection if it is no
longer required.

An object is said to be eligible for the garbage collection if and only if it does not
contain any reference variable

The following are various ways to make an object eligible for the garbage collection.


    Student s1= new Student(); // no object eligible for gc
    Student s2= new Student(); // no object eligible for gc
    
    s1----------------->Object
    s2----------------->Object

To make the object eligible for the garbage collection we have to make s1 point to the null
    
            s1=null; //Here one object is eligible for the garbage collection.
                .
                .
                .
            s2=null // Now two objects are eligible for the garbage collection.
            
            
            
by Durga Case1: Nullifying the reference variable:
========================================================

If an object is no longer is required, then assign null to all its reference variables
then object is automatically is eligible for the garbage collection. This approach
is called as nullifying the reference variable.
            
*/
