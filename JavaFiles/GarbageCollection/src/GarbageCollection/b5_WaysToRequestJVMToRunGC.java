/*

The ways for requesting JVM to run Garbage Collector
===============================================================

Once we make an object eligible for the garbage collection. It may not be destroyed
immediately by the garbage collector.

Whenever JVM runs gc then only the objects will be destroyed. But when exactly JVM
runs garbage collector we cant expect as it is varied from JVM to JVM.

Instead of waiting until JVM runs garbage collector we can request the JVM to run the
garbage collector programmatically but whether the JVM accepts our request or not there
is no guarantee. But most of the times JVM will accept our request.


The following are the two ways by which we can request JVM to run the garbage collector.


By Using System class
=========================

System class contains a static method System.gc() for this purpose. 

By Using Runtime class
==========================

Java application can communicate with JVM by using Runtime object. Runtime class is
present in java.lang package and it is a singleton class.

We can create Runtime object by using Runtime.getRuntime() method.


    Runtime r = Runtime.getRuntime();
    
Once we got the run time object then we can call the following methods on that particular
object.


1. totalMemory():

    It returns number of bytes of total memory present in the heap(that is heapsize).
    
2. freeMemory():
    
    It returns number of bytes of free memory present inside the heap.
    
3. gc();

    For requesting JVM to run the garbage collector.

*/
