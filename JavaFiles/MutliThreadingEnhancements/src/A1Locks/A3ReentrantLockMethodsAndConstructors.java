package A1Locks;

/*

ReentrantLock( implementation class of lock interface)
------------------------------------------------------------


1. It is the implementation class of lock interface and it is the direct child class of Object.

2. Reentrant means a thread can acquire same lock multiple times without having any issue. 

3. Internally Reentrant lock increments threads personal count whenever we are calling lock() method,
  and decrements count value whenever thread calls unlock() method and lock  will be released 
  whenever count reaches 0.



Constructors in ReentrantLock
--------------------------------------

1. RenentrantLock l = new ReentrantLock(); // not sure which thread will get the lock

        This will create an instance of ReentrantLock.

2. ReentrantLock l = new ReentrantLock(boolean fairness);

        This will create an reentrant lock with the given fairness policy. If the fairness
is true then the longest waiting thread can acquire lock if it is available that is follows
first come first serve policy.

    If the fairness is false then which waiting thread will get the chance to execute 
we cannot expect.

    By default the value for fairness is false.



Which of the following declarations are equal.
----------------------------------------------------------------------


1. ReentrantLock l = new ReentrantLock();

2. ReentrantLock l = new ReentrantLock(true);

3. ReentranntLock l = new ReentrantLock(false);


1st and 3rd are equal.


Important methods of Reentrant lock.
----------------------------------------

1. void lock()

2. boolean tryLock();

3. boolean tryLock(long l , Timeunit t);

4. void lockInterruptibility()

5. void unlock();


-----remaining methods------------

1. int getHoldCount()

        This will return number of hold on the lock by the current thread.

2. boolean isHeldByCurrentThread()

        Returns true if and only if lock is held by the current thread.

3. int getQueueLength()

       Returns number of threads waiting for the lock.

4. Collection getQueuedThreads()

     Returns a collection of threads which are waiting to get the lock.

5. boolean hasQueuedThreads()

      Returns true if there is any waiting thread to get the lock.

6.boolean isLocked()

    Returns true if the lock is acquired by some thread.

7. boolean ifFair()

    Returns true if the fareness policy is set with the true value.

8. Thread getOWner()

    Returns the thread which acquires the lock.


*/

//---------------------------------------------------------------------*********************--------------------------------------