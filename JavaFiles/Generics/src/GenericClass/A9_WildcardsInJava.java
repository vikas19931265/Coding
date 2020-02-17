/*

Wildcard in Java Generics
===================================

The ? (question mark) symbol represents wildcard element. It means any type. If we
write <? extends Number>, it means any child class of Number e.g. Integer, Float, double etc.
Now we can call the method of Number class through any child class object.

Let's understand it by the example given below:



*/
package GenericClass;

import java.util.*;

abstract class Shape
{

    abstract void draw();

}

class Rectangle extends Shape
{
    public void draw()
    {

        System.out.println("Drawing Rectangle");

    }
}


class Circle extends Shape
{
    public void draw()
    {

       System.out.println("Drawing Circle");
    }
}


class GenericTest
{

    public void drawShape(List<? extends Shape> lists) // we can call this method by passing only list type which
                                                       // takes objects of only shape type that is child types.
    {

        for(Shape s : lists)
        {

            s.draw();

        }

    }

}


class Driversss
{

    public static void main(String[] args)
    {

        List<Rectangle> l = new ArrayList();

        l.add(new Rectangle());

        new GenericTest().drawShape(l); // calling drawshape method by passing rectangle which is child of shape

        List<Circle> l1= new ArrayList();

        l1.add(new Circle());

        new GenericTest().drawShape(l1);// calling drawshape method by passing circle object which is child of shape.

    }

}

/*
run:
Drawing Rectangle
Drawing Circle
BUILD SUCCESSFUL (total time: 0 seconds)

*/