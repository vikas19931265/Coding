/*

How a thread can interrupt another thread???

A thread can interrupt a sleeping thread or waiting thread , by using interrupt() method of
the thread class.

Signature of interrupt

public void interrupt();


*/
package A2InterruptingThread;

class MyThread3 extends Thread
{
    
    public void run()
    {
        
        try
        {
            for( int i=0;i <10 ;i++)
            {
                
                System.out.println("I am lazy thread");
                
                Thread.sleep(2000);
            }
            
        }
        
    
        catch(InterruptedException e)
        {
            System.out.println("I got interrupted");
        }
    
    
    
    }
    
    
}


class ThreadInterruptedDemo
{
    public static void main(String[] args)
    {
        
        MyThread3 t= new MyThread3();
        
        t.start();
        
        t.setPriority(10);
        
        t.interrupt(); // line executed by main thread. Here main thread is interrupting child thread.
                       // If the main thread is executing first then child thread will not be in sleeping mode. But
                       // the child thread will be flagged for interrupt() hence whenever child thread will go to sleep it
                       // will be interrupted.
                
        
        
        System.out.println("Checkpoint");
        /*
        
        1. If we comment t.interrupt() then main thread will not interrupt the child thread. In this case child thread will
           execute for loop 10 times.
        
        run:
        End of the main
        I am lazy thread
        I am lazy thread
        I am lazy thread
        I am lazy thread
        I am lazy thread
        I am lazy thread
        I am lazy thread
        I am lazy thread
        I am lazy thread
        I am lazy thread
        BUILD SUCCESSFUL (total time: 20 seconds)

        
        2. If we are not commenting line number 1 , then main thread will interrupt the child thread .
           
   */
        
        
        
        
        
        System.out.println("End of the main");
        
        System.out.println("I m done");
        
    }
    
}

/*
run:
End of the main
I am lazy thread
I got interrupted
BUILD SUCCESSFUL (total time: 0 seconds)



order of execution


1. 2 thread exist in the program , one is the child thread and the other one is the main thread.

2. If child thread executes, then for the value from 0 to 10 it is going to print "I am lazy thread" 
   and then it will go to the sleep.

3. First time thread will print "I am lazy thread".

4. After this it is going to sleep , as soon as it goes to sleep then the other waiting thread which is the main thread
   will get the chance to execute.

5. Now the main thread is executing the method t.interrupt(), this will interrupt the waiting child thread and print 
   "I got interrupted". In this case its upto the scheduler to pick the thread . If it picks the main thread then it will
    print "Checkpoint".

6. If the child thread was picked then after printing "I got interrupted" it will die and let the main thread to 
   execute further.

7. main thread will further print "End of the main" and "I am done"


[note]

    This is upto the scheduler to decide which thread has to be picked for the execution.




run:
I am lazy thread
I got interrupted
Checkpoint
End of the main
I m done
BUILD SUCCESSFUL (total time: 0 seconds)



run:
I am lazy thread
Checkpoint
End of the main
I m done
I got interrupted
BUILD SUCCESSFUL (total time: 0 seconds)






*/