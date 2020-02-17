/*

Customized or user defined exceptions.
=========================================================



Sometimes to meet programming requirements , we can define our own exceptions. Such type 
of exceptions are called as customized or user defined exceptions.


example in matrimonial sites if a user is trying to register out of range from 18 to 60 years age

then

    TooYoungException
    TooOldException
    InSufficientFundsException



note
==============

1. throw keyword is best suitable for user defined or customized exceptions but not for predefined
   exceptions.


2. It is highly recommended to define customized exceptions as unchecked that is we have to extend 
   RuntimeException but not Exception. If we extend Exception then compiler will throw error
   Unreported Exception must be caught or declared to be thrown.



*/

// Defining customized exceptions.

package fCustomizedException;

import java.util.Scanner;

class TooYoungException extends RuntimeException 

{
    TooYoungException(String s )
    {
        
        super(s);
    }


}


class TooOldException extends RuntimeException
{
    TooOldException(String s)
    {
        super(s);
    
    /*
        
    1. to make description available to  default exception
       handler. 
        
        
        throwable--->super(s)-->contains printStackTrace() method which is used by default exception handler to print information to the console.
           |
        Exception------>super(s
            |
        RuntTimeException--->super(s)
            |
        TooYoungException---->super(s)
        
        
        
        */
    
    }
    
}



class CustExceptionDemo
{
    
    public static void main(String[] args)
    {
        System.out.println("Enter the age");
        
        Scanner cn = new Scanner(System.in);
        
        int age= cn.nextInt();
        
        if(age > 60)
        {
            throw new TooYoungException("Please wait some more time , definitely you will get the best match");
        }
   
        else if(age<18)
        {
            
            throw new TooOldException("Your age crossed marriage age and no chance of getting married.");
        }
    
    
        else
        {
            System.out.println("You will get matched details soon by email");
        }
    
    
    }
    
}

/*
run:
Enter the age
71
Exception in thread "main" session6.TooYoungException: Please wait some more time , definitely you will get the best match
	at session6.CustExceptionDemo.main(NewClass.java:97)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 5 seconds)


*/

//----------------------------------------------------------------------------REVISED--------------------------------