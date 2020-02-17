/*
Difference between t.start() and t.run()..
=================================================================================

In the case of t.start() a new thread  will be started/created which is responsible for the execution
of run() method.

But in the case of t.run() a new thread will not be started/created and the run() method will be executed just like
a normal method call by main thread .

Hence in the program in previous pages if we replace t.start() with t.run() then the output is


Child Thread(10 times)
Main Thread( 10 times)


This total output produced by only the main thread. This output will be fixed and will not change.
But in the case of t.start() output is not fixed and can change depending upon what scheduler choose.


*/
package A1MultithreadingBasics;


 class Thread3 extends Thread {
    
     public void run()
     {
         
         System.out.println("Child Thread is running");
         
     }
 
     public static void main(String[] args)
     {
     
     System.out.println("Main Thread is running");
         
     Thread3 t = new Thread3();
     
     t.start(); // As soon as start() method is called, a new thread is started/started for the execution of
                // thread which we created by extending the thread class. This will straight away
                // call the run() method which has code written as part of the job.
                // Instead of this if we call run() method directly then it will be like a normal method call , no thread will be created.
     
     
     }
 
 }

/*
run:
Main Thread is running
Child Thread is running
BUILD SUCCESSFUL (total time: 0 seconds)



*/

//----------------------------------------------------------------------**************---------------------------------------------------