/*

Overloading
=======================

Two methods are said to be overloaded method if and only if both having the same name 
but different arguments types.

In c language we cant take 2 methods with the same name and different types. If there
is a change in argument types then compulsory we should go for new method name

Example
        abs() for int type
        labs() for long type
        fabs() for float type

Lack of overloading in C increases the complexity of the programming.

But in java we can take multiple methods with the same name and different argument
types.

Example

        abs(int)
        abs(float) 
        abs(long)

Having the same name and different argument types is called as method overloading.

All these methods are considered as the overloaded methods.

Having overloaded methods concept in java reduces the complexity of the programming.


Conclusions
==============

In overloading compiler is responsible to perform method resolution(decision) based
upon the reference type(but not on the run time object). Hence overloading is also
considered as compile time polymporphism(or) static polymorphism or early binding.


*/