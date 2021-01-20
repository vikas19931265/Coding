/*

Stack Memory Area
=========================

For every thread JVM will create a separate stack at the time of the thread creation.
Each and every method calls performed by that thread will be stored in the  stack
including the local variables also.

After completing a method the corresponding entry from the stack will be removed.
After completing all the method calls the stack will become empty and that empty
stack will be destroyed by the JVM just before terminating the thread.

Each entry inside the stack is called as stack frame or activation records.

The data stored inside the stack is available for the corresponding thread only and
not available to the remaining threads hence this data is thread safe.


    ----------------------------------------------------------------------------
    
      thread 1          thread 2                thread n
    |           |       |       |               |        |    
    |------     |       |       |...............|        |
    |stackframe-|       |       |               |        |        
     ----------          -------                ---------
    
    Runtime             Runtime                   run time
    stack               stack                   stack
  

*/