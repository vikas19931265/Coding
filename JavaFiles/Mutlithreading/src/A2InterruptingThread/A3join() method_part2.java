package A2InterruptingThread;

/*
The join() method

The join() method waits for a thread to die. 

In other words, it causes the currently running threads to stop executing until the thread it joins with completes its task.
package Session3;

*/

class Thread4 extends Thread
{
    
    public void run()
    {
        
        for(int i=0;i<=5;i++)
        {
            
            System.out.println("Child Thread"+i);
            
            try
            {
                
                Thread.sleep(2000); 
            /*
                                    
             If there was no join method, then every time the thread will go to sleep
             other thread that is the main thread in waiting will get the chance and start executing.
            
                
            In this case the output will be something like
                                    
                        run:
            Child Thread0
            main Thread0
            main Thread1
            main Thread2
            main Thread3
            main Thread4
            main Thread5
            Child Thread1
            Child Thread2
            Child Thread3
            Child Thread4
            Child Thread5
            BUILD SUCCESSFUL (total time: 12 seconds)
                        
           Here child thread only got the chance to execute first, but because of the sleep method in between
           main thread came into the action and started to execute.
                                    
           
            If you want to stop this then use the join() method to force the main thread to pause until the execution of the
            child thread.                    
                                    
                                    
            */
            
            
            }
            
        
            catch(InterruptedException e)
            {
                
            
            System.out.println("Interrupted Thread");
            
            
            }
        
        
        }
        
        
    }
    
}


class DriverThread
{
    
    public static void main(String[] args) throws InterruptedException
    {
        
        Thread4 t = new Thread4();
        
        t.start();
        
        t.join(); // This will force the main thread to wait until the execution of the child thread.
        
        for(int i=0;i<=5;i++)
        {
            
            System.out.println("main Thread"+i);
            
        }
        
        
        
        
    }
    
    
}

/*
run:
Child Thread0
Child Thread1
Child Thread2
Child Thread3
Child Thread4
Child Thread5
main Thread0
main Thread1
main Thread2
main Thread3
main Thread4
main Thread5
BUILD SUCCESSFUL (total time: 12 seconds)

*/

//----------------------------------------------------------------------**************---------------------------------------------------