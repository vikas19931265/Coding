// Program on how to use Reentrant lock.

package A1Locks;

import java.util.concurrent.locks.*;

class ReentrantLock2
{
   public static void main(String[] args)
   {
       ReentrantLock l = new ReentrantLock();
       
       l.lock(); // main thread has locked "l" object.
       
       l.lock();
       
       System.out.println(l.isLocked()); // true // "l" is locked by the main thread
   
       System.out.println(l.isHeldByCurrentThread());// true
       
       System.out.println(l.getQueueLength()); //0
       
       l.unlock();// released 1 lock ( 2-1=1)
       
       System.out.println(l.getHoldCount());//1
   
       System.out.println(l.isLocked());//true
       
       l.unlock();
       
       System.out.println(l.isLocked());//false
       
       System.out.println(l.isFair());//false
   
   }
        
}

/*
run:
true
true
0
1
true
false
false
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//---------------------------------------------------------------************************-----------------------------------