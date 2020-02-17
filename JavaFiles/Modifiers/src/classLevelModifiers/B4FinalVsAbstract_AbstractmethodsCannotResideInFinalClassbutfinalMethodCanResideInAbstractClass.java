/* final vs abstract.
=========================

1. abstract methods compulsory we should override in the child classes to provide the implementation. Whereas we cant override final methods.
   Hence final abstract combination is illegal combination for methods.

2. For final classes we can’t create the child class whereas for abstract classes we should create the child class to provide the implementation.

3 Hence final-abstract combinations is illegal for classes along with methods.

4 . Abstract class can contain final method whereas final class cant contain abstract methods.
*/


//abstract class can contain final method. Here we can extend the parent class and provide implementation for methods other than final

package classLevelModifiers;
abstract class Test3
{
    public final void m1()
    {
        System.out.println("hai");
    }

    public abstract void m2();// we can provide implementation for this in the child class.
    
}



/* 
    final class cannot contain abstract methods. If a method is final then compulsory there must be implementation for this in the child class.
    If the class itself is final then no way we can provide the implementation as final-abstract is invalid and will contradict as abstract will
   say to provide the implementation and final will prevent child class to extend the parent class.

*/

/*
final class Test7
{
    public abstract void m1();
}

It is illegal to declare an abstract method inside the final class.

*/


//-----------------------------------------------------------------------------------------*******************--------------------------------------
