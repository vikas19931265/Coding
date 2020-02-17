package ThreadPool;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;



class Calling implements Callable
{
    
    int num;
    
    Calling(int num)
    {
        this.num=num;
    }
    
    
    public Object call() throws Exception
    {
      
        int result=0;
         
        for(int i=1; i<=num;i++)
        {
            result=result+i;
        }
    
        return result;
    }
}


class Driver34 
{
    
  static  Calling[] call= {new Calling(10), new Calling(20), new Calling(30)};
    
 static   ExecutorService e = Executors.newFixedThreadPool(3);
    
    public static void main(String[] args) throws Exception
    {
    
    for(Calling c: call)
    {
        
     Future f=   e.submit(c);
        
     System.out.println(f.get());
    
    }

    e.shutdown();
    
    }
    
}

/*
run:
55
210
465
BUILD SUCCESSFUL (total time: 0 seconds)

*/