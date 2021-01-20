package A1Locks;

/*

Lock interface.
-------------------------

1. Lock object is similar to implicit lock acquired by a thread to execute synchronized method
   or synchronized block.

2. Lock implementations provides more extensive operations then in comparison traditional implicit locks.



important methods of Lock interface
------------------------------------------------

1. void lock()

        We can use this method to acquire a lock. If the lock is already available then 
immediately the current thread will get the lock. If the lock is not already available then
it will wait until getting the lock. This is exactly similar in behaviour to traditional 
synchronized keyword.


2. boolean tryLock()-> try without waiting.

           To acquire the lock without waiting. If the lock is available then the thread will
acquire that lock and returns true. If the lock is not available then this method  will return
false and can continue its executing without waiting.

            In this case thread will never go into the waiting state.


if(l.tryLock())

    {
        perform safe operations
    }

else
    {
        perform alternative operations
    }    



3. boolean tryLock(long time Timeunit unit)

    If the lock is available then the thread will get the lock and continue with its execution. If the 
lock is not available the the thread will wait until specified amount of time. Still if the lock
is not available then thread can continue with its execution.

        
    TimeUnit is an enum ( group of constants) present in java.util.concurrent package.

        enum TimeUnit
        {
            NANOSECONDS,
            MICROSECONDS,
            MILLISECONDS,
            SECONDS,
            MINUTES,
            HOURS,
            DAYS,
        }    

example
            if(l.tryLock(1000, Timunit.MILLISECONDS))
            {
            
            }


4. void lockInterruptibly()--->(Acquire the lock unless the current Thread is interrupted).

acquires the lock if it is available and reuturn immediately. If the lock is not available
then it will wait. While waiting if the thread is interrupted then thread wont get the lock
                



5. void unlock()

        To release the lock


note

    To call unlock() method compulsory , current thread should be owner of the lock otherwise we will 
get RuntimeException saying IllegalMonitorStateException





*/

//----------------------------------------------------------------*****************************--------------------------------------------