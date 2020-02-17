package A1MultithreadingBasics;

/*

Importance of Thread class start() method.
================================================================================

1. Thread class start method is responsible to register the thread we create with 
   the thread Scheduler and do all other mandatory activities. 

2. Hence without executing  thread class start() method there is no chance of starting 
   a new thread in java. Due to this thread class start method is considered as heart of    
   multithreading.

   
3. After calling the start() method only a thread object created actually becomes a thread getting 
   registered with the thread scheduler and waiting for its turn to execute.

4. After calling start() method only life cycle of the thread is started, or else it will remain 
   in newborn state only.

    start()
    {

        1. Register this thread with the thread scheduler.

        2. Perform all other mandatory activities.

        3. Invoke run() method.

    }



}

*/

//----------------------------------------------------------------------**************---------------------------------------------------

