
/*

Overriding start() method. ( with super  keyword )
================================================================================


1.If we override start() method then our start() method will be executed just like a normal 
  method call and new thread will not be created.

2. If we run the program even 1000 thousand we will get the same output as only a single Thread
   is executing this program which is the main thread.

3. It is not recommended to override the start method otherwise don't go for the multithreading concept.

*/

package A1MultithreadingBasics;


 class Tdemo1 extends Thread {
    
     public void start() // Start method executed like normal  method call with no new thread created. We will always 
                         // get the same output due to this.
     {
         
        
         super.start(); // main thread and child thread executed simultaneously hence the output is not fixed.
        /*
         possible output 1
         
         run:
        Start method
        run method
        main method
        BUILD SUCCESSFUL (total time: 0 seconds)

        possible output 2
         
         run:
        Start method
        main method
        run method

         possible output 3
         
        run method
        start method
        main method. */ 
         
         
         System.out.println("Start method");
     }

     public void run()
     {
         
         System.out.println("run method");
     }
 
 
 }



class ThreadDemoss11

{
    public static void main(String[] args)
    {
        
        Tdemo1 t = new Tdemo1();
        t.start();
    
        System.out.println("main method");
    
    
    }
    
} 


//----------------------------------------------------------------------**************---------------------------------------------------