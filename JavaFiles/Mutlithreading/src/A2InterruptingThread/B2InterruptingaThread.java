
// Interrupting  a Thread.


package A2InterruptingThread;


class InterruptedThread extends Thread
{
    
    public void run() // run method of the child thread is called
    {
        try
        {
            Thread.sleep(2000); // Thread goes to sleep hence , main thread which is waiting will get the chance now.
            
            
        
        }
        
        catch(InterruptedException e)
        {
            
            throw new RuntimeException("Thread has been Interrupted"+e);
            
            
        }       
        
        
    }
    


    public static void main(String[] args)
    {
        
        InterruptedThread t = new InterruptedThread();
        
        t.start(); // 2 threads that is main thread and child thread exist in the program now.
        
        t.interrupt();// main thread gets the chance as the thread goes into the sleeping mode, now interrupt method will be called
                      // on the child thread  which will cause an interruptedexception to be thrown.
    }



}


/*

run:
Exception in thread "Thread-0" java.lang.RuntimeException: Thread has been Interruptedjava.lang.InterruptedException: sleep interrupted
	at Session3.InterruptedThread.run(NewClass.java:21)
BUILD SUCCESSFUL (total time: 0 seconds)



Order of execution of the program.

1. 2 threads exist in the program, one is the main thread and the other one is the child thread.

2. If child thread gets to execute first.

3. Child thread goes to sleep , hence main thread will get the chance now.

4. main thread executes, t.interrupt() method on the child thread which leads to interruption of the thread which is in the
   sleep mode and throw exception.

5. Now instead of child thread if the main thread gets to execute first, then interrupt method will be called on the child thread.
   But the child thread has not gone into the sleep mode yet hence the main thread will wait for the child thread to go into 
   the sleep mode and then interrupt it.


*/