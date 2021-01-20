package cfinalfinallyfinalize_possiblecombinationsoftrycatchfinally;

/*

Various possible combinations of try , catch , finally??
-----------------------------------------------------------------------------


1. In try-catch-finally order is very important.

2. Whenever we are writing try , compulsory we should write either catch or finally
   otherwise we will get compile time error that is try without catch or finally
   is invalid.

3. Whenever we are writing catch block , compulsory try block must me required that is 
   catch without try is invalid.


4. Whenever we are writing finally block, compulsory we should write try block that is finally
   without try is invalid.

5. Inside try-catch-finally blocks we can declare try-catch-finally blocks that is nesting of
   try-catch-finally is allowed.

6. For try-catch-finally blocks curly braces are mandatory.
    




1. valid

try

{

    catch(X e)

}
----------------------------------------valid-----------------------------------

2. valid 

try
{

}

catch(x e)
{
}

catch(y e)

{

}

----------------------------------------valid----------------------------------

3. invalid ( exception x has already been caught) 


try

{

}

catch(x e) // duplicate exception

{
}

catch( x e) // duplicate exception

{

}

------------------------------------invalid---( same exception is caught twice)------

4. valid

 try

{

}

catch( X e)

{

}

finally
{

}

--------------------------------------valid---------------------------------------------

5. This is valid

    try
{

}

finally

{


}

---------------------------------------valid------------------------------------------------

6.  valid

   try

{

}

catch(X e)

{


}

try

{

}

catch(Y e)

{
}

-----------------------------------------valid------------------------------------------

7. valid 

    try

{

}

  catch( X e)

{

}

try

{

}

finally
{

}

-----------------------------------------valid-------------------------------------------

8. invalid ( error- try without catch or finally) 

    try

{

}

----------------------------------------invalid-------------------------------------------

9 invalid ( Catch without try)

  catch(X e)

{

}    
    
-----------------------------------------invalid----------------------------------------------

10. invalid ( CE: finally without try) 

    finally

{

}

--------------------------------------invalid------------------------------------------------

11. invalid as try-finally will form one syntax and catch(X e ) will be left alone without a try.
    
CE: catch without try.


    try

{

}

  finally

{

}

catch( X e)
{

    // Here catch is left alone.

}

---------------------------------------------------------------------------------

12. invalid 

CE1: try without catch or finally

CE2: catch without finally

    try

{

}

System.out.println("hello");--This line will separate the try and catch.

catch(X e)

{

}

--------------------------------invalid-------------------------------------------

13. invalid 

CE: catch without try

    try

{

}

catch(X e)

{

}

System.out.println("Hello');

catch( Y e)
{

    // catch become alone because of print line.

}

--------------------------------------invalid-------------------------------------

14: invalid

CE: finally without try.

 try

{

}

catch(X e)

{

}

System.out.println("Hello");

finally

{

}

----------------------------------------invalid-------------------------------------

15. valid

    try

{

        try

        {

        }

        catch(X e)
        {

         }

}

catch( X e)

{

}

------------------------------------------valid----------------------------------------

16.  invalid

    try

      {

        try

        { // CE: try without catch or finally
        }
        
      }

    catch(X e)

    {
    
     }


-----------------------------------------invalid----------------------------------

17: valid 

    try

{

        try

        {
        }

        finally
        {
        }

}             

catch(X c)

{

}


-----------------------------------------valid-----------------------------------

18. valid

  try

{

}

catch(X e)

{

    try

    {

     }

     finally

        {

        }

}

---------------------------------------valid--------------------------------------

19. invalid.

    try
    {

    }

    catch(X e)

    {

        finally
            {
               // CE: finally without try
             }

      }      

-----------------------------------------invalid----------------------------------

20. valid

    try

{

}

catch(X e)

{

}

finally

{

    try
    {
    }

    catch(X e)
    {
    }
}
    
-----------------------------------------valid----------------------------------------

21. invalid

    try

{

}

catch

{

}

finally

{

    finally

        {  // CE: finally without try
        }   
}
    


------------------------------------------invalid-----------------------------------

22. invalid

  try

{

}

catch(X e)

{

}


finally

{

}

finally

{
    // this finally will become alone.
    // CE: finally without try.
}


------------------------------------------invalid---------------------------------

23. invalid : try/catch/finally block curly braces are mandatory

    try
    System.out.println("try");


catch(X e)

{

    System.out.println("catch");

}

finally
{

}


------------------------------------------invalid----------------------------

24 .invalid : try/catch/finally block curly braces are mandatory

    try

{

}

catch(X e)

    System.out.println("Catch");



finally

{

}

------------------------------------------invalid------------------------------------

25.invalid : try/catch/finally block curly braces are mandatory 
    try

{

}

catch(X e)

{

}

finally

    System.out.println("finally");



*/

//-------------------------------------------------------------------------REVISED--------------------------