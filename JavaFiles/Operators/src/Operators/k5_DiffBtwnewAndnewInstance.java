package Operators;

/*

Differences between new and newInstance()
--------------------------------------------

new operator                                                        newInstance()

1.It is an operator in java                                     1. It is a method present in java.lang.Class

2.We can use new operator to create                             2. We can use newInstance() method to create object if
  object if we know the name of the                                we don�t know the class name at the beginning and it is         
  class at the beginning                                           available dynamically at the run time.

3. To use new operator class not required                      3. To use newInstance() method compulsory the class should  
  to contain no argument constructor                              contain no-argument constructor otherwise we will get   
                                                                  run time exception saying InstantiationException.                      


4.At run time if the corresponding .class file                 4. At run time if the corresponding is not present then we  
  is not present then we will get run time exception              will get Runtime exception saying ClassNotFoundException  
saying: NoClassDefFoundError which is unchecked                   which is checked exception.  
exception.


*/

