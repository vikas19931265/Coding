package A1MultithreadingBasics;

/*

 Thread Scheduler
 ===================================================

1. Thread scheduler in java is the part of the JVM that decides which thread should run.


2. It is responsible to schedule threads that is if multiple threads are waiting
   to get the chance of execution then in which order threads will be executed is
   decided by thread scheduler.


3. We cannot expect exact algorithm followed the thread scheduler. It is varied from
   JVM to JVM. Hence we cannot expect thread execution order and the exact output in every machine.

4. Hence whenever situation comes to multithreading then there is no guarantee for the
   exact output. We can get several possible outputs depending on which thread is chosen by the thread 
   scheduler to execute.


5. The thread scheduler mainly uses preemptive or time slicing scheduling to schedule the threads.


From the last program below are the possible results.


possibility 1.

main Thread( 10 times)
child Thread( 10 times)


possibility 2.

Child Thread(10 times)
Main Thread(10 Times)


possibility 3.

Main Thread 
Child Thread
Main Thread
Child Thread....


possibility 4.

Child Thread
Main Thread
Child Thread......

*/

//----------------------------------------------------------------------**************---------------------------------------------------