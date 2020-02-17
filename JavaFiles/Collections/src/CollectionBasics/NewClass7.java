/*
    Set( interface)

1. It is the child interface of collection.


2. If we want to represent a group of individual Objects as a single entity where
   duplicates are not allowed and insertion order not required to be preserved then we should go for 
   Set interface.


                          Collection( interface) ( 1.2 version)
                                /
                               /
                              /
                             / 
                     Set(interface)(1.2)
                           /\                
                          /  \           
                         /    \           
                        /      \           
                    HashSet(C)   LinkedHashSet(C)
                       (1.2)        (1.4)              


 SortedSet interface(interface)

1. It is the child interface of Set. If we want to represent a group of individual objects as a single
   entity where duplicates are not allowed and all objects should be inserted according to some sorting order.
   Then we should go for the sorted set.




NavigableSet( interface)


1. It is the child interface of sortedSet , it contains several methods for navigation purposes


                                Collection(I)
                                    \
                                     \   
                                      \ 
                                       \ 
                                        Set(I)
                                          |  
                                          |
                                          |
                                          |
                                         SortedSet(I) 
                                          |  
                                          |
                                          |
                                         NavigableSet(I) 
                                          |  
                                          |
                                          |
                                         TreeSet(Class) 


Differences between List and Set?


List                                              Set                  

1. duplicates are allowed                        duplicates are not allowed.

2. Insertion order is persevered                 Insertion order is not persevered.   


*/     

////----------------------------------------------------------------------------------------------------------------------------------------------------------