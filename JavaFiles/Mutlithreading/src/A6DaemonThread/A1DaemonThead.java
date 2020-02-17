/* Daemon Threads.
=============================================

The  threads which are executing in the background are called as Daemon threads.

Example Garbage Collector, Signal Dispatcher, Attach Listener etc.


The main objective of the Daemon Threads is to provide the support for non Daemon Threads( main Thread).
For example if the main threads runs with the low memory then JVM runs garbage collector to destroy useless
objects so that number of bytes of free memory will be improved, with this free memory main main thread can 
continue its execution.


Usually Daemon threads have low priority but based on our requirement daemon threads can run with high priority as well.


We can check daemon nature of thread by using isDaemon() method of the thread class.

1. public boolean isDaemon()


We can change daemon nature of thread by using setDaemon() method of the thread class. But changing nature of thread
is possible only before starting of the thread only. After starting of the thread if we are trying to change Daemon nature of 
the thread then we will get the run time exception saying IllegalThreadStateException.

2. public void setDaemon(boolean b)




What is Default nature of Thread??


By default main thread is always non Daemon in nature and for all the remaining threads daemon nature of the thread will
be inherited from parent to the child that is if parent thread is Dameon then automatically child thread will also be daemon and 
if the parent thread is non Dameon then the child thread is also non Daemon.



[note]

It is impossible to change daemon nature of the main thread because it is already started by the JVM at the beginning only.







*/
package A6DaemonThread;


class Test {
    
    public static void main(String[] args)
    {
        
        System.out.println(Thread.currentThread().isDaemon()); // false
        
      // trying to change daemon nature of main thread.
      
        Thread.currentThread().setDaemon(true);// Run time error : IllegalThreadStateException
    
        MyThread t = new MyThread(); // main thread is parent for this thread, as the code is written inside main thread
                                     // since the main thread is non daemon hence the child thread is also non daemon.
    
        
        System.out.println(t.isDaemon()); //false                              
    
    
        t.setDaemon(true); // this is valid as thread is still not started and its status can be changed.
        
        System.out.println(t.isDaemon()); //True--> Thread status changed to daemon now.
    
    
    }




}


class MyThread extends Thread
{
    
    
}