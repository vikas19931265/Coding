/*

Queue( Interface)
==============================================


It is the child interface of Collection. If we want to represent a group of individual 
Objects prior to processing then we should go for Queue.


Usually Queue follows First in First out  order but based on our requirement we can implement 
our own priority order also.

example Before sending a mail all mail ids we have to store 
in some data structure. In which order we added mail ids in the same order only mails should
be delivered. For this kind of a scenario Queue is the best choice.


                                Collection(interface)
                                    \   
                                     \   
                                      \  
                                       \  
                                       Queue (interface)
                                       /\--------------------
                                      /  \                   |   
                                     /    \                  |   
                                    /      \                 |   
                      Priority Queue(C)  BlockingQueue(I)    Deque(Interface)
                                            |                |   
                                            |                |------->ArrayDeque(C)   
                                            |
                                            |--implements---->priorityBlockingQueue(C)
                                            |
                                            |--implements----->LinkedBlockingQueue(C)


Full Queue Concept came in the java 1.5 version.


All these below interfaces are meant for representing a group of individual Objects in single unit.

Collection
List 
Set
SortedSet
NavigableSet
Queue


If we want to represent a group of Objects as key-value pairs then we should go for 
Map interface.

*/  

//---------------------------------------------------------------------**************************---------------------------------