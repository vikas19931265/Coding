package bCheckedAndUncheckedExceptions;

/*

CheckedException vs UncheckedException( most important)
-------------------------------------------------------------------------------------------------------------


1. The exceptions which are checked by the compiler for smooth execution of the program
   are called as checked exceptions example HallTicketMissingExcetption , PenNotWorkingException
   FileNotFoundException etc.

2. In our program if there is a chance of raising checked exception then compulsory we should handle
   that checked exception( either by using try catch or throws keyword) otherwise we will get compile time
   error.


Unchecked exception
-------------------------------------------------------------------------------------------------------------

1. The exceptions which are not checked by the compiler whether programmer is handling or not. Such types
   of exceptions are called as unchecked exceptions. Example ArithmeticException, BombBlastException etc. 




[note]

Whether the exception is checked or unchecked, every exception occurs at runtime only. There is no chance of 
occurring any exception at compile time.


1. RunTime exception and its child classes , error and its child classes are unchecked. Except these
   remaining all are checked.


FullyChecked vs PartiallyChecked.
-------------------------------------------------------------------------------------------------------------

1. A checked exception is said to fully checked if and only if all its child classes are also  checked
   example IOException , InterruptedException .

2. A checked exception is said to be partially checked if and only if some of its child classes are unchecked.
   example Exception class and throwable class which contains both checked and unchecked exception classes.

3. The only possible partially checked exceptions in java are Exception , Throwable.


Describe the behavior of following exceptions.

IOException  - checked (fully)
RuntimeExceptoin- unchecked
InterruptedException - checked(fully)
Error- unchecked
Throwable- checked(partially)
ArithmeticException-unchecked
NullPointerException-unchecked
Exception-checked (partially)
FileNotFoundException-checked(fully)


*/

//---------------------------------------------------------------------------REVISED---------------------------------------------------------------------------------------------