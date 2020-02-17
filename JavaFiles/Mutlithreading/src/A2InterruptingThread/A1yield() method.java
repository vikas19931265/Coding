    /* Preventing thread  execution. yield() method

1. We can prevent a thread execution by using the following methods.

    i) yield()
    ii) join()
   iii) sleep()


yield() method.
---------------------

1. yield() method causes to pause current executing thread to give the chance to the waiting
   threads of the same priority.

2. If there is no waiting thread or all waiting threads have low priority then same thread can continue
   its execution.

3. If multiple threads are waiting with the same priority then which waiting thread will get the chance
   we cannot expect as it depends upon Thread Scheduler.

4. The thread which is yielded, when it will get  the chance once again it depends upon Thread Scheduler.
   We cannot expect exactly when the  thread will again get the chance to execute.


5. This yield method will be like if we are in telephone booth and need lot of time to talk then after every 15 minutes we can see 
   if someone is waiting outside or not. If someone is waiting then we will check the priority , if the priority is same or more
   then we will pause our talk and go and stand in queue . The number at which we will stand will be decided by the thread scheduler.

What is complete protocol of yield() method.

        public static native void yield();



-------------                         ---------------                                                               
|            |                        |              |                                                   --------------                              ------------   
| new/born   |---t.start() ---------->|ready/runnable|---if thread scheduler allocated processor-------->|  running   |---if run complete----------->|  dead    |
|-------------                        |--------------                                                    |____________|                              |-----------   
  |                                         ^
                                            |                                                                       |
Thread t = new Thread();                    |                                                                       |
                                            |                                                                       |
                                              -------------------------------Thread.yield()--------------------------                                                                 


                                                This is like going and standing in the queue again.




*/


package A2InterruptingThread;


class MyThread extends Thread {
    
    public void run()
    {
        
        for(int i=0 ;i < 10 ;i++)
        {
            
            System.out.println("Child Thread");
            Thread.yield(); // This method will give the chance to other Thread( main Thread) to execute now since main thread is the waiting thread.
                            // main() thread will execute and print "Main Thread" 10 times.
                            // After this Main Thread , Child Thread will again get chance to execute but  no main() thread to execute
                            // as it would have completed printing of 10 numbers.
                            
                            // If we comment this line, then which thread to be run will be chosen by the scheduler.
            
                            // We wrote Thread.yield() in run() method for MyThread class hence its objects will be yielded. 
                            //Its like in which ever class we write this that class thread will be paused.
                                
        
       
                            
        }
    
         System.out.println(Thread.currentThread().getPriority());
    
    }


}  
    class ThreadYieldDemo
    {
        
        public static void main(String[] args)
        {
            MyThread t = new MyThread();
            t.start();
            
            for(int i=0;i<10;i++)
            {
                System.out.println("Main Thread");
            }
            
             System.out.println(Thread.currentThread().getPriority());
        
        }
        
        
    }


/*


run:
Main Thread
Main Thread
Main Thread
Main Thread
Main Thread
Main Thread
Main Thread
Main Thread
Main Thread
Main Thread
5
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
5
BUILD SUCCESSFUL (total time: 0 seconds)



In the above program , if we are commenting line number 1 , then both the threads will be executed and we cannot expect which
thread will complete first. 

If we are not commenting line number 1 then , Child thread always calls yield() method , because of that main thread 
will get the chance more number of times and the chance of completing main thread first is high.



note

some platforms will not provide proper support for yield() method



*/

//----------------------------------------------------------------------**************---------------------------------------------------