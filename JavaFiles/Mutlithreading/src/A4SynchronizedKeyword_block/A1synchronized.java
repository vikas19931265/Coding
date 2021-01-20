package A4SynchronizedKeyword_block;

/* What is synchronized.
===========================================================



1. Synchronized is the modifier which is applicable only for the methods and blocks but not for classes and variables.


2. If multiple threads are trying to operate simultaneously on the same java object then there may be a chance of data 
   inconsistency problem.


3. To over come this kind of problem we should go for Synchronized keyword.


4. If a method or a block is declared as synchronized then at a time only one thread is allowed to execute that method or block on the 
   given object so that data inconsistency problem will be resolved.


5. The main advantage of the synchronized keyword is that we can resolve data inconsistency problems
   But the main disadvantage of synchronized keyword is that it increases waiting time of the threads and creates
   performance problems , hence if there is no specific requirement then it is not recommended to use synchronized keyword.




Internally synchronization concept is implemented by using lock. Every object in java has a unique lock. Whenever we are using
synchronized keyword then only lock concept is will come into the picture.

If a thread wants to execute synchronized method on the given object then first it has to get lock of that object.
Once thread gets the lock then it is allowed to execute any synchronized method on that object.

Once method execution completes , automatically thread will release the lock.

Acquiring and releasing of the lock is internally taken care by the JVM and the programmer is not responsible for this activity.



While a thread is executing synchronized method on the given object the remaining threads are not allowed to execute any synchronized method
simultaneously on the same object. But remaining threads are allowed to execute non synchronized methods simultaneously.



example

            class x          t1 has taken lock(x) on class x objects
            {

                synchronized m1(){}
                synchronized m2(){}
                m3(){}
            }


       t1-------acquires lock on object.

       t2 trying to access m1() method will go into waiting state.

       t3 trying to access m2() method will go into waiting state

       t4 trying to access m3() method will get chance immediately as  m3() is non synchronize method.





lock concept is implemented based on the objects but not based upon the methods.


*/