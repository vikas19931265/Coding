/*
ConcurrentHashMap
----------------------------------------------------------

1. Underline data structure of ConcurrentHashMap is Hashtable.

2. ConcurrentHashMap allows Concurrent read and Thread safe update operations.

3. In case of ConcurrentHashMap to perform read operations , thread does not require any kind of lock.
   But to perform any update operation it requires lock but the lock is of only particular part of Map
   (Bucket level Lock).

4. In normal Hashmap if we are performing any kind of read operation also then we need to acquire full object lock.
   This will reduce the performance.

5. In normal Hashmap if we want to perform update operation then also we need full object lock. This also 
   decreases the performance. But in the case of ConcurrentHashMap locking concept is different.

6. Here in case of ConcurrentHashMap full object is not locked for making an update operation. For making update
   operation complete object is divided into the smaller portions which is defined by the Concurrency level.
   Concurrency level will decide the number of threads which can execute on the particular object.

7. The Default Concurrency level is of 16.

8. ConcurentHashMap by default allows simultaneous Read Operations and simultaneous 16 write operations.

9. Null is not allowed for both Keys and values.

10. While one thread is iterating the other thread can perform update operations and ConcurrentHashMap never throws ConcurrentModificationException.



How locking is done in ConcurrentHashMap?
-------------------------------------------------------------


1. As we know in ConcurrentHashMap elements are stored based on hashing in buckets.

2. Default capacity of the ConcurrentHashmap is 16.

3. So when we create a default ConcurrentHashMap then a ConcurrentHashMap object is created with default initial capacity of 
   16.

6. Now in the case of Hashmap depending upon the Concurrency level number of thread allowed to execute on object is 
   decided.

7. So if the Concurrently level is 16 then on each bucket a thread is allowed to execute hence in total 16 buckets
   can execute on the object instead of 1 in the case of the HashMap.

8. Concurrency level is the number of the threads which are allowed to execute. This number can be changed and given as
   a parameter in the constructor.

9. If the concurrency level is 32 then each bucket will be divided into 2 portions and 2 threads will be allowed to 
   execute on a single bucket. But mostly concurrency level and initial capacity remains the same.

10. In this way instead of getting lock on full object, ConccurentHashMap gets the lock on the portion of objects that is buckets
    hence number of threads can execute on a single object at a time improving the performance.


*/


//-----------------------------------------------------------------***************************-------------------------------------------------------