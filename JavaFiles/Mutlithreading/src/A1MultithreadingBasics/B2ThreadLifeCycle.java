package A1MultithreadingBasics;

/*

Life Cycle of a Thread.
================================================================================

Life cycle of a Thread (Thread States)

    Life cycle of a thread
        
        New
        
        Runnable
        
        Running
        
        Non-Runnable (Blocked)
        
        Terminated

A thread can be in one of the five states. According to SUN, there are  only 4 states in 
thread life cycle in java new, runnable, non-runnable and terminated. There is no running state.

But for better understanding the threads, we are explaining it in the 5 states.
The life cycle of the thread in java is controlled by JVM. The java thread states are as follows:

    New
    Runnable
    Running
    Non-Runnable (Blocked)
    Terminated





-------------                         ---------------                                                               
|            |                        |              |                                                   --------------                              ------------   
| new/born   |---t.start() ---------->|ready/runnable|---if thread scheduler allocated processor-------->|  running   |---if run complete----------->|  dead    |
|-------------                        |--------------                                                    |____________|                              |-----------   
  |                                        ^  
                                           |                                                                     |
Thread t = new Thread();                   |                                                                     |
                                           |                                                                     |
                                           |                                                               -------------                                                  
                                           |                                                               | sleep/wait | 
                                           |                                                               |  (blocked) | 
                                           |                                                               |(non runnable|  
                                           |                                                                wait for lock 
                                           -----------sleepdone, IO available--------------------------    |   suspend  |  
                                                              lock available,resume,notify                  ------------    


1) New

The thread is in new state if you create an instance of Thread class but before the invocation of start() method.

2) Runnable

The thread is in runnable state after invocation of start() method, but the thread scheduler has not selected it to be the running thread.

3) Running

The thread is in running state if the thread scheduler has selected it.

4) Non-Runnable (Blocked)

This is the state when the thread is still alive, but is currently not eligible to run.

5) Terminated

A Thread is in terminated or dead state when its run() method exits. 



note
------------
1. If we are starting a thread again once it has started then we will get the run time error.

Exception: IllegalThreadStateException.


2. After starting a thread if we are trying to restart the same thread once again then we will get 
   run time exception saying IllegalThreadStateException
*/


class Thread1 extends Thread

{
    
    public static void main(String[] args)
    {
        Thread1 t = new Thread1();
        t.start();
        
        System.out.println("main method");
        t.start(); // trying to run thread again once it his been started  is incorrect.
        
    }
}


/*

run:
main method
Exception in thread "main" java.lang.IllegalThreadStateException
	at java.lang.Thread.start(Thread.java:708)
	at Thread1.main(NewClass9.java:43)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)


*/

////----------------------------------------------------------------------**************---------------------------------------------------