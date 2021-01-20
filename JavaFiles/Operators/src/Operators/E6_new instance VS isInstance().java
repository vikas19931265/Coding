package Operators;

/*

instanceof   vs    isInstance()

instanceof
======================

1. instanceof is an operator in java.

2. We can use instanceof to check whether the given object is of particular type or not and 
   we know the type at the beginning.

    Example

        Thread t = new Thread();

        System.out.println(t instanceof Runable);// true

        System.out.println(t instanceof Object);// true


isInstance()
=======================================

1.isInstance() is a method present in java.lang.Class.

2. We can use isInstance() method to check whether the give object is of particular 
   type or not and we dont know the type at the beginning and it is available dynamically
   at Runtime


isInstance() is method equivalent of instanceof operator.


*/

import java.util.*;

class Testw
{
    public static void main(String[] args) throws Exception
    {
        System.out.println("Enter the class name");
        
        Thread t = new Thread();
        
        Scanner cn = new Scanner(System.in);
        
        String input=cn.nextLine();
        
        System.out.println(Class.forName(input).isInstance(t));
    }
}

/*
run:
Enter the class name
java.lang.Object
true
BUILD SUCCESSFUL (total time: 9 seconds)


run:
Enter the class name
java.lang.Runnable
true
BUILD SUCCESSFUL (total time: 8 seconds)



run:
Enter the class name
java.lang.String
false
BUILD SUCCESSFUL (total time: 3 seconds)



run:
Enter the class name
Sdg
Exception in thread "main" java.lang.ClassNotFoundException: Sdg
	at java.net.URLClassLoader.findClass(URLClassLoader.java:381)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:424)
	at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:349)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:357)
	at java.lang.Class.forName0(Native Method)
	at java.lang.Class.forName(Class.java:264)
	at Testw.main(NewClass44.java:51)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 3 seconds)


*/