package GarbageCollection;

/*
Case 4:

We cannot expect the exact behavior of garbage collector. It is varied from 
JVM to JVM and hence for the following questions we cant provide exact answers

1. When exactly JVM runs garbage collector.

2. In which order garbage collector is going to identify the eligible objects

3. In which order garbage collector is going to destroy the eligible objects.

4. Whether garbage collector destroys all eligible objects or not.

5. What is the algorithm followed by garbage collector etc.


note
===========

1. Whenever program is going to run with the low memory then JVM will run the
  garbage collector. But we cant expect exactly at what time.
  
2. Most of the garbage collectors follow standard algorithm that is mark and 
   sweep algorithm. It does not mean that every garbage collector is going to 
   follow the same algorithm.


Below is the demo program on how garbage collector will be called when program
is going to run on the low memory.


If we keep on increasing(j) i<j then at some point memory problem will be raised
and the JVM is going to run the garbage collector.


gc calls finalize() method on every objects separately and destroys that object as well.
*/

 class Test13
{
    static int count=0;
    public static void main(String[] args)
    {
        for(int i =0; i<100000; i++) // 100000 is large value and taking memory
        {
            Test13 t = new Test13();
            t=null;
        }
    }
     
        public void finalize()
        {
            System.out.println("Finalize method called"+count++);
        }
        
        
    
}

/*
$javac Test.java
$java -Xmx128M -Xms16M Test
Finalize method called0
Finalize method called1
Finalize method called2
Finalize method called3
Finalize method called4
Finalize method called5
Finalize method called6
Finalize method called7
Finalize method called8
Finalize method called9
Finalize method called10
Finalize method called11
Finalize method called12
Finalize method called13
Finalize method called14
Finalize method called15
Finalize method called16
Finalize method called17
Finalize method called18
Finalize method called19
Finalize method called20
Finalize method called21
Finalize method called22
Finalize method called23
*/
