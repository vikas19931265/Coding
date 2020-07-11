package bCheckedAndUncheckedExceptions;

/*

Order of execution when exception is encountered.
================================================================

try

{
    stmt1;
    stmt2;
    stmt3;
}

catch(Exception e)
{

    stmt4;

}

stmt 5;


Case 1:
=================

If there is no exception.

    Order of execution : stmt1, 2, 3, 5 /normal termination.


Case 2:
=====================

If an exception is raised at statement 2 and corresponding catch block matched.

    Order of execution: stmt1 , 4, 5 /normal termination

    stmt3 will not be executed. As soon as exception is encountered inside a block
    the control immediately goes to the catch block and any further statement written in try block
    are not executed. Control will not come back to the try block.


Case 3:
======================

If the exception raised at statement2 and corresponding catch block is not matched.

   order of execution   1, abnormal termination.



Case 4:
======================

If the exception is raised at statement 4 or statement 5 then it is always abnormal termination.

If exception occurs in catch block then it will always lead to abnormal termination.



[note]


1. Within the try block , if anywhere an exception is raised then rest of the try block will not
   be executed even though we handled that exception hence within the try block we have take 
   only risky code and length of the try block should be as less as possible.


2. In addition to the try block, there may be chance of raising an exception inside catch and 
   finally blocks also.


3. If any statement which is not part of try block and raises an exception then it is always abnormal
   termination.


*/

//-------------------------------------------------------------------------REVISED-----------------------------------------------