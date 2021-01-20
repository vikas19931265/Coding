/*

Write a program to display all active thread names belonging to system group and its child group.

*/
package A2ThreadGroup;


class ThreadGroupDemo4
{
    
    public static void main(String[] args)
    {
        
        ThreadGroup system = Thread.currentThread().getThreadGroup().getParent(); // This will give us the System object.
        
        Thread[] t = new Thread[system.activeCount()];
        
        ThreadGroup g = new ThreadGroup("t1");//This thread group belongs to main
        
        Thread t5 = new Thread(g,"thread1");// We added this thread group to "g" but while iterating over threads in group
                                            // using enumerate(Thread[] t) threads inside it wont be visible.
        system.enumerate(t); // This will transfer all threads in system group into thread array
    
        for(Thread t1: t)
        {
            
            System.out.println(t1.getName()+"..."+ t1.isDaemon());
        }
    
    
    }
}


/*
run:
Reference Handler...true
Finalizer...true
Signal Dispatcher...true
main...false
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-------------------------------------------------------------****************************----------------------------------------------------