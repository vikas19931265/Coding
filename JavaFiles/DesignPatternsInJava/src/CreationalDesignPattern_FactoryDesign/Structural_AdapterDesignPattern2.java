package CreationalDesignPattern_FactoryDesign;

/*

Adapter Design pattern example 2

*/

interface Sample
{
    
    public void m1();
    public void m2();
    public void m3();
    public void m4();
    public void m5();
}


class A implements Sample
{
    public void m1()
    {
        
    }

    public void m2()
    {
        
    }
    public void m3()
    {
        
    }
    public void m4()
    {
        
    }
    public void m5()
    {
        
    }
    
}

/*note this is not good practice as for every implementation class of Sample
we have to give implementation for all the methods whether it is needed or not.

Instead of doing this what i can do is that i can create an adapter class in which
i give the dummy implementation for all the methods and all the implementation classes
of Sample  instead of directly implementing the interface can extend from the the 
adapter class.

In this way for all the implementation classes we wont have to provide implementation
for all the methods.

*/


abstract class SampleAdapter implements Sample
{
 public void m1()
    {
        
    }

    public void m2()
    {
        
    }
    public void m3()
    {
        
    }
    public void m4()
    {
        
    }
    public void m5()
    {
        
    }
    
}


/*

Now any class which want to implement the Sample interface can extend from the 
SampleAdapter class. In this way the implementation class needs to provide the 
implementation for only the needed methods but not all the methods.

We have declared this classes as abstract as we don�t want anyone to create the objects
of this class.

Here in below program we have just extended from SampleAdapter class getting dummy
implementation for all the methods.

We will just provide implementation for m5() method by overriding it as that is 
the only method on which we want to work.


This will save us from writing extra dummy code for all the methods in every class
we try to implement the interface.


*/


class ImplementationClass extends SampleAdapter
{
    
    public void m5()
    {
        System.out.println("Overriding m5 method");
        
    }
    
}
