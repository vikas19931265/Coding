/* Inter Thread communication program  */

package A3InterThreadCommunication;


class Demo extends Thread{
    
    public  void  m1()
    {
        
        synchronized(this)
        
        {
            
        
        for (int i=0;i<=5;i++)
        {
            
            System.out.println("Child Thread"+i);
            
            try
            {
                Thread.sleep(2000);
                
            }
            
            catch(InterruptedException e)
             
            {
                
                
            }
        
        
        }
        
        this.notify();
    
       }   
        
     }

    public void run()
    {
        
        m1();
        
       
    }
    

}


class Driver
{
    
   public static void main(String[] args) throws InterruptedException
   {
       Demo d = new Demo();
       
       d.start();
       
      synchronized(d)
      {
       
       d.wait();
       
      } 
       for(int i=0;i<=5;i++)
       {
           System.out.println("Driver Thread"+i);
           
       }
   }
    
    
}


/*

note 

even if a method is synchroinzed, if we are calling the sleep method on the current thread then
any waiting thread will get the chance to execute.

In the above program to stop this we have used interthread communication.


order of execution of above program

1. Two threads exist in the prgoram, one is the main thread and the other one is the child thread.

2. Thread scheduler has to pick up which thread should be executed first as both of them have the 
   same priority that is 5.

3. If the main thread is picked first

i) synchronized(d)

    main thread obtains lock of the object of thread type and calls wait method on the thread
    hence main thread goes into the waiting state allowing the child thread to start executing.

ii) control goes to the run() method of the child thread. This run method is currently accessed by only
   one child thread.

iii) inside the run() method ,  m1() method is called. Hence the control now goes to the m1() method.

iv) inside m1() method we have synchroinzed block having the lock of current thread. Its aim is to print number
    and sleep in between.

v) As soon as the thread will go to the sleep other waiting thread that is the main thread will start to execute.
   But main thread is in the waiting state after calling wait method and need a notification to resume.

vi) After printing number , child thread gives the notification to the parent thread.

vi) Hence child printig will be done first and then the driver thread elements will be printed.


run:
Child Thread0
Child Thread1
Child Thread2
Child Thread3
Child Thread4
Child Thread5
Driver Thread0
Driver Thread1
Driver Thread2
Driver Thread3
Driver Thread4
Driver Thread5
BUILD SUCCESSFUL (total time: 12 seconds)


4. If child thread is picked first.

i) in the case child thread will begin the execution first on the current object, and then 
   will sleep in between as well.

ii) As soon as thread goes to sleep main thread will get the chance to execute.

iii) But the main method calls wait() method on the current thread hence it will go to the waiting state
    and let the child thread execute and wait for the notification to be given to it in order to resume.


iii) inside the run() method ,  m1() method is called. Hence the control now goes to the m1() method.


run:
Child Thread0
Child Thread1
Child Thread2
Child Thread3
Child Thread4
Child Thread5
Driver Thread0
Driver Thread1
Driver Thread2
Driver Thread3
Driver Thread4
Driver Thread5
BUILD SUCCESSFUL (total time: 12 seconds)




*/