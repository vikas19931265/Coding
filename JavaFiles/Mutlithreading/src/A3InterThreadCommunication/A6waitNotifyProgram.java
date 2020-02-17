package A3InterThreadCommunication;


//notify method: Interthread communication.

class Demo2 extends Thread
{
    public void run()
    {
        
        synchronized(this)
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
                
            }
        
        }
    
        }
        
        this.notify(); // Once the task of this thread completes notify method will give the 
                       // the notification to the waiting thread on queue waiting to hold lock on the object.
                       //This will make the thread to release the lock like as in wait method.
        
        }
    
}


class Driver
{
    public static void main(String[] args)
    {
        Demo2 d = new Demo2();
        
        d.start();
        
        synchronized(d) //Get the lock of d object. Once the lock is obtained by the main thread
                        //It must finish its task execution inside the block on that object.
                        // Once the task completes the lock will be released automatically. 
        {               // In this case lock will be released immediately once the wait method is called on object. 
            try
            {
            
            d.wait();
        
            }
            
            catch(InterruptedException e)
            {
            
            }
        
        for(int i =0;i<=10;i++)
        {
            System.out.println(i);
            
            try
            {
                Thread.sleep(1000);
            }
        
        
            catch(Exception e)
            {
                
            }
        
        
        }
    }
            
}
}
/*
run:
0
1
2
3
4
5
6
7
8
9
10
0
1
2
3
4
5
6
7
8
9
10
BUILD SUCCESSFUL (total time: 22 seconds)


*/