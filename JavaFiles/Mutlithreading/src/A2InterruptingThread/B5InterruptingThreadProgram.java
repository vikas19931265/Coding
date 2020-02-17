package A2InterruptingThread;


// Interrupting Thread


class ThreadInterrupted extends Thread
{
    
    public void run()
    {
        
        for(int i =0;i<=10;i++)
        {
            
            System.out.println(i);
        
            try
            {
                Thread.sleep(1000);
            }
        
        
            catch(InterruptedException e)
            {
                
                System.out.println("Thread is Interrupted");// Once thread is interrupted we are throwing an exception
                                                            // to terminate the program abnormally.
                throw new CustomisedException("Thread will terminate now");
            
            
            }
        
        
        }
    }
    
    
}


class DriverThread1
{
    public static void main(String[] args)
    {
    
    ThreadInterrupted t = new ThreadInterrupted();
    
    t.start(); // Thread is started
    
    t.interrupt(); // Thread will get interrupted
 
    }
    
}



// Creating a customized exception to throw an exception


class CustomisedException extends RuntimeException
{
    
    CustomisedException(String s)
    {
        super(s);
    }
}

/*
run:
0
Thread is Interrupted
Exception in thread "Thread-0" CustomisedException: Thread will terminate now
	at ThreadInterrupted.run(Test.java:26)
BUILD SUCCESSFUL (total time: 0 seconds)

*/