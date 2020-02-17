﻿/*
Abstract class in Java
===================================================================================


• A class that is declared with abstract keyword, is known as abstract class in java. 
  It can have abstract and non-abstract methods (method with body).

• Before learning java abstract class, let's understand the abstraction in java first.


• Abstraction in Java

    Abstraction is a process of hiding the implementation details and showing only functionality to the user.

    Another way, it shows only important things to the user and hides the internal details 
    for example sending sms, you just type the text and send the message. You don't know the 
    internal processing about the message delivery.

• Abstraction lets you focus on what the object does instead of how it does it.

• Ways to achieve Abstraction
    
    There are two ways to achieve abstraction in java

    Abstract class (0 to 100%)
    Interface (100%)

• Abstract class in Java
    A class that is declared as abstract is known as abstract class. It needs to be extended and its method implemented. It cannot be instantiated.

• Example abstract class

    abstract class A{}  

• abstract method
    A method that is declared as abstract and does not have implementation is known as abstract method.
    Example abstract method
        abstract void printStatus();//no body and abstract  


Rule: If there is any abstract method in a class, that class must be abstract.

Rule: If you are extending any abstract class that have abstract method, you must either
      provide the implementation of the method or make this class abstract.



*/
