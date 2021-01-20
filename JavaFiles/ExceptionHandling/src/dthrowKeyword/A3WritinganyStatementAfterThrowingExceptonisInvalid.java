/* Case 2:

1. After throw we are not allowed to write any statement directly otherwise we will get 
   compile time error saying unreachable statement.


*/
package dthrowKeyword;


 class Test13 {
    
     public static void main(String[] args)
     {
         
         System.out.println(10/0); // Here compiler is not aware about the exception thrown. Hence lines after this
                                   // will not reusult in compile error
         
         System.out.println("hello");
     }
 
 /*
     run:
Exception in thread "main" java.lang.ArithmeticException: / by zero
	at session4.Test13.main(NewClass2.java:16)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

     
     */
 }

//-----------------------------------------------------------------------------


class Test14
{
    
    public static void main(String[] args)
    {
        
        throw new VikasException("Exception created by vikas / by zero"); // After throwing exception program will terminate abnormally
                                                    // and any statement written after this line will be unreachable.
    
        
        
        System.out.println("hello"); // illegal-->CE: unreachable statement
        
        //This is because when we used throw keyword, compiler got aware about the exception
        //and it will throw compile error if any line written after throwing exception.
    
     }
    
}



class VikasException extends RuntimeException
{
    
    VikasException(String s)
    {
        
        super(s);
        
    }
}

//------------------------------------------------------------------------REVISED------------------------------------------------------------