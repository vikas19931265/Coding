/*

ArrayList vs CopyOnWriteArrayList


ArrayList                                               CopyOnWriteArrayList

It is not Thread safe                                   It is thread safe because every
                                                       update operation will be performed on the cloned copy.

While one thread iterating list object                  While one thread iterating list object , the other
other threads are not allowed to do any                threads are allowed to modify list in safe manner and we will not
modification to the list object otherwise              get ConcurrentModificationException.
we will get ConcurrentModificationException


Iterator is fail-fast                                   Iterator is fail-safe


Iterator of ArrayList can perform remove               Iterator of CopyOnArrayList cannot perform remove operation. 
operation                                              If we try to do so then we will get RuntimeException : UnsupportedOperationException             


Introduced in 1.2 version                             Introduced in 1.5 version.  



*/

//-----------------------------------------------------------------*****************************-------------------------------------------------------