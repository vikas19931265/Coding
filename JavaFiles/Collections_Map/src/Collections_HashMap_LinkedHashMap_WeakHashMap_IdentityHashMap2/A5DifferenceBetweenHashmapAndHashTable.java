  package Collections_HashMap_LinkedHashMap_WeakHashMap_IdentityHashMap2;

/* Differences between HashMap and Hashtable
==============================================================================================

    HashMap                                   HashTable

1. Every method present in HashMap is         Every method present in Hashtable is synchronized.   
   not synchronized.


2. At a time multiple threads are allowed to  At a time only one thread is allowed to operate on hashtable     
   operate on a single HashMap object and      and hence it is thread safe  
   hence it is not thread safe.


3. Relatively performance is high because      Relatively performance is low because threads are required
  threads are not required to wait to operate  to wait to operate on Hashtable object.
upon a Hashmap object.


4. null is allowed for both the key and value  Null is not allowed for keys and values otherwise
   pairs                                       we will Null pointer Exception. 


5. This was introduced in 1.2 version and it   This was introduced in 1.0 version and it is legacy. 
   is not legacy.



How to get Synchronized version of HashMap object??
==============================================================


        HashMap m = new HashMap();

        Map m1   = Collections.synchoronizedMap(m);

        m1 is synchoronized

        and m is non synchronized.

By default Hashmap is non Synchronized in nature. But we can get Synchronized version of HashMap
by using synchronizedMap() method of Collections class.


*/

//--------------------------------------------------------*************************************------------------------------------------------