/* Case 3:

1. If the main thread calls join() method on the child thread object and child thread
   calls join() method on the main thread object then both the threads will wait for ever.
   And the program will be stuck for ever and will not move further.


2. This is something like deadlock situation.


*/
package A2InterruptingThread;

class MyThread2 extends Thread
{
    
    static Thread mt;
    
    public void run()
    
    {
        try
        {
            mt.join();
        }
        
        
        catch(InterruptedException e)
        {
            
        }
        
        for(int i=0;i<10;i++)
        {
            
            System.out.println("Child Thread");
            
        }
    
    
    
    }
    
}

class ThreadJoinDemos
{
    
    public static void main(String[] args) throws InterruptedException
    {
        
        MyThread2.mt= Thread.currentThread();
        
        
        MyThread2 t = new MyThread2();
        
        t.start();
        
        t.join();  // Creating a deadlock here, as then in this case both the main thread as well as child thread will wait for
                   // each other infinitely.
        
        for(int i=0 ; i<10;i++)
        {
            
            System.out.println("main Thread");
            
        }
        
       Thread.sleep(2000);
    }
    
}
