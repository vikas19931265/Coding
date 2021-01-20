/*
Need for Concurrent Collections
------------------------------------------------------------------------------


1. Traditional collections objects like (ArrayList, HashMap etc) can be accessed by multiple Thread
   Objects simultaneously  and hence there may be a chance of Data inconsistency problem to occurs. 
   Hence they are not thread safe.

2. Already existing Thread Safe Collections( Vector, Hashtable, SynchronizedLIst(), SynchrnoizedMap(),
   SynchronizedSet() performance wise are not up to mark because for every operation like even for the 
   read operation also , total collection object will be blocked and cannot be accessed by any other thread.
   This will increase the waiting time of the threads.


3. The biggest problem with the Traditional Collections is that while one Thread is Iterating Collection
   the other threads are not allowed  to modify the collection Object simultaneously. If we are trying to 
   modify then we will get ConcurrentModificationException.


4. Hence these Traditional Collection objects are not suitable for Scalable Multi Threaded applications that is     
   application where we have 100's of threads in app.



5. To overcome this problem SUN introduced Concurrent Collections in 1.5 version.


Advantages of Concurrent Collections
-------------------------------------------------------------------------

1. Concurrent Collections are always Thread Safe.

2. When compared to Traditional Thread safe collections (Vector, Hashtable) Collections performance is much
   better because it has different locking mechanisms.

3. Biggest advantage is that , while one thread is iterating collection object. The other threads are allowed 
   to modify Collections in the safe manner and we will not get ConcurrentModifictionException.




Traditional Collections                                     Concurrent Collections


1. Not Thread Safe                                          1. Thread safe

2. performance wise low.                                    2. Performance wise good

3. While one thread is iterating over object                3. While one thread is iterating over object
   no thread is allowed to perform any modification             other threads can modify the collection object
   on the collection object.                                   in the safe manner.


*/

//-----------------------------------------------------------*************************************---------------------------------
