/*

Conclusions1
=============================

    We can declare multiple resources in the try block, but these resources should be separated
    with semicolon

  syntax

        try(R1; R2; R3)

        {
        
        }

   Example

    try(FileWriter fw= new FileWriter("output.txt"); FileWriter fr1= new FileWriter("input.txt"))
    {   -----------resource 1----------------------  ---------resource 2------------------------   

    }
    


Conclusion 2
=====================

    All resources should be autoclosable resources. A resource is said to be autoclosable if 
    and only if corresponding class implements java.lang.AutoClosable interface.

    All IO related resources , database related resources and network related resources are 
    already implemented autoclosable interface.

    Being a programmer we are not required to do anything , just we should be aware of the point.

    Autoclosable interface came in 1.7 version and it contains only one method that is public void close() method.

            

Conclusion 3:
=====================

    1. All resource reference variables in try block are implicitly final and hence within the try block 
       we cannot perform reassignment otherwise we will get the compile time error.


*/
package htryWithResources_multiCatchBlock;

import java.io.*;

class TryWithResources {
    

    public static void main(String[] args) throws Exception
    {
        
        try(BufferedReader br = new BufferedReader(new FileReader("input.txt")))
        {
            
            br= new BufferedReader(new FileReader("output.txt")); // this is illegal as br variable declared
                                                                  // // inside the try block is final and we cannot reassign it  
          // CE: autoclosable resources br may not be assigned.  
        
        }                                                        
    }


}

/*

Conclusion 4:
==========================

1. until 1.6 version try should be associated with either catch or finally but from 1.7 version onwards
   we can take only try with the resource without catch or finally.



        try
        {

        }

        finally
        {
        
        }       

We can go for this combination of try-finally block when we dont want to handle the exception.
let the exception get raised but after  raising the exception we want all the resources to be closed.

This is to close the connection if the exception occurs.


        We can replace this with in 1.7 with

        try(Resource)
        {
        }   
            
*/


/*

Summary
=======================


The main advantage of try with resources is that we are not required to write finally block explicitly
because we are not required to close the resources explicitly hence until 1.6 version finally block
is just like hero but from 1.7 onwards it is dummy and becomes zero.


*/