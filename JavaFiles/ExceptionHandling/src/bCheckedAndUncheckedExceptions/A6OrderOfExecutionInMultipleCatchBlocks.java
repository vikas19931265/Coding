/* Order of execution in multiple catch blocks.
====================================================================


1.  first
===================

This will give us compile time error . Example if arithmetic exception is raised then catch(Exception e)
can handle it. But we have explicitly written catch(ArithmeticException e) to handle it. Hence this will give us compile time 
error.

Compile error: Exception java.lang.ArithmeticException has already been caught.

try

{
    risk code

}

catch(Exception e)

{

}

catch(ArtithmeticException e)
{

}

2.  second
=====================

This is completely fine. Please take a note of how much order of catch statements is important.

try

{

risky code

}

catch(ArithmeticException e)

{

}


catch(Exception e)

{

}



conclusion:
=================

If try with multiple catch blocks is present then the order of catch blocks is very 
important. We have to take child first and then parent otherwise we will get compile time error
saying 

    Exception xxx has already been caught.


PUT THE CHILD EXCEPTION FIRST AND THEN PARENT IF NEEDED. THIS WILL RESOLVE THE ISSUE.



*/
package bCheckedAndUncheckedExceptions;


// Case 1: Invalid with error

 class Test5{
    
     public static void main(String[] args)
     {
         
         try

            {
   

            }

        catch(Exception e)

            {

            }

        
         catch(ArithmeticException e)//- This will give us error
        {

        }

        // Compile error: ArithmeticException already caught.
        

        }
}



//Case 2:  this is valid ( order is from parent to child)

class Test6
{
    
    public static void main(String[] args)
    {
        
        try

        {



        }

catch(ArithmeticException e)

        {

        }


catch(Exception e)

        {

        }

        
    }
    
    
}


// case 3: We cannot declare 2 catch blocks for the same exception otherwise  we will get compile time error.


 class Test7
 {
     
     public static void main(String[] args)
     {
         
         try
         {
             
         }
         
     
         catch(ArithmeticException e)
         {
             
         }
     
         
         
         catch(ArithmeticException e)// This is illegal.
         {
             
         }
     
         //Compile error: java.lang.ArithmeticException has already been caught.
         
         
     
     }
     
     
 }       

//-------------------------------------------------------------------------REVISED---------------------------------------------