/*
Reassigning the reference Variable
=================================================================================

If an object is no longer required, then reassign its reference variable to some other
object then old object by default will be eligible for the garbage collection.


        Student s1= new Student();
        Student s2= new Student(); // Till now no object is eligible for garbage collection.
            .
            .
            .
            .
            .
        s1= new Student();
            now one object is eligible for garbage collection as
            as s1 starts pointing to new object.
            
            .
            .
            .
            .
            .
        s2=s1; 
            now two objects are eligible for the garbage collection. 
            
            
This approach is reassigning the reference variable.        
       
*/
