// Non Abstract method can be overridden to abstract methods.

/*

1. We can override non abstract methods as abstract

2. The main advantage of this approach is we can stop the availability of parent method implementation
   to the next level child classes.
*/



package cMethodOverriding;


class Parent3
{
    public void m1()
    {
        
    }
}

/*
1. Here i created a m1() method which is non abstract.

2. This method will be overridden as abstract method.

3. This concept is useful when we want to prevent child classes to use property of parent class.

4. By making the method as abstract we are forcing all child class to give implementation of m1 method.

5. Child class cannot use m1 method available in the parent class.


*/



abstract class Child3 extends Parent3
 {
     public abstract void m1();
 }


// All the class which will inherit Child3 must provide a new implementation for m1 method.


//---------------------------------------------------------------------------******------------------------------------------------------------