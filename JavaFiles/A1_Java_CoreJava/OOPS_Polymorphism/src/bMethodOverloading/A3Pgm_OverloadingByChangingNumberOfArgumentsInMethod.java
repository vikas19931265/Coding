
/*

Overloading by changing the number of arguments in the method.
==============================================================

*/
package PolymorphismMethodOverloading;

class Calculator
{
    public int add(int a , int b) //overloading by chaiging number of arguments in method
    {
        return a+b;
    }

    public int add(int a, int b, int c) // overloading by changing number of arguments in method
    {
        return a+b+c;
    }


}


class Driver
{
    public static void main(String[] args)
    {
        
        Calculator c = new Calculator();
        
        System.out.println(c.add(20,50));
        
        System.out.println(c.add(20,45,90));
    }
}

/*
run:
70
155
BUILD SUCCESSFUL (total time: 0 seconds)

*/