/*

Demo program to check.

*/
package A1Locks;

import java.util.concurrent.locks.*;

class MyThreadss extends Thread
{
     static  Printss p = new Printss(); 
     
   static  ReentrantLock re= new ReentrantLock();
   
      public void run()
    {
        re.lock();

         p.generateNumber();
        
        re.unlock();
    
    //------ Threads waiting in the queue to obtain the lock----------
    
       System.out.println("\nQueue length  " +re.getQueueLength());//1 ---> 1 thread is waitnig in the queue to getLock
       
   //-------Is the current Reentrant object locked---------------------
   
       System.out.println("\nReentrantLock Status  "+ re.isLocked());// true 
       
  // -----number of locks held by the current Thread---------------
  
      System.out.println("hold count  "+ re.getHoldCount());
    
    }
    



}

class Driver2
{
    public static void main(String[] args)
    {
        
        MyThreadss t = new MyThreadss();
        
        t.start();
        
        MyThreadss t1= new MyThreadss();
        
        t1.start();
    }
}


class Printss
{
    
 
    public   void  generateNumber()
    {
        
        
        for(int i=1;i<=10;i++)
        {
            System.out.println(Thread.currentThread().getName()+"...."+ i);
        
       
        
        }
    
        
    
    }
   
}





//-----------------------------------------------------------***********************************--------------------------------