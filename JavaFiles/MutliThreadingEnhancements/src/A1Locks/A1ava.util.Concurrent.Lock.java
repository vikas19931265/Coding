package A1Locks;

/*
java.util.Concurrent.locks.* package.
-------------------------------------

The problems with Traditional synchronized keyword...
------------------------------------------------------

1. We are not having any flexibility to try for a lock without waiting.

2. There is no way to specify maximum waiting time for a thread to get the lock so 
   that thread will wait until getting the lock which may create performance problems 
   and may cause deadlock.


3. If a thread releases the lock then which waiting thread will get the lock , we are not
   having any control on this.


4. There is no API to list out all waiting threads for a lock.

5. The synchronized keyword  compulsory we have to use either at method level or  within the method
    (sync block) and it is not possible to use across various methods. Example if we need
    lock between m1() and m2() execution then its not possible using traditional multithreading.

6. To overcome these problems , SUN introduced introduced java.util.concurrent.locks package in 
   1.5 version.

7. It also provides several enhancements to the programmer to provide more control on concurrency.

*/


//--------------------------------------------------------------------***********************----------------------------------------------