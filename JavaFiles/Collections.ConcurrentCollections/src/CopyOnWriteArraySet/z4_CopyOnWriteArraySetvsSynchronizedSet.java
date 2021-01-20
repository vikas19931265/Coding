/*

CopyOnWriteArraySet vs synchronizedSet()


CopyOnWriteArraySet                                     synchronizedSet


1.It is thread safe because every update              1. It is thread safe because at a time only one thread
  operation will be performed on separete                is allowed to access the object   
  clone copy


2. While one thread is iterating other threads         2. While one thread is iterating , other threads are not allowed to access 
   are allowed to modify the object and we will not       the object otherwise we will get ConcurrentModificationException  
   get ConcurrentModificationException.


3. Iterator is fail safe                               3. Iterator is Fail-fast

4. Iterator can perform only read operation and         4. Iterator can perform both read and write operations.
   cant perform remove operation otherwise we will
   get RuntimeException saying UnsupportedOperation
   Exception.







*/

