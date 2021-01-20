/* Difference between ArrayList and Vector??




    ArrayList                                     Vector              

1. Every  method present in the                Every method present in the Vector  
   arrayList is non Synchronized               is Synchroized.


2. At a time multiple threads are              At a time only one thread is allowed to operate 
   allowed on ArrayList object and hence       on Vector object and hence it is thread safe. 
   it is not thread safe.
        


3. Relatively performance is high because       Relatively performace is low because threads are required
   threads are not required to wait to operate  to wait to operate on Vector objects.
   on ArrayList object.



4. ArrayList was introduced in 1.2 version.     Introduced in 1.0 version and it is legacy class.    
   and it is non legacy class.


*/

