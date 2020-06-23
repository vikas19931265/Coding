package gJVMandProgrammerExceptons_Top10Exceptions;

/*

7. IllegalArgumentException
=============================================

1. It is the child class of RuntimeException and hence it is unchecked exception.

2. This is raised explicitly either by the programmer or by the API developer to indicate that 
   a method has been invoked with the illegal arguments.

Example

    The valid range Thread priorities is 1 to 10. If we are trying to set the  priority with any other value
    then we will get run time exception saying IllegalArgumentException.


        Thread t = new Thread();

        t.setPriority(7);

        t.setPriority(15); // RuntimeException: IllegalArgumentException.


8. NumberFormatException.
======================================================

    1. It is the direct child class of IllegalArgumentException which is the child class of RuntimeException and
       hence it is unchecked.

    2. This is raised explicitly either by the programmer or by the API developer to indicate that we are trying to 
       convert string to number and the string is not properly formatted.

      Example

            int i = Integer.parsetInt("10");
            int i =Integer.parseint("ten"); // RE: NumberFormatException


9. IllegalStateException.
=============================================================

  1. It is the child class of Runtime exception and hence it is unchecked.

  2. This is raised explicitly either by the programmer or by the API developer to indicate
     that a method has been invoked at the wrong time.


     Example

        After starting a thread , we are not allowed to restart the same thread once again.
        otherwise we will get the RuntimeException saying IllegalThreadStateException.
    
        Thread t = new Thread();
        t.start();

        t.start();....> starting same thread once again will give us IllegalThreadStateException



10. AssertionError
=======================

    1. it is the child class of error and hence it is unchecked.

    2. This is raised explicitly by the programmer or by the API developer to indicate that
       assert statement fails.


       Example
       
            assert(x>10)

      If x is not greater then 10 then we will get Runtime exception saying assertion error.




*/

//---------------------------------------------------------------------------REVISED----------------------------------------