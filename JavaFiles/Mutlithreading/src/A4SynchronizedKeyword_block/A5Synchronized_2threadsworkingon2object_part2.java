
package A4SynchronizedKeyword_block;


class Display1
{
    
    public synchronized void wish(String name)
    {
        
    /*
        
     1. if we are not declaring  wish method as synchronized then both the threads will be executed simultaneously and hence
        we will get irregular output.
        
        run:
Good MorningGood Morningdhoni
Good Morningyuvraj
Good Morningdhoni
Good Morningyuvraj
Good Morningdhoni
Good Morningyuvraj
Good Morningdhoni
Good Morningyuvraj
Good Morningdhoni
Good Morningyuvraj
Good Morningdhoni
Good Morningyuvraj
Good Morningdhoni
Good Morningyuvraj
Good Morningdhoni
Good Morningyuvraj
Good Morningdhoni
Good Morningyuvraj
Good Morningdhoni
yuvraj
BUILD SUCCESSFUL (total time: 20 seconds)

        
     2.   If we declare wish method as synchronized then at a time only one thread is allowed to execute wish() method on the given display
          object hence we will get regular output.
        
        
        
     */
        
        
        
        
        
        for(int i=0;i<10;i++)
        {
            
            System.out.print("Good Morning");
            
            try
            {
                
                Thread.sleep(2000);
                
            }
            
            catch(InterruptedException e)
            {
                
            }
            
        
            System.out.println(name);
        
        
        
        }
        
        
    
    
    }
    
    
}


class MyThreads extends Thread
{
    Display1  d;
    String name;
    
    MyThreads( Display1 d, String name)
    {
        
        this.d=d;
        this.name=name;
        
    }
    
    public void run()
    {
        d.wish(name);
    }
    
}




class SynchronizedDemos
{
    
    public static void main(String[] args)
    {
        
        /*
        
        case study:
        
      thread 1 
        d1 object ------>lock(d1)
        
            d1.wish("dhoni");
        
       
       thread 2 
       d2 object -----?lock(d2)
        
            d2.wish("yuvraj");
             
                
        
   1. Even though wish method is synchronized we will get irregular output.
        
   2. This is because threads are operating on different java objects.   
        
        conclusion:
        
   If multiple threads are operating on the same java object then synchronization is required.
    
   If multiple threads are operating upon multiple java objects then synchronization is not required.     
        
        
        
        */
        
        
        
        
        Display1 d1 = new Display1();
        
        Display1 d2 = new Display1();
        
        MyThreads t1= new MyThreads(d1,"dhoni");
        
        MyThreads t2= new MyThreads(d2,"yuvraj");
        
        t1.start();
        
        t2.start();
    }
}
