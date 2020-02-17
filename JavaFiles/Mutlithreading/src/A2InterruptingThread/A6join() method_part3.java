/* Case 2: 

Waiting of child thread until completing main thread.

In the below example, child thread calls the join() method on main thread object hence child thread has to 
wait until completion of the main thread. In this case output is.

run:
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
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
BUILD SUCCESSFUL (total time: 2 seconds)



In this program we have forced main thread to complete first and then the child thread.


[note]

In whichever reference we are calling the join() method will execute first.


*/
package A2InterruptingThread;

class MyThread1 extends Thread
{
    
    static Thread mt; // created mt reference of Thread type to store main thread reference.
    
    public void run()
    
    {
        try
        {
            mt.join(); // mt is of type main thread , on main thread we are calling join() hence main thread will execute first
            
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

class ThreadJoinDemo
{
    
    public static void main(String[] args) throws InterruptedException
    {
        
        MyThread1.mt= Thread.currentThread();//currentThread returning object of main thread and is passed to mt reference.
        
        MyThread1 t = new MyThread1(); // Created child thread object and started it.
        
        t.start();
        
        
        for(int i=0 ; i<10;i++)
        {
            
            System.out.println("main Thread");
            
        }
        
        Thread.sleep(2000);
    }
    
}


/*
run:
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
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
BUILD SUCCESSFUL (total time: 2 seconds)




*/