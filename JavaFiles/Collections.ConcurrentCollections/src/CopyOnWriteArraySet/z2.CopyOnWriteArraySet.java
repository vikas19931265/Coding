/*
CopyOnWriteArraySet

                    Collection(interface)
                            |
                            Set
                            |
                   CopyOnWriteArraySet             


1.It is thread safe version of Set.

2. This is internally based on same concept as in CopyOnWriteArrayList.

3. Since it is part of Set hence duplicate elements are not allowed to be inserted.

4. Insertion order is preserved and heterogenous elements are allowed----> based on CopyOnWriteArrayList

5.Multiple threads can perofrm read operations smultaneously but for write operations 
  a separte cloned copy of the object will be created. Hence if there are multiple update
  operations then CopyOnWriteArraySet is not recommanded.

6. While one thread is iteratnig set, other threads are allowed to modify set and we will not
   get ConcurrentModificationException.

7.Iterator of CopyOnWriteArraySet can perform only read operation and will not be able to perform any
  remove operation. If we try so then we will get UnsupportedOperationException.



*/


//------------------------------------------------------------******************************-------------------------------------------------