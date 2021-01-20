/*

CopyOnWriteArrayList


                    Collection(Interface)
                        |
                    List(Interface)
                        |
                    CopyOnWriteArrayList        




1. CopyOnWriteArrayList is the thread safe version of ArrayList.

2. As the name indicates CopyOnWriteArrayList will create cloned copy of underlying array list
   for each and every update operation.

3. For read operation no cloned copy will be created . All threads can access the object simultaneously,
   however for write operation duplicate copies of object will be created on which operation will be performed.
   At the later stage all these changes will be merged by the JVM internally.

4. As update operation will be performed on cloned copy hence there is no effect for the threads which perform
   the read operation.

5. Please note that CopyOnWrite is costly to use because for every update operation a cloned copy will be created 
    which can affect the performance hence CopyOnWriteArrayList is the best choice if there are several read
   operations. If number of write operations are more then CopyOnWriteArayList is not a good choice.


6. CopyOnArrayList has most of its characteristics similar to ArrayList like as given below.

7. In CopyOnArrayList insertion order is preserved.

8. In CopyOnArrayList duplicate objects are allowed to be inserted.

9. Heterogeneous objects insertion is allowed in CopyOnArrayList.

10. null insertion is possible CopyOnArrayList.

11. CopyOnArrayList implements Serializable, Cloneable and RandomAccess interfaces.


How is CopyOnArrayList different from ArrayList.

1. While one thread is iterating on CopyOnArrayList, other threads are allowed to make modification to the object
   and we will not get ConcurrentModificationException. That is iterator is fail safe. But in the case of ArrayList
   iterator is fail-fast.


2. Iterator of ArrayList can perform remove operation while iterating. But the iterator of CopyOnWriteArryList
   cant perform remove operation while iterating , if it tries to do so then we will get UnsupportedOperationException.


*/

//--------------------------------------------------------------*****************************---------------------------------------------------