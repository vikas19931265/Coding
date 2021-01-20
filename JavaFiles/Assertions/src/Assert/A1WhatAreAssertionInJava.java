/*

Assertions(1.4v)
======================

Introduction
========================

Very common way of debugging is usage of SOP statements. But the problem with using
SOP statement is that after fixing the bug compulsory we have to delete SOP statements 
otherwise these SOP statements will be executed at the run time for every request.
This can create performance problems and disturbs server logs.

To overcome this problem SUN people introduced assertions concept in java 1.4 version.

The main advantage of Assertions in java when compared with SOP is that after fixing
the bug, we are not required to move or delete the assert statements because they wont be executed
by default at the run time. Based upon our requirement we can enable or disable the 
assertions. And by default Assertions are disabled.


hence the main objective of the assertion is to perform debugging. 

Usually we can perform debugging in development and test environments but not in the
production environments. Hence assertion concept is applicable for development and 
test environments but not for production environment.


More About Assertions
============================

Assertion:
===============
Assertion is a statement in java. It can be used to test your assumptions about the program.

While executing assertion, it is believed to be true. If it fails, JVM will throw an error named AssertionError. 
It is mainly used for testing purpose.

Advantage of Assertion:
=========================

It provides an effective way to detect and correct programming errors.

Syntax of using Assertion:
===============================

There are two ways to use assertion. First way is:

        assert expression;  
        
and second way is:

    assert expression1 : expression2;  


Note
======

If you use assertion, It will not run simply because assertion is disabled by default.
To enable the assertion, -ea or -enableassertions switch of java must be used.

Compile it by: 
    javac AssertionExample.java

Run it by: 
    java -ea AssertionExample



*/
