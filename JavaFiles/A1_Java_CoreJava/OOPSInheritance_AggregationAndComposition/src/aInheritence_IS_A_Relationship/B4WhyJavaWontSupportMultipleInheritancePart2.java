/*

Why java won't provide support for multiple inheritance
========================================================

Java wont provide support for multiple inheritance as there may be  a chance of getting
ambiguity problems.



Example
=========


Lets consider if we have two classes Parent1 and Parent2 class having the same method
methodOne().

Now if java is going to support multiple inheritance then child class lets say Child1
will extend from both the method.

So the child class will then contain same method coming from different  classes. Hence
amgiguity will arise if we create child class object and try to call the methodOne().
As the comiler will not be able to understand which methodOne() is referred here.


Parent1------> methodOne()                  Parent2------------>methodOne()
        ^                                                  ^     
        |                                                  | 
        |                                                  | 
        ----------------------c.methodOne();-----------------------------------------> ambiguity problem.


*/