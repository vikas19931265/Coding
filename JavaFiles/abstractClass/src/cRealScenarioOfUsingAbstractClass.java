/*Understanding the real scenario of abstract class */


/*In this example, Shape is the abstract class, its implementation is provided by the Rectangle and Circle classes. 
 Mostly, we don't know about the implementation class (i.e. hidden to the end user) and object 
 of the implementation class is provided by the factory method.

A factory method is the method that returns the instance of the class. We will learn about the factory method later.

In this example, if you create the instance of Rectangle class, draw() method of Rectangle class will be invoked. */



abstract class Shape
{  

    abstract void draw();  
}  

//In real scenario, implementation is provided by others i.e. unknown by end user  

class Rectangle extends Shape
{  

    void draw(){System.out.println("drawing rectangle");}  
}  

class Circle1 extends Shape{  

    void draw()
    
    {
        System.out.println("drawing circle");
    }  
}  

//In real scenario, method is called by programmer or user  

class TestAbstraction1

{  
    public static void main(String args[])
    {  
        Shape s=new Circle1();//In real scenario, object is provided through method e.g. getShape() method  ( factory method)
        s.draw();  
}  
}  

/*run:
drawing circle
BUILD SUCCESSFUL (total time: 0 seconds)
*/
