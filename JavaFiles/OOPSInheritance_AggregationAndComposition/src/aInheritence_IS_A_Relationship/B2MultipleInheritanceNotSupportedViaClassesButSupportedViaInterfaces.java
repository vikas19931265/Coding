/*

Multiple Inheritance
========================


Having more than one Parent class at the same level is called as multiple inheritance.


Example             parent1                                 parent2
                               \                               /
                                \                             / 
                                 \                           /  
                                           child
                                            


Any class can extend only one class at a time and cant extend more then one class
simultaneously hence java will not provide support for multiple inheritance.


Example
=========

invalid
=========

class A{}

class B{}

class C extends A,B
{}



But an interface can extend any no of interfaces at a time hence java provides support
for multiple inheritance through interfaces.


Example
============

interface A{}

interface B{}

interface C extends A,B{}


If our class doesn't extends any other class then our class is the direct child class
of the object.


Example
===========

class A{}

Object
^
|
A

If our class extends any other class then our class is not direct child class of object,
it is indirect child class of object, which forms multilevel inheritance.

Example
==========

class B{}

class A extends B{}

Object
^
|
B
^
|-----------> multilevel inheritance
A(valid)


Example2
================

 Object             class B
    ^                   ^
    |                   |
     ----A(invalid)-----
*/