//Demo program using tryLock() with time period

package A1Locks;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.*;


class MyThread13 extends Thread
{
    
    static ReentrantLock l = new ReentrantLock();
    
    MyThread13(String name)
    {
        
        super(name);
    }

    public void run()
    {
        
        do
        {
            
            try
            {
                
                if(l.tryLock(5000, TimeUnit.MILLISECONDS))
                {
                    
                    System.out.println(Thread.currentThread().getName() +"got lock");
                    
                
                Thread.sleep(30000);
                
                l.unlock();
                
                
                System.out.println(Thread.currentThread().getName()+"release lock");
                
                break;
                
                }
            
                else
                {
                    System.out.println(Thread.currentThread().getName()+"unable to get lock and will try again");
                    
                }
            
            
            }
                
           catch(Exception e)
           {
               
           }
        
        
        }
    
        
     while(true);
        
        
        }

}


class ReentrantLockDemo4
{
    
    public static void main(String[] args)
    {
        
        MyThread13 t1 = new MyThread13("First Thread");
        
        MyThread13 t2 = new MyThread13("Second Thread");
        
        t1.start();
        
        t2.start();
    
    
    
    }
}

/*
run:
First Threadgot lock
Second Threadunable to get lock and will try again
Second Threadunable to get lock and will try again
Second Threadunable to get lock and will try again
Second Threadunable to get lock and will try again
Second Threadunable to get lock and will try again
First Threadrelease lock
Second Threadgot lock
Second Threadrelease lock
BUILD SUCCESSFUL (total time: 1 minute 0 seconds)

*/

/*

Steps of Execution.

1. We started two threads t1 and t2.

2. Any thread either the first thread or the second thread can get the chance to execute
   first. This depends upon the scheduler. Let us assume that the first thread gets the chance to execute.

3. Now the first thread calls the run() method.

4. In run() method we have line 

     if(l.tryLock(5000, TimeUnit.MILLISECONDS))

     Since this is the first thread , hence it gets the lock on the reentrant object.

5. After this the thread goes to sleep for 30 seconds.

6. In this sleeping time , second thread is trying to get the lock on the object. If this would have been 
   a normal tryLock() with no waiting time then it was compulsory for it to wait until the completion of the first thread.

7. But since its tryLock() with time parameters , hence the second thread waits for 5 seconds to get the lock.

8. Within 5 seconds it does not get the lock , hence it executes the else part.

9. While( true) is the loop hence the second thread after wating for 5 seconds again tries to get the lock.

10. Second thread does this for 5*6= 30 seconds, until the sleep of the first thread is over.

11. Once the sleep of first thread is over it releases the lock and second thread gets the lock finally.

*/

//-----------------------------------------------------------------************************------------------------------------------