package eThrowsKeyword;

/*



                    ---------------
                    |               |
                    |throws clause  |     
                    |               |
                     ---------------   
                        



1. We can use  throws clause to delegate responsibility of exception to the caller( it may by method or jvm).


2. It is required only for Checked exceptions and usage of throws keyword for unchecked 
   exceptions have no impact.


3. It is required only to convince the compiler not to  throw error and usage of throws does not prevent
   abnormal termination of the program. We have to use try- catch block to handle the exception. Throws keyword can 
   only delegate the task of exception handling to the caller or the JVM. If the handling responsibility goes to the JVM
   then definitely it will result into the abnormal termination if handling code not found.



4. It is recommended to use try-catch  over throws keyword.



*/


//---------------------------------------------------------------------------REVISED---------------------------------------------------