
/*

Why sleep() and join() cannot be used as a replacement for interthread communication???

*/


package A3InterThreadCommunication;


 class ThreadA {
    

 public static void main(String[] args) throws InterruptedException
 {
     
     ThreadB b = new ThreadB();
     
     b.start();
     
   
    
     
     //Option 1 to replace interthread communication( not recommended)
     
     b.join(); // this will force the main thread to wait until completion of child thread, but if child thread run contains 1 crore of lines of code
               // after the for loop execution then this will increase the waiting time of the thread, hence this is also not recommended.
     
     
               
    // Option 2 to sleep the main thread so that child thread can execute( not recommended)
    
    Thread.sleep(10000); // sleeping thread for 10 seconds is not recommended as for loop can finish execution in 1 second also
                          // This will increase the waiting time of the thread
     
    System.out.println(b.total); // Trying to print total value. If main gets the chance
                                  // first then 5050 will be printed, if main thread gets chance then 0
                                  // or else we can get intermediate answer like if for loop of child thread
                                  // just executes for 10 times then main thread gets the chance.
 
 
  
 
 
 
 }
 
 
 
 
 }



class ThreadB extends Thread
{
    
    int total=0;
    
    public void run()
    {
        
        for(int i=1;i <=100 ;i++)
        {
            
            
            total= total+i;
            
        }
        
        
    }
    
    
    
    
}