package Operators;


/*

Assignment operators
======================================

There are three types of assignment operators

1. simple assignment operator

2. Chained assignment


Chained Assignment Operator
=============================================


We cannot chained assignment directly at the time of the declaration

int a =b=c=d=20; // illegal

We will get the compile time error: Cannot find symbol 
                                    symbol:variable b
                                    location: class Test

but we can declare like this

int b,c,d;

 a=b=c=d=20;


*/


class AssignmentOperator
{
    public static void main(String[] args)
    {
        
        int a, b,c ,d;
        
        a=b=c=d=20;
        
        System.out.println(a+"..."+b+"...."+c+"....."+d);
        
    }
}