package Reflection;

/*
getClass() method of Object class
=============================================

It returns the instance of Class class. It should be used if you know the type.
Moreover, it can be used with primitives.

This is not an instance method but not a static method.

 */
class Simple {

}

class Test {

    void printName(Object obj) {

        Class c = obj.getClass();
        System.out.println(c.getName());

    }

    public static void main(String args[]) {
        Simple s = new Simple();

        Test t = new Test();

        t.printName(s);
    }
}  

/*
$javac Test.java
$java -Xmx128M -Xms16M Test
Simple

*/