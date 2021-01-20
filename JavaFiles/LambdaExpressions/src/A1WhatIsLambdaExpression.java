/*

Java Lambda Expressions
==========================================
Lambda expression is a new and important feature of Java which was included in Java SE 8.

It provides a clear and concise way to represent one method interface using an expression.
It is very useful in collection library. It helps to iterate, filter and extract data from collection.

The Lambda expression is used to provide the implementation of an interface which has functional interface.
It saves a lot of code. In case of lambda expression, we don't need to define the method again for
providing the implementation. Here, we just write the implementation code.

Java lambda expression is treated as a function, so compiler does not create .class file.

Functional Interface

Lambda expression provides implementation of functional interface. An interface which has only one abstract method
is called functional interface. Java provides an anotation @FunctionalInterface, which is used to declare an interface as functional interface.


Why use Lambda Expression
============================================

To provide the implementation of Functional interface.
Less coding.

Java Lambda Expression Syntax
============================================

(argument-list) -> {body}

Java lambda expression is consisted of three components.

1) Argument-list: It can be empty or non-empty as well.

2) Arrow-token: It is used to link arguments-list and body of expression.

3) Body: It contains expressions and statements for lambda expression.


/*
Lambda expressions basically express instances of functional interfaces (An interface with single abstract method
is called functional interface. An example is java.lang.Runnable).
lambda expressions implement the only abstract function and therefore implement functional interfaces

Calculator d2=(int x, int y)->x+y;

Here Calculate is like class going to implement interface Calculator. The
Calculator interface is going to implement method calculate and for that
method it is going to receive two arguments.

On the Calculator reference class we can later on call the method to do the calculation.


 */

interface Calculator
{
    int calculate(int a, int b);
}

class DemoProgram
{

    public static void main(String[] args)
    {
        Calculator d2 = (int x, int y) -> x + y;
        Calculator d3 = (int x, int y) -> x * y;
        System.out.println(d2.calculate(10, 5) + " " + d3.calculate(10, 5));
       
    }
}

/*
run:
15 50
BUILD SUCCESSFUL (total time: 0 seconds)

 */
