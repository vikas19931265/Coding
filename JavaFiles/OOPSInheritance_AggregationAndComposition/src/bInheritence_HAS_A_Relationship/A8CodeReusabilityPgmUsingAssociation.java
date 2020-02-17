/*

Code reusability using Aggregation
==========================================

In this program we have created a class called "Operation" .we will be using
this class reference for the purpose of code re usability. On the reference
we will call method to calculate the area.

We will use this operation object inside square and rectangle classes to gets
its features which can do calculation of area of rectangle and square.

Now since inside square and rectangle objects only reference of Operation class
is stored hence they are weakly associated with each other.


*/
package bInheritence_HAS_A_Relationship;


class Operation
{
    public double square(double sides)
    {
        return sides*sides;
    }

    
    public double rectangle(double length ,double breadth)
    {
        return length*breadth;
    }

}

class Square
{
    
    Operation op; //Association. Later in giveArea we will assign an object to this
                  // reference and use the code of operation class in square program. giving code re usability.
                  
    
    public void giveArea(double value)
    {
        op= new Operation();
        
        System.out.println("Area of Circle is"+op.square(value));//code re usability (i.e. delegates the method call).
    }
}


class Rectangele
{
    Operation op;
    
    public void giveArea(double length, double breadth)
    {
        op= new Operation();
        
        System.out.println("Area of Rectangle is"+op.rectangle(length, breadth));
    }
}


class Drivers1
{
    public static void main(String[] args)
    {
        Square c= new Square();
        
        c.giveArea(5);
        
        Rectangele rec = new Rectangele();
        
        rec.giveArea(4, 6);
        
    }
    
}

/*
run:
Area of Circle is25.0
Area of Rectangle is24.0
BUILD SUCCESSFUL (total time: 0 seconds)

*/