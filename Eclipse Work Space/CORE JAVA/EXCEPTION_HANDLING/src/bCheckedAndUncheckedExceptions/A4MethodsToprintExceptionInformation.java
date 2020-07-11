/*

Methods to print exception information.
======================================================


Throwable class defines the following methods to print exception information.


method                              printable format
--------------------------------------------------------------------------------------------
printStackTrace()                   name of exception, description, stack trace

toString()                          name of exception,  description

getMessage()                        description


*/
package bCheckedAndUncheckedExceptions;

                                            
class Test2
{
    
    public static void main(String[] args)
    {
        
        try
        {
            
            System.out.println(10/0);
        }
        
    
        catch(ArithmeticException e)
        {
            
            e.printStackTrace(); //java.lang.ArithmeticException: / by zero
                                 //at Sesssion2.Test2.main(NewClass3.java:31)
            
            System.out.println(e);//java.lang.ArithmeticException: / by zero
            
            System.out.print(e.getMessage()); //   / by zero
        }
    
    
    
    }
    
}

//---------------------------------------------------------------------------REVISED--------------------------------------------------------