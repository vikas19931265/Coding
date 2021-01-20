/* interrupting thread


[note]

Whenever we are calling interrupt() method , if the target thread is not in the sleeping state
or waiting state then there is no impact of interrupt call immediately. Interrupt call will be waited
until target thread entered into the sleeping or waiting state.



If the target thread entered into the sleeping or waiting state then immediately , interrupt call will interrupt 
the target thread.


If the target thread never entered into sleeping or waiting state in its entire lifetime then there is no impact of interrupt call.
This is the only case where interrupt call will be wasted.



In the below example interrupt call waited until child thread completes for loop 10,000 times.


*/
package A2InterruptingThread;


 class MyThread4 extends Thread {
    

 public void run()
 {
     
     for (int i= 0;i<=5 ;i++)
     {
         
         System.out.println("i am lazy thread");
         
     }

 
 
     try
     {
              
     System.out.println("i want to sleep");
         
         Thread.sleep(50000); // as soon as thread goes to sleep interrupt method will be called and interrupted
                              // exception will be thrown.
     
     }
     
 
     catch(InterruptedException e)
     {
         System.out.println("I am interrupted");
         
     }
 }
 
}


class ThreadDemoInterruption
{
    
    public static void main(String[] args)
    {
        
        MyThread4 t = new MyThread4();
        t.start();
        
        t.interrupt(); // This will interrupt the child  thread. If the child thread is not sleeping
                       // then it will wait for the child thread to go into the interrupt state and then it 
                       // will raise the InterruptedException.
        
        System.out.println("end of main");
        
    }
    
}


/*
run:
end of main
i am lazy thread
i am lazy thread
i am lazy thread
i am lazy thread
i am lazy thread
i am lazy thread
i want to sleep
I am interrupted
BUILD SUCCESSFUL (total time: 0 seconds)



*/