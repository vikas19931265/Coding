package Reflection;

/*

How to call private method from another class in java
====================================================================================

You can call the private method from outside the class by changing the runtime behaviour of the class.

By the help of java.lang.Class class and java.lang.reflect.Method class, we can call private method from any other class.

Required methods of Method class
=======================================
1) public void setAccessible(boolean status) throws SecurityException sets the accessibility of the method.

2) public Object invoke(Object method, Object... args) throws IllegalAccessException, IllegalArgumentException, InvocationTargetException is used to invoke the method.

Required method of Class class
==========================================

1) public Method getDeclaredMethod(String name,Class[] parameterTypes)throws NoSuchMethodException,SecurityException: returns a Method object that reflects the specified declared method of the class or interface represented by this Class object.

*/


import java.lang.reflect.*;

class Student
{
    private void show()
    {
        System.out.println("I am a show method");
    }
}


 class Driver4
{
    
public static void main(String[] args) throws Exception
{

    Class c  =Class.forName("Student"); // create class object having properties of Student class
    Student s  = (Student)c.newInstance(); // create student object
    Method m = c.getDeclaredMethod("show",null); // create method object from class object having show property
                                                // we are not passing any arguement to the show method and hence null
    m.setAccessible(true); // we are setting the accessibility of the method to true
    m.invoke(s,null); // we are invoking the method, passing s argument which means that method belongs to 
                      // object s and the method is not accepting any arguemtn as well.
}
    
    
}

/*
$javac Driver.java
Driver.java:21: warning: non-varargs call of varargs method with inexact argument type for last parameter;
    Method m = c.getDeclaredMethod("show",null);
                                          ^
  cast to Class for a varargs call
  cast to Class[] for a non-varargs call and to suppress this warning
Driver.java:23: warning: non-varargs call of varargs method with inexact argument type for last parameter;
    m.invoke(s,null);
               ^
  cast to Object for a varargs call
  cast to Object[] for a non-varargs call and to suppress this warning
Note: Driver.java uses unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.
2 warnings
$java -Xmx128M -Xms16M Driver
I am a show 
*/

