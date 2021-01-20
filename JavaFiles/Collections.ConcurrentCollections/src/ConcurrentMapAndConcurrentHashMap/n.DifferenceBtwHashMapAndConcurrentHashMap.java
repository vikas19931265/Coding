/*

Difference between HashMap And ConcurrentHashMap


HashMap                                                                 ConcurrentHashMap

1. HashMap is not Thread Safe                                           1.ConcurrentHashMap is thread safe.

2. Relatively peroformace is hight because threads                      2. By default 16 threads can operate on 
   are not required to wait to operate on HashMap                          ConcurrentHashMap object. If more threads 
   object.                                                                 are trying to access object then they have to 
                                                                           go in waiting state hence performace is little bit low. 


3. While one thread is iterating HashMap the other threads              3. While one thread iterating concurrentHashMap other threads    
   are not allowed to modify Map objects otherwise we will get             are allowed to modify map objects in thread safe manner and it      
   Runtime Exception saying ConcurrentModifcation exception.               will not throw ConcurrentModificationException.


4. Iterator of HashMap is fail-fast because as soon as any other        4. Iterator of HashMap if fail-safe because even if any other thread
   thread is trying to update hashmap object on which iterator             is trying to operate on object on which iterator is iterating then also we  
    is iterating then immediately the iterator will fail and throw         wont get ConcurrentModificationException. 
    ConcurrentModificationException.


5. null is allowed for both keys and values                             5. null is not allowed for both keys and values otherwise we will get null pointer 
                                                                          exception.

6. Introduced in 1.2 version                                           6. introduced in 1.5 version.
*/

//------------------------------------------------------------------******************************-------------------------------------------------