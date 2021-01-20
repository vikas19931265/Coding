/*

Important methods of ThreadGroup class.
--------------------------------------------

1. String getName()

        This will return name of the thread group.

2. int getMaxPriority()

       This will return max priority of thread group.

3. void setMaxpriority(int p)

       This will set maximum priority of the Thread group. The default max priority
       is 10. This puts a condition on the allowed set of threads inside the group.
       Only those threads will be allowed with priority = p or less then p

       Threads in thread group that already have higher priority will not be affected. But
       for newly added threads this max priority is applicable.



4. ThreadGroup getParent()

        This will return parent group of the current thread.


5. void list()

    It prints  information about the thread group to the console.

6. int activeCount()

    This will return number of active threads present inside the thread group.

7. int activeGroupCount()

    This will return number of active groups present in the current thread group.

8. int enumerate(Thread[] t)


    This will copy all active threads of this thread group into provided thread array.
In this case sub thread group threads also will be considered.


9. int enumerate(ThreadGroup[] g)

    This will copy all active threads along with subthread groups into ThreadGroup array.


10. boolean isDaemon()

    To check whether ThreadGroup is Daemon or not.

11. void setDaemon(boolean b)

   To change daemon nature of thread group.

12. void interrupt()

    To interrupt all waiting or sleeping threads  present inside the thread group.

13. void destroy()

    To destroy thread groups and it sub thread groups.



     */
package A2ThreadGroup;


class ThreadGroupDemo2
{
    
    public static void main(String[] arsg)
    {
        
        ThreadGroup g1= new ThreadGroup("tg"); // created new thread group
        
        Thread t1 = new Thread( g1, "Thread1"); // Added thread to thread group g1
        
        Thread t2= new Thread(g1 ,"Thread2" );
        
        g1.setMaxPriority(3);
        
        /*
        
        Here we set the max priority of group as 3 so threads with priority 3 or less then it
        only are allowed. If a thread enters with default thread priority value of 5 then it value
        will get changed to 3 and will be stored inside the thread group.
        
        For the remaining threads which were already present with default value of 5 before 
        changing the priority value of thread group will remain as it is.
        
        
        
        --------------
        | t1(p=5)   |
        | t2(p=5)   |
        | t3(p=3    |
        |------------
        
            tg
        
       max priority=3
        
        */
   
    
        Thread t3= new Thread(g1, "Thread3");
        
        System.out.println(t1.getPriority()); //5
        
        System.out.println(t2.getPriority());//5
        
        System.out.println(t3.getPriority());//3
    
    }
}

/*
debug:
5
5
3
BUILD SUCCESSFUL (total time: 0 seconds)
 
*/
//-------------------------------------------------------**************************************---------------------------------------
