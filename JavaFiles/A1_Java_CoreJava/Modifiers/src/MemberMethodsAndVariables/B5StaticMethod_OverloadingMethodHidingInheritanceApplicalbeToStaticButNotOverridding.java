package MemberMethodsAndVariables;
/*

Case 1
===============

    Overloading concept is applicable to static methods including main method but JVM will always call String[] argument
    main method only. Other overloaded method we have to called just like a normal method call.
*/

class Testing112
{
    public static void main(String[] args)
    {
        System.out.println("String[] args");
    }

    public static void main(int[] args) // normal method- (overloading of the main method).
    {
        System.out.println("int[] args");
    }

}

// o/p  String[]

/*
case 2:
=============

    Inheritance concept is applicable to the static methods including the main method hence while executing child class 
    if child does not contain main method then parent class main method will be executed.
*/

class P
{
    public static void main(String[] args)
    {
        System.out.println("parent main");
    }
}

class Child extends P
{
    
}
/*
o/p  run:
parent main
BUILD SUCCESSFUL (total time: 1 second)

*/

/*

case 3:

Here in this program it will seem that overriding is happening of static methods but this
is not overriding instead it is method hiding.

For static methods overloading and inheritance concepts are applicable but overriding concept is not applicable. Instead
of method overriding method hiding concept is applicable.
    
*/

class P1
{
    public static void main(String[] args) // Static methods cannot be overridden
    {
        System.out.println("parent main");
    }
}

class C1 extends P1
{
    public static void main(String[] args) // parent class main method got hidden here. this is method hiding not overriding.
    {
        System.out.println("Child main");
    }
}


//---------------------------------------------------------------------------------*******************--------------------------------------