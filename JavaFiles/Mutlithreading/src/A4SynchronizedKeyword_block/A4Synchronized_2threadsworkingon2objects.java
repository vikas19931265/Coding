
/*

If 2 threads are accessing 2 different object that is calling wish() method in this case,
then both the threads will be executed immediately and we will get the irregular output.

*/

package A4SynchronizedKeyword_block;


 class SynchDemo  {
    
     public synchronized void wish(String name) // which ever thread (1 or 2) gets the chance to execute this method
                                                // first will get the lock and no other thread can access this method on the
                                                // same object until thread having lock finishes execution and releases the lock.
     {
         for(int i=0;i<5;i++)
         {
             
             System.out.print("Good Morning ");
             
            
             
             try
             {
                 
                 Thread.sleep(3000);
             }
         
             catch(InterruptedException e)
             {
                 
                 
             }
         
             
             System.out.print(name);
             
             System.out.println();
         
         }
         
     }
 
 }




class MyThreads1 extends Thread
{
     SynchDemo c;
     String name;
    
    MyThreads1(SynchDemo c,String name)
    {
        
        this.c=c;
        this.name=name;
        
    }
    
    public void run()
    {
        
        c.wish(name); // thread 1 and thread 2 , both of then are accessing wish method on same object
                      // c.
        
        
        
    }
    
    

    public static void main(String[] args)
    {
        
        SynchDemo c = new SynchDemo();
        
        MyThreads1 t1= new MyThreads1(c,"vikas");
        
        
                
        
        /*
        
        SynchDemo c1 = new SynchDemo();
        
        MyThreads1 t2= new MyThreads1(c1,"Gautam");
        
        1. If we create another object c1 and pass it as argument to thread2.
        
        2. In this case we will have two threads , t1 and t2. t1 is calling wish method
           on c object and , t2 is calling wish method on c2 object. Hence both threads
           are independent on one another working on separate object , hence they can 
           execute simultaneously.
        
        3. However if we make both the threads to call wish method on single object , where
           wish method is synchronized then in that case only one thread can access the method 
           at a time. This will give us regular output.
        
        
        If we have 2 threads working on 2 object then we will get irregular output
        
        something like this.
        
                run:
        Good Morning Good Morning vikasGautam
        Good Morning 
        Good Morning Gautam
        Good Morning vikas
        Good Morning Gautam
        Good Morning vikas
        Good Morning Gautam
        Good Morning vikas
        Good Morning Gautam
        vikas
        BUILD SUCCESSFUL (total time: 15 seconds)

        
        
        
        */
        
        
        
   t1.start();
        
        
       
        
    }

}
