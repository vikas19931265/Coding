package dStaticNestedClasses;

/*


In normal or regular inner classes, we can�t declare any static members.

But in static Nested classes we can declare static members including the main method hence we 
can invoke static Nested class directly from the command prompt as JVM does not need the object
for the outer class since the inner class is static.


*/

//If we run this program in NetBeans we will get the option to choose from nested static class or
 // the outer class.

class Test11
{
    static class Nested
    {
        public static void main(String[] args)
        {
            System.out.println("static nested class main method");
        }
    }

    public static void main(String[] args)
    {
        System.out.println("Outer class main method");
    }

}

/*

javac Test.java
java Test

If outer class is run
run:
Outer class main method
BUILD SUCCESSFUL (total time: 0 seconds)


run:
If inner class is run

javac Test$Nested
java Test$Nested

static nested class main method
BUILD SUCCESSFUL (total time: 0 seconds)




*/
