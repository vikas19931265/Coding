/*

Callable and Future
---------------------------

1. In the case of runnable job thread will not return anything after completing the job.

2. If a thread is required to return some result after execution then we should go for the 
   Callable.


Method in Callable
----------------------

Callable interface contains only one method

            public Object call() throws Exception




3. If we sumbmit a callable object to the executor , then after completing the job, thread
   returns object of the type "Future" that is Future object can be used to retrieve the result form 
   the callable job.
*/