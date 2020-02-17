// Overriding final method


/*

1. We can’t override parent class final methods in child classes.

2. If we are trying to override then we will get compile time error.


*/


package cMethodOverriding;

class Parent1
{
    
    public  final void  m1()
    {
        System.out.println(" I am m1");
    }

/*
 1. Create a method final.
 2. Once the method is created as final. Its overriding is not possible.
 3. To prevent a method from getting overridden we can declare it as final.
 5. Note access specifier scope cannot be reduced by inheriting class, it can be increased but decreasing is not allowed.   
    
 */
}

/*

class Child1 extends Parent1
{
    @Override
    public void m1()   // Trying to override a final method which is not possible.
    {
        System.out.println("I am child m1");
    }
}

*/

//-----------------------------------------------------------------------------*********-------------------------------------------------------------