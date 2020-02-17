/*

Overridding not applicable to static methods
====================================================


1. If both parent and child class methods are static then we won’t get any
   Compile time error.

2. It seems overriding concept applicable for static methods but it is not overriding
   Instead this is method hiding.

*/



package cMethodOverriding;

class Parent4 {
    

    public static void m1()
    {
            System.out.println("i am m1");
    }

}

class Child4 extends Parent4{
    
    public static void m1()
    {
            System.out.println("i am child m1");
    }
}


//--------------This is method hiding but not method overriding-------------

//--------------------------------------------------------------------------*******-----------------------------------------------
