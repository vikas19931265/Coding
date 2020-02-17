/*

Differences between == operator and .equals() methods.
-----------------------------------------------------------------------------------------

== operator                                                                        .equals method

1. It is an operator in java applicable for both primitives                   1. It is a method applicable only for object types          
   and object types.                                                              but not for primitive types.


2. In the case of Object references, == operator is meant                    2. By default .equals() method present in the object class     
   for reference comparison(address comparison)                                  is also meant for the reference comparison. 

3. We cannot override == operator for content comparison                      3. We can override .equals() method for content comparison.  


4. To use == operator, compulsory there should be some                        4. If there is no relationship between the argument types then 
   relationship between the argument types , either child to                     .equals() method will not raise any compile time or run time errors
   parent or parent to child or same type otherwise we will                     and will simply return false.
   get the compile time error saying incomparable types




Answer in 1 line
-------------------

In general , we can use == operator for the purpose of reference comparison and .equals() method for the purpose
of content comparison.


note
------------

for any object reference r, 

        r==null or r.equals() always returns false.

Example

        Thread t = new Thread();

        System.out.printtln(t==null); false
        
        System.out.println(t.equals(null)); false.


*/


