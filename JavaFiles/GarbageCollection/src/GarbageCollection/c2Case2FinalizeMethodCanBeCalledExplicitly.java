package GarbageCollection;

/*

Case 2:
==============

Based upon our requirement we can call finalize() method explicitly , then it will
be executed just like a normal method call and the object wont be destroyed.


In this program finalize() method got executed three times. In that two time it 
is executed explicitly by the programmer and one time by the garbage collector.
In this case output is 

Finalize method called
Finalize method called
End of the main
Finalize method called

note
========

If we are calling finalize() method explicitly then it will be executed like a normal
method call only and object will not be destroyed. If garbage collector is going to call
the finalize method then object will be destroyed.


note
=======

init(), service() and destroy() methods are considered as lifecycle methods of servlet. Just
before destroying servlet web container calls destroy() method to perform clean up activities.
But based upon our requirement we can call the destroy method from init() and service() methods
also. Then in that case destroy() method will be executed just like a normal method call and
the servlet object will not be destroyed.

*/

 class Test11
{
    public static void main(String[] args)
    {
        Test11 t = new Test11();
        t.finalize(); //finalize() method will be called like normal method call
        t.finalize();
        t=null;
        System.gc(); //gc() will start the new thread.
        System.out.println("End of the main");
    }

    public void finalize()//called three times ,2 manually and one by gc
    {
        System.out.println("Finalize method called");
    }
    
}

/*
$javac Test.java
$java -Xmx128M -Xms16M Test
Finalize method called
Finalize method called
End of the main
Finalize method called
*/

