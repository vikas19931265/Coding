/*
 
Polymorphism
==========================

Same name with different forms is the concept of the polymorphism.


Polymorphism in Java is a concept by which we can perform a single action in different ways. 
Polymorphism is derived from 2 Greek words: poly and morphs. The word "poly" means many and 
"morphs" means forms. So polymorphism means many forms.

There are two types of polymorphism in Java: compile-time polymorphism and runtime polymorphism. 
We can perform polymorphism in java by method overloading and method overriding.

If you overload a static method in Java, it is the example of compile time polymorphism. 

Example 1
==================

    We can use abs() method for int type, long type, float type etc.

Example
        
    1. abs(int)
    2. abs(long)
    3. abs(float)

Example 2
=================

    We can use parent reference to hold any child objects.

    We can use the same list references to hold ArrayList object, LinkedList object,
    Vector object or Stack object.

Example

    1. List l = new ArrayList();
    2. List l = new LinkedList();
    3. List l = new Vector();
    4. List l = new Stack();



Diagram
============

                                    POLYMORPHISM
                                        |
                ----------------------------------------------------------------                            
                |                                                               |
  Compiletime/static/earlybinding                                       Runtime/dynamic/latebinding
                |                                                               |
       -------------------                                                      |        
       |                 |                                                      |
overloading          method hiding                                          overriding






*/