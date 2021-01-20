/*


                                System
                                /    
                               /     
                             main  
                             /   
                            / 
                      parent group
                      /     |       \
                     /      |         \
               child group  child   childThread2
                            thread1
                    

*/





package A2ThreadGroup;


 class MyThread extends Thread 
 
 {
    MyThread(ThreadGroup g, String name)
    {
        super(g, name);// to put a thread in thread group it is mandate to put this line.
    }
        
 public void run()
 {
     System.out.println("Child Thread");
     
     try
     {
         Thread.sleep(5000);
         System.out.println("Sleeping completed");
     }
 
     catch(InterruptedException e)
     {
         
     }
 
 
 }
    
 
 }

class ThreadGroupDemo3
{
    public static void main(String[] args)
    {
        
        ThreadGroup pg = new ThreadGroup("parent group"); // Created a thread group
        ThreadGroup cg= new ThreadGroup(pg, "Child group"); // Created another thread group
        
        MyThread t1= new MyThread(pg, "ChildThread1"); // created a thread . This thread will stay inside "thread group-pg" with name child thread1
        MyThread t2= new MyThread(pg, "ChildThread2");// created a thread . This thread will stay inside "thread group-pg" with name child thread2
        
        t1.start();// started both the threads. Now there are three threads in program, t1, t2 and main thread
        t2.start();// As the child threads are sleeping for 5 seconds, hence thread scheduler will keep switching between threads until all threads
                   // are completed
        
        System.out.println(pg.activeCount());// Still child threads are not done and , active count of threads inside thread group pg is 2
        
        System.out.println(pg.activeGroupCount());// total sub thread groups inside thread group pg is 1
        
        pg.list(); // This will list details of all threads and sub thread groups inside thread group pg
        
        
        try
        {
        
            Thread.sleep(10000);// We are forcing the main thread to sleep for 10 seconds. What this will do is that it make the 
                                // the scheduler to pick between thread t1 and t2 and they can complete within 10 seconds. Hence when this thread
                                // will wake by that time execution of child threads would have been completed.
        }
        
        catch(InterruptedException e)
        {
            
        }
    
        
        

        System.out.println(pg.activeCount());// After termination of child threads. Active child thread count is 0
        
        System.out.println(pg.activeGroupCount());// Sub thread group still exists and its count is 1.
        
        pg.list();
        
    }

}
/*
run:
Child Thread
Child Thread
2
1
java.lang.ThreadGroup[name=parent group,maxpri=10]
    Thread[ChildThread1,5,parent group]
    Thread[ChildThread2,5,parent group]
    java.lang.ThreadGroup[name=Child group,maxpri=10]
Sleeping completed
Sleeping completed
0
1
java.lang.ThreadGroup[name=parent group,maxpri=10]
    java.lang.ThreadGroup[name=Child group,maxpri=10]
BUILD SUCCESSFUL (total time: 10 seconds)

*/

//---------------------------------------------------------------*******************************--------------------------------------------