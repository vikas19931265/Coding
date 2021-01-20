
package classLevelModifiers;


 class P1
{
    /*
     public void m1();

     
     Compile Error: Missing Method body or declare abstract.
     
     */
}


abstract class P2
{   /*
    public abstract void m1(){}

    Compile error: abstract methods cannot have a body.
   
    */ 
}



/*
class P3
{
    public abstract void m1();
}

 m1() method should have implementation or class P should be declared as abstract

Compile Error- P is not abstract method and does not override abstract method m1() method in P

*/


/*

If we are extending abstract class then for each and every abstract method of parent class we should provide
the implementation otherwise we have to declare the child class as abstract.

In this case child class is responsible to provide implementation.


If child class is not implementing all abstract methods of the parent class then we must 
declare the child class also as abstract or else we will get error.

Compile error: C is not abstract and does not override abstract method m2() in P4.

*/

abstract class P4
{
    public abstract void m1(); // both these methods should be implemented by child class or child class must be abstract.
    public abstract void m2();//both these methods should be implemented by child class or child class must be abstract.

}


abstract class C4 extends P4 // We are forced to declare this class as abstract as m2() method implementation is missing here.
{
    public void m1(){}
}

//-----------------------------------------------------------------------------------------*******************--------------------------------------