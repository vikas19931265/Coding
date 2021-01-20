/*

Creating new Thread using Runnable interface.
================================================================================

1.The Runnable interface should be implemented by any class whose instances are 
  intended to be executed by a thread. 

2.Runnable interface have only one method named as run(). 

3. When a class implements Runnable interface, it basically implements the run() method which
   is nothing but job.

4. In order to run this job , the object of the class has to be created and passed as an argument
   to the thread constructors. Here the thread is responsible to run the job.


    example,

            Thread t = new Thread(new MyThread2()); */

package A1MultithreadingBasics;


 class MyThread2 implements Runnable {

     public void run() // It is mandatory to override run() method , if we are creating thread by implementing
                       // runnable interface.
     {
         
         for(int i=0;i<=5;i++)
         {
             System.out.println("Child Thread print"+i);
             
             try
             {
                 Thread.sleep(1000);
                 
             }
             
             catch(InterruptedException e)
             {
                 
                 System.out.println("Thread is interrupted");
             }
             
         
         
         }
         
         
     }

 }
     
 class Driver
 {
     
     public static void main(String[] args)
     {
         
         Thread t = new Thread(new MyThread2()); 
                    // A new thread has to be created and , our class object created by implementing runnable interface
                    // has to be passed into it as an argument to the constructor.
         
         t.start();
         
         for(int i=0;i<5;i++)
         {
             
             
             System.out.println("Main Thread"+i);
             
             try
             {
                 Thread.sleep(1000);
                 
             }
             
             catch(InterruptedException e)
             {
                 
             }
         
     }
     
     
 }


}


/*

run:
Main Thread0
Child Thread print0
Child Thread print1
Main Thread1
Main Thread2
Child Thread print2
Child Thread print3
Main Thread3
Main Thread4
Child Thread print4
Child Thread print5
BUILD SUCCESSFUL (total time: 6 seconds)


*/

//----------------------------------------------------------------------**************---------------------------------------------------