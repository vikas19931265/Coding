/*

Difference between Runnable and Callable
---------------------------------------------------------------------


Runnable                                                           Callable
----------------------------------------------------------------------------

1. If a thread is not required to return                        1. If a thread is required to return something 
   anything after completing the job then                          after completing the job then we should go for  
   we should go for Runnalbe.                                      the Callable. 


2. Runnable interface contains only one method                 2. Callable interface contains only one method  that is 
   that is run() method.                                           the call() method.

3. Runnable job not required to return anything                3. Callable job is required to return something and hence 
   and hence return type of the run() method is                   return type of the call() method is object.      
   void.


4. Within the run() method , if there is any chance of         4. Inside the call() method if there is any chance of raising 
   raising a checked exception then compulsary we should           checked exception then we are not required to handle using try catch 
   handle by using try-catch block because we cant use             becuause call() method already throws the exception.
   throws keyword for the run() method.


5. Runnable interface is present inside java.lang package.      5. Callable interface is present in java.util.concurrent package.

6. This was introuduced in 1.0 version                          6. This was introduced in 1.5 version. 


*/