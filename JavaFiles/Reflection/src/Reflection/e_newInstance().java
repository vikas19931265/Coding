package Reflection;

/*

newInstance() method
=========================
The newInstance() method of Class class and Constructor class is used to create a new instance of the class.

The newInstance() method of Class class can invoke zero-argument constructor whereas
newInstance() method of Constructor class can invoke any number of arguments. 
So Constructor class is preferred over Class class.

Syntax of newInstance() method of Class class
public T newInstance()throws InstantiationException,IllegalAccessException

Here T is the generic version. You can think it like Object class. You will learn about generics later.

This is mostly used when we want to create the object during the run time.

*/

import java.lang.reflect.*;

 class Student2
{
    private Student2()
    {
        //default constructor is mandatary for newInstance() method to create an object.
    }
        
    public void speak()
    {
        System.out.println("I am called");
    }
    
    public static void main(String[] args) throws Exception
    {
        Class c = Class.forName("Reflection.Student2");
        Student2 s  = (Student2)c.newInstance();
        s.speak();
        
    }
    
}

