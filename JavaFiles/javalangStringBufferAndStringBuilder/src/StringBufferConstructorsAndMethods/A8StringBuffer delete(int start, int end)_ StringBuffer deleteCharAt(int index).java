package StringBufferConstructorsAndMethods;

/*

delete methods
==============================================================================

public StringBuffer delete( int begin, int end)

    To delete characters located from begin index to end-1 index.


public StringBuffer deleteCharAt(int index)

     To delete the character located at the specified index.


*/



class DeleteMethodsDemo
{
    public static void main(String[] args)
    {
        
        StringBuffer sbr= new StringBuffer("Vikas Gautam");
        
        sbr.delete(0, 3);
        
        System.out.println(sbr); //as Gautam
        
        sbr.deleteCharAt(0);
        
        System.out.println(sbr); //s Gautam
        
        
    }
    
    
    
}