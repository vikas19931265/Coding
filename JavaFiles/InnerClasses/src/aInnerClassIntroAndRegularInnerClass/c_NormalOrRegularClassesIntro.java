package aInnerClassIntroAndRegularInnerClass;

/*



Normal or regular inner classes/Member Inner classes.
--------------------------------------------

If we are declaring any named class directly inside a class without static modifier such type
of inner class is called Normal or regular inner class.


***A non-static class that is created inside a class but outside a method is called member inner class.


Example 1: outer.java

    class Outer
        {

            class Inner------>Normal or Regular inner class
            {
            
            }

        }  

            java Outer.java
                |
   --------------------------
Outer.class                   Outer$  Inner.class


If we run these files without the main then we will get the error.

java Outer

RE: NoSuchMethodError: Main

Java Outer$Inner

RE: NoSuchMethodError:Main


*/

/*Example 2: If we run this program like java Outer then we will get output
  but if we run with Java inner then we will get RE:NoSuchMethodError:Main as main
  method does not exist for inner class*/

/*


Internal working of Java member inner class
===============================================================================


The java compiler creates two class files in case of inner class. The class file name of 
inner class is "Outer$Inner". If you want to instantiate inner class, you must have to create 
the instance of outer class. In such case, instance of inner class is created inside the instance of outer class.

*/


class Outer
{
    class Inner
    {
        
    
      
    }
    
    public static void main(String[] args)
    {
        System.out.println("Outer class main method");
    }
}

/*
run:
Outer class main method
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//------------------------------------------------------------************************************---------------------------------------------------