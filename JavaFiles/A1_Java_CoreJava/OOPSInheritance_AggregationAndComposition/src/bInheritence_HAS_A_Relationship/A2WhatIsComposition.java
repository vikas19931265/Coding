
/*

Composition
================

Without existing container object if there is a no chance of existing contained object
then the relationship between the container object and contained object is called as
composition which is also referred to as strong association.


Example
========

University contains several departments. Whenever university object is destroyed 
then automatically all the department objects will also be destroyed. This means
without the existence of university object there is no chance of existence of 
dependent object. Hence these are strong associated relationship and such relationship
is also known as composition.


    -------------------------university object-------------------
    |
    |   department object1                  department object2
    |
    |   department object3                  department object4      
    |
    |
    |


*/