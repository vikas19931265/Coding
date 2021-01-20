                                                          
// ThreadPool program.

package ThreadPool;

import java.util.concurrent.*;

class PrintJob implements Runnable   // These are Runnable jobs.
{
    
    String name;
    
    PrintJob(String name)
    {
        this.name=name;
    }


    public void run()
    {
        
        System.out.println(name+"job started by Thread"+ Thread.currentThread().getName());
        
        try
        {
            Thread.sleep(5000);
        }
    
        catch(InterruptedException e)
        {
            System.out.println(name+"Job completed by thread"+Thread.currentThread().getName());
        }
    
    
    }


}


class ExecutorDemo
{
    
    public static void main(String[] args)
    {
        
        PrintJob[] jobs={
            
                        new PrintJob("Durga"), // Created the Print job object. Every object is initilized with some name given in constructor.
                        new PrintJob("Ravi"), 
                        new PrintJob("Shiva"),
                        new PrintJob("Suresh"),
                        new PrintJob("Anil")};
                        
        /*
         We have created an array of executable jobs here. Normally in order to run each job what 
         we will do is that we will pass the object inside the thread Constructor or we can say that
         we will assign the job to a thread to execute by passing its object inside the constructor.
        
        like
                Thread t = new Thread( new PrintJob());
                t.start();
        
        But if we do like this then for each and every job we have to create a object and pass to thread
        in order to run it separately.
        
        Instead of this what we have done is that , we have created an array of all those job objects before hand.
        
        What we will do is that we will pass all these objects to the Executor. The executor will contain the threads
        which will take care of running the job.
        
        Here each thread can work on muliple jobs. Once the thread completes its execution it come backs to pool
        and waits for another request , once it get request again it starts to work.
        
        
        
        by durga
        
        In this example three threads are responsible in order to execute 6 jobs so that a single thread can be reused
        for multiple jobs.
        
        note
            While designing web servers and application servers we can use  thread pool concept.
        
        */
       ExecutorService service = Executors.newFixedThreadPool(3); // we created 3 threads which will take care of running of the jobs.
       
       for(PrintJob job: jobs)
       {
           service.submit(job);
       }
    
        service.shutdown();
    
    
    }
    }

/*
run:
Ravijob started by Threadpool-1-thread-2
Shivajob started by Threadpool-1-thread-3
Durgajob started by Threadpool-1-thread-1
Sureshjob started by Threadpool-1-thread-2
Aniljob started by Threadpool-1-thread-3
BUILD SUCCESSFUL (total time: 10 seconds)

*/

//--------------------------------------------------------------*******************************-----------------------------------------------