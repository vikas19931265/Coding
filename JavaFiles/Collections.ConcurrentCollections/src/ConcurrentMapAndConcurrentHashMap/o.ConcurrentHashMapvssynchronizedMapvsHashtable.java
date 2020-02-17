/*

Difference between ConcurrentHashMap, synchronizedMap() and Hashtable.


ConcurrentHashMap
--------------------------------

1. We will get Thread safety without locking total map object which can reduce the performance using 
   bucket level locking, instead locking will be done at bucket level in which by default 16 threads can access
   the object.


2. At a time multiple threads are allowed to operate on the Map object in the safe manner.

3. For read operation no lock is taken but for write operation locking is done at the bucket level.

4. While one thread is iterating map object, other threads are allowed to modify map and we wont get
   ConcurrentModificationException.

5. Iterator of ConcurrentHashMap is fail-safe and will not raise ConcurrentModificationException.


6. null is allowed for both keys and values.

7. Introduced in 1.5 version.




synchronizedMap()
---------------------------------


1. We will get Thread safety , but we have to lock the complete object.

2. At a time only one thread is allowed to perform any update operation on the map object.

3. Every read and write operation require total map object lock.

4. While one thread is iterating map object, other threads are not allowed to modify map object
   otherwise we will get ConcurrentModificationException.

5. Iterator of synchronizedmap is Fail-Fast and it will rasie ConcurrentModificationException.

6. null is allowed for both keys and values.

7. Introduced in 1.2 version.



Hashtable
-----------------------------------------------

1. We will get Thread safety , but we have to lock the complete object.

2. At a time only one thread is allowed to perform any update operation on the map object.

3. Every read and write operation require total map object lock.

4. While one thread is iterating map object, other threads are not allowed to modify map object
   otherwise we will get ConcurrentModificationException.

5. Iterator of synchronizedmap is Fail-Fast and it will rasie ConcurrentModificationException.

6. null is not allowed for both keys and values.

7. Introduced in 1.0 version as part of the legacy classes.

*/

//-------------------------------------------------------------*******************************-------------------------------------------------