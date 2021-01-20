package A3InterThreadCommunication;

/*
Inter thread communication.
=================================================================

2 threads can communicate with each other by using  wait(), notify() and notifyAll() methods. The thread
which is expecting update  is responsible to call wait() method then immediately the thread will enter
into the waiting state.

The thread which is responsible to perform update , after performing the update it is responsible to call notify
method then the waiting thread will get the notification and continue with its execution with those updated items.


wait() , notify(), notifyAll() methods are present in object class but not in thread class because thread can call these
methods on any java object.


To call wait() , notify()  or notifyAll() methods on any object , thread should be owner of that particular object.
That is the thread should have lock of that object that is the thread should be inside synchronized area only.

Hence we can call wait, notify and notifyAlll methods only from synchronized area otherwise we will get the run time exception saying
IllegalMonitorStateException.


If a thread calls wait() method on any object , then it will immediately releases the lock of that particular object and enter
into waiting state.

If a thread calls notify() method on any object. It releases the lock of that object but may not  immediately.

Except wait(), notify() and notifyAll() there is no other method  where thread will release the lock.



Method                                          does thread release the lock.?

yield()                                             no

join()                                              no
    
sleep()                                             no            

wait()                                              yes    

notify()                                            yes    

notifyAll()                                         yes        




Which of the following is valid??

1. If a thread calls wait method , immediately it will enter into the waiting state without
   releasing the lock. (invalid)

2. If a thread calls wait method, it releases the lock of that object but may not immediately
   ( invalid)

3.If a thread calls wait method on any object it releases all locks acquired by that thread and
  immediately enter into the waiting state. (invalid).

4. If a thread calls wait method on any object it immediately releases the lock of that particular 
   object and enter into the waiting state. (valid)

5. If a thread calls notify() method on any object it immediately releases the lock of that particular
   object( invalid)

6. If a thread calls notify() method on any object it releases the lock of that object but may not immediately.
    
    

*/
