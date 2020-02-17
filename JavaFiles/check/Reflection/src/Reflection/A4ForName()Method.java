package Reflection;

/*

forName() method of Class class
================================================================

-> is used to load the class dynamically.
-> returns the instance of Class class.
-> It should be used if you know the fully qualified name of class.This cannot be used for primitive types.

Let's see the simple example of forName() method.

*/

class Student717
{
    
    public void m1()
    {
        System.out.println("I am called");
    }
    
}


 class Driver11
{
    public static void main(String[] args) throws Exception
    {
        
    Student717 s =(Student717)Class.forName("Reflection.Student717").newInstance();
    
    s.m1();    
        
        
    }
}

/*
$javac Driver.java
$java -Xmx128M -Xms16M Driver
I am called
*/