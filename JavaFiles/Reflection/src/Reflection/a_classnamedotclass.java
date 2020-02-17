package Reflection;

/*
Get Class Object:
========================

If a type is available but there is no instance, then it is possible to obtain a 
Class by appending ".class" to the name of the type. It can be used for primitive data type also.

*/


import java.lang.reflect.*;
import java.lang.Class;

class Person
{

    
    public void classify()
    {
        System.out.println("we are all homo sapines");
    }
    
    public void work()
    {
        System.out.println("I am a lazy person");
    }
        
    
}

class Student extends Person
{
    
    private Student()
    {
        
        /*
        I have made the constructor as private so that my driver class cannot 
        create the object of the Student class. So now using the object(obj.getClass())
        we cannot get the Class "Class" object. So what to do. In that case we  can go 
        with option of ClassName.class in order to get the Class "Class" object. */
    }
    
    public void work()
    {
        System.out.println("I m a student");
    }
}

class Employee extends Person
{
    public void work()
    {
        System.out.println("I am an employee");
    }
}

 class Driver
{
    public static void main(String[] args)
    {
        
        Class c=Student.class;
        /*
        So this statement is like we have a "Class" object inside which details 
        of the student class is held. So here c reference is basically of type
        "Class" only so calling getClass() method on c will give the name of object
        class and then calling getName() on top of that will give us name of the class.
        
        dont confuse with this. Read it like this
        
        There is an object of "Class" type c in which student details are stored like
        class, number of methods , constructors etc. So on c we have to just call getName()
        method in order to get the name of the class. 
        
        but in the case of Employee e = new Employee();   e.getClass();
        
        Here we have to call the getClass() method so that we can get "Class" object
        first in which all the details of the Employee will be stored and then on top
        of that only we can call getName() method.
        
        why if we call c.getClass() is giving class java.lang.class and if .getName() 
        is called its giveing class "Class"??
        
        See the reason for that is when we are calling c.getClass() c is already of type
        "Class" hence c will start pointing to "Class" object and not Student object. 
        Therefore again when you are calling .get Name() it is giving name of the "Class".
        
        
        */

        System.out.println(c.getName());
    
    }
}
    
/*
$javac Driver.java
$java -Xmx128M -Xms16M Driver
Student
*/ 
