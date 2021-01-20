/*

List( interface)
==============================================

It is the child interface of the Collection. If we want to represent a group of individual objects
as a single entity where duplicates are allowed and insertion order must be preserved then we should
go for List.


                            Collection( interface) ( 1.2 version)
                                /
                               /
                              /
                             / 
                           List(interface)  (1.2)
                           /\           \
                          /  \           \ 
                         /    \           \(this link established 1.2)
                        /      \           \
                    Array List  Linked List Vector (1.0)
                       (1.2)        (1.2)     |                       
                                              |
                                              |
                                             Stack  (1.0)

1. Vector and stack are also called as legacy classes as they came in previous old versions of java.

2. In java 1.2 version Vector and stack classes are re engineered to implement List interface.


*/

//---------------------------------------------------------------------**************************---------------------------------