/*

multi-catch block.
================================


1. Until 1.6 version even though multiple different exceptions having same handling code
   for every exception type we have to write a separate catch block.

2.  This increases length of the code and reduces readability of the code.

try

{

}

catch(ArithmeticException e)
{
    e.printStackTrace();
}

catch(IOException e)
{
    e.printStackTrace();
}

catch(NullPointerException e)
{
   System.out.println(e.getMessage());

}

catch(InterruptedException e)
{

    System.out.println(e.getMessage());
}


1. To over come above problem SUN people introduced multi catch block in 1.7 version.

2. According to this we can write a single catch block that can handle multiple different type
   of exceptions.


WE CAN REPLACE THIS 1.6 VERSION PROGRAM WITH BELOW PGM



The main advantage of the below program approach is that length of the code will be reduced and the readability 
will be improved.

*/

// example 1

package htryWithResources_multiCatchBlock;

import java.io.*;

class MultiCatchBlock {
    

    public static void main(String[] args) 
    {
        
        try
        {
            BufferedReader br = new BufferedReader(new FileReader("input.txt"));
        
            Thread.sleep(1000);
        
        }
    
    
        catch(ArithmeticException|IOException e)
        {
            e.printStackTrace();
        }
    
    
        catch(NullPointerException| InterruptedException e)
        {
            System.out.println(e.getMessage()); // both null pointer exception and interrupted exception when occured
                                                // are just going to print the exception information hence we can use this.
        }
    
    
    }

}


// example 2

/*

1. In this example whether raised exception is either arithmetic exception or null pointer
   exception the same catch block can listen.



*/


class MutliCatchBlock
{
    
    public static void main(String[] args)
    {
        
        try
        {
            System.out.println(10/0); // As soon as Arithmetic exception occurs rest of line of code will not be executed.
            String s= null;
            System.out.println(s.length());
                    
        }
    
    
        catch(ArithmeticException|NullPointerException e)
        {
            System.out.println(e.getMessage());
        }
    
    
    }
}

/*

run:
/ by zero
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//--------------------------------------------------------------------------REVISED--------------------------------------------------