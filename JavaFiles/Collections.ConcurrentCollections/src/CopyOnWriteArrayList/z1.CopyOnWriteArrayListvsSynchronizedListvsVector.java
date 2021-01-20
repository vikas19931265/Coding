/*

Differences between CopyOnWriteArrayList. sychronizedList and Vector


CopyOnWriteArrayList
---------------------------
1. We will get thread safety because every update operation will be performed on 
   separate clone copy.

2. At at time multiple threads are allowed to to access/operate on CopyOnWriteArrayList.

3. While one thread is iterating list object, the other threads are allowed to modify 
   CopyOnArrayList object and we will not get any ConcurrentModificationException.

4. Iterator is Fail-Safe and wont raise ConcurrentModification exception.

5. Iterator cannot perform remove operation otherwise we will get UnsupportedOperationException.

6. Introduced in 1.5 version.


SynchronizedList()
----------------------------

1.We will get Thread safety because at a time list can be accessed by only one thread at a 
time

2. At a time only one thread is allowed to perform any operation on the list object.

3. While one thread is iterating, the other threads are not allowed to modify list.Otherwise
   we will get ConcurrentModificationException.

4.Iterator is fail-fast and it will raise ConcurrentModificationException.

5. Iterator can perform remove operation.

6. Introduced in 1.2 version.


Vector
-------------------



1.We will get Thread safety because at a time only one thread is allowed to acces vector object.

2. At a time only one thread is allowed to perform any operation on the Vector object.

3. While one thread is iterating, the other threads are not allowed to modify Vector. Otherwise
   we will get ConcurrentModificationException.

4.Iterator is fail-fast and it will raise ConcurrentModificationException.

5. Iterator can perform remove operation.

6. Introduced in 1.0 version.


*/

//-----------------------------------------------------------**************************************----------------------------------------