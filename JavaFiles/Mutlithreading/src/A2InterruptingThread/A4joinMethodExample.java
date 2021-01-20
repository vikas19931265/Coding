package A2InterruptingThread;

// Demonstrating join() method

class JoinTest extends Thread
{
    public void run() 
    {
        for(int i =1;i<=10;i++)
        {
            System.out.println("Child Thread");
            
            try
            {
            
                Thread.sleep(1000); // When thread goes to sleep normally waiting thread should get 
                                    // the chance to execute but since the other thread that is main thread
                                    // is in waiting state for child to execute first hence child thread will first
                                    // execute completely.
            }
            
            catch(InterruptedException e)
            {
                
            }
        
        
        }
        
    }
    
    
}




class Driver12
{
    
    public static void main(String[] args)
    {
        JoinTest t = new JoinTest();
        
        t.start();
        
        
        
        try
        {
        
            t.join(); // We called join() method inside the main thread. Hence the main thread will go into the waiting state.
        }
        
        catch(InterruptedException e)
        {
            
        }
        
        
        for(int i =1;i<=10;i++)
        {
            
            System.out.println("Driver Thread");
            
        }
        
    }
    
}

/*
run:
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Driver Thread
Driver Thread
Driver Thread
Driver Thread
Driver Thread
Driver Thread
Driver Thread
Driver Thread
Driver Thread
Driver Thread
BUILD SUCCESSFUL (total time: 10 seconds)


*/

//----------------------------------------------------------------------**************---------------------------------------------------