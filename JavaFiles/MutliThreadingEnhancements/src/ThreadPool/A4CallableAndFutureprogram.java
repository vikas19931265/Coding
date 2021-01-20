
package ThreadPool;

import java.util.concurrent.*;

class MyCallable implements Callable
{
    int num;
    
    MyCallable(int num)
    {
        this.num=num;
        
    }

    public Object call() throws Exception
    {
        
        System.out.println(Thread.currentThread().getName()+ " is"
                + " responsible to find the sum of first"+ num +"numbers");
    
        int sum=0;
        
        for(int i =1; i<=num;i++)
        {
            sum=sum+i;
        }
    
        return sum;
    
    }



}

class CallableFutureDemo
{
    
    public static void main(String[] args) throws Exception

    {
        
        MyCallable[] jobs= {
                                new MyCallable(10),
                                new MyCallable(20),
                                new MyCallable(30),
                                new MyCallable(40),
                                new MyCallable(50),
                                new MyCallable(60),
        };
    
    
        ExecutorService service = Executors.newFixedThreadPool(3);
        
        for(MyCallable job: jobs)
        {
            Future f=service.submit(job);
            
            System.out.println(f.get());
        
        }
    
            service.shutdown();
    }
            
            
    
}


/*

run:

pool-1-thread-1 is responsible to find the sum of first10numbers
55
pool-1-thread-2 is responsible to find the sum of first20numbers
210
pool-1-thread-3 is responsible to find the sum of first30numbers
465
pool-1-thread-1 is responsible to find the sum of first40numbers
820
pool-1-thread-2 is responsible to find the sum of first50numbers
1275
pool-1-thread-3 is responsible to find the sum of first60numbers
1830
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-----------------------------------------------------------**************************************-----------------------