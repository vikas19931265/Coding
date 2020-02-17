/* sleep() method.

1. If a thread does not want to perform any operation for a particular amount of time then
   we should go for sleep method.


Signature of sleep method()

public static native void sleep(long milliseconds) throws InterruptedException

public static void sleep(long ms, int ns) throws InterruptedException


[note]

Every sleep method throws interrupted exception, which is checked exception hence whenever we are using
sleep() method compulsory we should handle InterruptedException either by using try catch or by using
throws keyword otherwise we will get compile time error.



At a time only one thread is executed. If you sleep a thread for the specified time,
the thread shedular picks up another thread and so on. 



-------------                         ---------------                                                               
|            |                        |              |                                                   --------------                              ------------   
| new/born   |---t.start() ---------->|ready/runnable|---if thread scheduler allocated processor-------->|  running   |---if run() complete----------->|  dead    |
|-------------                        |--------------                                                    |____________|                              |-----------   
  |                                         ^
                                            |                                                                       |
Thread t = new Thread();                    |                                                                       |
                                            |                                                                       |
                                            |                                                                   Thread.sleep(2000)
                                            |                                                                       | 
                                            |                                                                   Thread.sleep(2000,1000)    
                                            |                                                                        |
                                            |                                                                  
                                            |                                                                        |
                                            |                                                                   ----------------------     
                                            |                                                                   |                     |   
                                            |                                                                   |sleeping thread      |   
                                            |                                                                   |(blocked for joining |   
                                            |                                                                    ----------------------                                      -----------------------
                                            |                   1. if time expires or                                 |  
                                             -----------------  2. if sleeping thread interrupted.---------------------
                                                
                                                
        

*/



package A2InterruptingThread;



 class SlideRotator {
    
     public static void main(String[] args) throws InterruptedException

     {
         
         for(int i=1;  i<=3;i++ )
         {
             
             System.out.println("Slide"+i); // after printing slide , thread will go to sleep for 2 seconds.
             Thread.sleep(2000);
             
         }
         
         
     }
             
             
 }


/*
run:
Slide1
Slide2
Slide3
BUILD SUCCESSFUL (total time: 6 seconds)



*/