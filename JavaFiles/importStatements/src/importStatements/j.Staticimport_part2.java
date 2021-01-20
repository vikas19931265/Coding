
// Applying static import for System.out.println

/*

1. out is a static variable present in the system class, hence we can access using class name System.

2. But whenever we are writing static import it is not required to use the class name and we can access out directly.

    [note]

        if we write like 
               import static java.lang.System.*

       then all the static members which could be methods or the variables will be available and 
       we need not access them with the help of the class name.

*/



package importStatements;

import static java.lang.System.out; // static import of System.out.

 class Test11
{
    
     public static void main(String[] args)
     {
         out.println("hai"); // In this case we have accessed the out variable without using the class name as we have done static import on top.
         
         out.println("hello");
     }
     
}

//-------------------------------------------------------------------------------------------******************---------------------------------------------
