/* ThreadLocal
---------------------------------------

FOR EVERY THREAD WE CAN KEEP A SEPARATE VALUE USING THREADLOCAL

1. ThreadLocal class provides thread local variables.

2. ThreadLocal class maintains values per thread basis.

3. Each thread local object maintains a separate value like userId, TransactionId etc for
   each thread that access that object.

4. Thread can access its local value , can manipulate its value and even can remove its value.

5. In every part of the code which is executed by the thread we can access its local variable.

Example

Consider a servlet which invokes some business methods. We have a requirement to generate a unique
transaction id for each and every request and we have to pass this transaction id to the business
methods. For this requirement we can use ThreadLocal to maintain a separate transaction id for every
request that is for every thread.

note
-------

1.Thread local class introduced in 1.2 version and enhanced in 1.5 version.

2. Thread local can be associated with  thread scope.

3. Total code which is executed by the thread has access to the corresponding thread
   local variables.

4. A thread can access its own local variables and cant access other threads local variables.

5. once the thread enters into the dead state all its local variables are by default eligible for 
   the garbage collection.

*/

//-----------------------------------------------------------------*****************************--------------------------------------------------