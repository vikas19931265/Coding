/*

Conclusion1 

In multi catch block there should not be any relationship between exception types
either parent to children or children to parent or same type otherwise we will get the 
compile time error

        try

        {
        
        }

        catch(ArithmeticException|Exception e)
        {
            e.printStackTrace();

        } 
        


*/
package htryWithResources_multiCatchBlock;


class MutliCatchBlock1
{
    
    public static void main(String[] args)
    {
        
        try
        {
            System.out.println(10/0);
            String s= null;
            System.out.println(s.length());
                    
        }
    
    
        catch(ArithmeticException|Exception  e)//---> parent child relationship should not exist
        {
            System.out.println(e.getMessage());
        }
    /*
        
        CE: Alternatives in a multi-catch statement cannot be related by subclassing
  Alternative java.lang.ArithmeticException is a subclass of alternative java.lang.Exception
	at Session8.MutliCatchBlock1.main(NewClass3.java:33)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)    
        
    */
        
    }
}

//-------------------------------------------------------------------------REVISED---------------------------------------------