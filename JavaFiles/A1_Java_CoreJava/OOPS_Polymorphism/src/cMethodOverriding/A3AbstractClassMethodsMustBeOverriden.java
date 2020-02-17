// Overriding Abstract methods.


/*

1. Parent class abstract methods we should override in child class to provide implementation.


*/


package cMethodOverriding;


abstract class Parent2
{
    public abstract void m1(); // child class for Parent2 must provide implementation for m1 or else child class will also become abstract.
           
}




class Child2 extends Parent2
{
    @Override
    public  void m1()
    {
        System.out.println("Abstract method must be overridden");
    }
}



//----------------------------------------------------------------------------*******----------------------------------------------------------------