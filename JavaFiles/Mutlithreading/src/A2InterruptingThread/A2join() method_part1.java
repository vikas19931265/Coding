/* join() method.
--------------------------------------
 
1. If a thread wants to wait until completing some other thread to complete then we should go for join() method.

2. For example if a thread t1 wants to wait until completing t2 then t1 has to call t2.join().

3. If t1 executes t2.join() then immediately t1 will enter into waiting state until t2 completes.

4. Once t2 completes then t1 can continue its execution.


example

      Venue fixing thread               Wedding cards printing                        Wedding cards distribution
            (t1)                               (t2)                                             (t3)
              |                                 |                                                 |  
              |(thread)                         |                                                 |  
              |                              t1.join()                                          t2.join() 
                                                |                                                 |  



4. Wedding cards printing thread(t2) has to wait until venue fixing thread(t1) completion hence t2 has to call t1.join().

5. Wedding cards distribution thread(t3) has to wait until , wedding cards printing thread(t2) completion. Hence t3 has to call
   t2.join().



prototype of join


public final void join() throws InterruptedException

public final void join(long milliseconds) throws InterrupedException

public final void join(long milliseconds, int nanoseconds) throws  InterrupedException



note

Every join method throws interrupted Exception which is checked exception hence compulsory we should handle this
exception either by using try catch block or by using throws keyword otherwise we will get compile time error.


-------------                         ---------------                                                               
|            |                        |              |                                                   --------------                              ------------   
| new/born   |---t.start() ---------->|ready/runnable|---if thread scheduler allocated processor-------->|  running   |---if run() complete----------->|  dead    |
|-------------                        |--------------                                                    |____________|                              |-----------   
  |                                         ^
                                            |                                                                       |
Thread t = new Thread();                    |                                                                       |
                                            |                                                                       |
                                            |                                                                   t2.join()
                                            |                                                                       | 
                                            |                                                                   t2.join(2000)    
                                            |                                                                        |
                                            |                                                                  t2.join(2000,100)
                                            |                                                                        |
                                            |                                                                   ----------------------     
                                            |                                                                   |                     |   
                                            |                                                                   |waiting state        |   
                                            |                                                                   |(blocked for joining |   
                                            |                   1.if t2 completes or                             ----------------------                                      -----------------------
                                            |                   2. if time expires or                                 |  
                                             -----------------  3. if waiting thread interrupted.---------------------
                                                
                                                
                                                





*/
package A2InterruptingThread;


 class MyThreads extends Thread {
    
     public void run()
     {
         for(int i=0;i<10;i++)
         {
             
             System.out.println("Seetha Thread");
             
             try
             {
                 Thread.sleep(2000);
             }
             
             catch (InterruptedException e)
             {
                 
             }
              
             
         }
         
     }
 
}


class ThreadJoinDemo1
{
    
    public static void main(String[] args) throws InterruptedException
    {
        
        MyThreads t = new MyThreads();
        
        t.start();   
        
        t.join(); // this will force seetha thread to complete first, before rama( main thread)  can start.
                  // If this line is commented then both main and child thread will be executed simultaneously
                  // and we cannot expect exact output.
             
         /*
         
         If we are not commenting this line then main thread will wait until the execution of the child thread. In this case
         the output will be
                  
                  Seetha Thread( 10 times)
                  Rama Thread(10 times).
         
         */         
        
        for(int i=0;i<10;i++)
        {
            
            System.out.println("Rama Sleep");
            
            
        }
        
        
        
    }
    
}

/*
run:
Seetha Thread
Seetha Thread
Seetha Thread
Seetha Thread
Seetha Thread
Seetha Thread
Seetha Thread
Seetha Thread
Seetha Thread
Seetha Thread
Rama Sleep
Rama Sleep
Rama Sleep
Rama Sleep
Rama Sleep
Rama Sleep
Rama Sleep
Rama Sleep
Rama Sleep
Rama Sleep
BUILD SUCCESSFUL (total time: 20 seconds)

*/

//----------------------------------------------------------------------**************---------------------------------------------------