/* Inter thread communication can be done only inside the synchronized area */



package A3InterThreadCommunication;


 class ThreadA1 {
    
 public static void main(String[] args) throws InterruptedException
 {
     
     ThreadB1 b= new ThreadB1();
     
     b.start(); //after this we have two thread.
 
     /*
     
     Scenario
     
     Thread.sleep(10000);
     
     
     Consider if main thread gets chance to execute first from scheduler. But here it calls sleep method
     hence child thread will get the chance now and will complete its execution give the notification and dies.
     
     
     b.wait();
     
     After death of child thread we are trying to call wait method , we will never receive any notification here
     as child thread is already dead, our cursor will keep on blinking.
     
     to stop this our main thread should specify the time for which it wants to wait, after that it should start to execute
     
     b.wait(10000)// so here main thread will wait for the 10 seconds and then it will start to execute.
     
     */
     
     
     synchronized(b) // main thread get lock and release lock
     {
         
         System.out.println("main thread trying to call wait method"); //1st step
         
         b.wait();// main thread expecting update hence it calls wait method
         
         System.out.println("main thread got notification"); // 4rth step
     
         System.out.println(b.total); // 5th step.
     
     }
             
             
 }
 
 
 
 
}


class ThreadB1 extends Thread
{
    
    int total=0;
    
    public void run()
    {
        
        synchronized(this) // child thread gets lock and release the lock.
        {
            
            System.out.println("Child thread starts calculation"); // 2nd step
            
            for(int i=1; i<=100 ;i++)
            {
                
                total=total+i;
                
            }
            
        
           System.out.println("Child thread trying to give notification");// 3rd step
 
           
           this.notify(); // notify main thread about the completion
           
        
        }
        
        
    }
    
    
    
}

/*
run:
main thread trying to call wait method
Child thread starts calculation
Child thread trying to give notification
main thread got notification
5050
BUILD SUCCESSFUL (total time: 0 seconds)


This order is not guarantee, but mostly main thread gets the chance first.

*/