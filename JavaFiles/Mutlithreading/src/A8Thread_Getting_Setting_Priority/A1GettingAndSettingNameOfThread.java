
// Getting and Setting name of the Thread.

/*

Naming Thread
========================================

The Thread class provides methods to change and get the name of a thread. By default, 
each thread has a name i.e. thread-0, thread-1 and so on. But we can change the name of 
the thread by using setName() method. The syntax of setName() and getName() methods are given below:

   
    public String getName(): is used to return the name of a thread.
    public void setName(String name): is used to change the name of a thread.



Thread.currentThread()

    This will return reference of the currently executing thread.


*/




package A8Thread_Getting_Setting_Priority;


 class MyThreads extends Thread {
    
     public void run()
     {
         
         System.out.println("Thread name  "+Thread.currentThread().getName()); // Output will change depending upon the thread on which this 
                                                                               // run method will be called.
         
         
     }

} 

class ThreadDemo
{
    
    public static void main(String[] args)
    {
        
        MyThreads t1= new MyThreads();
        t1.start();
        
        MyThreads t2= new MyThreads();
        t2.start();
        
        System.out.println(t1.getName());// Thread name  Thread-0-->Getting the name of the thread.
        System.out.println(t2.getName());// Thread name  Thread-1--->Getting the name of the thread.
        
        
    
        t1.setName("new Thread1"); // To set the name of the thread
        t2.setName("new Thread2"); // To set the name of the thread.
        
    
        System.out.println(t1.getName());// new Thread1-> Getting the name of the thread after setting.
        System.out.println(t2.getName());//new Thread2-> Getting the name of the thread after setting.
        
       
       
        System.out.println(Thread.currentThread().getName()); // main--> This will return name of currently executing Thread name.
                                                             //Since we are inside the main thread hence the output will be main thread name.
                                                             // CurrentThread() method will return the reference of the currently executing thread.
       
        Thread.currentThread().setName("new main");// Set the name of currently executing thread.
       
     
       
        System.out.println(Thread.currentThread().getName());// new Main-->Check the output after changing the name of the main thread.
    
    
        // To get the id of the thread.
    
        System.out.println(t1.getId()); //9
        System.out.println(t2.getId());//10
       
       
         
        /*1. To check thread is running or not. 
           
          2. Since we are inside the main thread hence main thread is active.

          3. Thread 't1' and 't2' will be active only when start() method will be called. Once start method is called then
              the run() method is called and after that these two threads dies and becomes inactive. */

              


        System.out.println(t1.isAlive()); //false
        System.out.println(t2.isAlive());//false
       
       
        /* To find the count of active threads in the program ( the output can change as number of 
        threads on run is decided by the scheduler. 
       
        
        1. The number of active threads in the program is decided by the Thread Scheduler hence the output is not fixed
           and will keep upon changing depending upon the number of threads chosen by the Thread Scheduler for the execution.*/
        
        
        
        
        System.out.println(Thread.activeCount()); //1
    
    }
    
    
}



/*

run:
Thread-0
Thread-1
new Thread1
new Thread2
main
new main
Thread name  Thread-1
Thread name  Thread-0
9
10
false
false
1
BUILD SUCCESSFUL (total time: 0 seconds)



*/

//----------------------------------------------------------------------**************---------------------------------------------------
