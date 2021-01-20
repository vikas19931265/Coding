
package test;


 class Thread1  {
    

     public synchronized void m1(Thread2 t2) // this method called by main thread. main thread has lock 
                                   // for thread1 object.
     {
         
        System.out.println("main thread executor");
           
       
         try
         {
             
             Thread.sleep(2000); // by doing this we are forcing the other child thread also to execute
                                 // synchrnoized method
             
               t2.m2(); // main thread calling m2() method of thread2. But lock for m2() method of Thread2 class 
                 // is already held by child thread hence main thread goes into the waitings state.
                                 
         }
         
         catch (InterruptedException e)
                 {
                     
                     
                 }
         
         
        
        
         
        
     
     
     }
  
 
 
 
 }



class Thread2 
{
     
    public synchronized  void m2(Thread t1)
    {
         
        System.out.println("Child Thread executor");
        
        try
         {
             
             Thread.sleep(2000); // by doing this we are forcing the other child thread also to execute
                                 // synchrnoized method
             
             
              t1.m1();                    
         
         
         }
         
         catch (InterruptedException e)
                 {
                     
                     
                 }
       
        
       
        
       
        
        
    }



 




}


class MainDriverThread extends Thread
{

    
        
    Thread2 t2= new Thread2();
           
        
    Thread1 t1= new Thread1(); // This will be run by main Thread
    
    
    
    public void run()
    {
      
        
        t2.m2(t1);
        
    }
    
    
    public static void main(String[] args)
    {
    

    
    MainDriverThread t = new MainDriverThread();
    
    t.start(); // Now another thread will be started. So 2 threads in program.
    
   
    
    }
    
    
}


/*

Order of execution

1. I created 2 threads firstly , thread 1 and thread 2.

2. Created the objects of both the threads and started them simultanously. Order of picking will be done by the 
   Scheduler.

3. If thread1 gets the chance , then it executes the run() method, and in the run method we are calling m1() method
   which is synchronized in nature hence Thread1 gets the lock of m1() method.

4. Similarly thread2 gets the lock of m2() method.

5. Now Thread1  is trying to execute m2() method of thread2. But since the object is locked under thread2 therefore
   thread1 goes into the waiting state.

6. Similarly thread2 having lock of m2() method. But it is also trying to call m1() method of Thread1 hence this also goes 
   into the waiting state.

7. Hence both the threads goes into the waiting state , waiting for each other to release the resouce.


*/