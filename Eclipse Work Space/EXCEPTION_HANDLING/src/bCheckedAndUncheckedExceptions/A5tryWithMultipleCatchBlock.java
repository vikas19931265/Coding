package bCheckedAndUncheckedExceptions;

/*

try with multiple catch blocks.
=========================================================================

try
{
    risky code
}

catch(Exception e)

{

}

   This will be worst kind of programming practice as for any kind of exception raised only one kind
   of catch block will be available. It is like if our program is throwing multiple different types
   of exceptions then our catch block will handle all of them in same manner. Different types
   of exceptions needs to be handled differently.


instead we can do

The way of handling an exception is varied from exception to exception hence for every exception type it is 
highly recommended to take separate catch blocks that is try with multiple catch blocks is always possible 
and recommended to use.

try
{
    risky code // this block can throw different types of exceptions

}

catch(ArithmeticException e) // if arithmetic exception came
{
  perform arithmentic operations
}

catch(SQLException e)
{

    use mySQL DB instead of oracle DB
}


catch(FileNotFoundException e)
{

    use another files

}

catch(Exception e)  // if any rare another types of exception came

{
    default exception.
}



*/

//--------------------------------------------------------------------------REVISED-------------------------------------------------------
