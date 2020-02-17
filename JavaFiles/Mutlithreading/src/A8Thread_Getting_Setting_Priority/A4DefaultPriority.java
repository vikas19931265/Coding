/*
Default Priority.
===============================

1. The Default priority only for the main thread is 5. But for all the remaining threads
   default priority will be inherited from the parent to the child.


2. Whatever priority parent Thread has , the same priority will also be given to the Child 
   Thread.

3. Do not confuse between parent class and parent Thread.

    for MyThread t = new MyThread() 

   Here the parent class of this Thread is "Thread"
   But the parent thread of this thread is "main thread".


4. If we comment the line in which we are setting thread priority here then child thread priority will be 
   5.


                                        MyThread t = new MyThread
                                                |
               -------------------------------- --------------------------                                
               |                                                          |  
        Thread is parent class                                         main() thread is parent thread. 
*/

package A8Thread_Getting_Setting_Priority;


class MyThread extends Thread {
    
    
}


class Test
{
    public static void main(String[] args)
    {
        
        System.out.println(Thread.currentThread().getPriority()); //5->  This will print priority of currently executing Thread( main thread)
        
        Thread.currentThread().setPriority(7);// We are changing the priority of main thread.
        
        MyThread t = new MyThread(); // Created new thread whose parent thread i.e thread under which it is created (main thread).
                                     // Here Child thread will get the same priority as the parent thread( main thread---7 ) is having.       
        
        System.out.println(t.getPriority()); //7--> get the priority(7) of the thread to check it. This priority is inherited from the parent thread.
        
    }
    
    
}


/*
run:
5
7
BUILD SUCCESSFUL (total time: 0 seconds)



*/

//----------------------------------------------------------------------**************---------------------------------------------------