/* Interface naming conflicts.
====================================

    method naming conflicts.
 
can a java class  implement any number of interfaces simultaneously???

Yes , except a particular a case when two interfaces contain a method with same signature 
but different return types then it is impossible to implement both the interfaces simultaneously.



*/
package interfaces;

/*
(method naming conflict)

        If 2 interfaces contains a method with same signature and same return type also then in the implementation class
we have to provide implementation for only one method.*/

interface  Left
{
    public void m1();
}

interface Right
{
    public void m1();
}

class Test1 implements Left, Right
{
    public void m1()
    {
        System.out.println("same implementation");
    }
}

/*
Case 2: (method naming conflict)

     If two interfaces contains a method with the same name but different argument types then in the 
implementation class we have to provide implementation for both of the methods and in this case methods will
act as overloaded methods.*/

interface  Left1
{
    public void m1();
}

interface Right1
{
    public void m1(int i);
}

class Test21 implements Left1, Right1
{
    public void m1()  // overloaded methods
    {
        System.out.println("same implementation");
    }

    public void m1(int i) // overloaded methods
    {
        System.out.println("another implementation");
    }

}

/*

Case 3:

    If two interfaces contains a method with the same signature but different return types than it is impossible
    to implement both the interfaces simultaneously (if return types are not covariant) , if they are covariant we can implement it.
    this is because if we try to do it then the method signature in a class will become same which is not allowed in java.    

    We cant write any java class which implements both interfaces simultaneously having below scenario.
    

*/

interface  Left2
{
    public void m1();
}

interface Right2
{
    public int m1();
}

/*
class Test3 implements Left2, Right2
{
    public void m1()
    {
        System.out.println("hello");
 }
    
}

*/

//---------------------------------------------------------------------------------*******************--------------------------------------

