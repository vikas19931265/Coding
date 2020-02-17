package Operators;

/*

conditional operator(?:)
=======================================================


The only possible ternary operator in java is conditional operator(?:)

*Nesting of ternary operator is also possible as shown in example 2.

We will get compile time error if the variable is of less type then result. Example
trying to store int result in byte.

Example
==============

int x=(10>20)?30:40;
System.out.println(x);

Example2

int x =(10>20):30:((40>50)?60:70);
System.out.println(x);



*/