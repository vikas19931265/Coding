/*

StringBuffer replace(int startIndex, int endIndex, String str)
================================================================================

is used to replace the string from specified startIndex and endIndex
        


*/
package StringBufferConstructorsAndMethods;

class ReplaceExample
{
    public static void main(String[] args)
    {
        
        StringBuffer sb1= new StringBuffer("Vikas Gautam");
        
       System.out.println( sb1.replace(0, 1, "Sachin")); //Sachinikas Gautam
       
            /*
                From 0 to 1 that is till V, we will replace V with Sachin.
       
       
            */
        
    }
    
    
}
