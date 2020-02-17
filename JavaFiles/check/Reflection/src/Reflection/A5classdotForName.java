package Reflection;

/*
 forName() method of Class class
=========================================
This is used to load the class dynamically. It returns the instance of Class class.

It should be used if you know the fully qualified name of class.

This cannot be used for primitive types.

Let's see the simple example of forName() method.


This is mostly used in JDBC where where our first step is to load the JDBC Driver class 
and do the necessary configuration in static block.

We know that static block will get executed during the class loading where we 
are doing all our configurations.

So this saves our time of creating an object of Driver class and then doing the 
configuration by calling a method. Instead of doing all this we can do 
while class loading itself.

 */
import java.lang.reflect.*;
import java.lang.Class;

class Person2 {

    private Person2() {

    }

    static {
        System.out.println("Person object is called and static operation is success");

    }

}

class Driver2 {

    public static void main(String[] args) throws Exception {
        Class c = Class.forName("Reflection.Person2");
        System.out.println(c.getName());

    }

}
/*
$javac Driver.java
$java -Xmx128M -Xms16M Driver
Person object is called and static operation is success
Person


 */
