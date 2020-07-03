/*

case 3:
==========================

*/
package eThrowsKeyword;


// case 1:

class Test50
{
    
    public static void main(String[] args) 
    {
        
       
        
        
        throw new Exception();  // Error:--> Checked exception is thrown which will be checked by the compiler.
        
         /*
            This will give us compile time error as we are throwing a checked exception.
            The compiler will check for the handling code and since its not found hence 
            we will get the compile time error.
            
        
        CE: unreported exception in java.lang.Exception must be caught or declared to be thrown.
        
           This exception is thrown inside the main method hence it should be handled inside the main method or delegated to JVM.
           This can be handled in 2 ways.
        
        1st way- using try catch block
        
        
        try
        {
        throw new Exception();  // Checked exception is thrown which will be checked by the compiler.
        
        }
        
        catch(Exception e)
        {
            
        }
        
        
        2nd way: declaring the exception in method
        
                public static void main(String[] args)  throws Exception
        
        */
                
                
    }
}


// case 2:

class Test51
{
    
    public static void main(String[] args)
    {
        
        throw new Error();  
        
        /*
          
        This will not give us any kind of compile time error as Error is unchecked exception
        which is not checked by the compiler . Since we do not have any handling code for this
        therefore this exception will be handled by the default exception handler and we will get the 
        run time error.
        
        /*
        run:
        Exception in thread "main" java.lang.Error
                at session5.Test51.main(NewClass6.java:42)
        /home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
        BUILD FAILED (total time: 0 seconds)

        
        
        
        */
       
    }}

//-------------------------------------------------------------------------REVISED----------------------------------------