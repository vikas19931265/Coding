
/*

Program to display heap memory statistics  
================================================================================


A java application can communicate with the JVM by using Runtime object. Runtime 
class is present in java.lang package and it is a singleton class.

We can create a Runtime object as follows.


Runtime r = Runtime.getRuntime();

Once we get the Runtime object we can call the following methods on that object.


1. maxMemory();

    It returns the number of the bytes of max memory allocated to the heap.
    
2. totalMemory();

    It returns number of bytes of the total memory allocated to the heap(initial memory).
    
    
3. freeMemory(); 

    It returns number of bytes of free memory present in the heap    
    

*/

 class HeapDemo
{
    public static void main(String[] args)
    {
        
        double l = 1024*1024;
        
        Runtime r = Runtime.getRuntime();
        System.out.println("Max memory in mb "+ r.maxMemory()/l);
        System.out.println("Total memory in mb "+r.totalMemory()/l);
        System.out.println("Free memory in mb "+ r.freeMemory()/l);
        System.out.println("Consumed memory in mb "+(r.totalMemory()-r.freeMemory())/l);
    }
}

/*
$javac HeapDemo.java
$java -Xmx128M -Xms16M HeapDemo
Max memory in mb 114.0
Total memory in mb 15.5
Free memory in mb 14.923965454101562
Consumed memory in mb 0.5760345458984375
*/
