
// ThreadGroup Demo program.

package A2ThreadGroup;


 class ThreadGroupDem extends Thread {
    

   ThreadGroupDem(ThreadGroup g, String name)
   {
       super(g, name); // we have to call thread class super constructor to register this thread with the respective group and name it.
   }
     
     
 public void run()
 {
     
     System.out.println("Child thread is running");
 }
 
 
 
 
 }



class Driver
{
    
    
    public static void main(String[] args)
    {
        
       ThreadGroup group1= new ThreadGroup("Thread group"); // Created a thread group object.
       
       ThreadGroupDem thread1= new ThreadGroupDem( group1 , "Thread1");// Created a new thread and we have put it inside the thread group.
       
       thread1.start();
      
       System.out.println(thread1.getThreadGroup().getName());// ThreadGroup
    
      
       System.out.println( group1.activeCount()); // it can be 0 or 1
    
      
      
       
       /*
       
    note
       
       output can be run:
Child thread is running
Thread group
0
BUILD SUCCESSFUL (total time: 0 seconds)

       or
 run:
Thread group
1
Child thread is running
BUILD SUCCESSFUL (total time: 0 seconds)

       
  It depends upon whether the child thread completes its run() method or not. If after
  printing "Child thread is running" control goes back to the main method then the active count
  of thread is still "1". But after printing if it comes out of the loop then thread completes successfully
  and the active count of thread in the group changes to 0.
       
       
    */
    
    }
}

//----------------------------------------------------------*************************************--------------------------------------------------------------