/*

1. Abstract is a modifier applicable for classes and methods but not for variables.


Abstract method:
======================

Even if we don’t know about the implementation of method still we can declare it with abstract modifier. That is for abstract methods only declaration
is available but not implementation. Hence abstract method declaration should end with semicolon.

Example

        public abstract void m1();( this is valid)

        public abstract void m1() { }

2. Child classes are responsible to provide implementation for parent class abstract methods.


3. If a class has any abstract method, then the class also should be declared as abstract.

4. In java order of modifiers is not important that is we can declare modifiers in any order.


What is the importance of declaring abstract method??

Answer: By declaring abstract method in the parent class we can provide guidelines to the child classes such that
        the methods declared as abstract in parent must be implemented by the child.

        If the child is not implementing the abstract method in the parent class then child class will also
        become abstract by default.


*/
package classLevelModifiers;


abstract class Vehicle
{
    abstract public int getNoOfWheels();
}



class Bus extends Vehicle
{
    @Override // note an abstract method must be overridden in order to provide the implementation.
    
        public int getNoOfWheels()
    {
        return 7;
    }
}

class Auto extends Vehicle
{
    @Override // abstract method of the parent class is overridden here in order to provide implementation of the method.
    public int getNoOfWheels()
    {
        return 3;
    }
}


//-----------------------------------------------------------------------------------------*******************--------------------------------------