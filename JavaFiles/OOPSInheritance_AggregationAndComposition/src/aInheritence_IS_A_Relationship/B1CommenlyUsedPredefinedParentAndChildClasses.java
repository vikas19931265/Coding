/*

For all the java classes the most commonly required functionality is defined inside
the object class and hence object class acts as the root for all the java classes.


For all java Exceptions and errors the most commonly required functionality is defined
inside the Throwable class and hence Throwable class acts as root for Exception Hierarchy.


Diagram
==========

                                    Object Class
                                        |
|-------------------------------------- |------------------------------------          
String                                Number                                Throwable
                                        |                                      | 
                                        |-Byte                                 |---Exception 
                                        |-Short                                | 
                                        |-Integer                              |----Error         
                                        |-Long                                 | 
                                        |-Float
                                        |-Double

*/