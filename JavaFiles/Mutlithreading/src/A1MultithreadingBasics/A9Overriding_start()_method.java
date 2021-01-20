/*

Overriding start() method. ( Never recommended...)
================================================================================

1.If we override start() method then our start() method will be executed just like a normal 
  method call and new thread will not be started/created.

2. If we run the program even 1000 times , we will get the same output as only a single Thread
   is executing this program which is the main thread.

3. It is not recommended to override the start method.

*/

package A1MultithreadingBasics;


 class Tdemo extends Thread {
    
     public void start() // Start method executed like normal  method call with no new thread created. we will always
                         // get the same output due to this.
     {
         
        System.out.println("Start method");
     
     }

     @Override
     public void run()
     {
         
         System.out.println("run method");
     }
 
 
 }



class ThreadDemoss1

{
    public static void main(String[] args)
    {
        
        Tdemo t = new Tdemo();
        t.start(); // It has not started thread, as "start()" method is overridden. So this start() method is everytime
                   // executed by the main thread only and hence we will always get the same output.
    
        System.out.println("main method");
    
    }
    
} 


/*

run:
Start method
BUILD SUCCESSFUL (total time: 0 seconds)

This output is produced by only one thread that is the main thread.


*/

//----------------------------------------------------------------------**************---------------------------------------------------