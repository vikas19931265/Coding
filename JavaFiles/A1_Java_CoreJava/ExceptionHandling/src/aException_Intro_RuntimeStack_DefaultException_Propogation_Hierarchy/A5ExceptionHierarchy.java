package aException_Intro_RuntimeStack_DefaultException_Propogation_Hierarchy;

/*

Exception Hierarchy

                                                                              Throwable
Exception :                                                                |                             
------------------------------------------------------------------------------------------------------------------ ------------------ 
    |                                                   |                                   |                     |                  |   
  RunTime                                            IOException                         ServletException     RemoteException    InterruptedException.......more are there.
    |                                                   |
    |--ArithmeticException                              |--EOFException       
    |                                                   |
    |--NullPointerException                             |--FileNotFoundException    
    |                                                   |
    |--ClassCastException                               |--InterruptedIOException
    |                                                   
    |---IndexOutOfBoundException
    |       |
    |       |--ArrayIndexOutOfBoundException
    |       |--StringIndexOutofBoundException
    |       |
    |----IllegalArgumentException
            |
            |-NumberFormatException



                                                                            Error                                
Error:                                                                        |  
______________________________________________________________________________|
|                                            |                                |  
VMError                                    AssertionError                   ExceptionInitilisationError........many more.
|
|-StackOverFlowError
|
|-OutOfMemoryError




1. Throwable class acts as the root class for the java exception hierarchy.

2. Throwable class defines two child classes.

       i) Exception
      ii) Error
     

Exception.
----------


1. Most of the times Exceptions are caused by our programs and these are recoverable as well.

2. For example if our programming requirement is to read the data from the remote file locating
   at London , at runtime if the remote file is not available then we will get run time 
   exception saying that "FileNotFoundException".

3. If FileNotFoundExceptionOccurs we can provide local file and continue rest of the program
   normally.



                example

try{

        read the data from remote file
        locating at london
    }


catch(FileNotFoundException e)

{
    use local file and continue with the rest of the program normally.

}



Error
---------

1. Most of the times Errors are not caused by our program and these are due to 
   lack of system resources.

2. Errors are non recoverable.

For example, if OutOfMemory/StackOverflow  error occurs then being a programmer we cannot do anything
and the program will be terminated abnormally.

3. System admin or server admin is responsible to increase the heap memory.


*/

//---------------------------------------------------------------------------REVISED------------------------------------------------------------------------



