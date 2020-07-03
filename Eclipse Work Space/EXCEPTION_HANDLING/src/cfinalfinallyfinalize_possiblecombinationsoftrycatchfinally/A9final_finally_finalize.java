package cfinalfinallyfinalize_possiblecombinationsoftrycatchfinally;

/* Difference between final, finally, finalize() ??

final
------------

1. final is a modifier applicable for classes, methods and variables.

2. If a class is declared as final then we cannot extend that particular class that is 
   we cannot create child class for that class that is inheritance is not possible for 
   final classes.

3. If a method is declared as final then , we cannot override that method in the child 
   class.

4. If a variable is declared as final then we cannot perform reassignment for that variable.



finally
---------

1. finally is a block always associated with the try catch to maintain clean up code.


try
{

    //risky code
    
    //What ever connections we open in this block can be closed inside the finally block.
    

}

catch(Exception e)

{

Handling code

}

finally
{

cleanup code


}


2. The specialty of finally block is that it will be executed always irrespective of 
   whether the exception is raised or not and whether handled or not handled.

3. This finally block can be used to close all the resources like opening file reader, DB connection
   which we opened inside the try block.

    example

        Br br =null;
        
        try
        {
            br= new BufferedReader(new FileReader("input.txt");
        }

        catch(IOException e)
        {
            //handling code
        }

        finally
        {
            if(br!=null)
            {
                    br.close();

            }
        }    


finalize()
---------------

1. finalize() is a method , always invoked by garbage collector just before the 
   destruction of the object to perform clean up activities.

2. Once finalize() method completes , immediately garbage collector destroys the 
   object.



[note]

finally block is responsible to perform clean up activities related to try block,
that is what ever resources we opened as a part of try block will be closed inside
the finally block.

whereas finalize() method is responsible to perform clean up activities related to object
that is whatever resources associated with the object will be deallocated before destroying an 
object by using finalize() method.

*/


//---------------------------------------------------------------------------REVISED----------------------------------------------------------//