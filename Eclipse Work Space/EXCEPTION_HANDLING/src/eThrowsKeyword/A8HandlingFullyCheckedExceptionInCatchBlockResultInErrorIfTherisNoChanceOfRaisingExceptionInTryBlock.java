/*

case 4:
=======================

1. within try block if there is no chance of raising an exception then we cant write 
   catch block for that exception otherwise we will get compile time error saying 

Exception XXX is never thrown in body of corresponding try statement.


but this rule is applicable only for the fully checked exceptions example InterruptedException
and IOException.

*/
package eThrowsKeyword;

import java.io.*;

class Test53 {
    
    public static void main(String[] args)
    {
        
        try
        {
            System.out.println("Hello");
        }
    
        catch(ArithmeticException e)
        {
            
        }
    
    
    
    }

}

// compiles and runs fine: o/p hello world
//------------------------------------------------------------------------   

class Test55 
    {
        
        public static void main(String[] args)
        {
            
            try
            {
                System.out.println("Hello");
            }
        
            catch(Exception e)
            {
                
        
            }   
        
        }
    }


// compiles and runs fine: o/p hello world
//------------------------------------------------------------------------   

class Test56
{
    
    public static void main(String[] args)
    {
        
      
        
        try
        {
            System.out.println("Hello");
            
        }
        
        
        
        catch(IOException e) // This will give us compile time error
        {
            
            /*
            
            CE:  Exception java.io.Exception is never thrown in body of corresponding
                  try statement.
            
            */
            
        }
    }
}

//------------------------------------------------------------------------   

class Test57
{
    
    public static void main(String[] args)
    {
        
        try
        {
            System.out.println("Hello");
        }
    
       
        catch(InterruptedException e) // This will give us compile time error
        {
            /*
            CE:  Exception java.lang.Arithmetic exception is never thrown in the 
                body of the corresponding try statement.
            
            */
            
        }
    
    
    
    }
}

//------------------------------------------------------------------------   

class Test58
{
    
    public static void main(String[] args)
    {
        
        
        try
        {
            
            System.out.println("Hello");
        }
    
        catch(Error e)
        {
            
        }
    
    
    }
}


// compiles and runs fine: o/p hello world

//-------------------------------------------------------------------------REVISED--------------------------------------