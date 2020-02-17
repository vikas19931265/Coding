package aInheritence_IS_A_Relationship;

/*

Why Ambiguity problem will not be their  in interfaces-(multiple inheritance)
============================================================================


Interfaces have dummy implementation of methods and they dont have any kind
of implementations hence ambiguity problem will not arise.


Example

interface inter1
{
    public void methodOne();
}

interface inter2
{
    public void methodOne();
}


interface inter2 extends inter1, inter2{}

class Test implements inter3
{
    public void methodOne()
    
    {
        System.out.println("this is method one");

    }
}


}

*/