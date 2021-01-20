package cInnerClass;

/*

Defining a thread by extending Thread class.
===============================================================================

Normal Class Approach/ Anonymous inner class approach.


In this case child thread (MY Thread class) is accessible at the top level.
This class object's can be accessed all the time. In this program this thread
was called by the main thread. This thread can also be called from other part of
program as well.

But in the case of anonymous inner class. The inner class is encapsulated to 
the outer class . This inner class that is child thread can only be accessed inside 
the class and it is only for one time use. It has no other use hence we make it as 
anonymous.

*/


class MyThread extends Thread
{
    
    public void run() // JOB of Thread
    {
        for(int i =0;i<10;i++)
        {
            System.out.println("Child thread");
        }
    }
}


public class ThreadDemo
{
    public static void main(String[] args)
    {
        
        MyThread t = new MyThread();
        
        t.start();
    
        for(int i =0;i<10;i++)
        {
            System.out.println("Main thread");
        }
        
        
    }
}
/*
debug:
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
BUILD SUCCESSFUL (total time: 0 seconds)

*/
