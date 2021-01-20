package Assert;

/*

Augmented Version
====================

We can augment some description with the assertion error by using the Augmented
version.

Syntax
===============

assert (b):e

Here b should be of boolean type and e can be any type most of the times we take
String type.


javac Test.java

java Test...o/p : 10

java -ea Test

RE: AssertionError: Here x value should be greater then 10 but it is not.


*/

class Testing2
{
    public static void main(String[] args)
    {
        int x =10;
        ;;;;;;;;;;;;;;;;

        assert(x>10): "Here x values should be greater then 10 but it is not";

        ;;;;;;;;;;;;;;;;;

        System.out.println(x);
    }
}

/*
run:
Exception in thread "main" java.lang.AssertionError: Here x values should be greater then 10 but it is not
	at Assert.Testing2.main(NewClass1.java:32)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/