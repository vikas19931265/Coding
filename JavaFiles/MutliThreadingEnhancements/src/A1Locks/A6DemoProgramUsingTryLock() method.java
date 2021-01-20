// Demo program for tryLock() method.

package A1Locks;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.*;

class MyThread12 extends Thread
{
    
    static ReentrantLock l = new ReentrantLock();  // only one copy  of this lock willl be available to all the thread objects.
    
    MyThread12(String name)
    {
        super(name);
    }

    public void run()
    {
        if(l.tryLock())
        {
            System.out.println(Thread.currentThread().getName()+"Got lock and performing safe operations");
            
            try
            {
                Thread.sleep(2000);
            }
        
            catch(InterruptedException e)
            {
                
            }
        
            l.unlock();
        
        }
    
    
        else
        {
            System.out.println(Thread.currentThread().getName()+"Unable to get lock hence performing safe operations");
        }
    
    
    }
    


}


class RenentrantLockDemo3
{
    
    public static void main(String[] args)
    {
        
        MyThread12 t1 = new MyThread12("First thread");
        
        MyThread12 t2 = new MyThread12("Second Thread");
        
        t1.start();
        
        t2.start();
    }
}

/*

run:
First threadGot lock and performing safe operations
Second ThreadUnable to get lock hence performing safe operations
BUILD SUCCESSFUL (total time: 2 seconds)


*/
/*
Flow of execution
---------------------

1. We started two threads , first and second thread.

2. Any thread can get the chance first to start. Lets say First therad gets the chance to execute first.

3. So first thread is calling the run() method
         public void run()
    {
        if(l.tryLock())
        {
            System.out.println(Thread.currentThread().getName()+"Got lock and performing safe operations");
            
            try
            {
                Thread.sleep(2000);
            }
        
            catch(InterruptedException e)
            {
                
            }
        
            l.unlock();
        
        }

4. But in the run method l.tryLock() condition is there, hence the thread will try to get the 
   Reentrant lock. Since this was the first thread hence it will get the lock.

5. After that thread goes into the sleeping mode and immediately another thread that is second thread
   tries to access the run method and tries to get the lock. But since the lock is already taken by the first
   thread hence instead of going into the thread it will continue with the alternative operations that is it 
   will execute the else part. In this way the thread never goes into the waiting state and deadlock situation
   can be avoided 100 percent.


*/

//------------------------------------------------------------------***********************----------------------------------