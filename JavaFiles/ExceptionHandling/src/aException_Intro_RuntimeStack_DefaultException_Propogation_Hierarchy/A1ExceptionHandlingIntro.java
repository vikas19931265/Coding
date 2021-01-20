package aException_Intro_RuntimeStack_DefaultException_Propogation_Hierarchy;

/* Introduction

What is exception
-------------------------------------------------------------------------------
    Dictionary Meaning: Exception is an abnormal condition.

    In java, exception is an event that disrupts the normal flow of the program. It is
    an object which is thrown at runtime.

What is exception handling
-------------------------------------------------------------------------------
    
    Exception Handling is a mechanism to handle runtime errors such as ClassNotFound, 
    IO, SQL, Remote etc.

Advantage of Exception Handling
-------------------------------------------------------------------------------
    The core advantage of exception handling is to maintain the normal flow of the application. 
    Exception normally disrupts the normal flow of the application that is why we use exception handling.
    Let's take a scenario: 

    statement 1;  
    statement 2;  
    statement 3;  
    statement 4;  
    statement 5;//exception occurs  
    statement 6;  
    statement 7;  
    statement 8;  
    statement 9;  
    statement 10;  

   Suppose there is 10 statements in your program and there occurs an exception at statement 5, 
   rest of the code will not be executed i.e. statement 6 to 10 will not run. If we perform 
   exception handling, rest of the statement will be executed. That is why we use exception handling in java.


1. An unexpected unwanted event that disturbs normal flow of the program is called a 
   Exception.

2. Example tyre puncture exception , sleeping exception , FileNotFoundException etc.

2a.The exception handling in java is one of the powerful mechanism to handle the 
   runtime errors so that normal flow of the application can be maintained.

3. It is highly recommended to use exception handling , and the main objective of exception handling is graceful
   termination of the program.

4. Exception handling does not mean repairing an exception. We have to provide alternative ways 
   to continue rest of the program normally  that is  the concept of the exception handling.

5. For example our programming requirement is to read the data from remote file locating at London but 
   at run time if London file is not available then our program should not be terminated abnormally.

6. We have to provide some local file to continue rest of the program normally.

7. This way of defining alternative is nothing but Exception handling.


example

        try
            
        {
            Read the data from remote file locating at london
            
        }

        catch(FileNotFoundException e)
        {
           Use the local file and continue with rest of program normally
        }

*/

//------------------------------------------------------------------------REVISED---------------------------------------------------------
