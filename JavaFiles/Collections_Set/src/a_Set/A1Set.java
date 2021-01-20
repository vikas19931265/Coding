package a_Set;

/* Set module.
========================================

Set

                                        Collection(I)(1.2)
                                            |
                                            |
                                          Set(I)(1.2)  
                                            |
                                            |
                                            |    
                         -----------------------------             
                         |                            |                
                       HashSet(1.2)                SortedSet(I)(1.2)
                         |                            |  
                         |                         NaviagableSet(I)(1.6) 
                    LinkedHashSet(1.4)                |  
                                                   TreeSet(1.2) 







When we should go for Set?
===============================================

1. Set is child interface of Collection.

2. If we want to represent a group of individual objects as a single entity where duplicates are not allowed
   and insertion order not preserved.

***3. Set interface does not contain any new method and we have to use only collection interface methods



*/

//----------------------------------------------------------------------***********************------------------------------------------------