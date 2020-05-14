package ThreadPool;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;



class Tasks implements Runnable
{
    double num;
    
    Tasks(int num)
    {
        this.num=num;
    }

    @Override
    public void run()
    {
        double factorial=1;
          for(double i= num ; i>=1; i--)
        {
            factorial= factorial*i;
            
        }
          System.out.println("Factorial calculation by Thread " +Thread.currentThread().getName()+" of number  "+ num +"..."+ factorial);
    }
}

class Drver
{
    public static void main(String[] args)
    {
        Tasks[] task= new Tasks[10];
        
        for(int i=0; i<10;i++)
        {
            task[i]= new Tasks(i);
        }
       // Tasks[] task= { new Tasks(5), new Tasks(4), new Tasks(100
       // )};
        
        ExecutorService service =Executors.newFixedThreadPool(10);
        for( Tasks s: task)
        {
            
            service.submit(s);
        }
        service.shutdown();
    }
}

/*
run:
Factorial calculation by Thread pool-1-thread-9 of number  8.0...40320.0
Factorial calculation by Thread pool-1-thread-8 of number  7.0...5040.0
Factorial calculation by Thread pool-1-thread-5 of number  4.0...24.0
Factorial calculation by Thread pool-1-thread-3 of number  2.0...2.0
Factorial calculation by Thread pool-1-thread-2 of number  1.0...1.0
Factorial calculation by Thread pool-1-thread-4 of number  3.0...6.0
Factorial calculation by Thread pool-1-thread-10 of number  9.0...362880.0
Factorial calculation by Thread pool-1-thread-6 of number  5.0...120.0
Factorial calculation by Thread pool-1-thread-1 of number  0.0...1.0
Factorial calculation by Thread pool-1-thread-7 of number  6.0...720.0
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-------------------------------------------------------************************************************---------------------------------------