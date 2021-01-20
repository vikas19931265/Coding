package A2ThreadGroup;

/*

Thread Group(java.lang package)
-------------------------

1. Based upon the functionality we can group threads into a single unit which is nothing
   but ThreadGroup that is ThreadGroup contains a group of threads.

2. In addition to threads, ThreadGroup can also contain SubThread groups.


   -------------------------
    |                      |     
    |   t1   t2         t3 | 
        |    |          |  |  
    |                      | ----> thread group.
    |    ----------------  | 
    |    | t1   t2       | |      
    |     sub thread group | 
    |     -----------------|   
    -----------------------|

3. The main advantage of maintaining threads in form of thread group is that we can perform
   common operation on all  threads grouped  very easily.


4. Every thread in java belongs to some group. Main thread belong to main group.

5. Every thread group in java is the child group of System group either directly or indirectly.
   Hence System group acts as the root for all the Thread groups in java.

6. System group contains several system level threads like
    
    Finalizer
    Reference Handler
    Signal Dispatcher
    Attach Listener


                        System group
          |-----------------|---------------------|------------------|              
    main Thread group      Finalizer        Attach Listener     Signal Dispatcher      
          |  
          |
          |
       ---------------- --------------------  
       |               |                   | 
     main thread      Thread 0          sub thread group
                                           | 
                                       ---------    
                                      |        | 
                                     t1        t2 

  System.out.println(Thread.currentThread().getThreadGroup().getName());
        
 
 System.out.println(Thread.currentThread().getThreadGroup().getParent().getName());
                            |                    |                  |
                     main thread            main thread group   System     Parent thread group name(System)
                                                                thread
                                                                group                        


7. ThreadGroup is a java class present java.lang package and it is the direct child class of Object class.

                                Object
                                   |
                                ThreadGroup   

*/      


class ThreadGroupDemo
{
    
    public static void main(String[] args)
    {
        
        System.out.println(Thread.currentThread().getThreadGroup().getName()); //main
        
        System.out.println(Thread.currentThread().getThreadGroup().getParent().getName());//system
        
    }
}

/*
run:
main
system
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-------------------------------------------------------------*******************************-------------------------------------------

