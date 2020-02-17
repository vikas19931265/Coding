/*

Demo Program.

*/
package A1Locks;

import java.util.concurrent.TimeUnit;

import java.util.concurrent.locks.*;

class MyThreadss1 extends Thread
{
   static  Printss1 p = new Printss1(); 
     
   static  ReentrantLock re= new ReentrantLock(); // modifier is static here, because we want both the threads to use lock on single object.
   
      public void run()
    {
         
      try
      {
        if(re.tryLock(1000,TimeUnit.MILLISECONDS)) 
         {
             
             /*
             
             Here i have given time period by which other therad is going to wait. Please
             note that 1000 milliseconds is enough for any thread to finsih the task. Hence 
             after 1000 milliseconds second thread will get the lock and start executing.
             
             However if we did not give any time period then compulsary the thread in queue has to wait
             until the task of the first thread is not completed.
             
             */
             
                p.generateNumber();
        
                re.unlock();
    
         }
         
         else
         {
             System.out.println("Thread in waiting state to get the lock"+ Thread.currentThread().getName());
         }
    
    
      }
      
      catch(Exception e){}
      
      }
    



}

class Driver21
{
    public static void main(String[] args)
    {
        
        MyThreadss1 t = new MyThreadss1();
        
        t.start();
        
        MyThreadss1 t1= new MyThreadss1();
        
        t1.start();
    }
}


class Printss1
{
    
 
    public   void  generateNumber()
    {
        
        
        for(int i=1;i<=10;i++)
        {
            System.out.println(Thread.currentThread().getName()+"...."+ i);
        
       
        
        }
    
        
    
    }
   
}

/*

If  time period is given as the argument in the tryLock() method

run:
Thread-1....1
Thread-1....2
Thread-1....3
Thread-1....4
Thread-1....5
Thread-1....6
Thread-1....7
Thread-1....8
Thread-1....9
Thread-1....10
Thread-0....1
Thread-0....2
Thread-0....3
Thread-0....4
Thread-0....5
Thread-0....6
Thread-0....7
Thread-0....8
Thread-0....9
Thread-0....10
BUILD SUCCESSFUL (total time: 0 seconds)



If Argument is not given in the tryLock() method
-----------------------------------------------------

run:
Thread in waiting state to get the lockThread-1
Thread-0....1
Thread-0....2
Thread-0....3
Thread-0....4
Thread-0....5
Thread-0....6
Thread-0....7
Thread-0....8
Thread-0....9
Thread-0....10
BUILD SUCCESSFUL (total time: 0 seconds)


*/



//-----------------------------------------------------------***********************************--------------------------------