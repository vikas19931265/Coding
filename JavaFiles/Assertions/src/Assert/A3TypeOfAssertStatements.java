package Assert;

/*
Types of Assert statements
===============================================================================

There are two types of assert statements.

1. Simple Version
2. Augmented Version

Simple Version
===================

syntax : assert(b)

b should be of the boolen type. If b is true then our assumption is satisfied and 
hence rest of the program will be executed normally.

If b is false then our assumption will fail that is somewhere something goes wrong.
And hence the program will be terminated abnormally by raising assertion error.

Once we got the assertion error then we will analyze the code and we can fix the 
problem.


To enable assert via cmd

Java -ea Class

*/

class Testing
{
    public static void main(String[] args)
    {
        int x =10;
        ;;;;;;;;;;;;;;;;
        
        assert(x>10);
        
        System.out.println(x);
    }
}	

/*
run:
Exception in thread "main" java.lang.AssertionError
	at Assert.Testing.main(NewClass.java:35)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/
