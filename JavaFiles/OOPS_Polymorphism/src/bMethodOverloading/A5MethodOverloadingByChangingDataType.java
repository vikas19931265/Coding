/*

Method overloading by changing the data type
=================================================


*/
package bMethodOverloading;


class Calculator
{
    public static float  addition(float a, float b)
    {
        return a+b;
    }

    public static float addition(int a , int b)
    {
        return a+b;
    }


    public static void main(String[] args)
    {
        System.out.println(Calculator.addition(2.6f, 4.7f));
        
        System.out.println(Calculator.addition(4, 6));
    }



}


/*
run:
7.2999997
10.0
BUILD SUCCESSFUL (total time: 0 seconds)

*/